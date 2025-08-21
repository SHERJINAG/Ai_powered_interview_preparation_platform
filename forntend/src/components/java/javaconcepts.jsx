// src/components/java/JavaConcepts.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const javaTopics = [
  { name: 'Abstraction', path: 'abstraction' },
  { name: 'Class', path: 'class' },
  { name: 'Encapsulation', path: 'encapsulation' },
  { name: 'Inheritance', path: 'inheritance' },
  { name: 'Java Array', path: 'java-array' },
  { name: 'Java Basics', path: 'java-basics' },
  { name: 'Java Core', path: 'java-core' },
  { name: 'Java Final', path: 'java-final' },
  
  { name: 'Methods', path: 'methods' },
  { name: 'Polymorphism', path: 'polymorphism' },
];

const JavaConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .java-concepts {
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
        color: #2196f3;
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
    <div className="java-concepts">
      <h1>☕ Java Gamified Learning</h1>
      <div className="concept-grid">
        {javaTopics.map((topic, idx) => (
          <Link
            to={`/gamified/java/${topic.path}`}
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

export default JavaConcepts;
