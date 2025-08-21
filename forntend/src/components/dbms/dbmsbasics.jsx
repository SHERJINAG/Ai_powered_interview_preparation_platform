import React, { useState, useEffect } from 'react';

const DBMSBasicsGame = () => {
  const dbmsTypes = [
    { type: "Relational DB", match: "Banking system" },
    { type: "NoSQL DB", match: "Chat app" },
    { type: "Columnar DB", match: "Data analytics" },
    { type: "Graph DB", match: "Friend recommendation" }
  ];

  const [selectedType, setSelectedType] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [clickedMatches, setClickedMatches] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const shuffledTypes = shuffle([...dbmsTypes]);
    const shuffledMatches = shuffle([...dbmsTypes.map(d => d.match)]);
    setTypes(shuffledTypes);
    setMatches(shuffledMatches);
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const selectType = (type) => {
    setSelectedType(type);
  };

  const checkMatch = (match) => {
    if (!selectedType) {
      alert("Please select a DBMS type first!");
      return;
    }

    const correct = dbmsTypes.find(d => d.type === selectedType && d.match === match);

    if (correct) {
      setClickedMatches(prev => ({ ...prev, [match]: 'correct' }));
      setCorrectCount(prev => {
        const newCount = prev + 1;
        setMessage(newCount === 4 ? "🎉 All correct! You mastered DBMS types!" : `✅ Correct matches: ${newCount}/4`);
        return newCount;
      });
    } else {
      setClickedMatches(prev => ({ ...prev, [match]: 'wrong' }));
      setMessage("❌ Wrong! Try again.");
    }

    setSelectedType(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: '#f0f2f5' }}>
      <style>
        {`
          .section {
            background: white;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .card {
            background: #d6eaff;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s;
          }
          .card:hover {
            background: #bee1ff;
          }
          .selected {
            outline: 2px solid #333;
          }
          .correct {
            background: #c3f7c3 !important;
          }
          .wrong {
            background: #f7c3c3 !important;
          }
        `}
      </style>

      {/* PART 1: DBMS EXPLANATION */}
      <div className="section">
        <h1>🧠 DBMS Basics</h1>

        <h2>📋 SHOW TABLES</h2>
        <p><strong>SHOW TABLES</strong> command displays all tables in a database.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr><th style={{ border: '1px solid #ccc', padding: '8px 12px' }}>Tables_in_school</th></tr>
          </thead>
          <tbody>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>students</td></tr>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>teachers</td></tr>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>classes</td></tr>
          </tbody>
        </table>

        <h2>🧱 SCHEMA for 'students' Table</h2>
        <p>A schema defines the structure of the table:</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px 12px' }}>Column Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px 12px' }}>Data Type</th>
              <th style={{ border: '1px solid #ccc', padding: '8px 12px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>id</td><td>INT</td><td>Unique student ID</td></tr>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>name</td><td>VARCHAR(100)</td><td>Student name</td></tr>
            <tr><td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>grade</td><td>INT</td><td>Class grade</td></tr>
          </tbody>
        </table>

        <h2>📊 DBMS Types & Real-World Use Cases</h2>
        <ul>
          <li><strong>Relational DBMS:</strong> Banking, School Management</li>
          <li><strong>NoSQL DB:</strong> Social Media, Chat Apps</li>
          <li><strong>Columnar DB:</strong> Analytics & Logs</li>
          <li><strong>Graph DB:</strong> Social Networks, Friend Recommendations</li>
        </ul>
      </div>

      {/* PART 2: GAME */}
      <div className="section">
        <h1>🎮 Match the DBMS Type with the Correct Use-Case</h1>
        <p>✅ Click a DBMS type, then click the matching use-case.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <h3>DBMS Types</h3>
            {types.map((d, i) => (
              <div
                key={`type-${i}`}
                className={`card ${selectedType === d.type ? 'selected' : ''}`}
                onClick={() => selectType(d.type)}
              >
                {d.type}
              </div>
            ))}
          </div>
          <div style={{ width: '48%' }}>
            <h3>Use-Cases</h3>
            {matches.map((m, i) => (
              <div
                key={`match-${i}`}
                className={`card ${clickedMatches[m] || ''}`}
                onClick={() => checkMatch(m)}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default DBMSBasicsGame;
