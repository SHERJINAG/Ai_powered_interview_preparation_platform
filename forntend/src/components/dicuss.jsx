import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DiscussionForumsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail"); // Ensure the same key is used for localStorage

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://sherjinag-ai-learning.hf.space/api/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("Failed to fetch questions.");
    }
  };

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    if (!newQuestion) return setError("Please enter a question.");
    
    if (!email) {
      return setError("Email is required.");
    }

    try {
      const response = await fetch("https://sherjinag-ai-learning.hf.space/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: newQuestion, email }), // Changed 'content' to 'question'
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("Server error:", err);
        setError("Failed to submit the question: " + JSON.stringify(err));
        return;
      }

      // Clear input and refresh questions
      setNewQuestion("");
      fetchQuestions();
      setError(null);
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error. Please try again.");
    }
  };

  const handleSubmitAnswer = async (e, questionId) => {
    e.preventDefault();

    if (!answer) {
      setError("Please enter an answer.");
      return;
    }

    if (!questionId) {
      setError("Question ID is missing. Cannot submit the answer.");
      return;
    }

    if (!email) {
      setError("Email is required.");
      return;
    }

    try {
      const response = await fetch(
        `https://sherjinag-ai-learning.hf.space/api/questions/${questionId}/answers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answer, email }), // Ensure the correct fields are passed
        }
      );

      if (!response.ok) {
        const err = await response.json();
        console.error("Server error:", err);
        setError("Failed to submit the answer: " + JSON.stringify(err));
        return;
      }

      // Clear the answer field and deselect the question after successful submission
      const data = await response.json();
      const updatedQuestions = questions.map((q) =>
        q.id === questionId ? { ...q, answers: [...(q.answers || []), data] } : q
      );
      setQuestions(updatedQuestions);
      setAnswer(""); // Clear the answer field
      setSelectedQuestionId(null); // Deselect the question
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Discussion Forum</h1>
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.section}>
        <h2>Ask a Question</h2>
        <form onSubmit={handleSubmitQuestion}>
          <textarea
            style={styles.textarea}
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Write your question here..."
          />
          <button type="submit" style={styles.button}>Submit Question</button>
        </form>
      </div>

      <div style={styles.section}>
        <h2>Questions</h2>
        {questions.length === 0 ? (
          <p>No questions available.</p>
        ) : (
          questions.map((q) => (
            <div key={q.id} style={styles.card}>
              <p><strong>Q:</strong> {q.question}</p>
              <p><em>Asked by: {q.email || "Anonymous"}</em></p>
              <button onClick={() => setSelectedQuestionId(q.id)} style={styles.buttonSmall}>Answer</button>

              {selectedQuestionId === q.id && (
                <div style={styles.answerForm}>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={styles.textarea}
                    placeholder="Write your answer here..."
                  />
                  <button onClick={(e) => handleSubmitAnswer(e, q.id)} style={styles.button}>
                    Submit Answer
                  </button>
                </div>
              )}
              <div style={styles.answers}>
                <h3>Answers:</h3>
                {!Array.isArray(q.answers) || q.answers.length === 0 ? (
                  <p>No answers yet.</p>
                ) : (
                  q.answers.map((ans, i) => (
                    <div key={i} style={styles.answer}>
                      <p>{ans.answer}</p>
                      <p><em>— {ans.email || "Anonymous"}</em></p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial" },
  heading: { textAlign: "center", fontSize: "28px", marginBottom: "20px" },
  error: { color: "red" },
  section: { marginBottom: "30px" },
  textarea: { width: "100%", height: "60px", padding: "10px", fontSize: "14px", marginBottom: "10px" },
  button: { padding: "10px 20px", fontSize: "14px", cursor: "pointer" },
  buttonSmall: { padding: "6px 12px", marginTop: "5px", fontSize: "13px", cursor: "pointer" },
  card: { border: "1px solid #ccc", borderRadius: "8px", padding: "15px", marginBottom: "20px" },
  answerForm: { marginTop: "10px" },
  answers: { marginTop: "10px" },
  answer: { background: "#f2f2f2", padding: "10px", margin: "5px 0", borderRadius: "5px" }
};

export default DiscussionForumsPage;
