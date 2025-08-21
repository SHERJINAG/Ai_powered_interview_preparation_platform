import React, { useState } from 'react';

const MongoPlayground = () => {
  const [level, setLevel] = useState(1);
  const [users, setUsers] = useState([]);
  const [output, setOutput] = useState([
    `<span class="command">> mongo</span>
    <div class="output">
Welcome to the MongoDB shell

MongoDB is a NoSQL database that stores data in JSON-like documents.
Mongoose is an ODM for MongoDB in Node.js to interact easily.

🔹 Basics:
  • <code>db.collection.insertOne({ name: "John" })</code> - insert document
  • <code>db.collection.find()</code> - fetch all documents
  • <code>db.collection.updateOne()</code> - update document
  • <code>db.collection.deleteOne()</code> - delete document

Mongoose simplifies MongoDB by letting you define schemas and models.
    </div>

    <span class="command">> db.users.insertOne({ name: "Alice" })</span>
    <div class="output">✅ Document inserted into users</div>

    <span class="command">> db.users.find()</span>
    <div class="output">[{ name: "Alice" }]</div>`
  ]);
  const [gameOutput, setGameOutput] = useState([
    `Level 1: Create a collection and insert a user 👇<br/>(Type: <code>db.users.insertOne({ name: "Hero" })</code>)`
  ]);
  const [input, setInput] = useState("");

  const styles = {
    body: {
      backgroundColor: '#121212',
      color: '#d1ffd1',
      fontFamily: 'Courier New, Courier, monospace',
      padding: 20
    },
    terminal: {
      backgroundColor: '#000',
      border: '2px solid #33ff33',
      padding: 20,
      borderRadius: 10,
      width: '100%',
      maxWidth: 800,
      marginBottom: 40,
      whiteSpace: 'pre-line'
    },
    command: { color: '#33ff33' },
    output: { color: '#ffffff' },
    input: {
      width: '100%',
      maxWidth: 600,
      padding: 10,
      backgroundColor: '#2a2a2a',
      color: '#d1ffd1',
      border: 'none',
      fontFamily: 'inherit',
      fontSize: 16,
      borderBottom: '2px solid #33ff33'
    },
    h2: { color: '#33ff33' },
    success: { color: '#33ff33' },
    error: { color: 'red' }
  };

  const levels = {
    1: {
      command: 'db.users.insertOne({ name: "Hero" })',
      action: () => {
        setUsers([...users, { name: "Hero" }]);
        return "✅ User 'Hero' inserted into users collection!";
      },
      next: "Level 2: Query all users 👇<br/>(Type: db.users.find())"
    },
    2: {
      command: "db.users.find()",
      action: () => `👤 Users: ${JSON.stringify(users)}`,
      next: 'Level 3: Update user\'s name 👇<br/>(Type: db.users.updateOne({ name: "Hero" }, { $set: { name: "Champion" } }))'
    },
    3: {
      command: 'db.users.updateOne({ name: "Hero" }, { $set: { name: "Champion" } })',
      action: () => {
        let updated = false;
        const updatedUsers = users.map(user => {
          if (user.name === "Hero") {
            updated = true;
            return { name: "Champion" };
          }
          return user;
        });
        setUsers(updatedUsers);
        return updated ? "✅ Name updated to 'Champion'" : "❌ No match found";
      },
      next: 'Level 4: Delete the user 👇<br/>(Type: db.users.deleteOne({ name: "Champion" }))'
    },
    4: {
      command: 'db.users.deleteOne({ name: "Champion" })',
      action: () => {
        const index = users.findIndex(user => user.name === "Champion");
        if (index !== -1) {
          const copy = [...users];
          copy.splice(index, 1);
          setUsers(copy);
          return "🗑️ User 'Champion' deleted!";
        }
        return "❌ No user to delete.";
      },
      next: "🎉 All levels complete! You are the DB Defender!"
    }
  };

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const current = levels[level];
      const expected = current.command;

      const cmdLine = `<span class="command">> ${cmd}</span>`;
      let result = "";

      if (cmd === expected) {
        result = `<div class="output">${current.action()}</div>`;
        const newLevel = level + 1;
        setLevel(newLevel);
        if (levels[newLevel]) {
          result += `<br/><div class="output">${levels[newLevel].next}</div>`;
        }
      } else {
        result = `<div class="output error">❌ Invalid command. Hint: ${expected}</div>`;
      }

      setGameOutput(prev => [...prev, `${cmdLine}\n${result}`]);
      setInput("");
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.terminal} id="explanation" dangerouslySetInnerHTML={{ __html: output.join('<br/><br/>') }} />
      <h2 style={styles.h2}>🎮 DB Defender Game</h2>
      <div style={styles.terminal} id="game-terminal">
        <div
          className="output"
          id="game-output"
          dangerouslySetInnerHTML={{ __html: gameOutput.join('<br/><br/>') }}
        />
        <input
          type="text"
          style={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInput}
          placeholder="Type a MongoDB command..."
          disabled={level > 4}
        />
      </div>
    </div>
  );
};

export default MongoPlayground;
