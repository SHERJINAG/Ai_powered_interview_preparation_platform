import React, { useState } from 'react';

const SubqueryEscape = () => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const normalizeSQL = (sql) => {
    return sql.trim().toLowerCase().replace(/\s+/g, ' ');
  };

  const checkSubquery = () => {
    const userQuery = normalizeSQL(userInput);
    const expected = normalizeSQL(`
      SELECT Name FROM Customers
      WHERE CustomerID IN (
        SELECT CustomerID FROM Orders WHERE Amount > 600
      )
    `);

    if (userQuery === expected) {
      setFeedback({ message: '🎉 Correct! You escaped the subquery maze!', type: 'success' });
    } else {
      setFeedback({ message: '❌ Oops! Try again. Hint: Use IN with a nested SELECT.', type: 'error' });
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f4f9ff', padding: '20px' }}>
      <div className="container">
        <h1>📘 SQL Subqueries - Explained</h1>
        <p>
          A <strong>subquery</strong> is a SQL query nested inside another query. It's used when you need to:
          <ul>
            <li>Find a value based on a condition in another table</li>
            <li>Use the result of one query in another</li>
          </ul>
        </p>

        <h2>🧾 Example Tables:</h2>
        <h3>🧍 Customers</h3>
        <table>
          <thead>
            <tr><th>CustomerID</th><th>Name</th><th>City</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Alice</td><td>New York</td></tr>
            <tr><td>2</td><td>Bob</td><td>Los Angeles</td></tr>
            <tr><td>3</td><td>Charlie</td><td>Chicago</td></tr>
          </tbody>
        </table>

        <h3>📦 Orders</h3>
        <table>
          <thead>
            <tr><th>OrderID</th><th>CustomerID</th><th>Amount</th></tr>
          </thead>
          <tbody>
            <tr><td>101</td><td>1</td><td>300</td></tr>
            <tr><td>102</td><td>2</td><td>700</td></tr>
            <tr><td>103</td><td>1</td><td>500</td></tr>
          </tbody>
        </table>

        <h2>✅ Subquery Example:</h2>
        <p>
          <strong>Goal:</strong> Find names of customers who placed an order over 600.
          <br /><br />
          <code>
            SELECT Name FROM Customers WHERE CustomerID IN (<br />
            &nbsp;&nbsp;SELECT CustomerID FROM Orders WHERE Amount &gt; 600<br />
            );
          </code>
        </p>

        <p>This returns:</p>
        <table>
          <thead>
            <tr><th>Name</th></tr>
          </thead>
          <tbody>
            <tr><td>Bob</td></tr>
          </tbody>
        </table>
      </div>

      <div className="container">
        <h2>🎮 Subquery Escape Game</h2>
        <p><strong>Task:</strong> Write a subquery to find all customer names who made orders above 600.</p>
        <input
          type="text"
          placeholder="Write your SQL here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={checkSubquery}>Run Query</button>
        {feedback.message && (
          <div className={`result ${feedback.type}`}>
            {feedback.message}
          </div>
        )}
      </div>

      <style>{`
        .container {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        h1, h2 {
          color: #2c3e50;
        }
        table {
          width: 100%;
          margin: 10px 0;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #aaa;
          padding: 8px;
          text-align: center;
        }
        input[type="text"] {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          margin-top: 10px;
        }
        button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background-color: #217dbb;
        }
        .result {
          padding: 12px;
          margin-top: 10px;
          display: block;
          border-radius: 5px;
        }
        .success {
          background: #d4edda;
          color: #155724;
        }
        .error {
          background: #f8d7da;
          color: #721c24;
        }
        code {
          background: #eef;
          padding: 2px 6px;
          border-radius: 5px;
          display: inline-block;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default SubqueryEscape;
