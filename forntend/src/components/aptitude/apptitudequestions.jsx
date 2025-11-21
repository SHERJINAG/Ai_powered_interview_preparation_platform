import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Timer Component
function Timer({ duration, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onEnd]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div>
      <h3>Time Left: {formatTime(timeLeft)}</h3>
    </div>
  );
}

// Quiz Page Component
function QuizPage({ quizData, onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [timeOver, setTimeOver] = useState(false);

  const handleChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const submitAnswers = async () => {
    const payload = {
      session_id: quizData.session_id,
      level: quizData.level,
      answers: answers,
    };

    try {
      const response = await axios.post('https://sherjinag-ai-learning.hf.space/submit', payload);
      onSubmit(response.data);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit answers.");
    }
  };

  return (
    <div>
      <h2>Level: {quizData.level.toUpperCase()}</h2>
      <Timer duration={30 * 60} onEnd={() => { setTimeOver(true); submitAnswers(); }} />

      {quizData.questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <p><b>{i + 1}. {q.question}</b></p>
          <div style={{ marginLeft: '20px' }}>
            {Object.entries(q.options).map(([key, value]) => (
              <label key={key} style={{ display: 'inline-block', marginRight: '20px' }}>
                <input
                  type="radio"
                  name={`q${i}`}
                  value={key}
                  disabled={timeOver}
                  checked={answers[i] === key}
                  onChange={() => handleChange(i, key)}
                />
                <span style={{ marginLeft: '5px' }}>{key}. {value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {!timeOver && (
        <button onClick={submitAnswers}>Submit</button>
      )}
    </div>
  );
}

// Result Page Component
function ResultPage({ result }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {result.score} / {result.total}</p>
      <h3>Correct Answers:</h3>
      {result.results.map((res, index) => (
        <div key={index} style={{ textAlign: 'left', marginBottom: '15px' }}>
          <p><b>{index + 1}. {res.question}</b></p>
          <p>Your Answer: {res.your_answer}</p>
          <p>Correct Answer: {res.correct_answer}</p>
          <p><i>{res.explanation}</i></p>
        </div>
      ))}
    </div>
  );
}

// Main App Component
function App() {
  const [level, setLevel] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [result, setResult] = useState(null);

  const startQuiz = async () => {
    try {
      const response = await axios.post('https://sherjinag-ai-learning.hf.space/questions/random', { level });
      setQuizData(response.data); // includes session_id and questions
    } catch (error) {
      console.error("Error fetching quiz:", error);
      alert("Failed to load quiz. Try again.");
    }
  };

  return (
    <div className="App">
      {!quizData ? (
        <div>
          <h2>Select Quiz Level</h2>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">-- Choose Level --</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <br /><br />
          <button onClick={startQuiz} disabled={!level}>Start Quiz</button>
        </div>
      ) : !result ? (
        <QuizPage quizData={quizData} onSubmit={setResult} />
      ) : (
        <ResultPage result={result} />
      )}
    </div>
  );
}

export default App;


// CSS in JS
const style = document.createElement('style');
style.innerHTML = `
  .App {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f7f7f7;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  h2, h3 {
    color: #333;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:disabled {
    background-color: #ccc;
  }

  button:hover:not(:disabled) {
    background-color: #45a049;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  select {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .quiz-question {
    margin-bottom: 20px;
  }

  .quiz-question p {
    font-size: 18px;
    font-weight: bold;
  }

  .quiz-options {
    margin-left: 20px;
  }

  .quiz-options label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .quiz-options input {
    margin-right: 10px;
  }

  .quiz-options span {
    font-size: 16px;
  }

  .results-container {
    margin-top: 20px;
  }

  .results-container div {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    text-align: left;
  }

  .results-container div p {
    font-size: 16px;
  }

  .results-container div b {
    font-size: 18px;
  }

  .results-container div i {
    font-style: italic;
    color: #555;
  }

  @media screen and (max-width: 768px) {
    .App {
      padding: 10px;
    }

    button {
      width: 100%;
    }
  }
`;

document.head.appendChild(style);
