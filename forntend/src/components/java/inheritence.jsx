import React, { useState } from 'react';

const JavaInheritanceGame = () => {
  const [code, setCode] = useState(
`class Spell {
    void castSpell() {
        System.out.println("Casting a generic spell...");
    }
}

class FireSpell extends Spell {
    // Add overridden castSpell method here
}`
  );
  const [resultMsg, setResultMsg] = useState('');
  const [resultClass, setResultClass] = useState('');

  const checkCode = () => {
    const errors = [];
    const hasSpellClass = code.includes('class Spell');
    const hasInheritance = code.includes('class FireSpell extends Spell');
    const castCount = (code.match(/void castSpell\(\)/g) || []).length;
    const hasPrint = code.includes('System.out.println');
    const hasFireball = code.includes('Fireball') || code.includes('Fireball launched');

    if (!hasSpellClass) {
      errors.push('🧾 Missing `class Spell`.');
    }
    if (!hasInheritance) {
      errors.push('🔥 Missing `extends Spell` for inheritance.');
    }
    if (castCount < 2) {
      errors.push('✨ You need to override `castSpell()` in `FireSpell`.');
    }
    if (!hasPrint || !hasFireball) {
      errors.push('🧯 Your `castSpell()` must print a fire-related message.');
    }

    if (errors.length === 0) {
      setResultMsg('✅ FireSpell successfully inherits and overrides Master Spell!');
      setResultClass('success');
    } else {
      setResultMsg(errors.join('\n'));
      setResultClass('error');
    }
  };

  const simulateSpell = () => {
    setResultMsg('🔥 FireSpell cast: Fireball launched! 💥');
    setResultClass('success');
  };

  return (
    <div className="container">
      <h1>🔥 Level 4: Inherit the Flame</h1>

      <div className="section">
        <h2>📘 Concept: Java Inheritance</h2>
        <p>
          Inheritance allows a class (child) to acquire fields and methods from another class (parent).
        </p>
        <pre>
{`class Spell {
    void castSpell() {
        System.out.println("Casting a generic spell...");
    }
}

class FireSpell extends Spell {
    void castSpell() {
        System.out.println("🔥 Fireball launched!");
    }
}`}        
        </pre>
      </div>

      <div className="section">
        <h2>🎮 Story</h2>
        <p>
          You are a Fire Mage! Your spells are based on the <strong>Master Spell</strong> but customized for fire-based attacks.
        </p>
      </div>

      <div className="section">
        <h2>💡 Challenge</h2>
        <p>Complete the code to inherit the Master Spell and override the <code>castSpell()</code> method!</p>
        <textarea
          id="code-area"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={checkCode}>Check Code</button>
        <button onClick={simulateSpell}>Simulate FireSpell</button>

        <p id="result-msg" className={resultClass}>
          {resultMsg.split('\n').map((line, idx) => (
            <span key={idx}>{line}<br /></span>
          ))}
        </p>

        <div className="diagram">
          <div className="node">Spell (Parent)</div>
          <div className="arrow">⬇️</div>
          <div className="node">FireSpell (Child)</div>
        </div>
      </div>

      <style>{`
        body {
          background: #fffaf0;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        }

        .container {
          max-width: 800px;
          margin: auto;
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }

        h1, h2 {
          color: #b22222;
        }

        textarea {
          width: 100%;
          height: 200px;
          font-family: monospace;
          font-size: 14px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          margin-top: 10px;
        }

        button {
          background: #b22222;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
          margin-right: 10px;
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

        .diagram {
          margin-top: 25px;
          text-align: center;
        }

        .node {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid #b22222;
          border-radius: 8px;
          background: #ffe4e1;
          margin: 10px;
        }

        .arrow {
          font-size: 24px;
          margin: 5px;
          color: #b22222;
        }
      `}</style>
    </div>
  );
};

export default JavaInheritanceGame;
