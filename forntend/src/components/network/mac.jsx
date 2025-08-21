import React, { useEffect } from 'react';

const IdentityMatchGame = () => {
  useEffect(() => {
    const labels = document.querySelectorAll('.label');
    const questions = document.querySelectorAll('.question');
    let matched = 0;

    labels.forEach(label => {
      label.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.id);
      });
    });

    questions.forEach(question => {
      question.addEventListener('dragover', e => e.preventDefault());

      question.addEventListener('drop', e => {
        e.preventDefault();
        const answer = e.target.getAttribute('data-answer');
        const draggedId = e.dataTransfer.getData('text');

        if (draggedId === answer) {
          e.target.classList.add('matched');
          e.target.textContent = `✔ Correct: ${draggedId.toUpperCase()} used`;
          document.getElementById(draggedId).style.display = 'none';
          matched++;
        } else {
          e.target.classList.add('incorrect');
          setTimeout(() => e.target.classList.remove('incorrect'), 1000);
        }

        if (matched === 4) {
          document.getElementById('result').textContent = "🎉 All matched correctly! Great job!";
        }
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f8ff', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#0d47a1' }}>🔐 Identity Match: MAC vs IP Address</h1>

      <div className="section">
        <h2>📘 Concept</h2>
        <table className="concept-table">
          <thead>
            <tr><th>Aspect</th><th>MAC Address</th><th>IP Address</th></tr>
          </thead>
          <tbody>
            <tr><td>Used in</td><td>Local Network</td><td>Internet or Local</td></tr>
            <tr><td>Layer</td><td>Data Link (Layer 2)</td><td>Network (Layer 3)</td></tr>
            <tr><td>Changes?</td><td>No, hardware-based</td><td>Yes, dynamic/static</td></tr>
            <tr><td>Example</td><td>00:1A:2B:3C:4D:5E</td><td>192.168.0.1</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>🎮 Game: Drag the Right Identity</h2>
        <p>Drag "MAC" or "IP" onto the right use case!</p>

        <div className="labels">
          <div className="label" draggable="true" id="mac">MAC</div>
          <div className="label" draggable="true" id="ip">IP</div>
          <div className="label" draggable="true" id="mac">MAC</div>
          <div className="label" draggable="true" id="ip">IP</div>
        </div>

        <div className="questions">
          <div className="question" data-answer="mac">Used by a switch to forward frames</div>
          <div className="question" data-answer="ip">Needed to send a packet over the internet</div>
          <div className="question" data-answer="ip">Assigned dynamically by DHCP</div>
          <div className="question" data-answer="mac">Used to identify device on LAN</div>
        </div>

        <div id="result"></div>
      </div>

      <style>{`
        .section {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          margin: 20px auto;
          max-width: 900px;
        }
        .concept-table {
          text-align: left;
          margin: 0 auto;
          border-collapse: collapse;
          width: 100%;
        }
        .concept-table th, .concept-table td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        .concept-table th {
          background: #e1f5fe;
        }
        .labels, .questions {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .label {
          padding: 10px 20px;
          background: #bbdefb;
          border-radius: 8px;
          cursor: grab;
          font-weight: bold;
        }
        .question {
          background: #e3f2fd;
          border: 2px dashed #90caf9;
          width: 300px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 10px;
        }
        .matched {
          background-color: #a5d6a7 !important;
          border-color: #388e3c !important;
          color: #fff;
        }
        .incorrect {
          background-color: #ef9a9a !important;
          border-color: #c62828 !important;
          color: #fff;
        }
        #result {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default IdentityMatchGame;
