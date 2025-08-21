// src/components/python/PythonConcepts.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PythonConcepts.css';

const pythonGames = [
    { name: 'Datatypes', path: 'datatypes' },
{ name: 'if else', path: 'ifs' },
{ name: 'Operators', path: 'operators' },
  { name: 'Strings', path: 'strings' },

  { name: 'Loops', path: 'loops' },
  { name: 'Lists', path: 'lists' },

  { name: 'Functions', path: 'functions' },
  
  
  { name: 'File Handling', path: 'files' },
  { name: 'Classes', path: 'classes' },
{ name: 'Sets', path: 'sets' },
  { name: 'Modules', path: 'modules' },
];

const PythonConcepts = () => {
  return (
    <div className="python-concepts">
      <h1>🐍 Python Gamified Learning</h1>
      <div className="concept-grid">
        {pythonGames.map((game, index) => (
          <Link to={`/gamified/python/${game.path}`} className="concept-card" key={index}>
            <h2>{game.name}</h2>
            <p>Learn {game.name.toLowerCase()} through an interactive game!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PythonConcepts;
