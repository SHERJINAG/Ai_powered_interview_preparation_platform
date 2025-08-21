import React, { useState } from 'react';

const TriggerTrapGame = () => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const normalizeSQL = (sql) => sql.toLowerCase().replace(/\s+/g, ' ').trim();

  const checkTrigger = () => {
    const userInput = normalizeSQL(input);
    const correctTrigger = normalizeSQL(`
      CREATE TRIGGER log_new_order
      AFTER INSERT ON Orders
      FOR EACH ROW
      BEGIN
        INSERT INTO Logs (Message) VALUES ('New order inserted');
      END;
    `);

    if (
      userInput.includes("after insert") &&
      userInput.includes("on orders") &&
      userInput.includes("insert into logs") &&
      userInput.includes("'new order inserted'")
    ) {
      setFeedback("✅ Great! You've created a valid trigger to log new orders!");
      setIsCorrect(true);
    } else {
      setFeedback("❌ Your trigger is missing something. Make sure it logs the message after an order insert.");
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ background: '#fff', padding: '20px', marginBottom: '30px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1>⚙️ SQL Triggers Explained</h1>
        <p>A <strong>trigger</strong> is a database object that automatically executes a specified action in response to certain events on a table (INSERT, UPDATE, DELETE).</p>
        <h2>📘 Syntax:</h2>
        <code style={{ backgroundColor: '#eef', padding: '6px 8px', borderRadius: '6px', display: 'inline-block' }}>
          CREATE TRIGGER trigger_name<br />
          AFTER INSERT ON table_name<br />
          FOR EACH ROW<br />
          BEGIN<br />
          &nbsp;&nbsp;-- SQL statements<br />
          END;
        </code>
        <h2>📊 Tables:</h2>
        <p>We have two tables:</p>
        <h3>🧾 Orders</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr><th>OrderID</th><th>Product</th><th>Amount</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Laptop</td><td>1000</td></tr>
            <tr><td>2</td><td>Mouse</td><td>20</td></tr>
          </tbody>
        </table>
        <h3>🪪 Logs</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr><th>LogID</th><th>Message</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Order created</td></tr>
          </tbody>
        </table>
        <h2>❌ Problem:</h2>
        <p>When a new order is added to the Orders table, nothing is recorded in Logs.</p>
        <p><strong>Your task:</strong> Write a <span style={{ color: 'green' }}>trigger</span> to automatically insert a message into Logs whenever a new order is created.</p>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2>🎮 Trigger Trap Game</h2>
        <p>Write the SQL trigger to log each new order. Add a message: <code>'New order inserted'</code></p>
        <textarea
          rows="6"
          placeholder="Write your SQL trigger here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginTop: '10px', width: '100%', padding: '10px', fontSize: '16px' }}
        ></textarea>
        <button onClick={checkTrigger} style={{ backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', padding: '10px', marginTop: '10px' }}>
          Submit Trigger
        </button>
        {feedback && (
          <div
            style={{
              display: 'block',
              marginTop: '10px',
              padding: '12px',
              borderRadius: '6px',
              backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
              color: isCorrect ? '#155724' : '#721c24'
            }}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default TriggerTrapGame;
