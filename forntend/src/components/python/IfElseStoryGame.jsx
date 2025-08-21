import React, { useState } from 'react';

const IfElseStoryGame = () => {
  const [story, setStory] = useState(
    <>
      <p>You are standing at the entrance of a dark cave. Do you want to enter?</p>
      <button className="btn" onClick={() => choose('enter')}>Enter the cave</button>
      <button className="btn" onClick={() => choose('leave')}>Leave it</button>
    </>
  );

  const choose = (option) => {
    if (option === 'enter') {
      setStory(
        <>
          <p>You step inside. It's dark and spooky. You see two paths: one left, one right.</p>
          <button className="btn" onClick={() => path('left')}>Take the left path</button>
          <button className="btn" onClick={() => path('right')}>Take the right path</button>
        </>
      );
    } else {
      setStory(
        <>
          <p>You chose to stay safe and walked away. You live to explore another day!</p>
          <p className="end">🟢 THE END</p>
        </>
      );
    }
  };

  const path = (choice) => {
    if (choice === 'left') {
      setStory(
        <>
          <p>You take the left path and find a sleeping dragon! Do you sneak past or fight it?</p>
          <button className="btn" onClick={() => dragon('sneak')}>Sneak past</button>
          <button className="btn" onClick={() => dragon('fight')}>Fight!</button>
        </>
      );
    } else {
      setStory(
        <>
          <p>You take the right path and find a treasure chest. It's locked. Do you pick the lock or leave it?</p>
          <button className="btn" onClick={() => treasure('pick')}>Pick the lock</button>
          <button className="btn" onClick={() => treasure('leave')}>Leave it</button>
        </>
      );
    }
  };

  const dragon = (action) => {
    if (action === 'sneak') {
      setStory(
        <>
          <p>You sneak past the dragon quietly... and find a hidden exit with gold!</p>
          <p className="end">🏆 YOU WIN!</p>
        </>
      );
    } else {
      setStory(
        <>
          <p>You try to fight the dragon, but it's too strong. You run away!</p>
          <p className="end">🟠 YOU ESCAPED</p>
        </>
      );
    }
  };

  const treasure = (action) => {
    if (action === 'pick') {
      setStory(
        <>
          <p>You pick the lock successfully! Inside is a glowing sword and a map!</p>
          <p className="end">🏆 YOU WIN!</p>
        </>
      );
    } else {
      setStory(
        <>
          <p>You leave the chest and walk back safely. The treasure remains a mystery.</p>
          <p className="end">🟡 THE END</p>
        </>
      );
    }
  };

  return (
    <div style={styles.body}>
      <h1>🧠 Python If/Else - Story Branching Game</h1>

      <div style={styles.section}>
        <h2>🧾 Understanding Conditional Statements</h2>
        <p>
          In Python, <code>if</code>, <code>elif</code>, and <code>else</code> help you make decisions based on conditions.
        </p>
        <pre style={styles.pre}>
{`age = 18

if age >= 18:
    print("You can vote!")
elif age >= 13:
    print("You're a teenager.")
else:
    print("You're a child.")`}
        </pre>
        <p>Python checks the condition. If it's <code>true</code>, it runs the block under it.</p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Game: The Mysterious Cave Adventure</h2>
        <div style={styles.storyBox}>{story}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#fcf8f3',
    padding: '30px',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  pre: {
    backgroundColor: '#eee',
    padding: '10px',
    borderRadius: '6px',
    overflowX: 'auto',
  },
  storyBox: {
    backgroundColor: '#f1faff',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '20px',
  },
};

export default IfElseStoryGame;
