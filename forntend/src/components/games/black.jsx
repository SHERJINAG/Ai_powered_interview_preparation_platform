import React, { useState, useEffect } from 'react';

// Shuffle function to shuffle the cards array
const shuffleCards = () => {
  const cards = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
  ];
  // Shuffle the cards array
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const App = () => {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  // Effect to check for matches when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (cards[firstCard] === cards[secondCard]) {
        setMatchedCards((prev) => [...prev, cards[firstCard]]);
        setScore((prev) => prev + 1); // Increase score on a match
      }
      setTimeout(() => setFlippedCards([]), 1000); // Wait for a while before resetting the flipped cards
    }
  }, [flippedCards, cards]);

  // Handle card click
  const handleCardClick = (index) => {
    // If two cards are already flipped, or the card is already flipped/matched, ignore the click
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(cards[index])) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]); // Flip the card
  };

  // Reset the game
  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
  };

  return (
    <div style={styles.gameContainer}>
      <h1>Memory Card Matching Game</h1>
      
      {/* Tutorial */}
      <p>
        <strong>How to Play:</strong><br />
        1. The game consists of a set of shuffled cards.<br />
        2. Your objective is to match pairs of cards.<br />
        3. Click on the cards to flip them.<br />
        4. If two cards match, they will stay face up.<br />
        5. If they don't match, they will flip back down.<br />
        6. The game ends when all pairs are matched.<br />
        7. Try to match the cards in as few flips as possible.
      </p>

      {/* Display score */}
      <p>Score: {score}</p>

      {/* Cards grid */}
      <div style={styles.cardGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(flippedCards.includes(index) || matchedCards.includes(card) ? styles.flippedCard : {}),
            }}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(card) ? card : '?'}
          </div>
        ))}
      </div>

      {/* Restart button */}
      {matchedCards.length === cards.length / 2 && (
        <button
          style={styles.resetButton}
          onClick={resetGame}
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

// Styles for the game
const styles = {
  gameContainer: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 100px)',
    gridGap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  card: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: '0.3s',
  },
  flippedCard: {
    backgroundColor: '#2ecc71',
  },
  resetButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    transition: 'background-color 0.3s',
  },
  resetButtonHover: {
    backgroundColor: '#c0392b',
  },
};

export default App;
