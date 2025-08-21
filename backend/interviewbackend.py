from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid
import shutil
import os
import random

# Import your functions
from interview import (extract_resume_info, run_interview, clean_response,
                         positive_feedback_pool, improvement_feedback_pool)
from llama_cpp import Llama

app = FastAPI()

# Store session data
interview_sessions = {}

# Allow CORS for frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class InterviewRequest(BaseModel):
    session_id: str
    user_response: str

resume_data = {}

@app.post("/upload_resume/")
async def upload_resume(file: UploadFile = File(...)):
    temp_path = f"temp/{uuid.uuid4()}.pdf"
    os.makedirs("temp", exist_ok=True)

    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume_info = extract_resume_info(temp_path)  # Must return {'name': ..., 'skills': [...]}
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

    llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")
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

    llm = session["llm"]
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
