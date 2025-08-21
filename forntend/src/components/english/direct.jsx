import React, { useState, useEffect } from 'react';

const questions = [
  {
    direct: '"I am tired"',
    indirect: "He said he was tired",
    feedback: {
      error: "Tense mismatch",
      correction: "Use 'was' instead of 'am' in reported speech.",
      hint: "Change present tense to past tense in indirect speech."
    }
  },
  {
    direct: '"I will call you"',
    indirect: "He said he would call me",
    feedback: {
      error: "Incorrect future tense",
      correction: "Use 'would' instead of 'will' in reported speech.",
      hint: "Future 'will' becomes 'would' in indirect speech."
    }
  },
  {
    direct: '"We are watching a movie"',
    indirect: "They said they were watching a movie",
    feedback: {
      error: "Continuous tense",
      correction: "Use 'were watching' instead of 'are watching'.",
      hint: "Present continuous becomes past continuous."
    }
  }
];

export default function DirectIndirectSpeechGame() {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [hint, setHint] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);

  const speak = (text) => {
    if (!audioEnabled) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    speechSynthesis.speak(utterance);
  };

  const handleListen = (id) => {
    const text = document.getElementById(id).innerText;
    speak(text);
  };

  const checkAnswer = () => {
    const answer = input.toLowerCase().trim();
    const correct = questions[current].indirect.toLowerCase().trim();
    const feedback = questions[current].feedback;

    if (answer === correct) {
      setResult('✅ Correct!');
      setHint('');
      speak("Great job! You transformed it correctly.");
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setInput('');
        setResult('');
        setHint('');
      }, 2000);
    } else {
      setResult(`❌ Incorrect: ${feedback.error}`);
      setHint(`💡 Hint: ${feedback.hint} | Example: ${feedback.correction}`);
      speak(`Oops! ${feedback.correction}. ${feedback.hint}`);
    }
  };

  if (current >= questions.length) {
    return (
      <div style={styles.container}>
        <h2>🎉 You completed the game!</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>📚 Direct and Indirect Speech</h1>
        <button style={styles.muteBtn} onClick={() => setAudioEnabled(!audioEnabled)}>
          {audioEnabled ? '🔇 Mute' : '🔊 Unmute'}
        </button>

        <div style={{ ...styles.block, ...styles.definition }} id="definition">
          <button style={styles.listenBtn} onClick={() => handleListen('definition')}>🔊 Listen</button>
          <h2>🧠 What is it?</h2>
          <p><strong style={styles.highlight}>Direct Speech</strong> refers to repeating the exact words someone said.</p>
          <p><strong style={styles.highlight}>Indirect Speech</strong> means reporting what someone said without quoting them directly.</p>
        </div>

        <div style={{ ...styles.block, ...styles.rules }} id="rules">
          <button style={styles.listenBtn} onClick={() => handleListen('rules')}>🔊 Listen</button>
          <h2>📏 Rules</h2>
          <ul>
            <li>🧭 Remove quotation marks.</li>
            <li>⏳ Change the tense to match the context.</li>
            <li>👤 Adjust pronouns (I → he/she, we → they).</li>
            <li>⏱️ Adjust time words (today → that day, now → then).</li>
          </ul>
        </div>

        <div style={{ ...styles.block, ...styles.examples }} id="examples">
          <button style={styles.listenBtn} onClick={() => handleListen('examples')}>🔊 Listen</button>
          <h2>📝 Examples</h2>
          <div style={styles.examplePair}>
            <p style={styles.direct}><strong>Direct:</strong> She said, "I am hungry."</p>
            <p style={styles.indirect}><strong>Indirect:</strong> She said that she was hungry.</p>
          </div>
          <div style={styles.examplePair}>
            <p style={styles.direct}><strong>Direct:</strong> He said, "I will call you tomorrow."</p>
            <p style={styles.indirect}><strong>Indirect:</strong> He said that he would call me the next day.</p>
          </div>
        </div>

        <h1>🎯 Convert & Conquer</h1>
        <p>Convert the direct speech into indirect speech:</p>
        <div style={styles.card}>
          <p id="quote">{questions[current].direct}</p>
        </div>
        <input
          type="text"
          placeholder="Enter indirect speech..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={checkAnswer} style={styles.submit}>Submit</button>
        <div>{result}</div>
        <div>{hint}</div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#2c3e50',
  },
  container: {
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    position: 'relative'
  },
  block: {
    margin: '20px 0',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    transition: 'transform 0.4s ease',
  },
  definition: {
    backgroundColor: '#f0f8ff',
    borderLeft: '6px solid #3498db'
  },
  rules: {
    backgroundColor: '#f0f8ff',
    borderLeft: '6px solid #9b59b6'
  },
  examples: {
    backgroundColor: '#e8f6f3',
    borderLeft: '6px solid #1abc9c'
  },
  highlight: {
    color: '#d35400'
  },
  direct: {
    color: '#2e86c1'
  },
  indirect: {
    color: '#27ae60'
  },
  examplePair: {
    backgroundColor: '#fcf3cf',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '10px'
  },
  card: {
    backgroundColor: '#fef5e7',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  input: {
    padding: '10px',
    width: '100%',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  submit: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  listenBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '8px 12px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  muteBtn: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '8px 12px',
    backgroundColor: '#7f8c8d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};
