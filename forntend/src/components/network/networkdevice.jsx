import React, { useState, useEffect } from 'react';

const DeviceBuilderGame = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [hiddenDevices, setHiddenDevices] = useState([]);
  const [result, setResult] = useState('');
  const [slotsState, setSlotsState] = useState([
    { device: 'modem', text: 'Slot 1', matched: false },
    { device: 'router', text: 'Slot 2', matched: false },
    { device: 'switch', text: 'Slot 3', matched: false },
    { device: 'pc', text: 'Slot 4', matched: false }
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, slotIndex) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text');
    const currentSlot = slotsState[slotIndex];

    if (draggedId === currentSlot.device) {
      const updatedSlots = [...slotsState];
      updatedSlots[slotIndex] = {
        ...updatedSlots[slotIndex],
        text: draggedId.charAt(0).toUpperCase() + draggedId.slice(1),
        matched: true
      };
      setSlotsState(updatedSlots);
      setHiddenDevices([...hiddenDevices, draggedId]);
      const newCount = correctCount + 1;
      setCorrectCount(newCount);
      if (newCount === 4) setResult('🎉 You successfully built the network!');
    } else {
      const target = e.target;
      target.classList.add('incorrect');
      setTimeout(() => target.classList.remove('incorrect'), 1000);
    }
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🛠️ Device Builder - Build Your Network!</h1>

      <div style={styles.section}>
        <h2>📚 Concept</h2>
        <p>Drag and drop each <strong>network device</strong> into its correct position in the network:</p>
        <ul style={styles.list}>
          <li>🔌 <strong>Modem:</strong> Connects to the ISP</li>
          <li>📡 <strong>Router:</strong> Directs data and assigns IPs</li>
          <li>🧠 <strong>Switch:</strong> Connects devices in LAN</li>
          <li>💻 <strong>PC:</strong> End-user device</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game Zone</h2>
        <p>Drag each device to its correct slot</p>

        <div style={styles.devices}>
          {['switch', 'modem', 'pc', 'router'].map(id => (
            !hiddenDevices.includes(id) && (
              <div
                key={id}
                style={styles.device}
                draggable
                onDragStart={(e) => handleDragStart(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </div>
            )
          ))}
        </div>

        <div style={styles.slots}>
          {slotsState.map((slot, idx) => (
            <div
              key={idx}
              onDragOver={allowDrop}
              onDrop={(e) => handleDrop(e, idx)}
              style={{
                ...styles.slot,
                ...(slot.matched ? styles.matched : {})
              }}
            >
              {slot.text}
            </div>
          ))}
        </div>

        <div id="result" style={styles.result}>{result}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    padding: '20px'
  },
  h1: {
    color: '#0277bd'
  },
  section: {
    background: 'white',
    padding: '15px',
    margin: '15px auto',
    maxWidth: '900px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  devices: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  slots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  device: {
    width: '100px',
    height: '100px',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#b3e5fc',
    fontWeight: 'bold',
    cursor: 'grab'
  },
  slot: {
    width: '100px',
    height: '100px',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#e0f7fa'
  },
  matched: {
    backgroundColor: '#81c784',
    borderColor: '#388e3c',
    color: 'white'
  },
  result: {
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  list: {
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto'
  }
};

export default DeviceBuilderGame;
