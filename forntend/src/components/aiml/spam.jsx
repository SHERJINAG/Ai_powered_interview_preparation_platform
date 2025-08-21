import React, { useState } from 'react';

const SpamDetectionGame = () => {
  const messages = [
    { text: "You won a free iPhone! Click here now!", label: "spam" },
    { text: "Can we reschedule the meeting to tomorrow?", label: "not spam" },
    { text: "Limited time offer!!! Buy now & get 50% off!", label: "spam" },
    { text: "Don’t forget to bring your ID for the exam.", label: "not spam" },
    { text: "Congratulations! You’ve been selected for a prize!", label: "spam" },
    { text: "Hey, are you free to catch up this weekend?", label: "not spam" },
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState('');
  const [messageText, setMessageText] = useState('Click Start to Begin!');

  const nextMessage = () => {
    const index = Math.floor(Math.random() * messages.length);
    setCurrentIndex(index);
    setMessageText(messages[index].text);
    setResult('');
  };

  const checkAnswer = (userAnswer) => {
    if (currentIndex === -1) return;
    const correct = messages[currentIndex].label;
    setTotal(prev => prev + 1);
    if (userAnswer === correct) {
      setScore(prev => prev + 1);
      setResult("✅ Correct!");
    } else {
      setResult(`❌ Wrong! It was "${correct}"`);
    }
  };

  return (
    <div style={styles.body}>
      <h1>📨 Spam Detection - Real-Life AI Mini-Game</h1>

      <div style={styles.section}>
        <h2>🧠 How Spam Detection Works</h2>
        <p>
          Spam filters use machine learning to detect unwanted messages using word patterns
          like <b>"win"</b>, <b>"free"</b>, <b>"offer"</b>, etc.
        </p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game: Classify the Message</h2>
        <div style={styles.messageBox}>{messageText}</div>
        <button style={{ ...styles.button, ...styles.spamBtn }} onClick={() => checkAnswer('spam')}>Spam</button>
        <button style={{ ...styles.button, ...styles.notSpamBtn }} onClick={() => checkAnswer('not spam')}>Not Spam</button>
        <div style={styles.result}>{result}</div>
        <div style={styles.score}>Score: {score}/{total}</div>
        <button style={styles.nextBtn} onClick={nextMessage}>Start / Next</button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f0f4f8',
    margin: 0,
    padding: '30px',
    textAlign: 'center',
  },
  section: {
    background: '#ffffff',
    padding: '25px',
    margin: '20px auto',
    maxWidth: '700px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  messageBox: {
    fontSize: '1.2em',
    background: '#e8eaf6',
    padding: '15px',
    margin: '20px 0',
    borderRadius: '8px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  spamBtn: {
    backgroundColor: '#c62828',
    color: 'white',
  },
  notSpamBtn: {
    backgroundColor: '#2e7d32',
    color: 'white',
  },
  result: {
    fontSize: '1.1em',
    marginTop: '15px',
  },
  score: {
    fontWeight: 'bold',
    marginTop: '20px',
  },
  nextBtn: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#4a148c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SpamDetectionGame;
