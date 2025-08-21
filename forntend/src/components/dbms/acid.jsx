import React, { useState } from 'react';

const AcidGame = () => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackClass, setFeedbackClass] = useState('');

  const normalizeSQL = (sql) => {
    return sql.trim().toLowerCase().replace(/\s+/g, ' ');
  };

  const checkTransaction = () => {
    const userQuery = normalizeSQL(userInput);

    const correctQuery = normalizeSQL(`
      BEGIN TRANSACTION;
      UPDATE Accounts SET Balance = Balance - 300 WHERE Name = 'Alice';
      UPDATE Accounts SET Balance = Balance + 300 WHERE Name = 'Bob';
      COMMIT;
    `);

    if (userQuery.includes('begin') && userQuery.includes('commit')) {
      if (userQuery.includes('balance - 300') && userQuery.includes('balance + 300')) {
        setFeedback('🎉 Success! You fixed the transaction with ACID rules!');
        setFeedbackClass('result success');
      } else {
        setFeedback('⚠️ Missing balance update operations.');
        setFeedbackClass('result error');
      }
    } else {
      setFeedback('❌ Error! Use BEGIN TRANSACTION and COMMIT to ensure Atomicity.');
      setFeedbackClass('result error');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>📘 Transactions & ACID Properties</h1>
        <p><strong>Transaction:</strong> A sequence of database operations that must be performed as a unit.</p>

        <h2>🔐 ACID Properties:</h2>
        <ul>
          <li><strong>Atomicity:</strong> All operations complete or none do.</li>
          <li><strong>Consistency:</strong> The database remains valid after the transaction.</li>
          <li><strong>Isolation:</strong> Transactions don’t interfere with each other.</li>
          <li><strong>Durability:</strong> Once committed, changes are permanent.</li>
        </ul>

        <h2>🧾 Sample Tables:</h2>
        <h3>🏦 Accounts</h3>
        <table style={styles.table}>
          <thead>
            <tr><th>AccountID</th><th>Name</th><th>Balance</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Alice</td><td>1000</td></tr>
            <tr><td>2</td><td>Bob</td><td>500</td></tr>
          </tbody>
        </table>

        <h2>⚠️ Broken Transaction:</h2>
        <p>
          Suppose we transfer 300 from Alice to Bob:<br /><br />
          <code>
            UPDATE Accounts SET Balance = Balance - 300 WHERE Name = 'Alice';<br />
            -- DB crashes here!<br />
            UPDATE Accounts SET Balance = Balance + 300 WHERE Name = 'Bob';
          </code>
        </p>
        <p><strong>Problem:</strong> Alice's money is deducted but Bob didn’t receive it = ❌ No Atomicity!</p>
      </div>

      <div style={styles.container}>
        <h2>🎮 ACID Attack Game</h2>
        <p><strong>Task:</strong> Enter the correct transaction SQL using ACID principles to fix the transfer:</p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Write your SQL transaction here..."
          style={styles.input}
        />
        <button onClick={checkTransaction} style={styles.button}>Run</button>
        {feedback && <div style={{ ...styles.result, ...(feedbackClass.includes('success') ? styles.success : styles.error) }}>{feedback}</div>}
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#f4f4f4',
    padding: '20px',
    lineHeight: 1.6,
  },
  container: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    padding: '10px',
    borderRadius: '6px',
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  table: {
    width: '100%',
    marginTop: '10px',
    borderCollapse: 'collapse',
  },
};

export default AcidGame;
