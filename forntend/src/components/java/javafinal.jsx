import React, { useState } from 'react';

const JavaOOPWizardBossBattle = () => {
  const [bossHealth, setBossHealth] = useState(3);
  const [fixClassInput, setFixClassInput] = useState('');
  const [methodInput, setMethodInput] = useState('');
  const [inheritInput, setInheritInput] = useState('');

  const [result1, setResult1] = useState('');
  const [result1Class, setResult1Class] = useState('');
  const [result2, setResult2] = useState('');
  const [result2Class, setResult2Class] = useState('');
  const [result3, setResult3] = useState('');
  const [result3Class, setResult3Class] = useState('');

  const reduceBoss = () => {
    setBossHealth(prev => Math.max(0, prev - 1));
  };

  const checkFixClass = () => {
    if (fixClassInput.includes('public class Spell') && fixClassInput.includes('{')) {
      setResult1('✅ Correct! You fixed the class declaration!');
      setResult1Class('success');
      reduceBoss();
    } else {
      setResult1('❌ Not quite. Did you add the opening curly brace?');
      setResult1Class('fail');
    }
  };

  const checkMethod = () => {
    const input = methodInput.toLowerCase();
    if (input.includes('int') && input.includes('get') && input.includes('()')) {
      setResult2('✅ Nice! Your spell has double power now!');
      setResult2Class('success');
      reduceBoss();
    } else {
      setResult2('❌ Try writing a method that returns power * 2.');
      setResult2Class('fail');
    }
  };

  const checkInheritance = () => {
    if (inheritInput.trim() === 'class FireSpell extends Spell') {
      setResult3('✅ You inherited from the Spell class. FireSpell is ready!');
      setResult3Class('success');
      reduceBoss();
    } else {
      setResult3("❌ Remember: use 'class SubClass extends SuperClass'");
      setResult3Class('fail');
    }
  };

  const bossIcon = bossHealth > 0 ? '👾' : '💀';
  const finalMessage = bossHealth <= 0
    ? '🎉 You defeated the Bug Monster! You are now a Java Wizard!'
    : '';

  return (
    <div>
      <h1>🧙 Final Boss Battle: The Bug Monster</h1>
      <div className="boss">{bossIcon}</div>
      <p>The Bug Monster is causing chaos in your Java program! Use your OOP skills to defeat it!</p>

      <div className="challenge">
        <h3>🔥 Challenge 1: Fix the Broken Class</h3>
        <div className="code-box">
          {`public class Spell
    String name;
    int power;

    void cast() {
        System.out.println("Casting " + name);
    }
}`}
        </div>
        <p><strong>Fix the syntax error in the class declaration (hint: something is missing).</strong></p>
        <input
          id="fixClass"
          placeholder="Enter the fixed class line (e.g., public class Spell { )"
          value={fixClassInput}
          onChange={e => setFixClassInput(e.target.value)}
        />
        <button onClick={checkFixClass}>Submit</button>
        <div id="result1" className={result1Class}>{result1}</div>
      </div>

      <div className="challenge">
        <h3>⚔️ Challenge 2: Add a Method</h3>
        <p>Create a method in the class that returns spell power times 2 (i.e., double the damage).</p>
        <input
          id="methodInput"
          placeholder="Enter method signature (e.g., int getDamage() )"
          value={methodInput}
          onChange={e => setMethodInput(e.target.value)}
        />
        <button onClick={checkMethod}>Submit</button>
        <div id="result2" className={result2Class}>{result2}</div>
      </div>

      <div className="challenge">
        <h3>🌩️ Challenge 3: Inherit from Spell</h3>
        <p>Write a line to create a subclass called <code>FireSpell</code> that inherits from <code>Spell</code>.</p>
        <input
          id="inheritInput"
          placeholder="Enter inheritance syntax"
          value={inheritInput}
          onChange={e => setInheritInput(e.target.value)}
        />
        <button onClick={checkInheritance}>Submit</button>
        <div id="result3" className={result3Class}>{result3}</div>
      </div>

      <div id="finalMessage" className="boss-defeated">{finalMessage}</div>

      <style>{`
        body {
          background-color: #1b1b2f;
          color: #f0f0f0;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
          text-align: center;
        }

        h1, h2 {
          color: #ffcc00;
        }

        .boss {
          font-size: 60px;
          animation: shake 0.5s infinite;
          margin-bottom: 10px;
        }

        @keyframes shake {
          0% { transform: translate(2px, 1px) rotate(0deg); }
          20% { transform: translate(-1px, -2px) rotate(-1deg); }
          40% { transform: translate(-3px, 0px) rotate(1deg); }
          60% { transform: translate(3px, 2px) rotate(0deg); }
          80% { transform: translate(1px, -1px) rotate(1deg); }
          100% { transform: translate(-1px, 2px) rotate(-1deg); }
        }

        .challenge {
          background-color: #2e2e3e;
          padding: 15px;
          margin: 20px 0;
          border-radius: 10px;
          text-align: left;
        }

        .code-box {
          background: #111;
          padding: 10px;
          border-radius: 8px;
          font-family: monospace;
          color: #00e6e6;
          white-space: pre-wrap;
          margin: 10px 0;
        }

        input, button {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          margin-top: 5px;
          border: none;
          border-radius: 6px;
        }

        button {
          background-color: #00b894;
          color: white;
          cursor: pointer;
        }

        .success {
          color: #00ff88;
          font-weight: bold;
        }

        .fail {
          color: #ff4d4d;
          font-weight: bold;
        }

        .boss-defeated {
          color: #00ff88;
          font-size: 28px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default JavaOOPWizardBossBattle;
