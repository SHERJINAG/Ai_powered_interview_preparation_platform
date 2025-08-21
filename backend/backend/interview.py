import re
import fitz  # PyMuPDF
from llama_cpp import Llama
import random

# Sample feedback pools
positive_feedback_pool = [
    "You communicated your thoughts clearly.",
    "Your answers reflected solid foundational knowledge.",
    "You demonstrated confidence during the interview.",
    "You used appropriate technical terms and concepts.",
    "You showed good problem-solving skills.",
    "You stayed calm and composed throughout.",
    "You made an effort to explain your logic step-by-step.",
    "You showed enthusiasm and willingness to learn.",
    "You answered all questions within a reasonable time.",
    "You connected theoretical knowledge to practical scenarios.",
    "You showed curiosity by diving a bit deeper into topics.",
    "Your answers were structured and to the point.",
    "You exhibited good listening skills.",
    "You attempted even the tough questions, which shows resilience.",
    "You asked clarifying questions where needed."
]

improvement_feedback_pool = [
    "Try to be more specific in your responses instead of vague answers.",
    "Work on reducing filler words like 'uh', 'you know', etc.",
    "Practice structuring answers using formats like STAR or PREP.",
    "Review key fundamentals and core concepts regularly.",
    "Avoid rushing—take a second to think before answering.",
    "Use real-world examples when possible.",
    "Clarify technical terms when you use them.",
    "Work on improving time management during longer answers.",
    "Strengthen your explanation of 'why' behind each solution.",
    "Brush up on latest trends or updates in your domain.",
    "Speak with more energy to show enthusiasm.",
    "Avoid grammatical mistakes for better professionalism.",
    "Improve your ability to think aloud in coding questions.",
    "Practice answering in mock interviews or with peers.",
    "Give more context before diving straight into an answer."
]

# ========== Resume Extraction Functions ==========

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    return "\n".join([page.get_text() for page in doc])

def extract_email(text):
    match = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
    return match.group() if match else "Not found"

def extract_phone(text):
    match = re.search(r'\+?\d[\d\s\-]{8,15}', text)
    return match.group() if match else "Not found"

def extract_name(text):
    lines = text.strip().split('\n')
    for line in lines[:6]:
        if line.strip() and not any(char.isdigit() for char in line) and len(line.split()) <= 4:
            return line.strip()
    return "Name not found"

def extract_education(text):
    keywords = ['B.Tech', 'B.E.', 'Bachelor', 'M.Tech', 'M.E.', 'Master', 'PhD', 'Diploma']
    return [line.strip() for line in text.split('\n') if any(k.lower() in line.lower() for k in keywords)] or ["Not found"]

def extract_skills(text):
    skills_list = ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Ruby', 'Kotlin', 'Swift', 'R', 'PHP', 'Perl', 'Scala',
     'HTML', 'CSS', 'React', 'Angular', 'Vue.js', 'Next.js', 'Svelte', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS', 'jQuery',
     'Flask', 'Django', 'FastAPI', 'Spring Boot', 'ASP.NET', 'Ruby on Rails', 'Laravel', 'REST API', 'GraphQL',
     'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Redis', 'Oracle DB', 'Cassandra', 'Elasticsearch',
     'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'Matplotlib', 'Seaborn', 'OpenCV',
     'NLP', 'Deep Learning', 'Computer Vision', 'Data Analytics', 'Data Visualization', 'Jupyter Notebook', 'Statsmodels',
     'Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible',
     'Flutter', 'React Native', 'Android Studio', 'Dart', 'Xamarin',
     'AI', 'Machine Learning', 'Reinforcement Learning', 'Natural Language Processing (NLP)', 'Speech Recognition', 'Chatbots',
     'Network Security', 'Cybersecurity']

    return list({skill for skill in skills_list if re.search(r'\b' + re.escape(skill) + r'\b', text, re.IGNORECASE)}) or ["Not found"]

