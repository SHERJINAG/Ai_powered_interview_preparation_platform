import React, { useState, useEffect } from "react";

const FlexboxBuilder = () => {
  const [cssInput, setCssInput] = useState("");
  const [resultText, setResultText] = useState("");
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      text: "Use flexbox to center all boxes horizontally.",
      check: () => {
        const area = window.getComputedStyle(document.getElementById("playArea"));
        return area.display === "flex" && area.justifyContent === "center";
      },
    },
    {
      text: "Make the layout a vertical column using flexbox.",
      check: () => {
        const area = window.getComputedStyle(document.getElementById("playArea"));
        return area.display === "flex" && area.flexDirection === "column";
      },
    },
    {
      text: "Switch to grid and make 2 columns.",
      check: () => {
        const area = window.getComputedStyle(document.getElementById("playArea"));
        return area.display === "grid" && area.gridTemplateColumns.includes("1fr");
      },
    },
  ];

  const applyLayout = () => {
    const styleTag = document.getElementById("dynamicStyle");
    if (styleTag) styleTag.remove();

    const newStyle = document.createElement("style");
    newStyle.id = "dynamicStyle";
    newStyle.innerHTML = `#playArea { ${cssInput} }`;
    document.head.appendChild(newStyle);

    setTimeout(() => {
      const pass = challenges[currentChallenge].check();
      setResultText(pass ? "✅ Correct!" : "❌ Try Again!");
      if (pass && currentChallenge < challenges.length - 1) {
        setTimeout(() => {
          const oldStyle = document.getElementById("dynamicStyle");
          if (oldStyle) oldStyle.remove();
          setCssInput("");
          setResultText("");
          setCurrentChallenge((prev) => prev + 1);
        }, 1500);
      }
    }, 300);
  };

  useEffect(() => {
    const oldStyle = document.getElementById("dynamicStyle");
    if (oldStyle) oldStyle.remove();
  }, [currentChallenge]);

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🧩 FlexBox Builder - CSS Layout Game</h1>

      <div style={styles.section}>
        <h2>📘 Flexbox & Grid Concepts</h2>
        <p><strong>Flexbox</strong> helps you arrange elements in rows or columns.</p>
        <p>Basic syntax:</p>
        <code style={styles.code}>display: flex; justify-content: center; align-items: center;</code>

        <p><strong>Grid</strong> lets you place items into a structured 2D layout.</p>
        <p>Basic syntax:</p>
        <code style={styles.code}>display: grid; grid-template-columns: repeat(3, 1fr);</code>

        <h3>🔧 Flex/Grid Property Reference</h3>
        <table style={styles.table}>
          <thead>
            <tr><th>Property</th><th>Example</th><th>What it does</th></tr>
          </thead>
          <tbody>
            <tr><td>display</td><td>display: flex;</td><td>Enables flex container</td></tr>
            <tr><td>justify-content</td><td>justify-content: space-between;</td><td>Horizontal alignment</td></tr>
            <tr><td>align-items</td><td>align-items: center;</td><td>Vertical alignment</td></tr>
            <tr><td>flex-direction</td><td>flex-direction: column;</td><td>Row or column layout</td></tr>
            <tr><td>display</td><td>display: grid;</td><td>Enables grid layout</td></tr>
            <tr><td>grid-template-columns</td><td>grid-template-columns: repeat(2, 1fr);</td><td>Grid column setup</td></tr>
            <tr><td>gap</td><td>gap: 10px;</td><td>Spacing between items</td></tr>
          </tbody>
        </table>
      </div>

      <div style={styles.section}>
        <h2>🎮 Challenge</h2>
        <div style={styles.challenge}>{challenges[currentChallenge].text}</div>

        <div id="playArea" style={styles.playArea}>
          <div style={styles.box}>A</div>
          <div style={styles.box}>B</div>
          <div style={styles.box}>C</div>
        </div>

        <textarea
          placeholder="Write your CSS for #playArea here..."
          value={cssInput}
          onChange={(e) => setCssInput(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <br />
        <button style={styles.button} onClick={applyLayout}>Apply Layout</button>

        <div style={styles.result}>{resultText}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f0f4f8",
    padding: "20px",
    textAlign: "center",
    color: "#333",
  },
  h1: {
    color: "#2c3e50",
  },
  section: {
    background: "white",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "900px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  table: {
    width: "90%",
    margin: "20px auto",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
  },
  challenge: {
    background: "#e3f2fd",
    padding: "15px",
    fontWeight: "bold",
    marginTop: "20px",
    borderRadius: "8px",
  },
  playArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
    width: "80%",
    height: "200px",
    background: "#fff8e1",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    transition: "all 0.5s ease",
  },
  box: {
    width: "60px",
    height: "60px",
    background: "#29b6f6",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    borderRadius: "6px",
  },
  textarea: {
    width: "90%",
    height: "100px",
    marginTop: "10px",
    fontFamily: "monospace",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  code: {
    background: "#f1f8e9",
    padding: "2px 5px",
    borderRadius: "4px",
    display: "inline-block",
    marginTop: "4px",
  },
};

export default FlexboxBuilder;
