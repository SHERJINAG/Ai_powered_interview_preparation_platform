import React, { useState } from 'react';

const AIvsMLvsDLGame = () => {
  const questions = [
    "A system that plays chess against humans and learns strategies",
    "Siri understanding your voice and responding",
    "An image recognition model using neural networks"
  ];
  const answers = [
    "✅ ML (it learns from past games)",
    "✅ AI (uses voice recognition + logic)",
    "✅ DL (deep neural network)"
  ];

  const [revealed, setRevealed] = useState([false, false, false]);

  const toggleReveal = (i) => {
    setRevealed((prev) => {
      const copy = [...prev];
      copy[i] = !copy[i];
      return copy;
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI vs ML vs DL</h1>

      <div style={styles.intro}>
        <h2>🔍 Introduction</h2>
        <p><strong>Artificial Intelligence (AI)</strong> is the broad field of simulating human intelligence in machines. It was first formally introduced in 1956 at the Dartmouth Conference.</p>
        <p><strong>Machine Learning (ML)</strong> is a subset of AI that allows machines to learn from data without being explicitly programmed. It became popular in the 1980s and 90s.</p>
        <p><strong>Deep Learning (DL)</strong> is a further subset of ML, using neural networks with many layers. It gained traction in the 2010s due to increased data and computing power.</p>

        <h2>⚡ Quick Differences</h2>
        <ul>
          <li><strong>AI</strong> = Think like humans (overall decision-making)</li>
          <li><strong>ML</strong> = Learn from data (models & predictions)</li>
          <li><strong>DL</strong> = Learn deeply using neural networks</li>
        </ul>
      </div>

      <h2>🧠 Tap a card to reveal: AI, ML, or DL?</h2>
      <div style={styles.cards}>
        {questions.map((q, i) => (
          <div
            key={i}
            style={styles.card}
            onClick={() => toggleReveal(i)}
          >
            <div style={styles.cardFront}>
              {q}
            </div>
            {revealed[i] && (
              <div style={styles.cardBack}>
                {answers[i]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: '#f4f4f4',
    margin: 0,
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  intro: {
    maxWidth: '800px',
    margin: '0 auto 30px',
    background: '#fff',
    padding: '15px 25px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    width: '250px',
    minHeight: '100px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
    padding: '15px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  cardFront: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardBack: {
    marginTop: '10px',
    padding: '10px',
    background: '#e8f5e9',
    color: '#2e7d32',
    borderRadius: '6px',
  },
};

export default AIvsMLvsDLGame;
