import React, { useState } from 'react';

const JavaEncapsulationGame = () => {
  const [code, setCode] = useState(
`class Spell {
    private String name;

    // Add getter and setter here

    public static void main(String[] args) {
        Spell fire = new Spell();
        fire.setName("Fireball");
        System.out.println(fire.getName());
    }
}`
  );
  const [resultMsg, setResultMsg] = useState('');
  const [isError, setIsError] = useState(false);
  const [lockText, setLockText] = useState('🔒 Spell Name is Locked');

  const checkCode = () => {
    const errors = [];
    if (!code.includes('public String getName()')) {
      errors.push('🧾 Missing getter method: getName()');
    }
    if (!code.includes('public void setName(String')) {
      errors.push('🧾 Missing setter method: setName()');
    }

    if (errors.length === 0) {
      setResultMsg('✅ Great! You\'ve unlocked the spell using getters and setters!');
      setIsError(false);
      setLockText('🔓 Spell Name is Unlocked: Fireball');
    } else {
      setResultMsg(errors.join('\n'));
      setIsError(true);
      setLockText('🔒 Spell Name is Locked');
    }
  };

  return (
    <div className="container">
      <h1>🔐 Level 6: Encapsulation – Secret Scrolls</h1>

      <h2>📘 Concept: Java Encapsulation</h2>
      <p>
        <strong>Encapsulation</strong> means hiding internal details of objects. We mark class fields as <code>private</code> and access them using <code>getters</code> and <code>setters</code>.<br />
        It helps secure your data and control how it’s accessed.
      </p>

      <pre>
{`class Spell {
    private String name;
    
    // Fix: Add getters and setters
}`}
      </pre>

      <h2>🎮 Story</h2>
      <p>
        Your magic scroll contains powerful spell names. But it's <strong>locked</strong>! Use getters and setters to unlock and use the spell 🔏
      </p>

      <div className="lock">{lockText}</div>

      <h2>💡 Challenge</h2>
      <p>
        Add <code>getName()</code> and <code>setName(String name)</code> methods to access the private spell name.
      </p>

      <textarea
        id="code-area"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={checkCode}>Check Code</button>

      <p id="result-msg" className={isError ? 'error' : 'success'}>
        {resultMsg.split('\n').map((line, i) => (
          <span key={i}>{line}<br/></span>
        ))}
      </p>

      <style>{`        
        body {
          background: #e6f0ff;
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
          color: #003366;
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
          background: #003366;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
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

        .lock {
          font-size: 24px;
          margin-top: 15px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default JavaEncapsulationGame;
