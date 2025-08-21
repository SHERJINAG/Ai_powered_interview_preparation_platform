import React, { useState } from 'react';

const NodeJsTerminalSimulation = () => {
  const [output, setOutput] = useState([
    { type: 'command', text: '> node app.js' },
    {
      type: 'output',
      text: `Node.js is a runtime environment that lets you run JavaScript on the server.

Here are some basics:
  • Modules: Import code using \`require()\`
  • File System: Read/write files using \`fs\`
  • HTTP: Create servers using \`http.createServer()\`
  • npm: Manage packages using \`npm install\``,
    },
    { type: 'command', text: "> require('fs')" },
    { type: 'output', text: 'Loaded: File System module ✅' },
    { type: 'command', text: '> http.createServer()' },
    { type: 'output', text: 'Server created on port 3000 ✅' },
  ]);
  const [input, setInput] = useState('');
  const [disabled, setDisabled] = useState(false);

  const commands = {
    "require('fs')": '✅ File System module loaded.',
    "require('http')": '✅ HTTP module loaded.',
    'http.createServer()': '✅ Server created on port 3000.',
    'fs.readFile()': '✅ Reading file from disk...',
    "console.log('Hello')": '🖨️  Hello',
    'npm install express': '📦 Installing express... Done!',
    "require('express')": '✅ Express module loaded.',
    'process.exit()': '👋 Exiting simulation... Refresh to play again.',
  };

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const response = commands[cmd] || '❌ Unknown or unsupported command.';

      setOutput((prev) => [
        ...prev,
        { type: 'command', text: `> ${cmd}` },
        { type: 'output', text: response },
      ]);

      setInput('');

      if (cmd === 'process.exit()') {
        setDisabled(true);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4', fontFamily: 'Courier New, monospace', padding: '20px' }}>
      <div
        style={{
          backgroundColor: '#000',
          border: '2px solid #00ff00',
          padding: '20px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '800px',
          marginBottom: '40px',
          whiteSpace: 'pre-line',
        }}
      >
        {output.map((item, index) => (
          <div key={index} style={{ color: item.type === 'command' ? '#00ff00' : '#ffffff' }}>
            {item.text}
          </div>
        ))}
      </div>

      <h2 style={{ color: '#00ff00' }}>🎮 Node.js Terminal Game</h2>

      <div
        style={{
          backgroundColor: '#000',
          border: '2px solid #00ff00',
          padding: '20px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '800px',
          whiteSpace: 'pre-line',
        }}
      >
        <div style={{ color: '#ffffff' }}>Type a Node.js command to simulate behavior (e.g., <code>require('fs')</code>)</div>
        <input
          type="text"
          value={input}
          disabled={disabled}
          placeholder="Type a command and press Enter..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '10px',
            backgroundColor: '#2d2d2d',
            color: '#d4d4d4',
            border: 'none',
            fontFamily: 'inherit',
            fontSize: '16px',
            borderBottom: '2px solid #00ff00',
            marginTop: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default NodeJsTerminalSimulation;
