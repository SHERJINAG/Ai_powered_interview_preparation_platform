import React, { useEffect, useState } from 'react';

const CSSAnimationArena = () => {
  const [cssCode, setCssCode] = useState('');
  const [resultText, setResultText] = useState('');
  const [challengeIndex, setChallengeIndex] = useState(0);

  const challenges = [
    {
      text: 'Make the circle move left to right continuously!',
      check: () => {
        const elem = document.getElementById('character');
        return window.getComputedStyle(elem).animationName === 'moveRight';
      },
      animation: `
@keyframes moveRight {
  0% { left: 0; }
  100% { left: 300px; }
}
#character {
  animation: moveRight 2s infinite alternate;
}
      `,
    },
    {
      text: 'Make it bounce up and down forever!',
      check: () => {
        const elem = document.getElementById('character');
        return window.getComputedStyle(elem).animationName === 'bounce';
      },
      animation: `
@keyframes bounce {
  0% { top: 100px; }
  100% { top: 0px; }
}
#character {
  animation: bounce 0.5s infinite alternate;
}
      `,
    },
    {
      text: 'Use transition to change color smoothly on hover.',
      check: () => {
        const elem = document.getElementById('character');
        return window.getComputedStyle(elem).transition.includes('background');
      },
      animation: `
#character {
  transition: background 0.5s ease;
}
#character:hover {
  background: #ef5350;
}
      `,
    },
  ];

  const applyAnimation = () => {
    // Remove existing dynamic style
    const old = document.getElementById('dynamicStyle');
    if (old) old.remove();

    // Add new dynamic style
    const style = document.createElement('style');
    style.id = 'dynamicStyle';
    style.innerHTML = cssCode;
    document.head.appendChild(style);

    setTimeout(() => {
      const passed = challenges[challengeIndex].check();
      setResultText(passed ? '✅ Correct Animation!' : '❌ Try Again!');

      if (passed && challengeIndex < challenges.length - 1) {
        setTimeout(() => {
          setChallengeIndex((prev) => prev + 1);
          setResultText('');
        }, 2000);
      }
    }, 500);
  };

  useEffect(() => {
    // Set initial CSS code for the current challenge
    setCssCode(challenges[challengeIndex].animation.trim());

    // Clear dynamic styles and reset character
    const old = document.getElementById('dynamicStyle');
    if (old) old.remove();

    const character = document.getElementById('character');
    if (character) character.removeAttribute('style');
  }, [challengeIndex]);

  return (
    <div style={styles.container}>
      <h1>🌀 Animate It! - CSS Animations & Transitions</h1>

      <div style={styles.section}>
        <h2>📘 Concepts: CSS Animations & Transitions</h2>
        <p><strong>CSS Transitions:</strong> Allow smooth changes between CSS property values.</p>
        <code style={styles.code}>transition: all 0.5s ease-in-out;</code>

        <p><strong>CSS Animations:</strong> Allow full control over animation steps using keyframes.</p>
        <code style={styles.code}>
          {'@keyframes move { from {left: 0;} to {left: 100px;} }'}<br />
          animation: move 2s infinite alternate;
        </code>

        <h3>🔧 Property Reference</h3>
        <table style={styles.table}>
          <thead>
            <tr><th>Property</th><th>Example</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>transition</td><td>transition: all 0.5s ease;</td><td>Smooth transition</td></tr>
            <tr><td>@keyframes</td><td>@keyframes bounce {'{...}'}</td><td>Define animation steps</td></tr>
            <tr><td>animation</td><td>animation: bounce 1s infinite;</td><td>Assign animation to element</td></tr>
            <tr><td>animation-delay</td><td>animation-delay: 1s;</td><td>Delay before animation starts</td></tr>
            <tr><td>animation-iteration-count</td><td>infinite / 1 / 2</td><td>Number of repeats</td></tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h2>🎮 Challenge</h2>
        <div style={styles.challenge}>{challenges[challengeIndex].text}</div>

        <div style={styles.playArea}>
          <div id="character" style={styles.character}>😊</div>
        </div>

        <textarea
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          style={styles.textarea}
          placeholder="Write your CSS for #character here..."
        ></textarea>
        <br />
        <button onClick={applyAnimation} style={styles.button}>Apply Animation</button>

        <div style={styles.result}>{resultText}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    color: '#333',
  },
  section: {
    background: 'white',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '900px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  challenge: {
    background: '#e0f7fa',
    padding: '15px',
    fontWeight: 'bold',
    marginTop: '20px',
    borderRadius: '8px',
  },
  playArea: {
    height: '300px',
    background: '#fffde7',
    margin: '20px auto',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
  },
  character: {
    width: '80px',
    height: '80px',
    background: '#42a5f5',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: '80px',
    textAlign: 'center',
    position: 'absolute',
    top: '100px',
    left: '0',
    borderRadius: '50%',
  },
  textarea: {
    width: '90%',
    height: '120px',
    marginTop: '10px',
    fontFamily: 'monospace',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    background: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  code: {
    background: '#f1f8e9',
    padding: '6px',
    borderRadius: '4px',
    display: 'inline-block',
    margin: '6px 0',
  },
};

export default CSSAnimationArena;
