import React, { useState } from 'react';

const JoinJourney = () => {
  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const checkQuery = () => {
    const input = query.trim().toLowerCase().replace(/\s+/g, ' ');
    const correct = "select students.name, marks.marks from students inner join marks on students.id = marks.studentid";

    if (input === correct) {
      setFeedback("🎉 Correct! You used INNER JOIN correctly!");
      setFeedbackType("success");
    } else {
      setFeedback("❌ Incorrect SQL. Try using INNER JOIN and check your syntax.");
      setFeedbackType("error");
    }
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      background: '#f0f4f8',
      margin: 20,
      padding: 0
    },
    section: {
      background: 'white',
      padding: 20,
      marginBottom: 20,
      borderRadius: 10,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    heading: {
      color: '#2c3e50'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '10px 0'
    },
    thtd: {
      border: '1px solid #ccc',
      padding: 10,
      textAlign: 'center'
    },
    input: {
      padding: 10,
      fontSize: 16,
      marginTop: 10,
      width: '100%'
    },
    button: {
      padding: 10,
      fontSize: 16,
      backgroundColor: '#2980b9',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      marginTop: 10
    },
    buttonHover: {
      backgroundColor: '#1c5986'
    },
    result: {
      padding: 10,
      marginTop: 10,
      borderRadius: 5
    },
    success: {
      backgroundColor: '#d4edda',
      color: '#155724'
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24'
    },
    code: {
      backgroundColor: '#eef',
      padding: '3px 6px',
      borderRadius: 5
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.section}>
        <h1 style={styles.heading}>🔗 SQL JOINs - Explanation</h1>
        <p>A <strong>JOIN</strong> in SQL is used to combine rows from two or more tables based on a related column between them.</p>

        <h2 style={styles.heading}>Types of JOINs</h2>
        <ul>
          <li><strong>INNER JOIN</strong>: Returns rows where there is a match in both tables.</li>
          <li><strong>LEFT JOIN</strong>: Returns all rows from the left table and matched rows from the right table.</li>
          <li><strong>RIGHT JOIN</strong>: Returns all rows from the right table and matched rows from the left table.</li>
          <li><strong>FULL JOIN</strong>: Returns all rows when there's a match in either table.</li>
        </ul>

        <h2 style={styles.heading}>Example Tables</h2>

        <h3>📘 Students Table</h3>
        <table style={styles.table}>
          <thead>
            <tr><th style={styles.thtd}>ID</th><th style={styles.thtd}>Name</th></tr>
          </thead>
          <tbody>
            <tr><td style={styles.thtd}>1</td><td style={styles.thtd}>Alice</td></tr>
            <tr><td style={styles.thtd}>2</td><td style={styles.thtd}>Bob</td></tr>
            <tr><td style={styles.thtd}>3</td><td style={styles.thtd}>Charlie</td></tr>
          </tbody>
        </table>

        <h3>📗 Marks Table</h3>
        <table style={styles.table}>
          <thead>
            <tr><th style={styles.thtd}>StudentID</th><th style={styles.thtd}>Subject</th><th style={styles.thtd}>Marks</th></tr>
          </thead>
          <tbody>
            <tr><td style={styles.thtd}>1</td><td style={styles.thtd}>Math</td><td style={styles.thtd}>90</td></tr>
            <tr><td style={styles.thtd}>2</td><td style={styles.thtd}>Math</td><td style={styles.thtd}>75</td></tr>
            <tr><td style={styles.thtd}>4</td><td style={styles.thtd}>Math</td><td style={styles.thtd}>88</td></tr>
          </tbody>
        </table>

        <h3>INNER JOIN Example:</h3>
        <p>
          <code style={styles.code}>
            SELECT Students.Name, Marks.Marks<br />
            FROM Students<br />
            INNER JOIN Marks ON Students.ID = Marks.StudentID;
          </code>
        </p>

        <p>✅ This will return:</p>
        <table style={styles.table}>
          <thead>
            <tr><th style={styles.thtd}>Name</th><th style={styles.thtd}>Marks</th></tr>
          </thead>
          <tbody>
            <tr><td style={styles.thtd}>Alice</td><td style={styles.thtd}>90</td></tr>
            <tr><td style={styles.thtd}>Bob</td><td style={styles.thtd}>75</td></tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>🎮 Join Journey Game</h2>
        <p>Write the correct SQL JOIN to get <strong>Name</strong> and <strong>Marks</strong> of students who have entries in both tables.</p>
        <input
          type="text"
          placeholder="Write your SQL query here..."
          style={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        <button style={styles.button} onClick={checkQuery}>Run Query</button>
        {feedback && (
          <div style={{ ...styles.result, ...(feedbackType === 'success' ? styles.success : styles.error) }}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinJourney;
