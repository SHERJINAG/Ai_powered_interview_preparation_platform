import React, { useState, useEffect, useRef } from 'react';

const DeadlockVisualizerGame = () => {
  const [processCount, setProcessCount] = useState(3);
  const containerRef = useRef(null);
  const [ownership, setOwnership] = useState({});
  const [message, setMessage] = useState('');

  const getCircleCoords = (n, radius = 200, centerX = 250, centerY = 250) => {
    const angleStep = (2 * Math.PI) / n;
    const coords = [];
    for (let i = 0; i < n; i++) {
      const angle = angleStep * i;
      const x = centerX + radius * Math.cos(angle) - 30;
      const y = centerY + radius * Math.sin(angle) - 30;
      coords.push({ x, y });
    }
    return coords;
  };

  const startSimulation = () => {
    const container = containerRef.current;
    container.innerHTML = '';
    const coords = getCircleCoords(processCount);
    const processes = [];

    coords.forEach((coord, i) => {
      const process = document.createElement('div');
      process.className = 'process';
      process.style.left = `${coord.x}px`;
      process.style.top = `${coord.y}px`;
      process.innerText = `P${i + 1}`;
      container.appendChild(process);
      processes.push(process);
    });

    for (let i = 0; i < processCount; i++) {
      const next = (i + 1) % processCount;
      const arrow = document.createElement('div');
      arrow.className = 'arrow';
      arrow.style.left = `${(coords[i].x + coords[next].x) / 2}px`;
      arrow.style.top = `${(coords[i].y + coords[next].y) / 2}px`;

      const dx = coords[next].x - coords[i].x;
      const dy = coords[next].y - coords[i].y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      arrow.style.transform = `rotate(${angle}deg)`;
      arrow.id = `arrow-${i}`;
      container.appendChild(arrow);

      setTimeout(() => {
        arrow.classList.add('active');
      }, i * 500);
    }
  };

  const resolveDeadlock = () => {
    const arrow = document.querySelector('#arrow-0');
    if (arrow) {
      arrow.style.display = 'none';
      alert('Deadlock resolved! P1 released its resource.');
    }
  };

  const handleDrop = (e, process) => {
    const id = e.dataTransfer.getData('text');
    const newOwnership = { ...ownership, [id]: process };
    setOwnership(newOwnership);
    const element = document.getElementById(id);
    e.target.appendChild(element);
  };

  const checkDeadlock = () => {
    const waits = [
      { process: 'P1', waitsFor: ownership['R2'] },
      { process: 'P2', waitsFor: ownership['R3'] },
      { process: 'P3', waitsFor: ownership['R1'] },
    ];

    const cycle = waits.every(w => w.waitsFor && w.waitsFor !== w.process);

    if (cycle) {
      setMessage(`
        ❌ Deadlock Detected!
        A circular wait occurred between P1 → P2 → P3 → P1
        
        ✅ Avoidance Strategy:
        - Use Banker's Algorithm to allocate only if system remains in safe state.
        - Request all needed resources at once.
        - Order resource requests to avoid circular wait.
      `);
    } else {
      setMessage(`✅ No Deadlock\nThe system is in a safe state.`);
    }
  };

  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f3f4f6;
          text-align: center;
        }
        .controls, .game-area, #resources {
          margin: 20px auto;
        }
        .container {
          position: relative;
          width: 500px;
          height: 500px;
          margin: 0 auto;
        }
        .process {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #457b9d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          font-weight: bold;
        }
        .arrow {
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-left-color: red;
          position: absolute;
          display: none;
        }
        .arrow.active {
          display: block;
          animation: fadeIn 0.5s ease-in forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        button {
          padding: 10px 20px;
          background-color: #1d3557;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin: 10px;
        }
        .resource {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          background-color: #e76f51;
          display: inline-block;
          margin: 0 10px;
          color: white;
          font-weight: bold;
          line-height: 100px;
          cursor: grab;
        }
        .dropzone {
          border: 2px dashed #aaa;
          width: 100px;
          height: 100px;
          margin: 10px auto;
        }
        #message {
          white-space: pre-line;
          margin: 30px auto;
          max-width: 600px;
          background-color: #dff6f0;
          border-left: 5px solid #2a9d8f;
          padding: 15px;
        }
      `}</style>

      <h1>🔄 Deadlock Simulation</h1>

      <div className="controls">
        <label><strong>Number of Processes:</strong></label>
        <select value={processCount} onChange={e => setProcessCount(parseInt(e.target.value))}>
          {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button onClick={startSimulation}>Start Simulation</button>
        <button onClick={resolveDeadlock}>Resolve Deadlock</button>
      </div>

      <div className="container" ref={containerRef}></div>
       <div id="explanation">
    <h3>💬 How Deadlock Occurs</h3>
    <p>
      Deadlock occurs when a set of processes are each waiting for a resource held by the next,
      forming a **circular wait**. In this simulation:
    </p>
    <ul>
      <li>Each process (P1, P2, ..., Pn) holds one resource.</li>
      <li>Each process is waiting for the resource held by the next process.</li>
      <li>This forms a cycle, and no process can proceed — this is <strong>deadlock</strong>.</li>
    </ul>

    <h3>🔓 Resolving Deadlock</h3>
    <p>
      You can resolve a deadlock by <strong>breaking the circular wait</strong>. For example:
      <ul>
        <li>Preempting a resource from one process</li>
        <li>Terminating a process to release its held resource</li>
      </ul>
      In this demo, clicking "Resolve Deadlock" breaks the cycle by "freeing" one process.
    </p>
  </div>

      <h1>🧩 Deadlock Buster Game</h1>
      <p>🎯 Drag resources to processes. If a circular wait is detected, the game suggests an avoidance strategy!</p>

      <div className="game-area" style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        {['P1', 'P2', 'P3'].map(proc => (
          <div key={proc}>
            <div className="process" style={{ position: 'static' }}>{proc}</div>
            <div
              className="dropzone"
              onDragOver={e => e.preventDefault()}
              onDrop={e => handleDrop(e, proc)}
            ></div>
          </div>
        ))}
      </div>

      <h3>🧰 Available Resources</h3>
      <div id="resources">
        {['R1', 'R2', 'R3'].map(id => (
          <div
            key={id}
            id={id}
            className="resource"
            draggable
            onDragStart={e => e.dataTransfer.setData('text/plain', id)}
          >
            {id}
          </div>
        ))}
      </div>

      <button onClick={checkDeadlock}>Check for Deadlock</button>

      <div id="message">{message}</div>
    </div>
  );
};

export default DeadlockVisualizerGame;
