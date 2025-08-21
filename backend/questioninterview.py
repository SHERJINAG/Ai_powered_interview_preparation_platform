from llama_cpp import Llama

# Load the model
llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")

# Initial system prompt
conversation_history = (
    "You are an interviewer preparing candidates for a software development role in Python programming. "
    "Ask one interview question at a time. Only ask questions, do not explain. Wait for the user to respond before asking the next question."
    "\n\nAssistant:"
)

def clean_response(text):
    """Removes repeated 'Assistant:' and trims text to the first question mark."""
    cleaned = text.strip()

    # Remove any repeated 'Assistant:' prefix
    while cleaned.lower().startswith("assistant:"):
        cleaned = cleaned[len("assistant:"):].strip()

    # Keep only up to first question mark
    if "?" in cleaned:
        cleaned = cleaned.split("?")[0].strip() + "?"
    else:
        cleaned = cleaned.split("\n")[0].strip()

    return cleaned

def interview_chat():
    global conversation_history

    while True:
        # Generate a model response
        response = llm(conversation_history, temperature=0.7, max_tokens=60)
        raw_output = response['choices'][0]['text']

        # Clean the model response
        question = clean_response(raw_output)

        # Display the question with exactly one 'Assistant:'
        print(f"Assistant: {question}")

        # Get the user's answer
        user_input = input("You: ")

        # Update the conversation history
        conversation_history += f"\nAssistant: {question}\nYou: {user_input}"

# Start the interview session
interview_chat()
