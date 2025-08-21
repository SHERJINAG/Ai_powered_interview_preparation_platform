import React, { useState } from 'react';

const PythonStrings = () => {
  const [step2, setStep2] = useState('');
  const [step3, setStep3] = useState('');
  const [result, setResult] = useState('');
  const [finished, setFinished] = useState(false);

  let original = "code#the@learn&to";
  let words = [];

  const splitMessage = () => {
    words = original.replaceAll('#', ' ').replaceAll('@', ' ').replaceAll('&', ' ').split(" ");
    setStep2(`Step 1 (Split): [${words.join(", ")}]`);
  };

  const reorderMessage = () => {
    let reordered = [words[2], words[3], words[0], words[1]];
    setStep3(`Step 2 (Reordered): [${reordered.join(", ")}]`);
    words = reordered;
  };

  const finalFormat = () => {
    let finalMessage = "Let's " + words.join(" ") + "!";
    setResult(`🎉 Final Message: ${finalMessage}`);
    setFinished(true);
  };

  return (
    <div style={{ padding: '30px', background: '#e3f2fd', color: '#0d47a1', fontFamily: 'Segoe UI, sans-serif' }}>
      <style>{`
        .section {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        h1, h2 {
          color: #1565c0;
        }

        pre {
          background: #e1f5fe;
          padding: 10px;
          border-radius: 6px;
          overflow-x: auto;
        }

        .game {
          background: #bbdefb;
          border: 2px solid #64b5f6;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }

        button {
          margin: 10px;
          padding: 10px 15px;
          font-size: 16px;
          border: none;
          background: #42a5f5;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #1976d2;
        }

        .output {
          font-size: 18px;
          margin-top: 20px;
          font-weight: bold;
          color: #1b5e20;
        }

        .code-box {
          background: #e1f5fe;
          padding: 10px;
          margin-top: 10px;
          border-radius: 5px;
        }

        .finish-btn {
          background-color: #2e7d32;
          margin-top: 20px;
        }
      `}</style>

      <h1>🧩 String Manipulation - Decode the Message</h1>

      <div className="section">
        <h2>📘 Quick Python Concepts</h2>
        <pre>
{`# Splitting
msg = "Python is fun"
msg.split()  # ['Python', 'is', 'fun']

# Joining
" ".join(['Python', 'is', 'fun'])

# Formatting
"Hello, {}!".format("Alice")

# Slicing
"treasure"[0:4]  # 'trea'`}
        </pre>
      </div>

      <div className="section game">
        <h2>🎮 Game: Decode the Hidden Message</h2>
        <p>Use string functions to reveal the hidden message step by step!</p>

        <div className="code-box">Encrypted Message: <code>code#the@learn&to</code></div>
        <button onClick={splitMessage}>🔍 Split Message</button>

        {step2 && <div className="code-box">{step2}</div>}
        <button onClick={reorderMessage}>🔁 Reorder Words</button>

        {step3 && <div className="code-box">{step3}</div>}
        <button onClick={finalFormat}>✅ Format Final Message</button>

        {result && <div className="output">{result}</div>}
        {finished && <button className="finish-btn">✅ Finish</button>}
      </div>
    </div>
  );
};

export default PythonStrings;
