import time
import threading
import random
import keyboard
from llama_cpp import Llama
import re
from textblob import TextBlob

# Load the model
llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")

# Participants
participants = [
    {"name": "Aarav", "score": 0},
    {"name": "Meera", "score": 0},
    {"name": "Ravi", "score": 0},
    {"name": "Tara", "score": 0},
    {"name": "You", "score": 0}
]

# Topics
topics = [
    "Is Artificial Intelligence a threat or opportunity?",
    "Should social media be banned in schools?",
    "Online vs Offline learning – which is better?",
    "Can AI replace teachers?",
    "How important is mental health in education?"
]

# Random topic
topic = random.choice(topics)
print(f"\n🧠 Topic: {topic}")
print("⏳ You have 2 minutes to prepare. (Shortened to 10 seconds for testing)")
time.sleep(10)  # Change to 120 for full prep time

def clean_response(text):
    # Remove special characters but keep alphanumerics and space
    cleaned = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    return cleaned
# Score function
def score_response(response):
    # Length score
    length_score = min(len(response.split()) // 5, 10)

    # Keyword score
    keywords = ["important", "impact", "benefit", "solution", "technology", "mental health", "future"]
    keyword_score = sum(1 for word in keywords if word.lower() in response.lower())

    # Grammar score (simple version)
    grammar_score = 0
    sentences = re.split(r'[.!?]', response)
    for sentence in sentences:
        if len(sentence.strip().split()) > 5 and sentence.strip()[0].isupper():
            grammar_score += 1
    grammar_score = min(grammar_score, 10)

    # Sentiment score
    blob = TextBlob(response)
    polarity = blob.sentiment.polarity
    sentiment_score = int((polarity + 1) * 5)  # convert -1 to 1 → 0 to 10 scale

    # Weighted average (optional tuning)
    total_score = (length_score + keyword_score + grammar_score + sentiment_score) / 4
    return round(min(total_score, 10), 2)
# Generate AI response with typing effectdef clean_response(text):
    

def grammar_sentiment_score(text):
    blob = TextBlob(text)
    # Grammar score approximation: fewer grammar corrections = higher score
    corrected = str(blob.correct())
    grammar_errors = sum(1 for a, b in zip(text.split(), corrected.split()) if a != b)
    grammar_score = max(10 - grammar_errors, 1)

    # Sentiment score
    sentiment = blob.sentiment.polarity  # between -1 and 1
    sentiment_score = int((sentiment + 1) * 5)  # scale to 0–10

    return grammar_score, sentiment_score

def generate_response(name):
    prompt = f"### Topic: {topic}\nIn my opinion,"
    response = llm(prompt, max_tokens=150)
    raw_text = response["choices"][0]["text"].strip()

    # Cut off at the last full sentence if possible
    if '.' in raw_text:
        sentences = raw_text.split('.')
        completed_text = '. '.join(sentences[:-1]) + '.' if len(sentences) > 1 else sentences[0]
    else:
        completed_text = raw_text

    # Clean text
    final_text = clean_response(completed_text).strip()

    # Add opinion phrase if missing
    if not final_text.lower().startswith("in my opinion"):
        final_text = f"In my opinion, {final_text[0].lower() + final_text[1:]}"  

    # Simulate typing
    print(f"{name}: ", end="", flush=True)
    for word in final_text.split():
        print(word, end=' ', flush=True)
        time.sleep(0.15)
    print()

    # Score
    grammar, sentiment = grammar_sentiment_score(final_text)
    print(f"📝 Grammar Score: {grammar}/10")
    print(f"💬 Sentiment Score: {sentiment}/10")

    return final_text

#Get user decision using keyboard (non-blocking)
def wait_for_key(timeout=5):
    print(f"\n⏳ You have {timeout} seconds to press 'h' to speak or 'e' to exit...")
    start = time.time()
    while time.time() - start < timeout:
        if keyboard.is_pressed('h'):
            return 'h'
        elif keyboard.is_pressed('e'):
            return 'e'
        time.sleep(0.1)
    return None

# GD Starts
print("\n📢 Group Discussion is starting soon...")
time.sleep(2)

first_move = wait_for_key(5)
gd_exit = False

if first_move == 'h':
    print("🎤 Type your opening response:")
    user_response = input("You: ")
    score = score_response(user_response)
    participants[4]["score"] += score
    print(f"✅ Your opening scored: {score}/10\n")
else:
    print("🤖 AI members will begin the GD...\n")

# Main GD loop
while not gd_exit:
    ai_indices = [0, 1, 2, 3]
    random.shuffle(ai_indices)

    for idx in ai_indices:
        name = participants[idx]["name"]

        decision = wait_for_key(5)
        if decision == 'e':
            gd_exit = True
            break
        elif decision == 'h':
            print("🎤 Type your response:")
            user_response = input("You: ")
            score = score_response(user_response)
            participants[4]["score"] += score
            print(f"✅ Your response scored: {score}/10")
        else:
            print(f"\n🎙️ {name} is speaking...")
            ai_response = generate_response(name)
            score = score_response(ai_response)
            participants[idx]["score"] += score
            print(f"📈 {name}'s response scored: {score}/10")

# Show final scores
print("\n📊 Group Discussion Finished!")
print(f"🧠 Topic: {topic}")
print("\n🏆 Final Scores:")
for p in participants:
    print(f"{p['name']}: {p['score']} points")
# Show final scores
print("\n📊 Group Discussion Finished!")
print(f"🧠 Topic: {topic}")
print("\n🏆 Final Scores:")
for p in participants:
    print(f"{p['name']}: {p['score']} points")

# Performance Review for user
user = participants[4]  # 'You'

print("\n🧑‍🎓 Your Performance Review:")

if user["score"] >= 35:
    print("🌟 Excellent participation! You presented strong arguments with good grammar and sentiment.")
elif 25 <= user["score"] < 35:
    print("👍 Good job! You can improve by adding more impactful keywords and slightly refining your grammar.")
elif 15 <= user["score"] < 25:
    print("🛠️ Fair effort! Try to focus on structuring your points better, using key terms, and maintaining positive sentiment.")
else:
    print("📚 Needs Improvement: Focus more on forming complete, grammatically correct sentences, using relevant keywords, and keeping a positive tone.")

print("\n🔍 Specific Tips to Improve:")
print("- Ensure each response has a clear opening, middle, and conclusion.")
print("- Use impactful words like 'benefit', 'important', 'future', 'solution'.")
print("- Keep sentences grammatically correct and avoid very short replies.")
print("- Maintain a positive or constructive sentiment in your opinions.")
print("- Manage time to prepare structured thoughts quickly.")
