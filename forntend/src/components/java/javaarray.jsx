import React, { useState } from 'react';

const JavaWizardGame = () => {
  const [arrayResult, setArrayResult] = useState('');
  const [exceptionResult, setExceptionResult] = useState('');

  const checkArrayFix = () => {
    const userInput = document.getElementById("arrayFix").value.trim();
    const correctSyntax = "int[] potions = {10, 20, 30};";

    if (userInput.includes("10") && userInput.includes(",") && userInput.includes("30")) {
      setArrayResult("✅ Great! You fixed the array syntax.");
    } else {
      setArrayResult("❌ Hmm... That doesn't look quite right. Try fixing the commas.");
    }
  };

  const checkExceptionFix = () => {
    const userInput = document.getElementById("exceptionFix").value.toLowerCase().trim();

    if (userInput.includes("try") && userInput.includes("catch")) {
      setExceptionResult("✅ Nice! You protected the spell with a try-catch block!");
    } else {
      setExceptionResult("❌ Oops! You need a try-catch block to avoid crashing.");
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#1e1e2f', color: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#ffcc00' }}>🧙 Java Wizard School</h1>
      <h2 style={{ textAlign: 'center', color: '#ffcc00' }}>Learn Arrays & Exception Handling</h2>

      {/* 🧪 Level 1: Arrays */}
      <div className="level" style={{ background: '#2c2c3c', border: '2px solid #444', padding: '15px', marginBottom: '30px', borderRadius: '10px' }}>
        <h3>🧪 Arrays: The Potion Rack</h3>
        <p><strong>📘 Concept:</strong> Arrays store multiple values in a single variable. Think of it as a magical rack of potions.</p>
        <p><strong>🧙 Story:</strong> You're in the Potion Room. Each potion bottle is labeled with a number (index). Use the correct one!</p>
        <p><strong>💡 Challenge:</strong> Fix the array syntax and print the healing value at index 2.</p>

        <div className="code-box" style={{ background: '#111', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: '10px 0', color: '#00ffcc' }}>
          <code>
            {`public class PotionRack {
    public static void main(String[] args) {
        int[] potions = {10, 20 30}; // 🧙 Fix this line
        System.out.println(potions[2]);
    }
}`}
          </code>
        </div>

        <input id="arrayFix" placeholder="Enter the corrected line for the array" style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: 'none', margin: '5px 0', width: '100%' }} />
        <button onClick={checkArrayFix} style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', background: '#00b894', color: 'white', cursor: 'pointer', width: '100%' }}>Check Answer</button>
        <div className="result" style={{ fontWeight: 'bold', marginTop: '10px', color: arrayResult.includes("✅") ? '#00ff88' : '#ff4d4d' }}>
          {arrayResult}
        </div>
      </div>

      {/* 🛡️ Level 2: Exception Handling */}
      <div className="level" style={{ background: '#2c2c3c', border: '2px solid #444', padding: '15px', marginBottom: '30px', borderRadius: '10px' }}>
        <h3>🛡️ Exception Handling: The Protection Spell</h3>
        <p><strong>📘 Concept:</strong> Exceptions are errors that can crash your program. Use try-catch blocks to prevent crashes!</p>
        <p><strong>🧙 Story:</strong> You cast a spell that divides numbers. But if the divisor is zero, your magic fails unless protected!</p>
        <p><strong>💡 Challenge:</strong> Add try-catch to catch the divide-by-zero error.</p>

        <div className="code-box" style={{ background: '#111', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', margin: '10px 0', color: '#00ffcc' }}>
          <code>
            {`public class SpellCrash {
    public static void main(String[] args) {
        int x = 10 / 0; // 💥 Dangerous spell
        System.out.println("Spell casted successfully!");
    }
}`}
          </code>
        </div>

        <input id="exceptionFix" placeholder="What Java structure handles this error? (keyword)" style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: 'none', margin: '5px 0', width: '100%' }} />
        <button onClick={checkExceptionFix} style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', background: '#00b894', color: 'white', cursor: 'pointer', width: '100%' }}>Check Answer</button>
        <div className="result" style={{ fontWeight: 'bold', marginTop: '10px', color: exceptionResult.includes("✅") ? '#00ff88' : '#ff4d4d' }}>
          {exceptionResult}
        </div>
      </div>
    </div>
  );
};

export default JavaWizardGame;
