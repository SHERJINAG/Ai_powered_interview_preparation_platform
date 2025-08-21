# main.py
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from passlib.context import CryptContext
from pymongo import MongoClient
from typing import List, Optional
import os
import shutil
import uuid
import random
import jwt
from bson import ObjectId
from llama_cpp import Llama
from textblob import TextBlob
import re
from collections import defaultdict
from typing import Dict, List
import uuid
import json
# From local file
from interview import (
    extract_resume_info, run_interview, clean_response,
    positive_feedback_pool, improvement_feedback_pool
)

# ------------------ App Setup ------------------ #
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------ MongoDB Setup ------------------ #
client = MongoClient("mongodb://localhost:27017")
db = client["my_database"]
users_collection = db["users"]
results_collection = db["quiz_results"]
questions_collection = db["questions"]

# ------------------ Security Setup ------------------ #
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = "your_secret_key_here"

# ------------------ Load Llama Model ------------------ #
llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")

with open("quiz_dataset.json", "r", encoding="utf-8") as f:
    raw_questions = json.load(f)

# ------------------ In-Memory Storage ------------------ #
interview_sessions = {}
resume_data = {}
participants = []
topic = ""
gd_started = False

# ------------------ Pydantic Models ------------------ #
class User(BaseModel):
    email: str
    password: str
    full_name: str
    phone: str
    college: str
    course: str
    year: str

class LoginUser(BaseModel):
    email: str
    password: str

class QuizResult(BaseModel):
    username: str
    quizTitle: str
    marks: int
    timestamp: str
    attempts: int

class Question(BaseModel):
    id: str
    question: str
    email: str
    answers: List[dict] = []

class QuestionInput(BaseModel):
    question: str
    email: str

class AnswerInput(BaseModel):
    answer: str
    email: str

class InterviewRequest(BaseModel):
    session_id: str
    user_response: str

class StartRequest(BaseModel):
    topic: str

class SpeakRequest(BaseModel):
    
    text: str

class LevelRequest(BaseModel):
    level: str

class AnswerSubmission(BaseModel):
    session_id: str
    answers: Dict[int, str]  # {index: "A"}

# Helpers
def clean_response(text: str) -> str:
    return re.sub(r'[^a-zA-Z0-9\s]', '', text)

