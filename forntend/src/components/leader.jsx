import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("https://sherjinag-ai-learning.hf.space/leaderboard")
      .then(response => response.json())
      .then(data => {
        const withPosition = data.map((item, index) => ({
          ...item,
          position: index + 1
        }));
        setLeaderboard(withPosition);
      })
      .catch(error => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quiz Leaderboard</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Position</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{entry.position}</td>
              <td style={styles.td}>{entry.email}</td>
              <td style={styles.td}>{entry.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Embedded CSS styles
const styles = {
  container: {
    width: '80%',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  heading: {
    color: '#333'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  },
  th: {
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white'
  },
  td: {
    border: '1px solid #ccc',
    padding: '10px'
  },
  evenRow: {
    backgroundColor: '#f2f2f2'
  },
  oddRow: {
    backgroundColor: '#ffffff'
  }
};

export default Leaderboard;
