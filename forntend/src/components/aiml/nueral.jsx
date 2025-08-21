import React, { useState } from 'react';

const NeuralNetworkVisualizer = () => {
  const [connections, setConnections] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const maxScore = 6;

  const layers = {
    input: [{ x: 100, y: 100 }, { x: 100, y: 200 }, { x: 100, y: 300 }],
    hidden: [{ x: 400, y: 100 }, { x: 400, y: 200 }, { x: 400, y: 300 }],
    output: [{ x: 700, y: 200 }],
  };

  const handleClick = (layer, pos) => {
    if (!selected) {
      setSelected({ layer, pos });
    } else {
      const validConnection =
        (selected.layer === 'input' && layer === 'hidden') ||
        (selected.layer === 'hidden' && layer === 'output');

      const alreadyConnected = connections.some(
        conn => conn.from === selected.pos && conn.to === pos
      );

      if (validConnection && !alreadyConnected) {
        setConnections([...connections, { from: selected.pos, to: pos }]);
        setScore(prev => prev + 10);
      }
      setSelected(null);
    }
  };

  const resetNetwork = () => {
    setConnections([]);
    setSelected(null);
    setScore(0);
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>🔗 Build a Neural Network!</h1>

      <div style={styles.section}>
        <h2>🧠 What is a Neural Network?</h2>
        <div style={styles.info}>
          A Neural Network has layers of nodes (neurons). You input values, hidden layers process them, and the output is the final prediction.
          <br />
          <br />
          Try connecting the input → hidden → output by clicking the neurons in order!
        </div>
      </div>

      <div style={styles.section}>
        <h2>🎮 Click to Connect Neurons</h2>
        <svg id="network" style={styles.svg} viewBox="0 0 800 400">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#673ab7" />
            </marker>
          </defs>

          {connections.map(({ from, to }, i) => (
            <line
              key={`line-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="line active"
              markerEnd="url(#arrow)"
            />
          ))}

          {Object.keys(layers).map(layer =>
            layers[layer].map((pos, idx) => (
              <circle
                key={`${layer}-${idx}`}
                cx={pos.x}
                cy={pos.y}
                r="20"
                className={`node ${layer}`}
                onClick={() => handleClick(layer, pos)}
              />
            ))
          )}
        </svg>
        <button onClick={resetNetwork} style={styles.button}>🔄 Reset</button>
        <div id="scoreDisplay" style={styles.score}>
          Score: {score} {score >= maxScore * 10 && '🎉 Well done! All connections made.'}
        </div>
      </div>

      <style>{`
        .node {
          fill: #ff9800;
          stroke: #333;
          stroke-width: 2px;
          cursor: pointer;
        }
        .node.hidden {
          fill: #4caf50;
        }
        .node.output {
          fill: #2196f3;
        }
        .line {
          stroke: #666;
          stroke-width: 2px;
          opacity: 0.3;
        }
        .line.active {
          opacity: 1;
          stroke: #673ab7;
        }
      `}</style>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f0f4f8',
    margin: 0,
    padding: '30px',
    textAlign: 'center',
  },
  heading: {
    color: '#2e3c8d',
  },
  section: {
    background: '#ffffff',
    padding: '25px',
    margin: '20px auto',
    maxWidth: '800px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  info: {
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.6,
  },
  svg: {
    width: '100%',
    height: '400px',
    marginTop: '20px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 18px',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  score: {
    fontSize: '20px',
    marginTop: '10px',
    color: '#2c7',
    fontWeight: 'bold',
  },
};

export default NeuralNetworkVisualizer;
