import React, { useState } from 'react';

const MLAlgorithmPuzzle = () => {
  const [answeredLevels, setAnsweredLevels] = useState({});

  const checkAnswer = (level, selected, correct) => {
    setAnsweredLevels(prev => ({
      ...prev,
      [level]: {
        selected,
        correct,
      },
    }));
  };

  const levels = [
    {
      id: 1,
      question: "Predicting whether a tumor is malignant or benign",
      correct: "Classification",
    },
    {
      id: 2,
      question: "Predicting the selling price of a house based on location and size",
      correct: "Regression",
    },
    {
      id: 3,
      question: "Classifying emails into spam or not spam",
      correct: "Classification",
    },
  ];

  const styles = {
    body: {
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f4f7fa",
      padding: "20px",
      textAlign: "center",
    },
    intro: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "0 auto 20px auto",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    puzzle: {
      background: "#fff",
      padding: "20px",
      margin: "15px auto",
      borderRadius: "10px",
      maxWidth: "600px",
      boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    },
    button: {
      padding: "10px 20px",
      margin: "10px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    correct: {
      backgroundColor: "#a5d6a7",
    },
    wrong: {
      backgroundColor: "#ef9a9a",
    },
    default: {
      backgroundColor: "#e0e0e0",
    },
  };

  return (
    <div style={styles.body}>
      <h1>Types of ML Algorithms</h1>

      <div style={styles.intro}>
        <h2>📘 Introduction</h2>
        <p><strong>Classification:</strong> Predicts <strong>discrete labels</strong> (e.g., spam or not spam).</p>
        <p><strong>Regression:</strong> Predicts <strong>continuous values</strong> (e.g., temperature or price).</p>
        <p>🧠 Choose the right algorithm to unlock the level!</p>
      </div>

      {levels.map(({ id, question, correct }) => (
        <div key={id} style={styles.puzzle}>
          <h3>🔓 Level {id}</h3>
          <p>{question}</p>
          {["Classification", "Regression"].map(option => {
            const isAnswered = answeredLevels[id];
            const isCorrect = isAnswered && option === correct;
            const isSelected = isAnswered && option === isAnswered.selected;
            let style = { ...styles.button, ...styles.default };

            if (isAnswered) {
              if (option === correct) {
                style = { ...style, ...styles.correct };
              } else if (option === isAnswered.selected) {
                style = { ...style, ...styles.wrong };
              }
            }

            return (
              <button
                key={option}
                style={style}
                onClick={() => checkAnswer(id, option, correct)}
                disabled={!!isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MLAlgorithmPuzzle;
