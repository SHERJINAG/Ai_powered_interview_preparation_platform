import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    background: '#f0f9ff',
    padding: '20px',
    textAlign: 'center',
  },
  h1: {
    color: '#0a558c',
  },
  h1Game: {
    color: '#023047',
  },
  node: {
    backgroundColor: '#48cae4',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  thread: {
    backgroundColor: '#ffb703',
  },
  line: {
    width: '2px',
    height: '20px',
    backgroundColor: 'gray',
    margin: 'auto',
  },
  explanation: {
    backgroundColor: '#ffffff',
    borderLeft: '5px solid #219ebc',
    marginTop: '40px',
    padding: '20px',
    textAlign: 'left',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  gameContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  box: {
    border: '2px dashed #0077b6',
    padding: '20px',
    width: '200px',
    minHeight: '120px',
    borderRadius: '12px',
    background: '#e0f7fa',
    margin: '10px',
  },
  dropzone: {
    background: '#caf0f8',
    padding: '20px',
    width: '200px',
    minHeight: '120px',
    border: '2px dashed #0077b6',
    borderRadius: '12px',
    margin: '10px',
  },
  draggable: {
    background: '#00b4d8',
    color: 'white',
    margin: '8px 0',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'grab',
  },
  button: {
    marginTop: '20px',
    background: '#0077b6',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  info: {
    marginTop: '40px',
    background: '#ffffff',
    padding: '20px',
    borderLeft: '5px solid #00b4d8',
    textAlign: 'left',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
  },
};

const ProcessThreadVisualization = () => {
  const [visibleChildren, setVisibleChildren] = useState({});
  const [result, setResult] = useState('');
  const [zones, setZones] = useState({
    zone1: [],
    zone2: [],
    zone3: [],
  });

  const toggle = (id) => {
    setVisibleChildren((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text', id);
  };

  const handleDrop = (zoneId, e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    setZones((prev) => {
      // Remove from all zones
      const newZones = Object.fromEntries(
        Object.entries(prev).map(([key, value]) => [key, value.filter((item) => item !== id)])
      );
      // Add to target zone
      newZones[zoneId].push(id);
      return newZones;
    });
  };

  const checkAnswer = () => {
    const z = zones;
    const correct =
      z.zone1.includes('os') &&
      z.zone2.includes('chrome') &&
      z.zone2.includes('word') &&
      z.zone3.includes('music') &&
      z.zone3.includes('render');
    setResult(correct ? '✅ Correct! You built a valid OS process tree!' : '❌ Try Again! Make sure each zone has the right components.');
  };

  const draggableItems = {
    os: '👑 OS Process',
    chrome: '🧠 Chrome Process',
    word: '📄 Word Process',
    music: '🎵 Music Thread',
    render: '🖼️ Render Thread',
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>👨‍💻 Process & Thread Visualization</h1>
      <p>Click on a node to expand its children. Blue = Process, Yellow = Thread</p>

      <div className="tree">
        <div style={styles.node} onClick={() => toggle('child1')}>Parent Process (Operating System)</div>
        {visibleChildren['child1'] && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.line}></div>
            <div style={styles.node} onClick={() => toggle('child2')}>Child Process: Chrome Browser</div>
            {visibleChildren['child2'] && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={styles.line}></div>
                <div style={{ ...styles.node, ...styles.thread }}>Thread: UI Rendering</div>
                <div style={{ ...styles.node, ...styles.thread }}>Thread: Tab Manager</div>
                <div style={{ ...styles.node, ...styles.thread }}>Thread: Audio Playback</div>
              </div>
            )}

            <div style={styles.node} onClick={() => toggle('child3')}>Child Process: MS Word</div>
            {visibleChildren['child3'] && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={styles.line}></div>
                <div style={{ ...styles.node, ...styles.thread }}>Thread: Text Editing</div>
                <div style={{ ...styles.node, ...styles.thread }}>Thread: Spell Check</div>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', color: '#023047', fontStyle: 'italic' }}>
        💡 Example: Chrome runs many threads under a single process to handle tabs, UI, and media.
      </div>

      <div style={styles.explanation}>
        <h2>📘 Explanation</h2>
        <p><strong>What is a Process?</strong> A process is a program in execution.</p>
        <p><strong>What is a Thread?</strong> A thread is a smaller unit within a process.</p>
        <p><strong>Parent-Child Relationship:</strong> A parent process delegates work to child processes and threads.</p>
        <p><strong>Interactive Task:</strong> Try clicking the nodes above to see how child processes and threads are linked.</p>
      </div>

      <h1 style={styles.h1Game}>🧩 Process & Thread Builder Game</h1>
      <p>Drag and drop to build a logical process structure!</p>

      <div style={styles.gameContainer}>
        <div style={styles.box}>
          {Object.entries(draggableItems).map(([id, label]) => {
            const inAnyZone = Object.values(zones).some((zone) => zone.includes(id));
            return !inAnyZone && (
              <div
                key={id}
                id={id}
                style={styles.draggable}
                draggable
                onDragStart={(e) => handleDragStart(e, id)}
              >
                {label}
              </div>
            );
          })}
        </div>

        {['zone1', 'zone2', 'zone3'].map((zoneId, i) => (
          <div
            key={zoneId}
            style={styles.dropzone}
            onDrop={(e) => handleDrop(zoneId, e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {zoneId === 'zone1' && 'Drop Parent Process'}
            {zoneId === 'zone2' && 'Drop Child Processes'}
            {zoneId === 'zone3' && 'Drop Threads'}
            {zones[zoneId].map((id) => (
              <div
                key={id}
                id={id}
                style={styles.draggable}
                draggable
                onDragStart={(e) => handleDragStart(e, id)}
              >
                {draggableItems[id]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={checkAnswer}>✔️ Check Structure</button>
      <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px', color: '#023047' }}>{result}</div>

      <div style={styles.info}>
        <h2>📘 OS Concept Behind the Game</h2>
        <p><strong>Parent Process:</strong> Usually the OS, which starts and controls child processes.</p>
        <p><strong>Child Process:</strong> Programs like Chrome, Word.</p>
        <p><strong>Thread:</strong> Tasks inside a process like UI or sound.</p>
        <p><strong>Scheduling:</strong> OS manages CPU time for each.</p>
      </div>
    </div>
  );
};

export default ProcessThreadVisualization;
