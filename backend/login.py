from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from passlib.context import CryptContext
from pymongo import MongoClient
from typing import List, Optional
import os
import jwt

# App setup
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["my_database"]
users_collection = db["users"]
results_collection = db["quiz_results"]
questions_collection = db["questions"]


# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# JWT Secret
SECRET_KEY = "your_secret_key_here"

# Models
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

# In-memory DB for Q&A

# Helper functions
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

# Routes

# Signup
@app.post("/signup/")
async def signup(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = get_password_hash(user.password)
    users_collection.insert_one({**user.dict(), "password": hashed_password})
    return {"msg": "User created successfully"}

# Login
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

# Profile
@app.get("/profile/{email}")
async def get_profile(email: str):
    user = users_collection.find_one({"email": email}, {"password": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])
    return user

# File Download
@app.get("/downloads/download/{file_name}")
async def download_file(file_name: str):
    file_path = os.path.join("downloads", file_name)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/pdf",
                            headers={"Content-Disposition": f"attachment; filename={file_name}"})
    return {"error": "File not found"}

# Save Quiz Result
from fastapi import HTTPException

@app.post("/api/quiz/save-result")
async def save_quiz_result(result: QuizResult):
    existing = results_collection.find_one({
        "username": result.username,
        "quizTitle": result.quizTitle
    })

    if existing:
        # Only update if new marks are higher
        if result.marks > existing["marks"]:
            results_collection.update_one(
                {"_id": existing["_id"]},
                {"$set": {
                    "marks": result.marks,
                    "timestamp": result.timestamp
                }}
            )
            return {"msg": "Updated with higher score"}
        else:
            return {"msg": "Score not updated because it's not higher than existing score"}
    else:
        results_collection.insert_one(result.dict())
        return {"msg": "New quiz result saved successfully"}


# Get Questions
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


# Add Answer to Question
from bson import ObjectId

@app.post("/api/questions/{question_id}/answers")
def add_answer(question_id: str, data: AnswerInput):
    result = questions_collection.update_one(
        {"_id": ObjectId(question_id)},
        {"$push": {"answers": {"answer": data.answer, "email": data.email}}}
    )
    if result.modified_count == 1:
        return {"msg": "Answer added"}
    raise HTTPException(status_code=404, detail="Question not found")
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
