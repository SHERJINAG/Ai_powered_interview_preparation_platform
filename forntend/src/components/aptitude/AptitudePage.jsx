import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const aptitudeTopics = [
  { name: 'Number System', path: 'number-system' },
  { name: 'LCM and HCF', path: 'lcm-hcf' },
  { name: 'Simplification', path: 'simplification' },
  { name: 'Surds and Indices', path: 'surds-indices' },
  { name: 'Average', path: 'average' },
  { name: 'Percentage', path: 'percentage' },
  { name: 'Profit and Loss', path: 'profit-loss' },
  { name: 'Simple Interest', path: 'simple-interest' },
  { name: 'Compound Interest', path: 'compound-interest' },
  { name: 'Ratio and Proportion', path: 'ratio-proportion' },
  { name: 'Partnership', path: 'partnership' },
  { name: 'Mixture and Alligation', path: 'mixture-alligation' },
  { name: 'Time and Work', path: 'time-work' },
  { name: 'Pipes and Cisterns', path: 'pipes-cisterns' },
  { name: 'Time, Speed and Distance', path: 'time-speed-distance' },
  { name: 'Problems on Trains', path: 'problems-trains' },
  { name: 'Boats and Streams', path: 'boats-streams' },
  { name: 'Mensuration (2D and 3D)', path: 'mensuration' },
  { name: 'Area, Volume, Perimeter', path: 'area-volume-perimeter' },
  { name: 'Problems on Ages', path: 'problems-ages' },
  { name: 'Calendar', path: 'calendar' },
  { name: 'Clock', path: 'clock' },
  { name: 'Number Series', path: 'number-series' },
  { name: 'Alphabet Series', path: 'alphabet-series' },
  { name: 'Coding-Decoding', path: 'coding-decoding' },
  { name: 'Analogy', path: 'analogy' },
  { name: 'Blood Relations', path: 'blood-relations' },
  { name: 'Direction Sense', path: 'direction-sense' },
  { name: 'Seating Arrangement (Linear, Circular)', path: 'seating-arrangement' },
  { name: 'Puzzles', path: 'puzzles' },
  { name: 'Syllogism', path: 'syllogism' },
  { name: 'Statements and Assumptions', path: 'statements-assumptions' },
  { name: 'Statements and Conclusions', path: 'statements-conclusions' },
  { name: 'Cause and Effect', path: 'cause-effect' },
  { name: 'Logical Reasoning', path: 'logical-reasoning' },
  { name: 'Permutations and Combinations', path: 'permutations-combinations' },
  { name: 'Probability', path: 'probability' },
];

const AptitudeConcepts = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .aptitude-concepts {
        padding: 30px;
        font-family: 'Segoe UI', sans-serif;
        background: #f4f9ff;
      }

      .concept-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px;
      }

      .concept-card {
        background: #e8f0fe;
        border-radius: 10px;
        padding: 20px;
        text-decoration: none;
        color: #0d47a1;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        display: block;
      }

      .concept-card:hover {
        background: #d2e3fc;
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
    <div className="aptitude-concepts">
      <h1>🧠 Aptitude Gamified Learning</h1>
      <div className="concept-grid">
        {aptitudeTopics.map((topic, index) => (
          <Link
            to={`/gamified/aptitude/${topic.path}`}
            className="concept-card"
            key={index}
          >
            <h2>{topic.name}</h2>
            <p>Master {topic.name.toLowerCase()} with interactive examples!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AptitudeConcepts;
