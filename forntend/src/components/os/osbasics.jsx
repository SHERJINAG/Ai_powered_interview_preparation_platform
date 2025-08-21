import React, { useState } from 'react';

// Inline CSS in JavaScript object format
const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f0f8ff",
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#1e6091",
    color: "white",
    padding: "20px",
    margin: 0,
  },
  instructions: {
    padding: "15px",
    fontSize: "18px",
    color: "#333",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #1e6091",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  cardHover: {
    background: "#d0ebff",
    transform: "scale(1.05)",
  },
  cardText: {
    color: "#1e6091",
  },
  simArea: {
    width: "90%",
    maxWidth: "800px",
    height: "300px",
    margin: "30px auto",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    background: "white",
    position: "relative",
    overflow: "hidden",
  },
  box: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    position: "absolute",
    textAlign: "center",
    lineHeight: "60px",
    color: "white",
    fontWeight: "bold",
  },
  memory: {
    backgroundColor: "#3b8bff",
  },
  process: {
    backgroundColor: "#f77f00",
  },
  file: {
    backgroundColor: "#2a9d8f",
  },
  footer: {
    marginTop: "30px",
    padding: "10px",
    fontSize: "16px",
    color: "#333",
  },
  footerSpan: {
    fontWeight: "bold",
    color: "#1e6091",
  },
  gameContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
  },
  role: {
    width: "200px",
    padding: "15px",
    background: "#ffffff",
    border: "2px solid #00b4d8",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  roleHover: {
    background: "#caf0f8",
    transform: "scale(1.05)",
  },
  result: {
    marginTop: "30px",
    fontSize: "18px",
    color: "#023e8a",
    minHeight: "50px",
  },
  realLife: {
    color: "#0096c7",
    fontStyle: "italic",
  },
};

function InteractiveOSConcepts() {
  const [processInterval, setProcessInterval] = useState(null);

  const showSimulation = (type) => {
    const simArea = document.getElementById("simArea");
    simArea.innerHTML = "";

    // Clear process simulation if running
    if (processInterval) {
      clearInterval(processInterval);
      setProcessInterval(null);
    }

    if (type === 1) {
      // Memory Management Simulation
      for (let i = 0; i < 4; i++) {
        const box = document.createElement("div");
        box.className = "box memory";
        box.style.left = `${100 + i * 120}px`;
        box.style.top = "120px";
        box.textContent = `App ${i + 1}`;
        simArea.appendChild(box);
      }

    } else if (type === 2) {
      // Process Management Simulation
      let i = 0;
      function animate() {
        simArea.innerHTML = "";
        const box = document.createElement("div");
        box.className = "box process";
        box.style.left = "350px";
        box.style.top = "120px";
        box.textContent = `App ${i + 1}`;
        simArea.appendChild(box);
        i = (i + 1) % 4;
      }
      animate();
      setProcessInterval(setInterval(animate, 1000));

    } else if (type === 3) {
      // File Management Simulation
      for (let i = 0; i < 4; i++) {
        const file = document.createElement("div");
        file.className = "box file";
        file.style.left = `${i * 150 + 50}px`;
        file.style.top = "120px";
        file.textContent = `File ${i + 1}`;
        simArea.appendChild(file);
      }
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.header}>Operating System: Visual Concepts</h1>

      <div style={styles.instructions}>
        Click each card below to simulate what the OS does.  
        Before clicking, try to <strong>guess</strong> what will happen!<br />
        Try modifying <code>colors</code> or <code>app names</code> in the code later!
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.card} onClick={() => showSimulation(1)}>
          <h3 style={styles.cardText}>Memory Management</h3>
          <p>How memory is assigned to apps</p>
        </div>
        <div style={styles.card} onClick={() => showSimulation(2)}>
          <h3 style={styles.cardText}>Process Management</h3>
          <p>How CPU switches tasks</p>
        </div>
        <div style={styles.card} onClick={() => showSimulation(3)}>
          <h3 style={styles.cardText}>File Management</h3>
          <p>How files are stored & opened</p>
        </div>
      </div>

      <div id="simArea" style={styles.simArea}>
        {/* Simulation runs here */}
      </div>

      <div style={styles.footer}>
        Tip: Open your <span style={styles.footerSpan}>Task Manager</span> or <span style={styles.footerSpan}>Settings > Apps</span> on your phone or PC while learning to connect these ideas!
      </div>
    </div>
  );
}

function OSDetective() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [result, setResult] = useState('');
  const [realLife, setRealLife] = useState('');

  const realLifeExamples = {
    "Memory Management": "Your phone pauses apps when memory is full.",
    "Process Management": "Your PC plays music while you open files.",
    "File Management": "You find photos in your gallery or download folder.",
    "Device Management": "You take pictures or print documents.",
    "Security": "You set a password or fingerprint to unlock apps."
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleFunctionClick = (funcRole) => {
    if (!selectedRole) {
      setResult("First select a Role.");
      return;
    }

    if (selectedRole === funcRole) {
      setResult("✅ Correct Match!");
      setRealLife(realLifeExamples[funcRole]);
      setSelectedRole(null);
    } else {
      setResult("❌ Try Again!");
      setRealLife('');
    }
  };

  const functions = [
    { role: "Security", text: "Prevents unauthorized access" },
    { role: "Device Management", text: "Controls keyboard/screen/printer" },
    { role: "File Management", text: "Organizes and retrieves files" },
    { role: "Process Management", text: "Switches between tasks" },
    { role: "Memory Management", text: "Allocates RAM to apps" },
  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.header}>🕵️ OS Detective: Match Role to Function</h1>
      <p>Click on a role, then match it to the correct function.</p>

      {/* Role Cards */}
      <div style={styles.gameContainer}>
        {["Memory Management", "Process Management", "File Management", "Device Management", "Security"].map(role => (
          <div
            key={role}
            style={selectedRole === role ? { ...styles.role, background: '#caf0f8', transform: 'scale(1.05)' } : styles.role}
            onClick={() => handleRoleClick(role)}
          >
            {role}
          </div>
        ))}
      </div>

      {/* Function Descriptions */}
      <div className="game-container" id="functions" style={styles.gameContainer}>
        {functions.map(({ role, text }) => (
          <div
            key={role}
            style={styles.role}
            className="function"
            onClick={() => handleFunctionClick(role)}
          >
            <strong>{text}</strong>
          </div>
        ))}
      </div>

      <div style={styles.result}>{result}</div>
      <div style={styles.realLife}>{realLife}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <InteractiveOSConcepts />
      <OSDetective />
    </div>
  );
}

export default App;
