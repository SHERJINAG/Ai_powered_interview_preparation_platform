from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List
import json
import random
import re
from collections import defaultdict
import uuid

app = FastAPI()

# Enable CORS (Frontend integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load and parse the JSON file
with open("quiz_dataset.json", "r", encoding="utf-8") as f:
    raw_questions = json.load(f)

# ======= API Models =======

class LevelRequest(BaseModel):
    level: str

class AnswerSubmission(BaseModel):
    session_id: str
    answers: Dict[int, str]  # {index: "A"}

# ======= Utility Functions =======

# Parse a question's structure
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

# ======= Preprocessing Questions =======

questions = [parse_question(q) for q in raw_questions]

# Organize questions by level
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
