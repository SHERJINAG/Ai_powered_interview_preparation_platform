// src/components/networking/NetworkingConcepts.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const networkingTopics = [
  { name: 'OSI Model', path: 'osi' },
  { name: 'DNS', path: 'dns' },
  { name: 'HTTP', path: 'http' },
  { name: 'IP Address', path: 'ip' },
  { name: 'MAC Address', path: 'mac' },
  { name: 'Network Devices', path: 'networkdevice' },
  { name: 'Router', path: 'router' },
  { name: 'TCP', path: 'tcp' },
  { name: 'Topology', path: 'topology' },
];

const NetworkingConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .networking-concepts {
        padding: 30px;
        font-family: 'Segoe UI', sans-serif;
        background: #f9f9f9;
      }

      .concept-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px;
      }

      .concept-card {
        background: #ffe0b2;
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: #e65100;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #ffcc80;
        text-decoration: none;
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="networking-concepts">
      <h1>🌐 Networking Gamified Learning</h1>
      <div className="concept-grid">
        {networkingTopics.map((topic, index) => (
          <Link
            to={`/gamified/networking/${topic.path}`}
            className="concept-card"
            key={index}
          >
            <h2>{topic.name}</h2>
            <p>Master {topic.name.toLowerCase()} with interactive games!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NetworkingConcepts;
