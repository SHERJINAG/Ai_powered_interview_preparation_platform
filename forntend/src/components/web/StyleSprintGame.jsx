import React, { useState, useEffect } from 'react';

const StyleSprintGame = () => {
  const challenges = [
    {
      text: "Make the character background blue and center the text.",
      styleCheck: (el) => {
        const bg = window.getComputedStyle(el).backgroundColor;
        const align = window.getComputedStyle(el).textAlign;
        return (bg.includes("0, 0, 255") || bg.includes("blue")) && align === "center";
      }
    },
    {
      text: "Make the character font red and bold.",
      styleCheck: (el) => {
        const color = window.getComputedStyle(el).color;
        const weight = window.getComputedStyle(el).fontWeight;
        return (color.includes("255, 0, 0") || color.includes("red")) && (weight === "700" || weight === "bold");
      }
    },
    {
      text: "Change character size to 50px and round the corners.",
      styleCheck: (el) => {
        const size = window.getComputedStyle(el).fontSize;
        const radius = window.getComputedStyle(el).borderRadius;
        return size === "50px" && parseInt(radius) >= 20;
      }
    }
  ];

  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [cssInput, setCssInput] = useState('');
  const [resultText, setResultText] = useState('');
  const characterRef = React.useRef(null);

  useEffect(() => {
    setCssInput('');
    setResultText('');
    if (characterRef.current) {
      characterRef.current.removeAttribute('style');
    }
  }, [currentChallenge]);

  const applyStyle = () => {
    if (characterRef.current) {
      characterRef.current.setAttribute('style', cssInput);
    }

    setTimeout(() => {
      const result = challenges[currentChallenge].styleCheck(characterRef.current);
      setResultText(result ? "✅ Correct!" : "❌ Try Again!");

      if (result && currentChallenge < challenges.length - 1) {
        setTimeout(() => {
          setCurrentChallenge(currentChallenge + 1);
        }, 1500);
      }
    }, 500);
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>🎨 Style Sprint - CSS Challenge Game</h1>

      <div style={styles.section}>
        <h2>🧠 CSS Styling Basics</h2>
        <p>CSS is used to style HTML elements. You write CSS using <code>selectors</code> and <code>properties</code>.</p>
        <p><code>selector &#123; property: value; &#125;</code></p>
        <p>Example: <code>div &#123; color: red; &#125;</code></p>

        <h3>📘 CSS Property Reference</h3>
        <table style={styles.table}>
          <thead>
            <tr><th>Concept</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td><code>background</code></td><td><code>background: blue;</code></td></tr>
            <tr><td><code>color</code></td><td><code>color: red;</code></td></tr>
            <tr><td><code>font-weight</code></td><td><code>font-weight: bold;</code></td></tr>
            <tr><td><code>font-size</code></td><td><code>font-size: 50px;</code></td></tr>
            <tr><td><code>text-align</code></td><td><code>text-align: center;</code></td></tr>
            <tr><td><code>border-radius</code></td><td><code>border-radius: 20px;</code></td></tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h2>🎮 Challenge</h2>
        <div style={styles.challengeBox}>{challenges[currentChallenge].text}</div>
        <div ref={characterRef} style={styles.character}>A</div>

        <textarea
          value={cssInput}
          onChange={(e) => setCssInput(e.target.value)}
          placeholder="Write your CSS here for .character"
          style={styles.textarea}
        />
        <br />
        <button onClick={applyStyle} style={styles.button}>Apply Style</button>

        <div style={styles.result}>{resultText}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    background: '#f3faff',
    margin: 0,
    padding: 20,
    color: '#333',
    textAlign: 'center'
  },
  heading: {
    color: '#1a237e'
  },
  section: {
    background: 'white',
    padding: 20,
    margin: '20px auto',
    maxWidth: 900,
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  challengeBox: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    background: '#e3f2fd',
    padding: 15,
    borderRadius: 8
  },
  character: {
    margin: '30px auto',
    width: 100,
    height: 100,
    background: 'gray',
    lineHeight: '100px',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 10,
    transition: 'all 0.5s ease'
  },
  textarea: {
    width: '90%',
    height: 100,
    fontFamily: 'monospace',
    fontSize: 14,
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    border: '1px solid #ccc'
  },
  button: {
    marginTop: 15,
    padding: '10px 20px',
    background: '#1a237e',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer'
  },
  result: {
    marginTop: 15,
    fontWeight: 'bold'
  },
  table: {
    margin: '20px auto',
    borderCollapse: 'collapse',
    width: '80%',
    border: '1px solid #ccc'
  }
};

export default StyleSprintGame;
