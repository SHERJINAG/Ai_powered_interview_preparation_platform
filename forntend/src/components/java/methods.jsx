import React, { useState } from 'react';

const JavaMethodsSpellChallenge = () => {
  const [code, setCode] = useState(
`class Spell {
    String name;
    int power

    void castSpell() {
        System.out.println("Casting " + name + " with power " + power);
    }
}`
  );
  const [resultMsg, setResultMsg] = useState('');
  const [resultClass, setResultClass] = useState('');

  const checkCode = () => {
    let errors = [];
    if (!code.includes('class Spell')) {
      errors.push("🧾 Missing 'class Spell'");
    }
    if (!code.includes('void castSpell()')) {
      errors.push("✨ Method 'castSpell()' not defined correctly.");
    }
    if (!code.includes('System.out.println')) {
      errors.push('📢 Missing print statement in method.');
    }
    if (!code.includes('int power;') && !code.includes('int power')) {
      errors.push("💡 'power' field missing or syntax error (check semicolon).");
    }

    if (errors.length === 0) {
      setResultMsg('✅ Great! Your method is correctly defined!');
      setResultClass('success');
    } else {
      setResultMsg(errors.join('\n'));
      setResultClass('error');
    }
  };

  const simulateCast = () => {
    setResultMsg('🔮 Casting FireBlast with power 80! 💥');
    setResultClass('success');
  };

  return (
    <>
      <div className="container">
        <h1>✨ Level 3: Power Up with Methods</h1>

        <div className="section">
          <h2>📘 Concept: Java Methods</h2>
          <p>Methods are like magical actions your object can perform.</p>
          <p>They belong to a class and can be used to perform calculations, print info, or modify values.</p>
          <pre>
{`class Spell {
    String name;
    int power;

    void castSpell() {
        System.out.println("Casting " + name + " with power " + power);
    }
}`}          
          </pre>
        </div>

        <div className="section">
          <h2>🎮 Story</h2>
          <p>Your spell exists, but now it needs magical power! Add a method to cast the spell and display its damage 💥</p>
        </div>

        <div className="section">
          <h2>💡 Challenge</h2>
          <p>Fix the code below to define a method and make the spell work.</p>
          <textarea
            id="code-area"
            value={code}
            onChange={e => setCode(e.target.value)}
          />

          <button onClick={checkCode}>Check Spell</button>
          <button onClick={simulateCast}>Simulate castSpell()</button>

          <p id="result-msg" className={resultClass}>
            {resultMsg.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br/></span>
            ))}
          </p>

          <div className="spellbook">
            <div className="card">
              <h3>Class</h3>
              <p>Spell</p>
            </div>
            <div className="card">
              <h3>Field</h3>
              <p>name, power</p>
            </div>
            <div className="card">
              <h3>Method</h3>
              <p>castSpell()</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        body {
          background: #f0fff0;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        }

        .container {
          max-width: 750px;
          margin: auto;
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }

        h1, h2 {
          color: #2e8b57;
        }

        textarea {
          width: 100%;
          height: 180px;
          font-family: monospace;
          font-size: 14px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          margin-top: 10px;
        }

        button {
          background: #2e8b57;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin: 10px 5px 0 0;
        }

        #result-msg {
          margin-top: 15px;
          font-weight: bold;
        }

        .error {
          color: #cc0000;
        }

        .success {
          color: #006400;
        }

        .spellbook {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          background: #f5fffa;
          border: 2px solid #98fb98;
          border-radius: 10px;
          width: 150px;
          padding: 10px;
          text-align: center;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        }

        .card h3 {
          margin: 5px 0;
        }
      `}</style>
    </>
  );
};

export default JavaMethodsSpellChallenge;
