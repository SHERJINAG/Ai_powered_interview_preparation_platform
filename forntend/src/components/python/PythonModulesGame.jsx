import React, { useState } from 'react';

function PythonModulesGame() {
  const [draggedModule, setDraggedModule] = useState(null);
  const [matches, setMatches] = useState({
    math: false,
    random: false,
    datetime: false,
    os: false,
  });

  const modules = ['math', 'random', 'datetime', 'os'];
  const abilities = [
    { id: 'math', text: '🔢 Square Root' },
    { id: 'random', text: '🎲 Random Choice' },
    { id: 'datetime', text: '⏰ Get Current Time' },
    { id: 'os', text: '💾 File Path Access' },
  ];

  const handleDragStart = (module) => {
    setDraggedModule(module);
  };

  const handleDrop = (abilityId) => {
    if (draggedModule === abilityId) {
      setMatches((prevMatches) => ({
        ...prevMatches,
        [abilityId]: true,
      }));
    } else {
      alert('❌ Incorrect match. Try again!');
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f9fbe7', padding: '30px', color: '#33691e' }}>
      <h1>📦 Python Modules & Libraries</h1>

      <div style={{ background: '#f1f8e9', borderRadius: '10px', padding: '20px', marginBottom: '30px', boxShadow: '0 0 8px rgba(0, 0, 0, 0.05)' }}>
        <h2>📘 Understanding Modules</h2>
        <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '6px' }}>
          <code>{`import math
print(math.sqrt(25))  // ➝ 5.0

from random import randint
print(randint(1, 10))`}</code>
        </pre>
      </div>

      <div style={{ background: '#f1f8e9', borderRadius: '10px', padding: '20px', marginBottom: '30px', boxShadow: '0 0 8px rgba(0, 0, 0, 0.05)' }}>
        <h2>🎮 Power-Up with Modules Game</h2>
        <p>🧩 Drag the module to the correct power it provides!</p>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {modules.map((module) => (
            <div
              key={module}
              draggable
              onDragStart={() => handleDragStart(module)}
              style={{
                width: '150px',
                height: '50px',
                margin: '10px',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 'bold',
                cursor: 'move',
                background: '#aed581',
                border: '2px solid #8bc34a',
              }}
            >
              {module}
            </div>
          ))}

          {abilities.map((ability) => (
            <div
              key={ability.id}
              onDrop={() => handleDrop(ability.id)}
              onDragOver={(e) => e.preventDefault()}
              style={{
                width: '150px',
                height: '50px',
                margin: '10px',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
                background: '#fff9c4',
                border: '2px dashed #fbc02d',
                backgroundColor: matches[ability.id] ? '#c5e1a5' : '#fff9c4',
                borderColor: matches[ability.id] ? '#558b2f' : '#fbc02d',
              }}
            >
              {matches[ability.id] ? `✅ ${ability.text} Matched!` : ability.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PythonModulesGame;
