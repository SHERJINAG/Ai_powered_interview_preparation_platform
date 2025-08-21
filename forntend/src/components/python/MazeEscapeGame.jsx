import React, { useState } from 'react';

const MazeEscapeGame = () => {
  const [log, setLog] = useState('');
  const [endMsg, setEndMsg] = useState('');

  const runForLoop = () => {
    let msg = '';
    for (let step = 1; step <= 10; step++) {
      msg += `🚶 Step ${step} taken using FOR loop<br>`;
    }
    setLog(msg);
    setEndMsg('🎉 You escaped the maze using a for loop!');
  };

  const runWhileLoop = () => {
    let msg = '';
    let step = 1;
    while (step <= 10) {
      msg += `🏃 Step ${step} taken using WHILE loop<br>`;
      step++;
    }
    setLog(msg);
    setEndMsg('🎉 You escaped the maze using a while loop!');
  };

  return (
    <div style={styles.body}>
      <h1>🔁 Python Loops - Maze Escape</h1>

      <div style={styles.section}>
        <h2>🔄 Understanding Loops in Python</h2>
        <p>Loops help repeat code multiple times. Python has two main types:</p>

        <h3><code>for</code> loop</h3>
        <pre style={styles.pre}>
{`for i in range(5):
    print("Step", i)`}
        </pre>

        <h3><code>while</code> loop</h3>
        <pre style={styles.pre}>
{`steps = 0
while steps < 5:
    print("Step", steps)
    steps += 1`}
        </pre>

        <p>We use loops to automate repetition — just like escaping a maze step-by-step!</p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game: Escape the Maze</h2>
        <div style={styles.mazeBox}>
          <p>You are trapped in a maze with 10 steps to the exit!</p>
          <button style={styles.btn} onClick={runForLoop}>Use <code>for</code> loop</button>
          <button style={styles.btn} onClick={runWhileLoop}>Use <code>while</code> loop</button>

          <div
            style={styles.log}
            dangerouslySetInnerHTML={{ __html: log }}
          ></div>
          <div style={styles.end}>{endMsg}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#f4f8ff',
    padding: '30px',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  pre: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '6px',
    overflowX: 'auto',
  },
  mazeBox: {
    backgroundColor: '#e0f7fa',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    textAlign: 'center',
  },
  btn: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  log: {
    marginTop: '20px',
    fontSize: '16px',
    background: '#fefbd8',
    padding: '10px',
    borderRadius: '6px',
    height: '120px',
    overflowY: 'auto',
  },
  end: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default MazeEscapeGame;
