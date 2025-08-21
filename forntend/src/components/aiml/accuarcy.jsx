import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ModelEvaluationDashboard = () => {
  const [summary, setSummary] = useState('Click the button to analyze 3 models');
  const [chartData, setChartData] = useState(null);

  // This function is called when the button is clicked
  const showMetrics = () => {
    const models = {
      ModelA: { accuracy: 0.91, loss: 0.09, precision: 0.88, recall: 0.86, f1: 0.87 },
      ModelB: { accuracy: 0.87, loss: 0.13, precision: 0.91, recall: 0.80, f1: 0.85 },
      ModelC: { accuracy: 0.89, loss: 0.11, precision: 0.85, recall: 0.88, f1: 0.86 },
    };

    const labels = ['Accuracy', 'Loss (Inverted)', 'Precision', 'Recall', 'F1-Score'];
    const datasets = Object.keys(models).map((model, i) => {
      const m = models[model];
      return {
        label: model,
        data: [m.accuracy, 1 - m.loss, m.precision, m.recall, m.f1],
        fill: true,
        backgroundColor: `rgba(${100 + i * 50}, ${80 + i * 60}, 200, 0.2)`,
        borderColor: `rgba(${100 + i * 50}, ${80 + i * 60}, 200, 1)`,
        borderWidth: 2,
        pointRadius: 4,
      };
    });

    setSummary("✅ Best model is likely Model A – High accuracy, low loss, balanced precision & recall.");

    // Update chart data after metrics are calculated
    setChartData({
      labels,
      datasets,
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Model Evaluation - Accuracy, Loss & Metrics</h1>

      <div style={styles.section}>
        <h2>📘 Evaluation Concepts</h2>
        <p><strong>Accuracy:</strong> % of correct predictions</p>
        <p><strong>Loss:</strong> Error in prediction (lower is better)</p>
        <p><strong>Precision:</strong> % of relevant instances out of all retrieved</p>
        <p><strong>Recall:</strong> % of relevant instances retrieved</p>
        <p><strong>F1-Score:</strong> Balance between Precision & Recall</p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game: Pick the Best Model</h2>
        <div style={styles.chartContainer}>
          {chartData ? <Line data={chartData} options={chartOptions} /> : <p>No data available</p>}
        </div>
        <div style={styles.summary}>{summary}</div>
        <button style={styles.button} onClick={showMetrics}>Analyze Models</button>
      </div>
    </div>
  );
};

const chartOptions = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      max: 1,
    },
  },
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    margin: '20px',
    background: '#f5f5f5',
    textAlign: 'center',
  },
  title: {
    color: '#3f51b5',
  },
  section: {
    maxWidth: '1000px',
    margin: 'auto',
    background: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  chartContainer: {
    marginTop: '20px',
  },
  summary: {
    fontSize: '1.2em',
    marginTop: '20px',
  },
  button: {
    background: '#3f51b5',
    color: '#fff',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default ModelEvaluationDashboard;
