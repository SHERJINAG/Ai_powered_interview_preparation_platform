import React from 'react';
import { Link } from 'react-router-dom';
import './GamifiedLearning.css';
import Chatbot from './Chatbot'; // Add this

const subjects = [
  { name: "English", path: "/GamifiedLearning/english" },
  { name: "Python", path: "/GamifiedLearning/python" },
  { name: "Java", path: "/GamifiedLearning/java" },
  { name: "Web Development", path: "/GamifiedLearning/web" },
  { name: "AI/ML", path: "/GamifiedLearning/aiml" },
  { name: "DBMS", path: "/GamifiedLearning/dbms" },
  { name: "Operating System", path: "/GamifiedLearning/os" },
  { name: "Networking", path: "/GamifiedLearning/networking" },
  {name:"Apptitude",path:"/GamifiedLearning/aptitude"},
];

const GamifiedLearning = () => {
  return (
    <div className="gamified-container">
      <h1>🎮 Gamified Learning</h1>
      <div className="subject-grid">
        {subjects.map((subject, index) => (
          <Link to={subject.path} key={index} className="subject-card">
            <h2>{subject.name}</h2>
            <p>Start learning {subject.name} with games and quizzes!</p>
          </Link>
        ))}
      </div>

      {/* Only chatbot icon shows initially, expands on click */}
      <Chatbot />
    </div>
  );
};

export default GamifiedLearning;
