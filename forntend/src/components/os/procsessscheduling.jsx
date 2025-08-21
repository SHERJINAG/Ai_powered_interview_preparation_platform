import React, { useState } from 'react';

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    background: '#f7fdfd',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#023047',
  },
  button: {
    padding: '10px 18px',
    margin: '10px',
    background: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  chart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowX: 'auto',
    border: '2px solid #0077b6',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px',
    background: '#ffffff',
  },
  bar: {
    height: '60px',
    lineHeight: '60px',
    marginRight: '5px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '0 10px',
  },
  timeline: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '14px',
    color: '#333',
    marginTop: '5px',
  },
  infoBox: {
    marginTop: '30px',
    background: '#e0f7fa',
    padding: '20px',
    borderLeft: '5px solid #00b4d8',
    borderRadius: '10px',
    textAlign: 'left',
  },
  highlightBox: {
    marginTop: '30px',
    background: '#caf0f8',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    marginTop: '10px',
  }
};

const initialProcesses = [
  { name: 'P1', burst: 5, priority: 2, color: '#4ecdc4' },
  { name: 'P2', burst: 3, priority: 1, color: '#ff6b6b' },
  { name: 'P3', burst: 1, priority: 4, color: '#5e60ce' },
  { name: 'P4', burst: 4, priority: 3, color: '#f4a261' }
];

export default function GanttChartSimulator() {
  const [schedule, setSchedule] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [table, setTable] = useState('');
  const [winner, setWinner] = useState('');
  const [guess, setGuess] = useState('FCFS');

  const reset = () => {
    setSchedule([]);
    setTimeline([]);
    setTable('');
    setWinner('');
  };

  const drawChart = (data) => {
    let currentTime = 0;
    const bars = [];
    const times = [];

    for (let task of data) {
      bars.push({
        name: task.name,
        duration: task.duration,
        color: task.color,
      });
      times.push(currentTime);
      currentTime += task.duration;
    }
    times.push(currentTime);
    setSchedule(bars);
    setTimeline(times);
  };

  const calculateTable = (order) => {
    let time = 0;
    let rows = `<table><tr><th>Process</th><th>Burst</th><th>Waiting</th><th>Turnaround</th></tr>`;
    for (let p of order) {
      let wait = time;
      let tat = wait + p.burst;
      time += p.burst;
      rows += `<tr><td>${p.name}</td><td>${p.burst}</td><td>${wait}</td><td>${tat}</td></tr>`;
    }
    rows += `</table>`;
    setTable(rows);
  };

  const simulateFCFS = () => {
    reset();
    drawChart(initialProcesses.map(p => ({ ...p, duration: p.burst })));
    calculateTable(initialProcesses);
  };

  const simulateSJF = () => {
    reset();
    const sorted = [...initialProcesses].sort((a, b) => a.burst - b.burst);
    drawChart(sorted.map(p => ({ ...p, duration: p.burst })));
    calculateTable(sorted);
  };

  const simulatePriority = () => {
    reset();
    const sorted = [...initialProcesses].sort((a, b) => a.priority - b.priority);
    drawChart(sorted.map(p => ({ ...p, duration: p.burst })));
    calculateTable(sorted);
  };

  const simulateRR = () => {
    reset();
    const quantum = 2;
    const queue = initialProcesses.map(p => ({ ...p, remaining: p.burst }));
    let time = 0;
    let output = [];
    const completed = {};

    while (queue.some(p => p.remaining > 0)) {
      for (let p of queue) {
        if (p.remaining > 0) {
          const duration = Math.min(quantum, p.remaining);
          output.push({ name: p.name, duration, color: p.color });
          time += duration;
          p.remaining -= duration;
          if (p.remaining === 0) {
            completed[p.name] = time;
          }
        }
      }
    }

    drawChart(output);

    // Table
    let html = `<table><tr><th>Process</th><th>Burst</th><th>Waiting</th><th>Turnaround</th></tr>`;
    for (let p of initialProcesses) {
      let turnaround = completed[p.name];
      let waiting = turnaround - p.burst;
      html += `<tr><td>${p.name}</td><td>${p.burst}</td><td>${waiting}</td><td>${turnaround}</td></tr>`;
    }
    html += `</table>`;
    setTable(html);
  };

  const runAlgorithm = (type) => {
    if (type === 'FCFS') simulateFCFS();
    else if (type === 'SJF') simulateSJF();
    else if (type === 'Priority') simulatePriority();
    else simulateRR();
  };

  const showWinner = () => {
    const guessCorrect = guess === 'SJF';
    setWinner(guessCorrect ? `✅ Correct! SJF is best.` : `❌ Incorrect. Best: SJF`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔧 OS Gantt Chart + 🎮 Showdown</h1>
      <div>
        <button style={styles.button} onClick={simulateFCFS}>▶️ FCFS</button>
        <button style={styles.button} onClick={simulateRR}>🔄 RR</button>
        <button style={styles.button} onClick={simulateSJF}>⚡ SJF</button>
        <button style={styles.button} onClick={simulatePriority}>⬆️ Priority</button>
      </div>

      <div style={styles.chart}>
        {schedule.map((bar, i) => (
          <div key={i} style={{ ...styles.bar, width: `${bar.duration * 50}px`, backgroundColor: bar.color }}>
            {bar.name}
          </div>
        ))}
      </div>

      <div style={styles.timeline}>
        {timeline.map((t, i) => (
          <div key={i} style={{ width: '50px', textAlign: 'center' }}>{t}</div>
        ))}
      </div>

      <div dangerouslySetInnerHTML={{ __html: table }} />

      <div style={styles.infoBox}>
        <h2>📘 Explanation:</h2>
        <ul>
          <li><strong>FCFS:</strong> First Come First Serve, no preemption.</li>
          <li><strong>RR:</strong> Round Robin with Time Quantum = 2 units.</li>
          <li><strong>SJF:</strong> Shortest Job First (non-preemptive).</li>
          <li><strong>Priority:</strong> Lower number = higher priority (non-preemptive).</li>
        </ul>
      </div>

      <div style={styles.highlightBox}>
        <h2>🔍 Example Data:</h2>
        <p>P1 (5, 2), P2 (3, 1), P3 (1, 4), P4 (4, 3)</p>
      </div>

      <div>
        <h3>🎯 Guess the Best Algorithm:</h3>
        <select style={styles.select} value={guess} onChange={e => setGuess(e.target.value)}>
          <option>FCFS</option>
          <option>SJF</option>
          <option>Priority</option>
          <option>RR</option>
        </select>
        <br />
        <button style={styles.button} onClick={showWinner}>Reveal Winner</button>
        {winner && <div style={{ marginTop: '20px', fontSize: '20px' }}>{winner}</div>}
      </div>
    </div>
  );
}
