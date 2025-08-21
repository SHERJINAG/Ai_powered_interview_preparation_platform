import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#e9f5ff',
    textAlign: 'center',
    padding: '30px',
  },
  explanation: {
    maxWidth: '800px',
    margin: 'auto',
    fontSize: '16px',
    textAlign: 'left',
    marginBottom: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: '30px 0',
  },
  box: {
    border: '2px dashed #2980b9',
    backgroundColor: '#fff',
    padding: '20px',
    width: '200px',
    height: '150px',
    borderRadius: '10px',
  },
  boxTitle: {
    color: '#2980b9',
    marginBottom: '10px',
  },
  item: {
    backgroundColor: '#f0f8ff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    margin: '10px',
    padding: '10px',
    cursor: 'grab',
  },
  itemHover: {
    backgroundColor: '#d0eaff',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  }
};

export default function OSSecuritySentinel() {
  const [boxes, setBoxes] = useState({
    secureFile: [],
    publicFile: [],
    executeFile: []
  });
  const [draggedId, setDraggedId] = useState(null);
  const [result, setResult] = useState('');

  const items = {
    admin: "👩‍💼 Admin (All Access)",
    guest: "🧑‍💻 Guest (Read Only)",
    process: "⚙️ System Process (Exec Only)"
  };

  const handleDragStart = (id) => {
    setDraggedId(id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (boxId) => {
    if (!draggedId) return;

    setBoxes(prev => {
      const newBoxes = { ...prev };
      // Remove item from all boxes
      Object.keys(newBoxes).forEach(key => {
        newBoxes[key] = newBoxes[key].filter(item => item !== draggedId);
      });

      // Add to current box if not already there
      if (newBoxes[boxId].length < 1) {
        newBoxes[boxId].push(draggedId);
      }

      return newBoxes;
    });

    setDraggedId(null);
  };

  const checkAnswers = () => {
    const correct = {
      secureFile: "admin",
      publicFile: "guest",
      executeFile: "process"
    };

    let score = 0;
    for (const key in correct) {
      if (boxes[key][0] === correct[key]) score++;
    }

    if (score === 3) {
      setResult("🎉 Perfect! You’ve protected the OS correctly!");
    } else {
      setResult(`⚠️ You matched ${score}/3 correctly. Try again!`);
    }
  };

  const renderItem = (id) => (
    <div
      key={id}
      style={styles.item}
      draggable
      onDragStart={() => handleDragStart(id)}
    >
      {items[id]}
    </div>
  );

  return (
    <div style={styles.body}>
      <h1>🛡️ OS Security Sentinel</h1>
      <div style={styles.explanation}>
        In an Operating System, security is enforced by controlling which <strong>users or processes</strong> can access specific <strong>resources</strong>. Each has certain <strong>privileges</strong>.<br /><br />
        Drag each user to the resource they are allowed to access based on permissions. Then, click "Check Answers" to see how secure your choices are!
      </div>

      {/* User Items */}
      <div style={styles.container}>
        {Object.keys(items).map(renderItem)}
      </div>

      {/* Resource Boxes */}
      <div style={styles.container}>
        {["secureFile", "publicFile", "executeFile"].map(boxId => (
          <div
            key={boxId}
            style={styles.box}
            onDrop={() => handleDrop(boxId)}
            onDragOver={allowDrop}
          >
            <h3 style={styles.boxTitle}>
              {boxId === "secureFile" && "🔐 Secure File"}
              {boxId === "publicFile" && "📄 Public File"}
              {boxId === "executeFile" && "⚙️ Executable"}
            </h3>
            {boxes[boxId].map(renderItem)}
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={checkAnswers}>✅ Check Answers</button>
      <div style={styles.result}>{result}</div>
    </div>
  );
}
