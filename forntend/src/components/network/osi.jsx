import React, { useEffect, useRef, useState } from 'react';

const OSIClimberGame = () => {
  const [climbed, setClimbed] = useState(0);
  const climberRef = useRef(null);

  const items = [
    { label: 'Browser', match: '7' },
    { label: 'IP Address', match: '3' },
    { label: 'Cable', match: '1' },
    { label: 'TCP', match: '4' },
    { label: 'JPEG', match: '6' },
    { label: 'MAC Address', match: '2' },
    { label: 'API Session', match: '5' }
  ];

  useEffect(() => {
    const draggableItems = document.querySelectorAll('.item');
    const layerDivs = document.querySelectorAll('.layer');

    draggableItems.forEach(item => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', item.dataset.match);
        e.dataTransfer.setData('text/id', item.textContent);
      });
    });

    layerDivs.forEach(layer => {
      layer.addEventListener('dragover', e => {
        e.preventDefault();
        layer.classList.add('highlight');
      });

      layer.addEventListener('dragleave', () => {
        layer.classList.remove('highlight');
      });

      layer.addEventListener('drop', e => {
        e.preventDefault();
        layer.classList.remove('highlight');
        const correctLayer = e.dataTransfer.getData('text/plain');
        const draggedText = e.dataTransfer.getData('text/id');
        const thisLayer = layer.dataset.layer;

        if (correctLayer === thisLayer) {
          alert(`✅ Correct! ${draggedText} belongs to Layer ${thisLayer}.`);
          setClimbed(prev => {
            const next = prev + 1;
            climberRef.current.style.bottom = `${(next / 7) * 100}%`;
            if (next === 7) {
              setTimeout(() => alert("🎉 You've climbed all OSI layers! Well done!"), 300);
            }
            return next;
          });
          draggableItems.forEach(i => {
            if (i.textContent === draggedText) i.style.display = 'none';
          });
        } else {
          alert(`❌ Oops! ${draggedText} does not belong to Layer ${thisLayer}.`);
        }
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', background: 'linear-gradient(to top, #e0f7fa, #ffffff)', padding: 20, textAlign: 'center' }}>
      <h1>🌐 OSI Model - Learn & Play</h1>

      <div style={{
        maxWidth: 800, margin: 'auto', background: '#f3f3f3', padding: 20, borderRadius: 10,
        textAlign: 'left', marginBottom: 30
      }}>
        <h2>🔍 What is the OSI Model?</h2>
        <p>The OSI (Open Systems Interconnection) model explains how data moves from one computer to another in a network, layer-by-layer. There are 7 layers:</p>
        <div style={explanationBox}><strong>7. Application Layer:</strong> Interface for the user. (Examples: Browser, Email)</div>
        <div style={explanationBox}><strong>6. Presentation Layer:</strong> Data translation, encryption. (Examples: JPEG, SSL)</div>
        <div style={explanationBox}><strong>5. Session Layer:</strong> Manages sessions between devices. (Examples: API sessions)</div>
        <div style={explanationBox}><strong>4. Transport Layer:</strong> Ensures complete data transfer. (Examples: TCP, UDP)</div>
        <div style={explanationBox}><strong>3. Network Layer:</strong> Handles routing and IP addresses. (Examples: IP, Router)</div>
        <div style={explanationBox}><strong>2. Data Link Layer:</strong> Manages MAC addresses, switches. (Examples: Ethernet, MAC)</div>
        <div style={explanationBox}><strong>1. Physical Layer:</strong> Actual hardware that sends signals. (Examples: Cables, Hub)</div>
      </div>

      <h2>🧗‍♂️ OSI Layer Climber Game</h2>
      <p>Drag the network component to its correct OSI layer to help the climber reach the top!</p>

      <div id="game" style={gameContainer}>
        <div id="climber" ref={climberRef} style={climberStyle}></div>
        {[7, 6, 5, 4, 3, 2, 1].map(layer => (
          <div key={layer} className="layer" data-layer={layer} style={layerStyle}>
            <span style={{ position: 'absolute', left: 10, top: 10, fontWeight: 'bold' }}>{layer}. {layerNames[layer]}</span>
          </div>
        ))}
      </div>

      <div className="draggables" style={{ marginTop: 20 }}>
        {items.map((item, index) => (
          <div key={index} className="item" draggable="true" data-match={item.match} style={itemStyle}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const explanationBox = {
  marginBottom: 10,
  padding: 10,
  backgroundColor: '#e0f2f1',
  borderLeft: '5px solid #00796b',
  borderRadius: 5
};

const gameContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: 600,
  position: 'relative',
  border: '2px solid #ccc',
  margin: 'auto',
  width: '60%',
  background: '#f9f9f9'
};

const climberStyle = {
  width: 40,
  height: 40,
  backgroundColor: '#ff6f00',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  borderRadius: '50%'
};

const layerStyle = {
  width: '100%',
  height: 'calc(100% / 7)',
  borderTop: '1px solid #888',
  position: 'relative',
  boxSizing: 'border-box'
};

const itemStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  margin: 5,
  background: '#81d4fa',
  borderRadius: 10,
  cursor: 'grab'
};

const layerNames = {
  1: 'Physical',
  2: 'Data Link',
  3: 'Network',
  4: 'Transport',
  5: 'Session',
  6: 'Presentation',
  7: 'Application'
};

export default OSIClimberGame;
