import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: '#f0f4f8',
    margin: 0,
    padding: '20px',
    textAlign: 'center'
  },
  section: {
    maxWidth: '900px',
    margin: '20px auto',
    background: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  },
  thtd: {
    padding: '10px',
    border: '1px solid #ccc'
  },
  track: {
    position: 'relative',
    height: '160px',
    border: '2px dashed #aaa',
    marginTop: '20px',
    overflow: 'hidden'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    background: '#4caf50',
    color: 'white',
    cursor: 'pointer'
  },
  packet: {
    width: '60px',
    height: '30px',
    background: '#2196f3',
    color: 'white',
    textAlign: 'center',
    lineHeight: '30px',
    borderRadius: '5px',
    position: 'absolute'
  }
};

const PacketDashSimulation = () => {
  const [packets, setPackets] = useState([]);

  const sendPackets = (protocol) => {
    const packetCount = 5;
    const newPackets = [];

    for (let i = 0; i < packetCount; i++) {
      newPackets.push({
        id: i,
        label: 'P' + (i + 1),
        top: 20 + i * 28,
        left: 0,
        dropped: false,
        style: { ...styles.packet, top: `${20 + i * 28}px`, left: '0px' }
      });
    }

    setPackets(newPackets);

    if (protocol === 'TCP') {
      newPackets.forEach((packet, i) => {
        setTimeout(() => {
          setPackets((prev) => {
            const updated = [...prev];
            updated[packet.id] = {
              ...packet,
              style: {
                ...packet.style,
                transition: 'left 2s linear',
                left: '85%'
              }
            };
            return [...updated];
          });
        }, i * 400);
      });
    } else {
      const shuffled = [...newPackets].sort(() => Math.random() - 0.5);
      shuffled.forEach((packet, i) => {
        setTimeout(() => {
          const drop = Math.random() < 0.3;
          setPackets((prev) => {
            const updated = [...prev];
            updated[packet.id] = {
              ...packet,
              label: drop ? '❌' : packet.label,
              dropped: drop,
              style: {
                ...packet.style,
                backgroundColor: drop ? '#e53935' : '#2196f3',
                transition: !drop ? 'left 1.5s linear' : undefined,
                left: !drop ? '85%' : '0px'
              }
            };
            return [...updated];
          });
        }, i * 300);
      });
    }
  };

  return (
    <div style={styles.body}>
      <h1>📦 TCP vs UDP - Packet Dash Simulation</h1>

      <div style={styles.section}>
        <h2>💡 What is TCP and UDP?</h2>
        <p>
          <strong>TCP (Transmission Control Protocol)</strong> and <strong>UDP (User Datagram Protocol)</strong> are protocols used to send data across the internet. They work at the <strong>Transport Layer</strong> of the OSI Model.
        </p>

        <h3>🚀 TCP (Transmission Control Protocol)</h3>
        <ul>
          <li>✅ Reliable and connection-oriented</li>
          <li>📩 Like a registered letter – confirmation of delivery</li>
          <li>📦 Guarantees packets arrive and in the correct order</li>
          <li>🔁 Retransmits lost/corrupted packets</li>
          <li>🐢 Slightly slower due to extra checks</li>
        </ul>

        <h3>⚡ UDP (User Datagram Protocol)</h3>
        <ul>
          <li>⚠️ Unreliable and connectionless</li>
          <li>🏷️ Like a postcard – no delivery confirmation</li>
          <li>❌ Packets may be lost, duplicated, or out of order</li>
          <li>⚡ Very fast and lightweight</li>
          <li>🎮 Ideal for games, live streaming, video calls</li>
        </ul>

        <h3>🔁 Quick Comparison</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thtd}>Feature</th>
              <th style={styles.thtd}>TCP</th>
              <th style={styles.thtd}>UDP</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={styles.thtd}>Reliability</td><td style={styles.thtd}>✅ Reliable</td><td style={styles.thtd}>❌ Unreliable</td></tr>
            <tr><td style={styles.thtd}>Order</td><td style={styles.thtd}>✅ Ordered</td><td style={styles.thtd}>❌ Unordered</td></tr>
            <tr><td style={styles.thtd}>Speed</td><td style={styles.thtd}>🐢 Slower</td><td style={styles.thtd}>⚡ Faster</td></tr>
            <tr><td style={styles.thtd}>Connection</td><td style={styles.thtd}>✅ Required</td><td style={styles.thtd}>❌ Not Required</td></tr>
            <tr><td style={styles.thtd}>Use Cases</td><td style={styles.thtd}>Web, File Transfer, Email</td><td style={styles.thtd}>Games, Streaming, VoIP</td></tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h2>🎮 Packet Dash Simulation</h2>
        <p>Choose a protocol to send 5 packets. See how they behave in TCP vs UDP!</p>

        <div>
          <button style={styles.button} onClick={() => sendPackets('TCP')}>Send with TCP</button>
          <button style={styles.button} onClick={() => sendPackets('UDP')}>Send with UDP</button>
        </div>

        <div style={styles.track}>
          {packets.map((packet) => (
            <div key={packet.id} style={packet.style}>{packet.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PacketDashSimulation;
