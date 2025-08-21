import React, { useState, useEffect } from 'react';

const ROWS = 20;
const COLS = 10;
const TETROMINOS = [
  { shape: [[1, 1], [1, 1]], color: '#00f' }, // O-shape
  { shape: [[1, 0, 0], [1, 1, 1]], color: '#f00' }, // L-shape
  { shape: [[0, 0, 1], [1, 1, 1]], color: '#0f0' }, // J-shape
  { shape: [[1, 1, 0], [0, 1, 1]], color: '#ff0' }, // S-shape
  { shape: [[0, 1, 1], [1, 1, 0]], color: '#f0f' }, // Z-shape
  { shape: [[1, 1, 1], [0, 1, 0]], color: '#0ff' }, // T-shape
  { shape: [[1, 1, 1, 1]], color: '#f80' }, // I-shape
];

const randomTetromino = () => {
  const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
  return TETROMINOS[randomIndex];
};

const App = () => {
  const emptyBoard = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  const [board, setBoard] = useState(emptyBoard());
  const [currentTetromino, setCurrentTetromino] = useState(randomTetromino());
  const [currentPosition, setCurrentPosition] = useState({ x: 4, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;
      switch (e.key) {
        case 'ArrowUp':
          rotateTetromino();
          break;
        case 'ArrowLeft':
          moveTetromino(-1, 0);
          break;
        case 'ArrowRight':
          moveTetromino(1, 0);
          break;
        case 'ArrowDown':
          moveTetromino(0, 1);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    const gameInterval = setInterval(() => {
      if (!gameOver) moveTetrominoDown();
    }, 500);

    return () => {
      clearInterval(gameInterval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentTetromino, currentPosition, gameOver]);

  const rotateTetromino = () => {
    const rotated = currentTetromino.shape[0].map((_, i) =>
      currentTetromino.shape.map((row) => row[i]).reverse()
    );
    if (isPositionValid(rotated, currentPosition)) {
      setCurrentTetromino({ ...currentTetromino, shape: rotated });
    }
  };

  const moveTetromino = (dx, dy) => {
    const newPos = { x: currentPosition.x + dx, y: currentPosition.y + dy };
    if (isPositionValid(currentTetromino.shape, newPos)) {
      setCurrentPosition(newPos);
    }
  };

  const moveTetrominoDown = () => {
    const newPosition = { x: currentPosition.x, y: currentPosition.y + 1 };
    if (isPositionValid(currentTetromino.shape, newPosition)) {
      setCurrentPosition(newPosition);
    } else {
      placeTetromino();
      clearRows();
      const nextTetromino = randomTetromino();
      const startPosition = { x: 4, y: 0 };
      if (!isPositionValid(nextTetromino.shape, startPosition)) {
        setGameOver(true);
      } else {
        setCurrentTetromino(nextTetromino);
        setCurrentPosition(startPosition);
      }
    }
  };

  const isPositionValid = (shape, position) => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newRow = position.y + row;
          const newCol = position.x + col;
          if (
            newRow < 0 ||
            newRow >= ROWS ||
            newCol < 0 ||
            newCol >= COLS ||
            board[newRow][newCol] !== 0
          ) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeTetromino = () => {
    const newBoard = board.map((row) => [...row]);
    const { shape } = currentTetromino;
    const { x, y } = currentPosition;
    shape.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell !== 0 && y + i >= 0) {
          newBoard[y + i][x + j] = 1;
        }
      });
    });
    setBoard(newBoard);
  };

  const clearRows = () => {
    const newBoard = board.filter((row) => row.some((cell) => cell === 0));
    const clearedRows = ROWS - newBoard.length;
    if (clearedRows > 0) {
      setScore(score + clearedRows * 100);
      const emptyRows = Array.from({ length: clearedRows }, () => Array(COLS).fill(0));
      setBoard([...emptyRows, ...newBoard]);
    }
  };

  const restartGame = () => {
    setBoard(emptyBoard());
    setCurrentTetromino(randomTetromino());
    setCurrentPosition({ x: 4, y: 0 });
    setGameOver(false);
    setScore(0);
  };

  const renderBoard = () => {
    const display = board.map((row) => row.slice());

    currentTetromino.shape.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          const y = currentPosition.y + i;
          const x = currentPosition.x + j;
          if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
            display[y][x] = 2; // Mark tetromino for rendering
          }
        }
      });
    });

    return display.flat().map((cell, idx) => (
      <div
        key={idx}
        className="cell"
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: cell === 0 ? '#333' : cell === 2 ? currentTetromino.color : '#888',
          border: '1px solid #222',
        }}
      ></div>
    ));
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Score: {score}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 30px)`,
          gridTemplateRows: `repeat(${ROWS}, 30px)`,
          margin: 'auto',
          backgroundColor: '#000',
          border: '2px solid #fff',
          width: 'max-content',
        }}
      >
        {renderBoard()}
      </div>

      {gameOver && (
        <div style={{ marginTop: '20px' }}>
          <h1 style={{ color: 'red' }}>Game Over</h1>
          <button onClick={restartGame} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
