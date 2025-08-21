// src/components/dbms/DBMSConcepts.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const dbmsTopics = [
  { name: 'DBMS Basics', path: 'dbms-basics' },
  { name: 'ACID Properties', path: 'acid' },
  { name: 'ER Model', path: 'er' },
  { name: 'Normalization', path: 'normalization' },
  { name: 'Relation', path: 'relation' },
  { name: 'SQL Joins', path: 'sql-joins' },
  { name: 'SQL Query', path: 'sql-query' },
  { name: 'Subquery', path: 'subquery' },
  { name: 'Trigger', path: 'trigger' },
];

const DBMSConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .dbms-concepts {
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
        background: #fff3e0;
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: #e65100;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #ffe0b2;
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
    <div className="dbms-concepts">
      <h1>🗄️ DBMS Gamified Learning</h1>
      <div className="concept-grid">
        {dbmsTopics.map((topic, index) => (
          <Link
            to={`/gamified/dbms/${topic.path}`}
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

export default DBMSConcepts;
