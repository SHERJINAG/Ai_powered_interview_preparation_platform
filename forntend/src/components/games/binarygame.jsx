import React, { useState, useEffect } from 'react';

const SIZE = 6;

const createEmptyBoard = () =>
  Array(SIZE).fill(null).map(() => Array(SIZE).fill(''));

const generateRandomPrefilledBoard = () => {
  const board = createEmptyBoard();
  const prefilled = new Set();
  const maxPrefill = Math.floor(Math.random() * 5) + 6; // 6 to 10 cells
  const attempts = 1000;

  const isValid = (r, c, val, board) => {
    const newBoard = board.map((row) => [...row]);
    newBoard[r][c] = val;

    // Rule 1: No more than two same digits in a row/column
    const lineHasTriple = (line) => /(000|111)/.test(line.join(''));
    const row = newBoard[r];
    const col = newBoard.map((row) => row[c]);

    if (lineHasTriple(row) || lineHasTriple(col)) return false;

    // Optional Rule 2: Not more than half 0s or 1s (can skip for smaller puzzles)
    const half = SIZE / 2;
    const rowCount = row.reduce((acc, val) => {
      if (val === '0') acc[0]++;
      if (val === '1') acc[1]++;
      return acc;
    }, [0, 0]);

    const colCount = col.reduce((acc, val) => {
      if (val === '0') acc[0]++;
      if (val === '1') acc[1]++;
      return acc;
    }, [0, 0]);

    if (rowCount[0] > half || rowCount[1] > half || colCount[0] > half || colCount[1] > half)
      return false;

    return true;
  };

  let placed = 0;
  let count = 0;

  while (placed < maxPrefill && count < attempts) {
    const r = Math.floor(Math.random() * SIZE);
    const c = Math.floor(Math.random() * SIZE);
    const key = `${r},${c}`;

    if (!prefilled.has(key) && board[r][c] === '') {
      const val = Math.random() > 0.5 ? '0' : '1';

      if (isValid(r, c, val, board)) {
        board[r][c] = val;
        prefilled.add(key);
        placed++;
      }
    }

    count++;
  }

  return { board, prefilled };
};

const App = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [prefilledCells, setPrefilledCells] = useState(new Set());
  const [message, setMessage] = useState('');

  const restartGame = () => {
    const { board, prefilled } = generateRandomPrefilledBoard();
    setBoard(board);
    setPrefilledCells(prefilled);
    setMessage('');
  };

  useEffect(() => {
    restartGame(); // initialize on mount
  }, []);

  const toggleCell = (row, col) => {
    if (prefilledCells.has(`${row},${col}`)) return;

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((r) => [...r]);
      const current = newBoard[row][col];
      newBoard[row][col] = current === '' ? '0' : current === '0' ? '1' : '';
      return newBoard;
    });
    setMessage('');
  };

  const handleCheck = () => {
    if (!checkNoThreeConsecutive(board)) {
      return setMessage('❌ No more than two same digits consecutively allowed.');
    }
    if (!checkEqualCount(board)) {
      return setMessage('❌ Each row/column must have equal number of 0s and 1s.');
    }
    if (!checkUnique(board)) {
      return setMessage('❌ Rows and columns must be unique.');
    }
    setMessage('✅ Congratulations! Puzzle is correct.');
  };

  const checkNoThreeConsecutive = (grid) => {
    const checkLine = (line) =>
      !/(000|111)/.test(line.join(''));
    for (let i = 0; i < SIZE; i++) {
      if (!checkLine(grid[i]) || !checkLine(grid.map(row => row[i]))) return false;
    }
    return true;
  };

  const checkEqualCount = (grid) => {
    const half = SIZE / 2;
    for (let i = 0; i < SIZE; i++) {
      const row = grid[i];
      const col = grid.map(row => row[i]);
      if (
        row.filter(v => v === '0').length > half ||
        row.filter(v => v === '1').length > half ||
        col.filter(v => v === '0').length > half ||
        col.filter(v => v === '1').length > half
      ) {
        return false;
      }
    }
    return true;
  };

  const checkUnique = (grid) => {
    const lines = grid.map(row => row.join(''));
    const cols = [];
    for (let i = 0; i < SIZE; i++) {
      cols.push(grid.map(row => row[i]).join(''));
    }
    const all = [...lines, ...cols];
    const set = new Set(all);
    return set.size === all.length;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧩 Binary Puzzle Game</h2>

      <div style={styles.grid}>
        {board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                ...styles.cell,
                backgroundColor: prefilledCells.has(`${r},${c}`) ? '#ddd' : '#fff',
                cursor: prefilledCells.has(`${r},${c}`) ? 'not-allowed' : 'pointer'
              }}
              onClick={() => toggleCell(r, c)}
            >
              {cell}
            </div>
          ))
        )}
      </div>

      <button onClick={handleCheck} style={styles.button}>Check</button>
      <button onClick={restartGame} style={{ ...styles.button, marginLeft: '10px' }}>
        Restart 🔄
      </button>

      <div style={styles.message(message)}>
        {message}
      </div>

      <div style={styles.section}>
        <h3>🕹️ How to Play</h3>
        <ul style={styles.list}>
          <li>Click any editable cell to cycle through <b>0 → 1 → empty</b>.</li>
          <li>Each row and column must contain an equal number of 0s and 1s.</li>
          <li>No three identical numbers next to each other.</li>
          <li>No two rows or columns can be the same.</li>
          <li>Click "Check" to validate your solution or "Restart" to get a new puzzle.</li>
        </ul>
      </div>

      
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '700px',
    margin: 'auto'
  },
  heading: {
    color: '#333',
    marginBottom: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${SIZE}, 50px)`,
    gridTemplateRows: `repeat(${SIZE}, 50px)`,
    gap: '5px',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  cell: {
    width: '50px',
    height: '50px',
    fontSize: '24px',
    border: '2px solid #333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '6px'
  },
  message: (msg) => ({
    marginTop: 20,
    fontWeight: 'bold',
    color: msg.startsWith('✅') ? 'green' : 'red'
  }),
  section: {
    textAlign: 'left',
    marginTop: '40px',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #ccc'
  },
  list: {
    textAlign: 'left',
    paddingLeft: '20px'
  }
};

export default App;
