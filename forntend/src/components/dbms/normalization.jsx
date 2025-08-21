import React, { useState } from 'react';

const NormalizeItGame = () => {
  const [showGame, setShowGame] = useState(false);
  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [res3, setRes3] = useState('');
  const [step2Visible, setStep2Visible] = useState(false);
  const [step3Visible, setStep3Visible] = useState(false);

  const startGame = () => setShowGame(true);

  const normalize1NF = () => {
    setRes1(`
      <b>Result (1NF):</b><br/>
      <table>
        <tr><th>StudentID</th><th>StudentName</th><th>Course</th><th>Instructor</th></tr>
        <tr><td>1</td><td>John</td><td>Math</td><td>Dr. A</td></tr>
        <tr><td>1</td><td>John</td><td>Physics</td><td>Dr. B</td></tr>
      </table>
    `);
    setStep2Visible(true);
  };

  const normalize2NF = () => {
    setRes2(`
      <b>Result (2NF):</b><br/>
      <p>🔹 Split into two tables:</p>
      <table>
        <caption><b>Student</b></caption>
        <tr><th>StudentID</th><th>StudentName</th></tr>
        <tr><td>1</td><td>John</td></tr>
      </table>
      <table>
        <caption><b>Enrollment</b></caption>
        <tr><th>StudentID</th><th>Course</th><th>Instructor</th></tr>
        <tr><td>1</td><td>Math</td><td>Dr. A</td></tr>
        <tr><td>1</td><td>Physics</td><td>Dr. B</td></tr>
      </table>
    `);
    setStep3Visible(true);
  };

  const normalize3NF = () => {
    setRes3(`
      <b>Result (3NF):</b><br/>
      <p>🔹 Now split Instructor info:</p>
      <table>
        <caption><b>Student</b></caption>
        <tr><th>StudentID</th><th>StudentName</th></tr>
        <tr><td>1</td><td>John</td></tr>
      </table>
      <table>
        <caption><b>Course</b></caption>
        <tr><th>Course</th><th>Instructor</th></tr>
        <tr><td>Math</td><td>Dr. A</td></tr>
        <tr><td>Physics</td><td>Dr. B</td></tr>
      </table>
      <table>
        <caption><b>Enrollment</b></caption>
        <tr><th>StudentID</th><th>Course</th></tr>
        <tr><td>1</td><td>Math</td></tr>
        <tr><td>1</td><td>Physics</td></tr>
      </table>
    `);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20, background: '#ecf0f1' }}>
      <div style={sectionStyle}>
        <h1>📘 Database Normalization (1NF → 3NF)</h1>
        <p><strong>Normalization</strong> helps eliminate redundant data and prevent anomalies.</p>
        <h2>Example Table (Not Normalized)</h2>
        <table style={tableStyle}>
          <thead>
            <tr><th>StudentID</th><th>StudentName</th><th>Course</th><th>Instructor</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>John</td><td>Math, Physics</td><td>Dr. A, Dr. B</td></tr>
          </tbody>
        </table>

        <h3>⬇ Normalize it step by step ⬇</h3>
        <ul>
          <li><strong>1NF:</strong> Break multivalued columns</li>
          <li><strong>2NF:</strong> Remove partial dependencies</li>
          <li><strong>3NF:</strong> Remove transitive dependencies</li>
        </ul>

        <button style={buttonStyle} onClick={startGame}>🎮 Start Game</button>
      </div>

      {showGame && (
        <div style={sectionStyle}>
          <h1>🎮 Normalize It! Game</h1>

          <div>
            <h2>Step 1: Convert to 1NF</h2>
            <p>Click the button to break multivalued attributes.</p>
            <button style={buttonStyle} onClick={normalize1NF}>👉 Convert to 1NF</button>
            <div className="result" style={resultStyle} dangerouslySetInnerHTML={{ __html: res1 }} />
          </div>

          {step2Visible && (
            <div>
              <h2>Step 2: Convert to 2NF</h2>
              <p>Click the button to remove partial dependencies.</p>
              <button style={buttonStyle} onClick={normalize2NF}>👉 Convert to 2NF</button>
              <div className="result" style={resultStyle} dangerouslySetInnerHTML={{ __html: res2 }} />
            </div>
          )}

          {step3Visible && (
            <div>
              <h2>Step 3: Convert to 3NF</h2>
              <p>Click the button to remove transitive dependencies.</p>
              <button style={buttonStyle} onClick={normalize3NF}>👉 Convert to 3NF</button>
              <div className="result" style={resultStyle} dangerouslySetInnerHTML={{ __html: res3 }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const sectionStyle = {
  background: 'white',
  padding: '20px',
  marginBottom: '30px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '10px 0',
};

const buttonStyle = {
  backgroundColor: '#27ae60',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '8px',
  fontWeight: 'bold',
  marginTop: '10px',
};

const resultStyle = {
  backgroundColor: '#dff9fb',
  border: '1px solid #22a6b3',
  padding: '10px',
  marginTop: '10px',
  borderRadius: '8px',
};

export default NormalizeItGame;
