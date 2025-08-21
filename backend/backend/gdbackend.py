# backend/main.py

import random
import re
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from llama_cpp import Llama
from textblob import TextBlob

# Initialize FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # allow your React dev server
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

# Load the Llama model once
llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")

# In-memory state
participants = []  # will be set on /start
topic = ""
gd_started = False

# Pydantic models
class StartRequest(BaseModel):
    topic: str

class SpeakRequest(BaseModel):
    text: str

# Helpers
def clean_response(text: str) -> str:
    return re.sub(r'[^a-zA-Z0-9\s]', '', text)

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

# API Endpoints

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
