import React, { useState, useEffect } from 'react';

const componentsInOrder = [
 'App', 

  'Header',
  'GameBoard',
  'ComponentCard',
'ComponentCard',
  'ComponentCard',
  
  'Footer'
];

const ComponentCard = ({ name, onClick }) => (
  <div className="card" onClick={() => onClick(name)}>
    🔹 {name}
  </div>
);

const GameBoard = () => {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('');

  const handleClick = (name) => {
    const index = clickedOrder.length;

    if (name === componentsInOrder[index]) {
      const newClicked = [...clickedOrder, name];
      setClickedOrder(newClicked);
      setScore(score + 10);
      setStatus('✅ Correct!');

      if (newClicked.length === componentsInOrder.length) {
        setStatus('🎉 You built the full component tree!');
      }
    } else {
      setClickedOrder([]);
      setScore(0);
      setStatus('❌ Wrong! Try again from start.');
    }
  };

  return (
    <div>
      <div>
        {componentsInOrder.map((name, i) => (
          <ComponentCard key={i} name={name} onClick={handleClick} />
        ))}
      </div>
      <div className="score">Score: {score}</div>
      <div className={status.includes('Wrong') ? 'fail' : 'success'}>
        {status}
      </div>
    </div>
  );
};

const ReactReactorGame = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: 'Segoe UI', sans-serif;
        background: #f5f5f5;
        margin: 0;
        padding: 20px;
      }

      .section {
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }

      .tree-diagram {
        font-family: monospace;
        white-space: pre;
        color: #34495e;
      }

      .card {
        background: #ecf0f1;
        border: 2px solid #3498db;
        border-radius: 10px;
        padding: 15px;
        margin: 10px;
        cursor: pointer;
        display: inline-block;
        width: 160px;
        text-align: center;
        transition: transform 0.2s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .score {
        font-size: 18px;
        font-weight: bold;
        color: #2ecc71;
        margin-top: 10px;
      }

      .success {
        color: green;
        font-weight: bold;
        margin-top: 10px;
      }

      .fail {
        color: red;
        font-weight: bold;
        margin-top: 10px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f5f5f5', padding: '20px' }}>
      <div className="section">
        <h1>🔍 React Basics: Component Tree Simulation</h1>
        <p>
          In React, UI is made up of small building blocks called <strong>components</strong>. These components are organized in a <strong>tree-like hierarchy</strong> called the <em>component tree</em>.
        </p>
        <div className="tree-diagram">
          App<br />
          ├── Header<br />
          ├── GameBoard<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;├── ComponentCard<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;├── ComponentCard<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;└── ComponentCard<br />
          └── Footer
        </div>
        <p>Each child is rendered by its parent component. This structure helps to build large apps using small, reusable parts.</p>
      </div>

      <div className="section">
        <h2>🎮 React Reactor: Build the Component Tree Using JSX</h2>
        <GameBoard />
      </div>
    </div>
  );
};

export default ReactReactorGame;
