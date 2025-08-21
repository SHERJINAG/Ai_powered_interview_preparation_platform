import React, { useState } from 'react';

export default function ModelTrainingSimulation() {
  const [epochs, setEpochs] = useState(10);
  const [lr, setLr] = useState(0.01);
  const [batch, setBatch] = useState(16);
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const startTraining = () => {
    if (epochs <= 0 || lr <= 0 || batch <= 0) {
      setOutput('❗ Please enter valid positive numbers.');
      return;
    }

    setProgress(0);
    setOutput('');

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          const score = Math.min(100, Math.floor((epochs * lr * 100) / batch));
          setOutput(`✅ Training complete! Mock model accuracy: ${score}% 🎯`);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    setIntervalId(interval);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f9f9f9', padding: '20px', textAlign: 'center', color: '#333' }}>
      <h1 style={{ color: '#3f51b5' }}>🧠 Model Training - AI/ML Module 5</h1>

      <div style={{ background: '#fff', padding: '20px', maxWidth: '800px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'left' }}>
        <h2 style={{ color: '#2e7d32' }}>📘 What is Model Training?</h2>
        <p>Model training is the process of teaching a machine learning model to understand data and make predictions. It involves adjusting internal parameters using optimization algorithms.</p>
        <ul>
          <li><strong>Epochs:</strong> How many times the model learns from the full dataset</li>
          <li><strong>Learning Rate:</strong> Speed at which the model adjusts itself</li>
          <li><strong>Batch Size:</strong> Number of samples processed at once</li>
        </ul>
      </div>

      <div style={{ background: '#fff', padding: '20px', maxWidth: '800px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'left' }}>
        <h2 style={{ color: '#2e7d32' }}>🎮 Game: Train a Mock Model</h2>
        <label htmlFor="epochs">Epochs (1–100):</label>
        <input type="number" id="epochs" min="1" max="100" value={epochs} onChange={(e) => setEpochs(Number(e.target.value))} />

        <label htmlFor="lr" style={{ display: 'block', marginTop: '10px' }}>Learning Rate (0.001 - 1):</label>
        <input type="number" id="lr" step="0.001" min="0.001" max="1" value={lr} onChange={(e) => setLr(Number(e.target.value))} />

        <label htmlFor="batch" style={{ display: 'block', marginTop: '10px' }}>Batch Size (1 - 100):</label>
        <input type="number" id="batch" min="1" max="100" value={batch} onChange={(e) => setBatch(Number(e.target.value))} />

        <button onClick={startTraining} style={{ marginTop: '15px', padding: '10px 20px', background: '#3f51b5', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Start Training
        </button>

        <div style={{ marginTop: '20px', width: '100%', background: '#ddd', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: '#4caf50', transition: 'width 0.2s' }}></div>
        </div>

        <div id="output" style={{ marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold', color: output.includes('❗') ? 'red' : 'green' }}>{output}</div>
      </div>
    </div>
  );
}