# ------------------ Auth Helpers ------------------ #
def get_password_hash(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def verify_jwt(token: str) -> Optional[str]:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload.get("sub")
    except jwt.PyJWTError:
        return None

def score_response(response: str) -> float:
    length_score = min(len(response.split()) // 5, 10)
    keywords = ["important", "impact", "benefit", "solution", "technology", "mental health", "future"]
    keyword_score = sum(1 for word in keywords if word.lower() in response.lower())
    sentences = re.split(r'[.!?]', response)
    grammar_score = min(
        sum(1 for s in sentences if len(s.strip().split()) > 5 and s.strip()[0].isupper()),
        10
    )
    polarity = TextBlob(response).sentiment.polarity
    sentiment_score = int((polarity + 1) * 5)
    total = (length_score + keyword_score + grammar_score + sentiment_score) / 4
    return round(min(total, 10), 2)

def generate_ai_response(name: str) -> str:
    prompt = f"### Topic: {topic}\nIn my opinion,"
    resp = llm(prompt, max_tokens=150)
    raw = resp["choices"][0]["text"].strip()
    if "." in raw:
        parts = raw.split(".")
        trimmed = ". ".join(parts[:-1]) + "." if len(parts) > 1 else parts[0]
    else:
        trimmed = raw
    out = clean_response(trimmed).strip()
    if not out.lower().startswith("in my opinion"):
        out = "In my opinion, " + out[0].lower() + out[1:]
    return out

def parse_question(data):
    output = data["output"]

    question_match = re.search(r"Question:\s*(.*?)\s*Options:", output, re.DOTALL)
    question = question_match.group(1).strip() if question_match else ""

    options = {}
    options_matches = re.findall(r"([A-D])\.\s*(.*?)\s*(?=[A-D]\.|Answer:|Explanation:|$)", output, re.DOTALL)
    for opt_letter, opt_text in options_matches:
        options[opt_letter] = opt_text.strip()

    answer_match = re.search(r"Answer:\s*([A-D])", output)
    answer = answer_match.group(1).strip() if answer_match else ""

    explanation_match = re.search(r"Explanation:\s*(.*)", output, re.DOTALL)
    explanation = explanation_match.group(1).strip() if explanation_match else ""

    category_level = data["input"].replace("Generate an aptitude question on ", "").strip()
    if " - " in category_level:
        category, level = category_level.split(" - ", 1)
    else:
        category, level = category_level, "beginner"

    return {
        "category": category.strip().lower(),
        "level": level.strip().lower(),
        "question": question,
        "options": options,
        "answer": answer,
        "explanation": explanation
    }


# ------------------ Routes ------------------ #

@app.post("/signup/")
async def signup(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = get_password_hash(user.password)
    users_collection.insert_one({**user.dict(), "password": hashed_password})
    return {"msg": "User created successfully"}

@app.post("/login/")
async def login(user: LoginUser):
    db_user = users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {
        "msg": "Login successful",
        "full_name": db_user["full_name"],
        "email": db_user["email"],
        "phone": db_user["phone"],
        "college": db_user["college"],
        "course": db_user["course"],
        "year": db_user["year"],
    }

@app.get("/profile/{email}")
async def get_profile(email: str):
    user = users_collection.find_one({"email": email}, {"password": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])
    return user

@app.get("/downloads/download/{file_name}")
async def download_file(file_name: str):
    file_path = os.path.join("downloads", file_name)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/pdf",
                            headers={"Content-Disposition": f"attachment; filename={file_name}"})
    return {"error": "File not found"}

@app.post("/upload_resume/")
async def upload_resume(file: UploadFile = File(...)):
    temp_path = f"temp/{uuid.uuid4()}.pdf"
    os.makedirs("temp", exist_ok=True)
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    resume_info = extract_resume_info(temp_path)
    os.remove(temp_path)
    session_id = str(uuid.uuid4())
    resume_data[session_id] = resume_info
    return {"session_id": session_id, "resume_info": resume_info}

@app.post("/start_interview/")
def start_interview(session_id: str = Form(...), role: str = Form(...)):
    resume_info = resume_data.get(session_id, {})
    name = resume_info.get("name", "Candidate")
    skills_list = resume_info.get("skills", [])
    skill_str = ", ".join(skills_list)
    conversation_history = (
        f"You are an interviewer preparing candidates for a {role} role. "
        f"The candidate knows the following skills: {skill_str}. "
        f"Ask one interview question at a time. Only ask questions, do not explain. "
        f"Wait for the user to respond before asking the next question.\n\nAssistant:"
    )
    response = llm(conversation_history, temperature=0.7, max_tokens=65)
    raw_output = response['choices'][0]['text']
    question = clean_response(raw_output)
    interview_sessions[session_id] = {
        "llm": llm,
        "history": conversation_history + f"\nAssistant: {question}",
        "last_question": question
    }
    return {
        "session_id": session_id,
        "question": question,
        "name": name,
        "skills": skills_list,
        "role": role
    }

@app.post("/continue_interview/")
def continue_interview(data: InterviewRequest):
    session = interview_sessions.get(data.session_id)
    if not session:
        return {"error": "Invalid session_id"}
    user_response = data.user_response.strip()
    if not user_response.endswith('.'):
        user_response += '.'
    session["history"] += f"\nYou: {user_response}"
    response = llm(session["history"], temperature=0.7, max_tokens=60)
    raw_output = response['choices'][0]['text']
    next_question = clean_response(raw_output)
    session["history"] += f"\nAssistant: {next_question}"
    session["last_question"] = next_question
    return {"question": next_question}

@app.post("/end_interview/")
def end_interview(session_id: str = Form(...)):
    if session_id not in interview_sessions:
        return {"error": "Invalid session ID"}
    positive_feedback = random.sample(positive_feedback_pool, 3)
    improvement_feedback = random.sample(improvement_feedback_pool, 2)
    final_rating = round(random.uniform(2.5, 5.0), 1)
    del interview_sessions[session_id]
    return {
        "strengths": positive_feedback,
        "improvements": improvement_feedback,
        "rating": final_rating
    }

@app.post("/api/quiz/save-result")
async def save_quiz_result(result: QuizResult):
    existing = results_collection.find_one({
        "username": result.username,
        "quizTitle": result.quizTitle
    })
    if existing:
        if result.marks > existing["marks"]:
            results_collection.update_one(
                {"_id": existing["_id"]},
                {"$set": {"marks": result.marks, "timestamp": result.timestamp}}
            )
            return {"msg": "Updated with higher score"}
        else:
            return {"msg": "Score not updated because it's not higher"}
    else:
        results_collection.insert_one(result.dict())
        return {"msg": "New quiz result saved successfully"}

@app.post("/api/questions", response_model=Question)
def add_question(data: QuestionInput):
    question_doc = {
        "question": data.question,
        "email": data.email,
        "answers": []
    }
    result = questions_collection.insert_one(question_doc)
    question_doc["id"] = str(result.inserted_id)
    return question_doc

@app.get("/api/questions", response_model=List[Question])
def get_questions():
    questions = []
    for q in questions_collection.find():
        q["id"] = str(q["_id"])
        del q["_id"]
        questions.append(q)
    return questions

@app.post("/api/questions/{question_id}/answers")
def add_answer(question_id: str, data: AnswerInput):
    result = questions_collection.update_one(
        {"_id": ObjectId(question_id)},
        {"$push": {"answers": {"answer": data.answer, "email": data.email}}}
    )
    if result.modified_count == 1:
        return {"msg": "Answer added"}
    raise HTTPException(status_code=404, detail="Question not found")

@app.post("/start")
async def start_gd(req: StartRequest):
    global gd_started, topic, participants
    topic = req.topic
    gd_started = True
    participants = [
        {"name": "You", "score": 0},
        {"name": "Meera", "score": 0},
        {"name": "Tara", "score": 0},
        {"name": "Ravi", "score": 0},
    ]
    return {"message": "GD started", "topic": topic}

@app.post("/speak")
async def user_speak(req: SpeakRequest):
    if not gd_started:
        raise HTTPException(status_code=400, detail="GD not started")
    score = score_response(req.text)
    participants[0]["score"] += score
    return {"score": score}

@app.get("/ai_speak")
async def ai_speak():
    if not gd_started:
        raise HTTPException(status_code=400, detail="GD not started")
    # pick a random AI participant (indices 1–3)
    idx = random.choice([1, 2, 3])
    name = participants[idx]["name"]
    response = generate_ai_response(name)
    score = score_response(response)
    participants[idx]["score"] += score
    return {"name": name, "response": response, "score": score}

@app.get("/end")
async def end_gd():
    global gd_started
    if not gd_started:
        raise HTTPException(status_code=400, detail="GD not started")
    gd_started = False

    final_scores = [{"name": p["name"], "score": p["score"]} for p in participants]
    user_score = participants[0]["score"]
    if user_score >= 35:
        feedback = "🌟 Excellent participation!"
    elif user_score >= 25:
        feedback = "👍 Good job! A bit more structure and keywords."
    elif user_score >= 15:
        feedback = "🛠️ Fair effort. Work on grammar and structure."
    else:
        feedback = "📚 Needs improvement on clarity and keywords."

    return {"final_scores": final_scores, "feedback": feedback}



@app.get("/api/leaderboard")
async def get_leaderboard():
    pipeline = [
        {"$group": {"_id": "$username", "totalScore": {"$sum": "$marks"}}},
        {"$sort": {"totalScore": -1}}
    ]
    leaderboard = list(results_collection.aggregate(pipeline))
    for entry in leaderboard:
        entry["email"] = entry.pop("_id")
    return leaderboard

questions = [parse_question(q) for q in raw_questions]
question_map = defaultdict(list)
for q in questions:
    question_map[q['level']].append(q)

# In-memory session store: session_id -> selected_questions
session_questions: Dict[str, List[Dict]] = {}

# ======= API Endpoints =======

# GET 30 Random Questions from level
@app.post("/questions/random")
def get_random_questions_by_level(req: LevelRequest):
    level = req.level.strip().lower()

    if level not in question_map:
        raise HTTPException(status_code=404, detail=f"No questions found for level: {level}")

    selected_questions = random.sample(question_map[level], min(30, len(question_map[level])))

    # Generate session ID and store questions
    session_id = str(uuid.uuid4())
    session_questions[session_id] = selected_questions

    response_questions = [
        {
            "index": idx,
            "question": q["question"],
            "options": q["options"]
        } for idx, q in enumerate(selected_questions)
    ]

    return {
        "session_id": session_id,
        "level": level,
        "questions": response_questions
    }

# Submit answers and get results
@app.post("/submit")
def submit_answers(submission: AnswerSubmission):
    if submission.session_id not in session_questions:
        raise HTTPException(status_code=400, detail="Invalid or expired session ID")

    selected_questions = session_questions[submission.session_id]

    result = []
    for idx, q in enumerate(selected_questions):
        user_answer = submission.answers.get(idx, "")
        result.append({
            "index": idx,
            "question": q["question"],
            "your_answer": user_answer,
            "correct_answer": q["answer"],
            "is_correct": user_answer == q["answer"],
            "explanation": q["explanation"]
        })

    return {
        "score": sum(1 for r in result if r["is_correct"]),
        "total": len(result),
        "results": result
    }

class Questions(BaseModel):
    question: str

# API route to ask question
@app.post("/ask")
async def get_answer(data: Questions):
    prompt = (
        f"You are a helpful tutor. Explain in a simple and clear way with examples:\n\n"
        f"Question: {data.question}\n\nAnswer:"
    )

    # Run model and get response
    response = llm(prompt, max_tokens=200, stop=["\n\n", "</s>"])
    text = response["choices"][0]["text"].strip()
    return {"answer": text}

