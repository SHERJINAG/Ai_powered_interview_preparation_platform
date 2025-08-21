import React, { useState, useEffect } from 'react';
import './SimonGame.css';

const colors = ['red', 'green', 'blue', 'yellow'];

const SimonGame = () => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [gameStatus, setGameStatus] = useState('start');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  const addToSequence = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence(prev => [...prev, newColor]);
    setPlayerSequence([]);
    setIsPlayerTurn(false);
  };

  const flashSequence = async () => {
    for (let i = 0; i < sequence.length; i++) {
      const color = sequence[i];
      setActiveColor(color);
      await new Promise(res => setTimeout(res, 500));
      setActiveColor(null);
      await new Promise(res => setTimeout(res, 300));
    }
    setIsPlayerTurn(true);
  };

  const handlePlayerInput = (color) => {
    if (!isPlayerTurn) return;
    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (color !== sequence[newPlayerSequence.length - 1]) {
      setGameStatus('lost');
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      setLevel(level + 1);
      setTimeout(() => addToSequence(), 1000);
    }
  };

  const startGame = () => {
    setGameStatus('playing');
    setScore(0);
    setLevel(1);
    setSequence([]);
    setPlayerSequence([]);
    addToSequence();
  };

  const restartGame = () => {
    setGameStatus('start');
    setSequence([]);
    setPlayerSequence([]);
  };

  useEffect(() => {
    if (gameStatus === 'playing' && sequence.length > 0) {
      flashSequence();
    }
  }, [sequence, gameStatus]);

  return (
    <div className="game-container">
      <h1>Simon Game</h1>
      <div className="tutorial">
  <h2>How to Play</h2>
  <p>
    Simon is a memory game. Watch the sequence of flashing colors, then repeat it by clicking the boxes in the same order.
  </p>
  <ul>
    <li>The game will start with one color flashing.</li>
    <li>Click the boxes to repeat the sequence.</li>
    <li>Each round, one more color will be added to the sequence.</li>
    <li>If you click the wrong color, the game ends.</li>
    <li>Try to get the highest score by remembering as many sequences as possible!</li>
  </ul>
  <p>
    <strong>Tips:</strong><br />
    Focus and take your time during the sequence playback. Click only when it's your turn.
  </p>
</div>

      <div className="game-status">
        {gameStatus === 'start' && (
          <button className="start-button" onClick={startGame}>Start Game</button>
        )}
        {gameStatus === 'lost' && (
          <div>
            <p>Game Over! Your score: {score}</p>
            <button className="start-button" onClick={restartGame}>Restart</button>
          </div>
        )}
        {gameStatus === 'playing' && <p>Level: {level}</p>}
      </div>
      <div className="color-grid">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-box ${color} ${activeColor === color ? 'active' : ''}`}
            onClick={() => handlePlayerInput(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default SimonGame;
