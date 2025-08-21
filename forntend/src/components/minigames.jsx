import React from 'react'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="mini-dashboard">
      <h1 className="mini-title">🎮 Mini Games Hub</h1>
      
      <div className="mini-game-grid">
        {[
          { name: "2048", path: "/mini-games/game2048", desc: "A sliding block puzzle game." },
          { name: "Tetris", path: "/mini-games/tetris", desc: "Classic puzzle game." },
          { name: "Binary Game", path: "/mini-games/binarygame", desc: "Solve binary puzzles based on clues." },
          { name: "Simon Game", path: "/mini-games/simon", desc: "Improve brain function with memory sequences." },
          { name: "Memory Card", path: "/mini-games/black", desc: "Test and enhance your memory skills." }
        ].map((game, idx) => (
          <div className="mini-card" key={idx}>
            <h3><Link to={game.path}>{game.name}</Link></h3>
            <p>{game.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .mini-dashboard {
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #e0eafc, #cfdef3);
          min-height: 100vh;
        }

        .mini-title {
          font-size: 2.8rem;
          color: #333;
          margin-bottom: 30px;
          text-align: center;
        }

        .mini-game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mini-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .mini-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .mini-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .mini-card a {
          color: #007bff;
          text-decoration: none;
        }

        .mini-card a:hover {
          text-decoration: underline;
        }

        .mini-card p {
          color: #555;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
