import React, { useState } from 'react';

function TreasureHunt() {
  const [resultMessage, setResultMessage] = useState('');
  const [visited, setVisited] = useState(new Set());

  const treasureMap = {
    beach: "a crab 🦀",
    cave: "a glowing crystal 💎",
    forest: "a treasure chest 🎉", // this is the treasure!
    mountain: "an eagle feather 🪶",
  };

  const search = (location) => {
    if (visited.has(location)) {
      setResultMessage(`🔁 You've already searched the ${location}.`);
      return;
    }

    const newVisited = new Set(visited);
    newVisited.add(location);
    setVisited(newVisited);

    const found = treasureMap[location];

    if (found.includes("treasure")) {
      setResultMessage(`🎉 You found the treasure in the ${location}! ${found}`);
    } else {
      setResultMessage(`❌ No treasure here. You found ${found}.`);
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#fff8e1', padding: '30px', color: '#3e2723' }}>
      <h1>🏝️ Dictionaries & Sets - Treasure Hunt Game</h1>

      <div style={{ background: '#ffffff', borderRadius: '10px', padding: '20px', marginBottom: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#bf360c' }}>📘 Understanding Dictionaries & Sets</h2>
        <p><strong>Dictionaries</strong> store data in key-value pairs.</p>
        <pre style={{ background: '#fbe9e7', padding: '10px', borderRadius: '6px', overflowX: 'auto' }}>
          <code>{`tools = {
  "beach": "shovel",
  "forest": "map",
  "cave": "torch"
}`}</code>
        </pre>

        <p><strong>Sets</strong> store unique items:</p>
        <pre style={{ background: '#fbe9e7', padding: '10px', borderRadius: '6px', overflowX: 'auto' }}>
          <code>{`found = {"shovel", "map"}
if "map" in found:
    print("Map found!")`}</code>
        </pre>
      </div>

      <div style={{ background: '#fff3e0', border: '2px solid #ffb74d', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h2 style={{ color: '#bf360c' }}>🗝️ Game: Find the Hidden Treasure</h2>
        <p>Click on a location to see what's inside. Only one place has the treasure!</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          <div
            onClick={() => search('beach')}
            style={{
              background: '#ffe0b2',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '15px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            Beach
          </div>
          <div
            onClick={() => search('cave')}
            style={{
              background: '#ffe0b2',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '15px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            Cave
          </div>
          <div
            onClick={() => search('forest')}
            style={{
              background: '#ffe0b2',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '15px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            Forest
          </div>
          <div
            onClick={() => search('mountain')}
            style={{
              background: '#ffe0b2',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '15px 20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            Mountain
          </div>
        </div>

        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          {resultMessage}
        </div>
      </div>
    </div>
  );
}

export default TreasureHunt;
