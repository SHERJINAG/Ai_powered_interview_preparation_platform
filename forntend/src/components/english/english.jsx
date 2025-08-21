import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const englishTopics = [
  { name: 'Article', path: 'article' },
  { name: 'Direct Speech', path: 'direct-speech' },
];

const EnglishConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .english-concepts {
        padding: 30px;
        font-family: 'Segoe UI', sans-serif;
        background: #f0f8ff;
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
        color: #1565c0;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #bbdefb;
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="english-concepts">
      <h1>📚 English Gamified Learning</h1>
      <div className="concept-grid">
        {englishTopics.map((topic, idx) => (
          <Link
            to={`/gamified/english/${topic.path}`}
            className="concept-card"
            key={idx}
          >
            <h2>{topic.name}</h2>
            <p>Master {topic.name.toLowerCase()} through an interactive game!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EnglishConcepts;
