import React, { useState } from 'react';

const JavaPolymorphismGame = () => {
  const [code, setCode] = useState(
`class Enemy {
    void attack() {
        System.out.println("Enemy attacks!");
    }
}

class Goblin extends Enemy {
    // Override here
}

class Dragon extends Enemy {
    // Override here
}`
  );
  const [resultMsg, setResultMsg] = useState('');
  const [resultClass, setResultClass] = useState('');

  const checkCode = () => {
    const errors = [];
    if (!code.includes('class Enemy')) {
      errors.push("🧾 Missing 'class Enemy'");
    }
    if (!code.includes('class Goblin extends Enemy')) {
      errors.push('🗡️ Missing Goblin inheritance');
    }
    if (!code.includes('class Dragon extends Enemy')) {
      errors.push('🐉 Missing Dragon inheritance');
    }
    const count = (code.match(/void attack\(\)/g) || []).length;
    if (count < 3) {
      errors.push('⚔️ Each class should override the attack() method.');
    }

    if (errors.length === 0) {
      setResultMsg("✅ Well done! You've overridden attack() in both Goblin and Dragon!");
      setResultClass('success');
    } else {
      setResultMsg(errors.join('\n'));
      setResultClass('error');
    }
  };

  const simulate = (enemy) => {
    if (enemy === 'goblin') {
      setResultMsg('🗡️ Goblin used Slash! (Overridden attack executed)');
    } else {
      setResultMsg('🔥 Dragon used Fire Breath! (Overridden attack executed)');
    }
    setResultClass('success');
  };

  return (
    <div>
      <div className="container">
        <h1>🌀 Level 5: Polymorphism - Shape-Shifting Spells</h1>

        <h2>📘 Concept: Java Polymorphism</h2>
        <p><strong>Polymorphism</strong> lets you define multiple behaviors for the same method. It includes:</p>
        <ul>
          <li><strong>Overriding:</strong> Subclass provides its own version of a method.</li>
          <li><strong>Overloading:</strong> Same method name, different parameters.</li>
        </ul>

        <pre>
{`class Enemy {
    void attack() {
        System.out.println("Enemy attacks!");
    }
}

class Goblin extends Enemy {
    void attack() {
        System.out.println("Goblin slashes!");
    }
}

class Dragon extends Enemy {
    void attack() {
        System.out.println("🔥 Dragon breathes fire!");
    }
}`}
        </pre>

        <h2>🎮 Story</h2>
        <p>You are a battle mage facing different enemies. Your attack spell behaves differently depending on the enemy – thanks to <strong>polymorphism</strong>!</p>

        <h2>💡 Challenge</h2>
        <p>Choose an enemy to fight. Then, complete the Java code to override the attack method for Goblin and Dragon classes.</p>

        <div className="enemies">
          <div className="enemy" onClick={() => simulate('goblin')}>🗡️ Goblin</div>
          <div className="enemy" onClick={() => simulate('dragon')}>🐉 Dragon</div>
        </div>

        <textarea
          id="code-area"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={checkCode}>Check Code</button>
        <p id="result-msg" className={resultClass}>
          {resultMsg.split('\n').map((line, i) => (
            <span key={i}>{line}<br/></span>
          ))}
        </p>
      </div>

      <style>{`
        body {
          background: #f4f1ff;
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
          color: #4b0082;
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
          background: #4b0082;
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
        .enemies {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .enemy {
          padding: 20px;
          border: 2px solid #4b0082;
          border-radius: 12px;
          background: #eee6ff;
          cursor: pointer;
          width: 150px;
          text-align: center;
        }
        .enemy:hover {
          background-color: #dcd0ff;
        }
      `}</style>
    </div>
  );
};

export default JavaPolymorphismGame;
