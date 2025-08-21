import React, { useState } from 'react';

const SpellJarChallenge = () => {
  const [code, setCode] = useState(`int power = 100\nString spellName = "Fireball";\nboolean isCast = tru;`);
  const [resultMsg, setResultMsg] = useState('');

  const checkCode = () => {
    let errors = [];

    if (!code.includes('int power = 100;')) {
      errors.push('🧪 Missing semicolon or wrong int declaration.');
    }

    if (!code.includes('String spellName = "Fireball";')) {
      errors.push('📜 Check the String syntax or semicolon.');
    }

    if (!code.includes('boolean isCast = true;')) {
      errors.push("✅ Boolean should be 'true' not 'tru'.");
    }

    if (errors.length === 0) {
      setResultMsg('✨ Great job! All your magic jars are correctly filled!');
    } else {
      setResultMsg(errors.join('\n'));
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', background: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#4b2e83' }}>🧙‍♂️ Spell Jar Challenge – Level 1</h1>

      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#4b2e83' }}>📘 Concept: Java Variables & Data Types</h2>
        <p>In Java, variables are like magical jars that store different types of energy (data). Each jar can hold a specific type of value – like numbers, text, or true/false values.</p>
        <ul>
          <li><b>int</b> – stores whole numbers (e.g., 100)</li>
          <li><b>String</b> – stores text (e.g., "Fireball")</li>
          <li><b>boolean</b> – stores true/false values</li>
        </ul>
        <p><b>Syntax:</b> <code>dataType variableName = value;</code></p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#4b2e83' }}>🎮 Story</h2>
        <p>You are a Java wizard! To perform magic, you must store your energy in jars with the right type. But oh no! The spell jars are mixed up! Fix them before the magic fizzles out.</p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#4b2e83' }}>💡 Challenge</h2>
        <p>Correct the variable declarations below:</p>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ width: '100%', height: '120px', fontFamily: 'monospace', fontSize: '14px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button
          onClick={checkCode}
          style={{
            background: '#4b2e83',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Check My Magic
        </button>
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#007700' }}>{resultMsg}</p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: '#f5deb3', border: '2px solid #8b4513', borderRadius: '12px', padding: '10px', textAlign: 'center', width: '100px', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>🧪 int</div>
          <div style={{ background: '#f5deb3', border: '2px solid #8b4513', borderRadius: '12px', padding: '10px', textAlign: 'center', width: '100px', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>📜 String</div>
          <div style={{ background: '#f5deb3', border: '2px solid #8b4513', borderRadius: '12px', padding: '10px', textAlign: 'center', width: '100px', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>✅ boolean</div>
        </div>
      </div>
    </div>
  );
};

export default SpellJarChallenge;
