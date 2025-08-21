import React, { useState } from 'react';

const OperatorsPuzzle = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const checkAnswers = () => {
    let resultText = '';
    resultText += answers.q1.trim() === '21'
      ? '✅ Q1 Correct\n'
      : '❌ Q1 Wrong (Answer: 21)\n';

    resultText += answers.q2.trim().toLowerCase() === 'false'
      ? '✅ Q2 Correct\n'
      : '❌ Q2 Wrong (Answer: False)\n';

    resultText += answers.q3.trim() === '3'
      ? '✅ Q3 Correct\n'
      : '❌ Q3 Wrong (Answer: 3)\n';

    resultText += answers.q4.trim().toLowerCase() === 'false'
      ? '✅ Q4 Correct\n'
      : '❌ Q4 Wrong (Answer: False)\n';

    setResult(resultText);
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#f7f9fc',
      padding: '30px',
      color: '#333'
    },
    section: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '30px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    },
    codeBlock: {
      backgroundColor: '#eee',
      padding: '10px',
      borderRadius: '6px',
      overflowX: 'auto'
    },
    puzzleBox: {
      backgroundColor: '#e8f6ff',
      padding: '15px',
      borderRadius: '10px',
      margin: '10px 0'
    },
    puzzle: {
      marginBottom: '15px'
    },
    inputBox: {
      width: '80px',
      padding: '6px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      textAlign: 'center'
    },
    button: {
      marginTop: '10px',
      padding: '8px 16px',
      fontSize: '16px',
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    result: {
      marginTop: '15px',
      whiteSpace: 'pre-line'
    }
  };

  return (
    <div style={styles.container}>
      <h1>⚙️ Python Operators - Learn & Puzzle</h1>

      <div style={styles.section}>
        <h2>➕ Python Operators Explained</h2>
        <p>Operators are used to perform operations on variables and values.</p>

        <h3>🧮 Arithmetic Operators</h3>
        <ul>
          <li><code>+</code> Addition</li>
          <li><code>-</code> Subtraction</li>
          <li><code>*</code> Multiplication</li>
          <li><code>/</code> Division</li>
          <li><code>%</code> Modulus (remainder)</li>
          <li><code>//</code> Floor division</li>
          <li><code>**</code> Exponentiation</li>
        </ul>

        <h3>🔍 Comparison Operators</h3>
        <ul>
          <li><code>==</code> Equal to</li>
          <li><code>!=</code> Not equal to</li>
          <li><code>&gt;</code> Greater than</li>
          <li><code>&lt;</code> Less than</li>
          <li><code>&gt;=</code> Greater than or equal to</li>
          <li><code>&lt;=</code> Less than or equal to</li>
        </ul>

        <h3>🧠 Logical Operators</h3>
        <ul>
          <li><code>and</code> – True if both conditions are true</li>
          <li><code>or</code> – True if at least one condition is true</li>
          <li><code>not</code> – Reverses the condition</li>
        </ul>

        <pre style={styles.codeBlock}>
{`x = 5
y = 10

print(x + y)         # 15
print(x > 3 and y > 5)  # True
print(not (x == y))  # True`}
        </pre>
      </div>

      <div style={styles.section}>
        <h2>🧩 Puzzle Time: Solve These Operator Challenges!</h2>
        <div style={styles.puzzleBox}>
          <div style={styles.puzzle}>
            <strong>1. What is 7 * 3?</strong><br />
            <input
              style={styles.inputBox}
              id="q1"
              value={answers.q1}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div style={styles.puzzle}>
            <strong>2. Is 10 &gt; 5 and 2 &lt; 1?</strong><br />
            <input
              style={styles.inputBox}
              id="q2"
              value={answers.q2}
              onChange={handleChange}
              placeholder="True / False"
              type="text"
            />
          </div>

          <div style={styles.puzzle}>
            <strong>3. What is 15 % 4?</strong><br />
            <input
              style={styles.inputBox}
              id="q3"
              value={answers.q3}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div style={styles.puzzle}>
            <strong>4. What is not (5 == 5)?</strong><br />
            <input
              style={styles.inputBox}
              id="q4"
              value={answers.q4}
              onChange={handleChange}
              placeholder="True / False"
              type="text"
            />
          </div>

          <button style={styles.button} onClick={checkAnswers}>
            Check Answers
          </button>

          <div id="result" style={styles.result}>
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorsPuzzle;
