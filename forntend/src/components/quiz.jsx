import React, { useState } from 'react'; 
import './InteractiveQuizzesPage.css';
import axios from 'axios';
import quizData from './quizData';

const InteractiveQuizzesPage = () => {
  const [selectedField, setSelectedField] = useState("Programming Basics");
  const [answers, setAnswers] = useState(Array(5).fill(""));
  const [marks, setMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [error, setError] = useState("");

  // Handle user answer change
  const handleAnswerChange = (index, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  // Submit quiz answers
  const handleSubmit = async () => {
    let score = 0;
    quizData[selectedField].forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score += 1;
      }
    });

    setMarks(score);
    setSubmitted(true);
    const currentTimestamp = new Date().toLocaleString();
    setTimestamp(currentTimestamp);

    const email = localStorage.getItem("userEmail"); // Get email from local storage

    if (!email) {
      setError("You are not logged in. Please log in to submit the quiz.");
      return;
    }

    const userData = {
      username: email, // Send email as username
      quizTitle: selectedField,
      marks: score,
      timestamp: currentTimestamp,
      attempts: 1,
    };

    try {
      // POST request without token, only email
      await axios.post("http://localhost:8000/api/quiz/save-result", userData);
    } catch (error) {
      console.error("Error submitting results:", error);
      if (error.response?.status === 403) {
        setError("You are not authorized. Please log in again.");
      } else {
        setError("There was an error submitting your results.");
      }
    }
  };

  return (
    <div className="quizzes-container">
      <div className="quizzes-content">
        <h2>Select a Quiz</h2>
        <select 
          value={selectedField} 
          onChange={(e) => setSelectedField(e.target.value)}
        >
          {Object.keys(quizData).map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>

        <h2>{selectedField} Quiz</h2>
        <ul className="quiz-list">
          {quizData[selectedField].map((question, index) => (
            <li key={index} className="quiz-item">
              <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={submitted}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <button className="submit-btn" onClick={handleSubmit} disabled={submitted}>
          {submitted ? "Submitted" : "Submit Answers"}
        </button>

        {submitted && (
          <div className="quiz-result">
            <h3>Your Score: {marks} / 5</h3>
            <p><strong>Timestamp:</strong> {timestamp}</p>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default InteractiveQuizzesPage;
