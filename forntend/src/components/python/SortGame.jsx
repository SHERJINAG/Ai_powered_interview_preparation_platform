import React, { useState } from "react";

const SortGame = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [message, setMessage] = useState("");
  const [dropItems, setDropItems] = useState([]);

  const handleDragStart = (e) => {
    setDraggedItem(e.target);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && e.target.id === "dropzone") {
      const newItem = draggedItem.cloneNode(true);
      newItem.setAttribute("draggable", true);
      newItem.ondragstart = handleDragStart;
      e.target.appendChild(newItem);
      draggedItem.remove(); // Remove original to prevent duplicates
      updateDropItems();
    }
  };

  const updateDropItems = () => {
    const dropzone = document.getElementById("dropzone");
    const children = Array.from(dropzone.children);
    setDropItems(children.map((child) => child.textContent.trim()));
  };

  const checkOrder = () => {
    const correct = ["Apple", "Banana", "Cherry"];
    if (dropItems.length !== 3) {
      setMessage("❌ Please place all 3 items in the drop zone.");
      return;
    }
    setMessage(
      JSON.stringify(dropItems) === JSON.stringify(correct)
        ? "🎉 Correct! You sorted the list perfectly."
        : "❌ That's not the correct order. Try again!"
    );
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f9f9f9", color: "#2c3e50" }}>
      <style>{`
        .section {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        pre {
          background-color: #f4f4f4;
          padding: 10px;
          border-radius: 6px;
          overflow-x: auto;
        }
        .game {
          background-color: #e3f2fd;
          border: 2px solid #90caf9;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        .items, .dropzone {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin: 20px 0;
        }
        .item {
          background: #fff;
          border: 2px solid #64b5f6;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: grab;
          user-select: none;
          font-weight: bold;
        }
        .dropzone {
          border: 2px dashed #64b5f6;
          padding: 10px;
          min-height: 50px;
          border-radius: 8px;
        }
        .btn {
          background: #1976d2;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }
        .btn:hover {
          background: #0d47a1;
        }
        .message {
          margin-top: 15px;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>

      <h1>🧺 Lists & Tuples - Sort & Organize Game</h1>

      <div className="section">
        <h2>📘 Understanding Lists & Tuples</h2>
        <p><strong>List:</strong> A mutable collection of items. You can change, sort, and append elements.</p>
        <pre><code>fruits = ["apple", "banana", "cherry"]</code></pre>
        <p><strong>Tuple:</strong> An immutable collection. Once created, it cannot be changed.</p>
        <pre><code>colors = ("red", "green", "blue")</code></pre>

        <h3>🔹 Indexing & Slicing:</h3>
        <pre><code>print(fruits[0])  # "apple"
print(fruits[1:])  # ['banana', 'cherry']</code></pre>

        <h3>🔹 Looping Through:</h3>
        <pre><code>for item in fruits:
    print(item)</code></pre>
      </div>

      <div className="section game">
        <h2>🎮 Game: Sort the Items in Alphabetical Order</h2>
        <p>Drag the items into the drop zone in the correct alphabetical order.</p>

        <div className="items">
          <div className="item" draggable onDragStart={handleDragStart} id="item2">Banana</div>
          <div className="item" draggable onDragStart={handleDragStart} id="item3">Cherry</div>
          <div className="item" draggable onDragStart={handleDragStart} id="item1">Apple</div>
        </div>

        <div className="dropzone" id="dropzone" onDragOver={allowDrop} onDrop={handleDrop}></div>

        <button className="btn" onClick={checkOrder}>✅ Check Order</button>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default SortGame;
