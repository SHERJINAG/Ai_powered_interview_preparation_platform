import React, { useState } from 'react';

const SecureSurfGame = () => {
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const startRace = (protocol) => {
    clearInterval(intervalId); // Clear any previous interval
    setProgress(0);
    setResult('');

    let width = 0;
    const speed = protocol === 'http' ? 20 : 40;

    const id = setInterval(() => {
      width += 1;
      setProgress(width);
      if (width >= 100) {
        clearInterval(id);
        const resultMsg =
          protocol === 'http'
            ? '📦 Data fetched quickly, but it was '
            : '🔐 Data fetched ';
        const resultClass = protocol === 'http' ? 'insecure' : 'secure';
        const resultText = protocol === 'http' ? 'INSECURE' : 'SECURELY';
        setResult(
          <>
            {resultMsg}
            <span className={resultClass}>{resultText}</span>
            {protocol === 'http' ? '!' : ' using HTTPS!'}
          </>
        );
      }
    }, speed);
    setIntervalId(id);
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🌐 Secure Surf - HTTP vs HTTPS</h1>

      <div style={styles.section}>
        <h2>📚 Concept</h2>
        <p>
          <strong>HTTP:</strong> Sends data in plain text. Faster but insecure. Anyone can intercept and read your
          data.
        </p>
        <p>
          <strong>HTTPS:</strong> Encrypts your data using SSL/TLS. Slightly slower but secure. Essential for sensitive
          info.
        </p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game: Choose Your Protocol!</h2>
        <p>You're fetching a web page. Will you go for speed or security?</p>

        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => startRace('http')}>
            🌐 Use HTTP
          </button>
          <button style={styles.button} onClick={() => startRace('https')}>
            🔒 Use HTTPS
          </button>
        </div>

        <div style={styles.progressBar}>
          <div style={{ ...styles.progress, width: `${progress}%` }}></div>
        </div>

        <div style={styles.result}>{result}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Segoe UI, sans-serif',
    background: '#e0f7fa',
    textAlign: 'center',
    padding: '20px',
  },
  section: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  h1: {
    color: '#00796b',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    background: '#00796b',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  progressBar: {
    width: '100%',
    backgroundColor: '#ccc',
    height: '30px',
    marginTop: '20px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#00796b',
    transition: 'width 0.1s linear',
  },
  result: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  secure: {
    color: 'green',
  },
  insecure: {
    color: 'red',
  },
};

export default SecureSurfGame;
