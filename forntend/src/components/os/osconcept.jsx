// src/components/os/OSConcepts.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const osTopics = [
  { name: 'OS Basics', path: 'os-basics' },
  { name: 'Boot', path: 'boot' },
  { name: 'Paging', path: 'paging' },
  { name: 'Kernel', path: 'kernel' },
  { name: 'Deadlock', path: 'deadlock' },
  { name: 'Multithreading', path: 'multithreading' },
  { name: 'Process Scheduling', path: 'process-scheduling' },
  { name: 'Thread', path: 'thread' },
  { name: 'OS Security', path: 'os-security' },
];

const OSConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .os-concepts {
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
        background: #e3f2fd;
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: #0d47a1;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #bbdefb;
        text-decoration: none;
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);

    // Optional cleanup when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="os-concepts">
      <h1>💻 Operating System Gamified Learning</h1>
      <div className="concept-grid">
        {osTopics.map((topic, index) => (
          <Link
            to={`/gamified/os/${topic.path}`}
            className="concept-card"
            key={index}
          >
            <h2>{topic.name}</h2>
            <p>Learn {topic.name.toLowerCase()} through an interactive game!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OSConcepts;
