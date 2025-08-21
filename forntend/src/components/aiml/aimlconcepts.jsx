// src/components/aiml/AIMLConcepts.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const aimlTopics = [
  { name: 'AIML Basics', path: 'aiml-basics' },
  { name: 'Accuracy', path: 'accuracy' },
  { name: 'Classification', path: 'classification' },
  { name: 'Dataset', path: 'dataset' },
  { name: 'Neural Networks', path: 'neural' },
  { name: 'Spam Detection', path: 'spam' },
  { name: 'Supervised Learning', path: 'supervised-learning' },
  { name: 'Training', path: 'training' },
];

const AIMLConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .aiml-concepts {
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
        background: #e8f5e9;
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: #2e7d32;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #c8e6c9;
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="aiml-concepts">
      <h1>🤖 AIML Gamified Learning</h1>
      <div className="concept-grid">
        {aimlTopics.map((topic, idx) => (
          <Link
            to={`/gamified/aiml/${topic.path}`}
            className="concept-card"
            key={idx}
          >
            <h2>{topic.name}</h2>
            <p>Learn {topic.name.toLowerCase()} through an interactive game!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AIMLConcepts;
