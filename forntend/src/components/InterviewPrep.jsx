import React from 'react';
import { Link } from 'react-router-dom';
import './InterviewPrep.css'; // Optional CSS for styling

const InterviewPrep = () => {
  return (
    <div className="interview-prep-container">
      <h1 className="title">🎯 Interview Preparation Zone</h1>
      <ul className="prep-list">
        <li className="prep-item">
          <Link to="/interview-prep/gd" className="prep-link">
            🗣️ Group Discussion
          </Link>
        </li>
        
        <li className="prep-item">
          <Link to="/interview-prep/interviewnext" className="prep-link">
            🧑‍💼 Interview Advanced Practice
          </Link>
        </li>
        <li className="prep-item">
          <Link to="/interview-prep/aptitude" className="prep-link">
            🧠 Aptitude Practice
          </Link>
        </li>
        <li className="prep-item">
          <Link to="/interview-prep/aptitude-questions" className="prep-link">
            🧠 Aptitude Test Practice
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default InterviewPrep;
