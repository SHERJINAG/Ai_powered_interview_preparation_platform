import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true); // Human is X, AI is O
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const aiTimeout = setTimeout(() => makeAIMove(), 500); // slight delay
      return () => clearTimeout(aiTimeout);
    }
  }, [xIsNext, board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || !xIsNext) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setXIsNext(false);
  };

  const makeAIMove = () => {
    const available = board
      .map((val, i) => (val === null ? i : null))
      .filter((val) => val !== null);

    if (available.length === 0) return;

    const aiMove = available[Math.floor(Math.random() * available.length)];
    const newBoard = [...board];
    newBoard[aiMove] = 'O';
    setBoard(newBoard);
    setXIsNext(true);
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="tictactoe-container">
      <h2>Tic Tac Toe: Play vs AI</h2>
      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : board.every((cell) => cell !== null)
          ? 'Draw!'
          : `Next Player: ${xIsNext ? 'You (X)' : 'AI (O)'}`}
      </div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="button-wrapper">
        <button className="restart" onClick={restartGame}>Restart</button>
      </div>

      <style>{`
        .tictactoe-container {
          text-align: center;
          font-family: Arial, sans-serif;
          margin-top: 30px;
        }

        .status {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .board {
          display: inline-block;
        }

        .row {
          display: flex;
        }

        .square {
          width: 60px;
          height: 60px;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          margin: 2px;
          background-color: #fff;
          border: 2px solid #333;
          transition: background 0.2s;
        }

        .square:hover {
          background-color: #f0f0f0;
        }

        .button-wrapper {
          margin-top: 20px;
        }

        .restart {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .restart:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

// Helper to determine winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
