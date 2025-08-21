import React, { useState } from 'react';

const SqlSprint = () => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [r1, setR1] = useState('');
  const [r2, setR2] = useState('');
  const [r3, setR3] = useState('');
  const [classR1, setClassR1] = useState('');
  const [classR2, setClassR2] = useState('');
  const [classR3, setClassR3] = useState('');

  const checkQ1 = () => {
    const query = q1.trim().toLowerCase();
    if (query === 'select name from students;' || query === 'select name from students') {
      setR1(
        `<b>✅ Correct!</b><br><table>
          <tr><th>Name</th></tr>
          <tr><td>Alice</td></tr>
          <tr><td>Bob</td></tr>
          <tr><td>Charlie</td></tr>
        </table>`
      );
      setClassR1('result');
    } else {
      setR1('❌ Try again! Hint: SELECT Name FROM Students;');
      setClassR1('result wrong');
    }
  };

  const checkQ2 = () => {
    const query = q2.trim().toLowerCase();
    if (query === "select * from students where grade = 'a';" || query === "select * from students where grade = 'a'") {
      setR2(
        `<b>✅ Correct!</b><br><table>
          <tr><th>ID</th><th>Name</th><th>Age</th><th>Grade</th></tr>
          <tr><td>1</td><td>Alice</td><td>20</td><td>A</td></tr>
          <tr><td>3</td><td>Charlie</td><td>21</td><td>A</td></tr>
        </table>`
      );
      setClassR2('result');
    } else {
      setR2("❌ Try again! Hint: SELECT * FROM Students WHERE Grade = 'A';");
      setClassR2('result wrong');
    }
  };

  const checkQ3 = () => {
    const query = q3.trim().toLowerCase();
    if (query === 'select count(*) from students;' || query === 'select count(*) from students') {
      setR3(`<b>✅ Correct!</b><br><p>Total Students: <strong>3</strong></p>`);
      setClassR3('result');
    } else {
      setR3('❌ Try again! Hint: SELECT COUNT(*) FROM Students;');
      setClassR3('result wrong');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.section}>
        <h1>📘 Introduction to SQL - SELECT</h1>
        <p>
          SQL (Structured Query Language) is used to <strong>retrieve, insert, update, and delete</strong> data in a
          relational database.
        </p>
        <h2>🔹 SELECT Statement</h2>
        <p>
          The <code>SELECT</code> statement is used to fetch data from a table.
        </p>
        <h3>🧪 Syntax:</h3>
        <code>SELECT column1, column2 FROM table_name;</code>
        <br />
        <br />
        <code>SELECT * FROM table_name;</code> <small>(To select all columns)</small>
        <h3>🎯 Examples:</h3>
        <p>Given the table <b>Students</b>:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alice</td>
              <td>20</td>
              <td>A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bob</td>
              <td>22</td>
              <td>B</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Charlie</td>
              <td>21</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li><code>SELECT Name FROM Students;</code> → Shows only the names</li>
          <li><code>SELECT * FROM Students WHERE Grade = 'A';</code> → Shows all columns for students with Grade A</li>
          <li><code>SELECT COUNT(*) FROM Students;</code> → Returns the number of records</li>
        </ul>
      </div>

      {/* Game Sections */}
      <div style={styles.section}>
        <h2>🎮 SQL Sprint Game – Level 1</h2>
        <p>🧠 Show names of all students</p>
        <input type="text" value={q1} onChange={(e) => setQ1(e.target.value)} style={styles.input} />
        <button className="btn" onClick={checkQ1} style={styles.button}>
          Run Query
        </button>
        <div className={classR1} style={{ ...styles.result, ...(classR1.includes('wrong') && styles.wrong) }} dangerouslySetInnerHTML={{ __html: r1 }} />
      </div>

      <div style={styles.section}>
        <h2>🎮 SQL Sprint Game – Level 2</h2>
        <p>🧠 Show students who got grade A</p>
        <input type="text" value={q2} onChange={(e) => setQ2(e.target.value)} style={styles.input} />
        <button className="btn" onClick={checkQ2} style={styles.button}>
          Run Query
        </button>
        <div className={classR2} style={{ ...styles.result, ...(classR2.includes('wrong') && styles.wrong) }} dangerouslySetInnerHTML={{ __html: r2 }} />
      </div>

      <div style={styles.section}>
        <h2>🎮 SQL Sprint Game – Level 3</h2>
        <p>🧠 Count the total number of students</p>
        <input type="text" value={q3} onChange={(e) => setQ3(e.target.value)} style={styles.input} />
        <button className="btn" onClick={checkQ3} style={styles.button}>
          Run Query
        </button>
        <div className={classR3} style={{ ...styles.result, ...(classR3.includes('wrong') && styles.wrong) }} dangerouslySetInnerHTML={{ __html: r3 }} />
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: '#f0f0f0',
    padding: '20px',
  },
  section: {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    background: '#eafaf1',
    borderLeft: '4px solid #2ecc71',
    padding: '10px',
  },
  wrong: {
    background: '#fbeaea',
    borderLeft: '4px solid #e74c3c',
  },
};

export default SqlSprint;
