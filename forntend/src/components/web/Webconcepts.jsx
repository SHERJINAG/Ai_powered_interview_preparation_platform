import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BootstrapArena from './BootstrapArena'; // Example import for Bootstrap concept
import CSSAnimationArena from './CSSAnimationArena';
import FlexboxBuilder from './FlexboxBuilder';
import StyleSprintGame from './StyleSprintGame';
import FormFighter  from  './FormFighter';
import TagBuilder from './TagBuilder';
import CodeCraft from './CodeCraft';
import MongoPlayground from './MongoPlayground';
import NodeJsTerminalSimulation  from './NodeJsTerminalSimulation';
import ReactReactorGame from './ReactReactorGame';
const webGames = [
  { name: 'HTML Basics', path: 'html', component:<TagBuilder /> },
  { name: 'CSS Styles', path: 'cssstyle',component:<StyleSprintGame /> },
  { name: 'CSS Grid', path: 'cssgrid',component:<FlexboxBuilder /> },
  { name: 'CSS Animation', path: 'cssanimation',component: <CSSAnimationArena /> },
  { name: 'JavaScript', path: 'javascript',component:<CodeCraft /> },
  { name: 'Bootstrap', path: 'bootstrap', component: <BootstrapArena /> },
  { name: 'Forms', path: 'form', component:<FormFighter /> },
  { name: 'React', path: 'react',component:<ReactReactorGame /> },
  { name: 'Node.js', path: 'node',component:<NodeJsTerminalSimulation /> },
  { name: 'MongoDB', path: 'mongodb',component:<MongoPlayground /> },
];

const WebConcepts = () => {
  return (
    <div style={styles.webConcepts}>
      <h1>🌐 Web Gamified Learning</h1>
      <div style={styles.conceptGrid}>
        {webGames.map((game, index) => (
          <Link to={`/gamifiedlearning/web/${game.path}`} style={styles.conceptCard} key={index}>
            <h2>{game.name}</h2>
            <p>Learn {game.name.toLowerCase()} through an interactive module!</p>
          </Link>
        ))}
      </div>

      {/* Define routes for each web game */}
      <Routes>
        {webGames.map((game, index) => (
          <Route
            key={index}
            path={game.path}  // Notice no need to include `/GamifiedLearning/web/`
            element={game.component || <div>{game.name} game module</div>}
          />
        ))}
      </Routes>
    </div>
  );
};

const styles = {
  webConcepts: {
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
    background: '#f9f9f9',
  },
  conceptGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
  },
  conceptCard: {
    background: '#e3f2fd',
    borderRadius: '10px',
    padding: '20px',
    textDecoration: 'none',
    color: '#0d47a1',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
};

export default WebConcepts;
