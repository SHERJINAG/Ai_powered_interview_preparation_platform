import React, { useState } from 'react';

const FileHandlingGame = () => {
  const [output, setOutput] = useState('');

  const saveGame = () => {
    const level = document.getElementById('level').value;
    const score = document.getElementById('score').value;
    const saveData = `Level: ${level}\nScore: ${score}`;
    localStorage.setItem('gameData', saveData);
    setOutput('✅ Game Saved!');
  };

  const loadGame = () => {
    const data = localStorage.getItem('gameData');
    if (data) {
      setOutput(`📖 Loaded Data:\n${data}`);
    } else {
      setOutput('⚠️ No save data found!');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: '#fff3e0',
      padding: '30px',
      color: '#e65100'
    }}>
      <h1>📂 File Handling - Save & Load Game</h1>

      <div style={{
        background: '#fff8e1',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 0 10px rgba(0,0,0,0.08)'
      }}>
        <h2>📘 Python File Concepts</h2>
        <pre style={{
          background: '#fbe9e7',
          padding: '10px',
          borderRadius: '6px'
        }}>
{`# Write
with open("save.txt", "w") as f:
    f.write("Level 3")

# Read
with open("save.txt", "r") as f:
    print(f.read())`}
        </pre>
      </div>

      <div style={{
        background: '#ffe0b2',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h2>🎮 Save & Load Game</h2>
        <p>Type your level and score to simulate saving game progress!</p>

        <input
          type="text"
          id="level"
          placeholder="Enter Level (e.g., Level 3)"
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '10px'
          }}
        />
        <br />
        <input
          type="text"
          id="score"
          placeholder="Enter Score (e.g., 1500)"
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '10px'
          }}
        />
        <br />
        <button
          onClick={saveGame}
          style={{
            margin: '10px',
            padding: '10px 15px',
            fontSize: '16px',
            background: '#fb8c00',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.background = '#ef6c00'}
          onMouseOut={(e) => e.target.style.background = '#fb8c00'}
        >
          💾 Save Game
        </button>
        <button
          onClick={loadGame}
          style={{
            margin: '10px',
            padding: '10px 15px',
            fontSize: '16px',
            background: '#fb8c00',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.background = '#ef6c00'}
          onMouseOut={(e) => e.target.style.background = '#fb8c00'}
        >
          📂 Load Game
        </button>

        <div style={{ fontWeight: 'bold', marginTop: '20px', whiteSpace: 'pre-line' }}>
          {output}
        </div>
      </div>
    </div>
  );
};

export default FileHandlingGame;
