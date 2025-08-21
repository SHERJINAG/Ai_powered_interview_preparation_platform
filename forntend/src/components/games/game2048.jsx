import React, { useState, useEffect } from "react";

const Game2048 = () => {
    const gridSize = 4;
    const [tiles, setTiles] = useState(Array.from({ length: gridSize }, () => Array(gridSize).fill(0)));
    const [score, setScore] = useState(0);

    const initializeGame = () => {
        addRandomTile();
        addRandomTile();
        updateDisplay();
    };

    const addRandomTile = () => {
        const availablePositions = [];
        tiles.forEach((row, rowIndex) => {
            row.forEach((tile, colIndex) => {
                if (tile === 0) {
                    availablePositions.push({ row: rowIndex, col: colIndex });
                }
            });
        });
        if (availablePositions.length > 0) {
            const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
            const newTiles = [...tiles];
            newTiles[randomPosition.row][randomPosition.col] = Math.random() < 0.9 ? 2 : 4;
            setTiles(newTiles);
        }
    };

    const updateDisplay = () => {
        // The state updates will automatically trigger re-rendering of the component, so no manual DOM manipulation is needed.
    };

    const getTileColor = (value) => {
        switch (value) {
            case 2: return "#eee4da";
            case 4: return "#ede0c8";
            case 8: return "#f2b179";
            case 16: return "#f59563";
            case 32: return "#f67c5f";
            case 64: return "#f65e3b";
            case 128: return "#edcf72";
            case 256: return "#edcc61";
            case 512: return "#9c0";
            case 1024: return "#33b5e5";
            case 2048: return "#09c";
            default: return "#CDC1B4";
        }
    };

    const moveTiles = (direction) => {
        const newTiles = [...tiles];
        switch (direction) {
            case "up": moveUp(newTiles); break;
            case "down": moveDown(newTiles); break;
            case "left": moveLeft(newTiles); break;
            case "right": moveRight(newTiles); break;
        }
        setTiles(newTiles);
        addRandomTile();
        updateDisplay();
    };

    const moveUp = (newTiles) => {
        for (let col = 0; col < gridSize; col++) {
            for (let row = 1; row < gridSize; row++) {
                if (newTiles[row][col] !== 0) {
                    let nextRow = row - 1;
                    while (nextRow >= 0 && newTiles[nextRow][col] === 0) {
                        nextRow--;
                    }
                    if (nextRow >= 0 && newTiles[nextRow][col] === newTiles[row][col]) {
                        newTiles[nextRow][col] *= 2;
                        setScore(prevScore => prevScore + newTiles[nextRow][col]);
                        newTiles[row][col] = 0;
                    } else if (nextRow + 1 !== row) {
                        newTiles[nextRow + 1][col] = newTiles[row][col];
                        newTiles[row][col] = 0;
                    }
                }
            }
        }
    };

    const moveDown = (newTiles) => {
        for (let col = 0; col < gridSize; col++) {
            for (let row = gridSize - 2; row >= 0; row--) {
                if (newTiles[row][col] !== 0) {
                    let nextRow = row + 1;
                    while (nextRow < gridSize && newTiles[nextRow][col] === 0) {
                        nextRow++;
                    }
                    if (nextRow < gridSize && newTiles[nextRow][col] === newTiles[row][col]) {
                        newTiles[nextRow][col] *= 2;
                        setScore(prevScore => prevScore + newTiles[nextRow][col]);
                        newTiles[row][col] = 0;
                    } else if (nextRow - 1 !== row) {
                        newTiles[nextRow - 1][col] = newTiles[row][col];
                        newTiles[row][col] = 0;
                    }
                }
            }
        }
    };

    const moveLeft = (newTiles) => {
        for (let row = 0; row < gridSize; row++) {
            for (let col = 1; col < gridSize; col++) {
                if (newTiles[row][col] !== 0) {
                    let nextCol = col - 1;
                    while (nextCol >= 0 && newTiles[row][nextCol] === 0) {
                        nextCol--;
                    }
                    if (nextCol >= 0 && newTiles[row][nextCol] === newTiles[row][col]) {
                        newTiles[row][nextCol] *= 2;
                        setScore(prevScore => prevScore + newTiles[row][nextCol]);
                        newTiles[row][col] = 0;
                    } else if (nextCol + 1 !== col) {
                        newTiles[row][nextCol + 1] = newTiles[row][col];
                        newTiles[row][col] = 0;
                    }
                }
            }
        }
    };

    const moveRight = (newTiles) => {
        for (let row = 0; row < gridSize; row++) {
            for (let col = gridSize - 2; col >= 0; col--) {
                if (newTiles[row][col] !== 0) {
                    let nextCol = col + 1;
                    while (nextCol < gridSize && newTiles[row][nextCol] === 0) {
                        nextCol++;
                    }
                    if (nextCol < gridSize && newTiles[row][nextCol] === newTiles[row][col]) {
                        newTiles[row][nextCol] *= 2;
                        setScore(prevScore => prevScore + newTiles[row][nextCol]);
                        newTiles[row][col] = 0;
                    } else if (nextCol - 1 !== col) {
                        newTiles[row][nextCol - 1] = newTiles[row][col];
                        newTiles[row][col] = 0;
                    }
                }
            }
        }
    };

    useEffect(() => {
        initializeGame();
    }, []);

    useEffect(() => {
        const handleKeydown = (event) => {
            const keyMap = {
                ArrowUp: "up",
                ArrowDown: "down",
                ArrowLeft: "left",
                ArrowRight: "right"
            };
            const direction = keyMap[event.key];
            if (direction) {
                moveTiles(direction);
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [tiles]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>2048 Game</h1>
            <p>Score: {score}</p>
            <div id="game-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 100px)',
                gridGap: '5px',
                backgroundColor: '#bbada0',
                padding: '5px',
                borderRadius: '6px'
            }}>
                {tiles.map((row, rowIndex) =>
                    row.map((tile, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="tile"
                            style={{
                                backgroundColor: getTileColor(tile),
                                borderRadius: '6px',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100px',
                                width: '100px'
                            }}
                        >
                            {tile === 0 ? "" : tile}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Game2048;
