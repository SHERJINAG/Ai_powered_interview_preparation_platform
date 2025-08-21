from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llama_cpp import Llama

# Load model with minimal configuration
print("Loading TinyLlama model. Please wait...")
llm = Llama(model_path="./model/tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf")
print("Model loaded successfully.")

# Create FastAPI app
app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request model
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
