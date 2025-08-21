import React, { useState } from 'react';

const RelationBuilderGame = () => {
  const [selectedFK, setSelectedFK] = useState(null);
  const [matchCount, setMatchCount] = useState(0);
  const [resultText, setResultText] = useState('');

  const clearSelection = () => {
    document.querySelectorAll(".cell").forEach((c) => {
      c.classList.remove("selected", "wrong");
    });
  };

  const selectFK = (e) => {
    clearSelection();
    setSelectedFK(e.target);
    e.target.classList.add("selected");
  };

  const selectPK = (e) => {
    if (!selectedFK) {
      alert("Select a Foreign Key first!");
      return;
    }

    const fkValue = selectedFK.getAttribute("data-id");
    const pkValue = e.target.getAttribute("data-id");

    if (fkValue === pkValue) {
      selectedFK.classList.add("matched");
      e.target.classList.add("matched");
      const newCount = matchCount + 1;
      setMatchCount(newCount);
      setResultText(newCount === 3 ? "🎉 All foreign keys matched successfully!" : `✅ Matches: ${newCount}/3`);
    } else {
      selectedFK.classList.add("wrong");
      e.target.classList.add("wrong");
      setResultText("❌ Wrong match. Try again!");
    }

    selectedFK.classList.remove("selected");
    setSelectedFK(null);
  };

  return (
    <div style={{ padding: '20px', background: '#f5f6fa', fontFamily: 'Arial, sans-serif' }}>
      <style>{`
        .section {
          background: white;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }

        h1, h2 {
          color: #2c3e50;
        }

        table {
          width: 100%;
          margin-top: 10px;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }

        th {
          background: #ecf0f1;
        }

        .key {
          color: green;
          font-weight: bold;
        }

        .foreign {
          color: #e67e22;
          font-weight: bold;
        }

        .game-area {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .table-box {
          width: 45%;
          padding: 10px;
          margin: 10px;
          border: 2px solid #3498db;
          border-radius: 10px;
          background: #ecf6ff;
        }

        .cell {
          padding: 8px;
          border: 1px dashed #999;
          margin: 5px 0;
          cursor: pointer;
          border-radius: 5px;
        }

        .selected {
          background: #ffeaa7;
        }

        .matched {
          background: #b8e994;
        }

        .wrong {
          background: #f8d7da;
        }

        #result {
          font-weight: bold;
          margin-top: 20px;
        }
      `}</style>

      <div className="section">
        <h1>📘 Relational Model Basics</h1>
        <p>A <strong>Relational Model</strong> stores data in tables (relations), where each table has rows (tuples) and columns (attributes).</p>

        <h2>📋 Tables and Keys</h2>
        <p><span className="key">Primary Key</span> uniquely identifies a row in a table.</p>
        <p><span className="foreign">Foreign Key</span> connects one table to another table's primary key.</p>

        <h3>👨‍🎓 Students Table</h3>
        <table>
          <thead>
            <tr><th>ID <span className="key">(PK)</span></th><th>Name</th><th>Class_ID <span className="foreign">(FK)</span></th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Alice</td><td>101</td></tr>
            <tr><td>2</td><td>Bob</td><td>102</td></tr>
            <tr><td>3</td><td>Charlie</td><td>101</td></tr>
          </tbody>
        </table>

        <h3>🏫 Classes Table</h3>
        <table>
          <thead>
            <tr><th>Class_ID <span className="key">(PK)</span></th><th>Class Name</th></tr>
          </thead>
          <tbody>
            <tr><td>101</td><td>Science</td></tr>
            <tr><td>102</td><td>Math</td></tr>
          </tbody>
        </table>

        <p>🔗 <strong>Relationship:</strong> students.Class_ID <em>references</em> classes.Class_ID</p>
      </div>

      <div className="section">
        <h1>🎮 Relation Builder Game</h1>
        <p>Click one <strong>Foreign Key</strong>, then click the correct <strong>Primary Key</strong> to match.</p>

        <div className="game-area">
          <div className="table-box">
            <h3>Students Table (Foreign Keys)</h3>
            <div className="cell" data-id="101" onClick={selectFK}>Class_ID: 101</div>
            <div className="cell" data-id="102" onClick={selectFK}>Class_ID: 102</div>
            <div className="cell" data-id="101" onClick={selectFK}>Class_ID: 101</div>
          </div>

          <div className="table-box">
            <h3>Classes Table (Primary Keys)</h3>
            <div className="cell" data-id="101" onClick={selectPK}>Class_ID: 101</div>
            <div className="cell" data-id="102" onClick={selectPK}>Class_ID: 102</div>
          </div>
        </div>

        <p id="result">{resultText}</p>
      </div>
    </div>
  );
};

export default RelationBuilderGame;
