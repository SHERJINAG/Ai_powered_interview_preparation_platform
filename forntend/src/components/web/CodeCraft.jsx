import React, { useState, useEffect } from 'react';

const CodeCraft = () => {
  const [level, setLevel] = useState("1");
  const [workspaceBlocks, setWorkspaceBlocks] = useState([]);
  const [output, setOutput] = useState("");
  const [challenge, setChallenge] = useState("");
  const [blocks, setBlocks] = useState([]);

  const levels = {
    1: {
      challenge: '💡 Print "Hello World" 3 times',
      blocks: [
        '}',
        'for (let i = 0; i < 3; i++) {',
        'console.log("Hello World");'
      ]
    },
    2: {
      challenge: '💡 Create and call a greeting function',
      blocks: [
        '}',
        'function greet(name) {',
        'console.log("Hello, " + name);',
        'greet("Alice");'
      ]
    },
    3: {
      challenge: '💡 Sum numbers from 1 to 10 and print result',
      blocks: [
        'sum += i;',
        '}',
        'let sum = 0;',
        'for (let i = 1; i <= 10; i++) {',
        'console.log(sum);'
      ]
    },
    4: {
      challenge: '💡 Use if/else to check if score >= 50',
      blocks: [
        'let score = 70;',
        '} else {',
        'console.log("Failed");',
        'if (score >= 50) {',
        'console.log("Passed");',
        '}'
      ]
    }
  };

  useEffect(() => {
    loadLevel(level);
  }, [level]);

  const loadLevel = (lvl) => {
    const data = levels[lvl];
    setChallenge(data.challenge);
    setBlocks(data.blocks);
    setWorkspaceBlocks([]);
    setOutput('');
  };

  const handleBlockClick = (code) => {
    setWorkspaceBlocks([...workspaceBlocks, code]);
  };

  const runCode = () => {
    const finalCode = workspaceBlocks.join('\n');
    let result = "<strong>Output:</strong><br>";

    try {
      const originalLog = console.log;
      let temp = "";
      console.log = function(msg) {
        temp += msg + "<br>";
      };

      new Function(finalCode)();
      result += temp || "(No output)";
      setOutput(result);
      console.log = originalLog;
    } catch (e) {
      result += `<span style='color:red;'>❌ Error: ${e.message}</span>`;
      setOutput(result);
    }
  };

  const resetCode = () => {
    setWorkspaceBlocks([]);
    setOutput("");
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f8", padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#2c3e50" }}>🧱 CodeCraft - JavaScript Puzzle Game</h1>

      <div className="section" style={sectionStyle}>
        <div className="concepts">
          <h3>📘 JavaScript Concepts</h3>
          <ul style={{ textAlign: "left" }}>
            <li><strong>Variables:</strong> <code>let x = 10;</code></li>
            <li><strong>Loops:</strong> <code>for (let i = 0; i &lt; 5; i++)</code></li>
            <li><strong>Functions:</strong> <code>function greet() &#123; ... &#125;</code></li>
            <li><strong>Conditionals:</strong> <code>if (score &gt; 50)</code></li>
          </ul>

          <h4>🧠 Challenges</h4>
          <ul style={{ textAlign: "left" }}>
            <li><strong>Level 1:</strong> Print "Hello World" 3 times</li>
            <li><strong>Level 2:</strong> Create and call a greeting function</li>
            <li><strong>Level 3:</strong> Sum numbers from 1 to 10</li>
            <li><strong>Level 4:</strong> Use <code>if/else</code> to check pass/fail</li>
          </ul>
        </div>
      </div>

      <div className="section" style={sectionStyle}>
        <div className="challenge" style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "15px" }}>
          💡 Select Level:
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={selectStyle}
          >
            <option value="1">Level 1 - Hello World 3 Times</option>
            <option value="2">Level 2 - Greet a Name</option>
            <option value="3">Level 3 - Sum 1 to 10</option>
            <option value="4">Level 4 - Pass/Fail Check</option>
          </select>
        </div>

        <div id="challengeText" style={{ marginBottom: "20px", fontWeight: "normal" }}>{challenge}</div>

        <div className="blocks" style={blockContainerStyle}>
          {blocks.map((code, idx) => (
            <div
              key={idx}
              className="block"
              style={blockStyle}
              onClick={() => handleBlockClick(code)}
            >
              {code}
            </div>
          ))}
        </div>

        <h3>🧠 Your Code</h3>
        <div className="workspace" style={workspaceStyle}>
          {workspaceBlocks.map((code, i) => (
            <span key={i} className="block" style={blockStyle}>{code}</span>
          ))}
        </div>

        <button className="btn" onClick={runCode} style={btnStyle}>▶ Run</button>
        <button className="btn" onClick={resetCode} style={btnStyle}>♻ Reset</button>

        <div id="output" style={outputStyle} dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
};

// Styles
const sectionStyle = {
  background: "#fff",
  padding: "20px",
  margin: "20px auto",
  maxWidth: "1000px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};

const blockContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "20px"
};

const blockStyle = {
  background: "#4fc3f7",
  color: "white",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background 0.3s"
};

const workspaceStyle = {
  minHeight: "60px",
  border: "2px dashed #ccc",
  padding: "10px",
  background: "#fafafa",
  borderRadius: "10px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const btnStyle = {
  background: "#2c3e50",
  color: "white",
  padding: "10px 25px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  margin: "5px"
};

const outputStyle = {
  background: "#e8f5e9",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "10px",
  minHeight: "30px",
  fontWeight: "bold"
};

const selectStyle = {
  padding: "8px",
  fontSize: "16px",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  border: "2px solid #2c3e50",
  marginLeft: "10px"
};

export default CodeCraft;
