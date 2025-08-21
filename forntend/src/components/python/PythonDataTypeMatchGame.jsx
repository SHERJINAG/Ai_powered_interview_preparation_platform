import React, { useEffect } from 'react';

const PythonDataTypeMatchGame = () => {
  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.drop-zone');

    draggables.forEach((drag) => {
      drag.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', drag.getAttribute('data-type'));
        drag.setAttribute('id', 'dragging');
      });
    });

    dropZones.forEach((zone) => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.style.borderColor = '#2ecc71';
      });

      zone.addEventListener('dragleave', () => {
        zone.style.borderColor = '#3498db';
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const dragged = document.getElementById('dragging');
        if (!dragged) return;

        const correctType = dragged.getAttribute('data-type');
        const dropType = zone.getAttribute('data-type');

        if (correctType === dropType) {
          zone.classList.add('correct');
          dragged.remove();
          zone.innerHTML += `<div>${correctType}</div>`;
        } else {
          zone.classList.add('wrong');
          setTimeout(() => zone.classList.remove('wrong'), 1000);
        }
        zone.style.borderColor = '#3498db';
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f4f8', padding: '30px', color: '#333' }}>
      <style>{`
        h1, h2 {
          color: #2c3e50;
        }
        .section {
          background-color: #fff;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        code {
          background-color: #eee;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
        }
        pre {
          background-color: #eee;
          padding: 10px;
          border-radius: 6px;
          overflow-x: auto;
        }
        .game-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .drop-zone, .draggable {
          padding: 15px;
          margin: 10px;
          border-radius: 10px;
          font-weight: bold;
          text-align: center;
        }
        .drop-zone {
          border: 2px dashed #3498db;
          background-color: #e8f6ff;
          width: 150px;
          height: 60px;
        }
        .draggable {
          background-color: #d1f5d3;
          border: 2px solid #2ecc71;
          cursor: grab;
        }
        .correct {
          background-color: #a9dfbf !important;
        }
        .wrong {
          background-color: #f1948a !important;
        }
      `}</style>

      <h1>🐍 Python Basics & Data Types - Learn & Play</h1>

      <div className="section">
        <h2>📜 Python Origin</h2>
        <p>Python was created by <strong>Guido van Rossum</strong> and first released in <strong>1991</strong>. It's designed to be easy to read and write, and it's widely used in data science, web development, automation, and more!</p>
      </div>

      <div className="section">
        <h2>🖨️ Print Statement</h2>
        <p>In Python, the <code>print()</code> function is used to display output:</p>
        <pre><code>print("Hello, World!")</code></pre>
        <p>You can print variables, strings, numbers, and more:</p>
        <pre><code>{`name = "Alice"
age = 20
print("Name:", name)
print("Age:", age)`}</code></pre>
      </div>

      <div className="section">
        <h2>🔤 Variables & Data Types</h2>
        <p>Variables are used to store data values. You don’t need to declare the type — Python figures it out!</p>
        <p><strong>Examples:</strong></p>
        <pre><code>{`x = 5          # int
pi = 3.14      # float
name = "John"  # str
is_happy = True # bool`}</code></pre>
        <p><strong>Main Data Types:</strong></p>
        <ul>
          <li><code>int</code> – Integer numbers</li>
          <li><code>float</code> – Decimal numbers</li>
          <li><code>str</code> – Text/String</li>
          <li><code>bool</code> – True/False</li>
          <li><code>list</code>, <code>tuple</code>, <code>dict</code> – Collections</li>
        </ul>
      </div>

      <div className="section">
        <h2>🎮 Match the Python Values to Their Data Types!</h2>
        <p>Drag each value to the correct data type.</p>

        <div className="game-container">
          {/* Drop Zones */}
          <div className="drop-zone" data-type="int">int</div>
          <div className="drop-zone" data-type="float">float</div>
          <div className="drop-zone" data-type="str">str</div>
          <div className="drop-zone" data-type="bool">bool</div>

          {/* Draggable Items */}
          <div className="draggable" draggable="true" data-type="str">"Python"</div>
          <div className="draggable" draggable="true" data-type="int">42</div>
          <div className="draggable" draggable="true" data-type="float">3.14</div>
          <div className="draggable" draggable="true" data-type="bool">True</div>
        </div>
      </div>
    </div>
  );
};

export default PythonDataTypeMatchGame;