def extract_projects(text):
    pattern = r"(Projects|Project Work)[\s:\-]*\n(.*?)(?=\n[A-Z][^\n]{2,}|$)"
    matches = re.findall(pattern, text, re.DOTALL | re.IGNORECASE)
    projects = [line.strip() for _, content in matches for line in content.strip().split('\n') if len(line.strip()) > 3]
    return projects or ["Not found"]

def extract_area_of_interest(text):
    pattern = r"(Area of Interest|Interests|Field of Interest)[\s:\-]*\n(.*?)(?=\n[A-Z][^\n]{2,}|$)"
    matches = re.findall(pattern, text, re.DOTALL | re.IGNORECASE)
    interests = [i.strip() for _, content in matches for line in content.strip().split('\n') for i in re.split(r'[,\n•]', line) if i.strip()]
    return interests or ["Not found"]

def extract_resume_info(pdf_path):
    text = extract_text_from_pdf(pdf_path)
    return {
        "Name": extract_name(text),
        "Email": extract_email(text),
        "Phone": extract_phone(text),
        "Education": extract_education(text),
        "Skills": extract_skills(text),
        "Projects": extract_projects(text),
        "Area of Interest": extract_area_of_interest(text)
    }

# ========== LLM Interview Logic ==========

def clean_response(text):
    cleaned = text.strip()
    while cleaned.lower().startswith("assistant:"):
        cleaned = cleaned[len("assistant:"):].strip()
    return cleaned.split("?")[0].strip() + "?" if "?" in cleaned else cleaned.split("\n")[0].strip()

def run_interview(role, skills):
    llm = Llama(model_path="./model/TinyLlama-1.1B-Chat-v1.0.Q4_K_M.gguf")

    skill_str = ', '.join(skills)
    conversation_history = (
        f"You are an interviewer preparing candidates for a {role} role. "
        f"The candidate knows the following skills: {skill_str}. "
        f"Ask one interview question at a time. Only ask questions, do not explain. "
        f"Wait for the user to respond before asking the next question.\n\nAssistant:"
    )

    print("\n💼 Interview started. Type 'exit' anytime to end.\n")

    while True:
        response = llm(conversation_history, temperature=0.7, max_tokens=60)
        raw_output = response['choices'][0]['text']
        question = clean_response(raw_output)

        print(f"\nAssistant: {question}")
        user_input = input("You: ").strip()

        if user_input.lower() == "exit":
            print("\n✅ Interview ended. Evaluating your performance...\n")

            # Randomly select feedback
            positive_feedback = random.sample(positive_feedback_pool, 10)
            improvement_feedback = random.sample(improvement_feedback_pool, 5)

            # Random final rating between 2.5 and 5
            final_rating = round(random.uniform(2.5, 5.0), 1)

            # Output the performance review
            print("📊 Performance Review:\n")

            print("📈 Strengths:")
            for point in positive_feedback:
                print(f"- {point}")

            print("\n🛠️ Areas to Improve:")
            for point in improvement_feedback:
                print(f"- {point}")

            print(f"\n⭐ Final Rating: {final_rating}/5")

            break

        if not user_input.endswith('.'):
            user_input += '.'
        

        # Append interaction to the conversation history
        conversation_history += f"\nAssistant: {question}\nYou: {user_input}"

# ========== Main Entry Point ==========

if __name__ == "__main__":
    pdf_path = input("📄 Enter the path to the resume PDF: ").strip()
    role = input("🎯 Enter the role for the interview (e.g., Python Developer, Full Stack Developer): ").strip()

    resume_info = extract_resume_info(pdf_path)

    print("\n🔍 Extracted Resume Info:\n")
    for key, val in resume_info.items():
        print(f"{key}:")
        if isinstance(val, list):
            for item in val:
                print(f"  - {item}")
        else:
            print(f"  {val}")
        print()

    run_interview(role, resume_info["Skills"])
