import React, { useState } from 'react';

function CharacterBuilder() {
  const [charName, setCharName] = useState('');
  const [charRole, setCharRole] = useState('Warrior');
  const [charPower, setCharPower] = useState('');
  const [charOutput, setCharOutput] = useState('');

  class Character {
    constructor(name, role, power) {
      this.name = name;
      this.role = role;
      this.power = power;
    }

    displayInfo() {
      return `${this.name} is a ${this.role} with power ${this.power}!`;
    }
  }

  const buildCharacter = () => {
    if (charName === '' || charPower === '') {
      setCharOutput('⚠️ Please fill all fields!');
      return;
    }

    const player = new Character(charName, charRole, charPower);
    setCharOutput(`✅ ${player.displayInfo()}`);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: '#f0f4ff', padding: '30px', color: '#003366' }}>
      <h1>🧙‍♂️ Python OOP - Character Builder</h1>

      <div style={{ background: '#e3f2fd', borderRadius: '10px', padding: '20px', marginBottom: '30px', boxShadow: '0 0 8px rgba(0, 0, 0, 0.05)' }}>
        <h2>📘 OOP in Python</h2>
        <pre>
          <code>
            {`class Character:
    def __init__(self, name, role, power):
        self.name = name
        self.role = role
        self.power = power

    def display_info(self):
        print(f"{self.name} is a {self.role} with power {self.power}!")`}
          </code>
        </pre>
      </div>

      <div style={{ background: '#bbdefb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
        <h2>🎮 Build Your Character</h2>

        <input
          type="text"
          placeholder="Character Name"
          value={charName}
          onChange={(e) => setCharName(e.target.value)}
          style={{ padding: '8px', margin: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #90caf9' }}
        />
        <select
          value={charRole}
          onChange={(e) => setCharRole(e.target.value)}
          style={{ padding: '8px', margin: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #90caf9' }}
        >
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Archer">Archer</option>
        </select>
        <input
          type="number"
          placeholder="Power (1-100)"
          min="1"
          max="100"
          value={charPower}
          onChange={(e) => setCharPower(e.target.value)}
          style={{ padding: '8px', margin: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #90caf9' }}
        />

        <br />
        <button
          onClick={buildCharacter}
          style={{
            marginTop: '15px',
            padding: '10px 18px',
            fontSize: '16px',
            background: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          🛡️ Create Character
        </button>

        <div
          style={{
            marginTop: '20px',
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#01579b',
          }}
        >
          {charOutput}
        </div>
      </div>
    </div>
  );
}

export default CharacterBuilder;
