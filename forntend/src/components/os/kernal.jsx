import React, { useState } from "react";

const KernelVsUserModeGame = () => {
  const [result, setResult] = useState("");

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const item = document.getElementById(data);
    if (!ev.target.classList.contains("item")) {
      ev.target.appendChild(item);
    }
  };

  const checkAnswers = () => {
    const userCorrect = ["item1", "item3", "item6"];
    const kernelCorrect = ["item2", "item4", "item5"];

    let userBucket = document.getElementById("userBucket").children;
    let kernelBucket = document.getElementById("kernelBucket").children;

    let userScore = 0;
    let kernelScore = 0;

    for (let i = 1; i < userBucket.length; i++) {
      if (userCorrect.includes(userBucket[i].id)) userScore++;
    }

    for (let i = 1; i < kernelBucket.length; i++) {
      if (kernelCorrect.includes(kernelBucket[i].id)) kernelScore++;
    }

    let total = userCorrect.length + kernelCorrect.length;
    let score = userScore + kernelScore;

    if (score === total) {
      setResult("🎉 All correct! You're an OS Pro!");
    } else {
      setResult(`❌ You got ${score}/${total} correct. Try again!`);
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🧠 Kernel vs User Mode</h1>
      <div style={styles.explanation}>
        <strong>Kernel Mode:</strong> Full control of the system. Only the OS kernel and trusted processes run here. <br />
        <strong>User Mode:</strong> Where everyday applications run with limited permissions to keep the system safe.
        <br /><br />
        🧩 Drag each action into the correct mode bucket. Then click "Check Answers".
      </div>

      <div style={styles.gameArea}>
        <div
          id="userBucket"
          onDragOver={allowDrop}
          onDrop={drop}
          style={styles.bucket}
        >
          <h2 style={styles.bucketTitle}>User Mode</h2>
        </div>
        <div
          id="kernelBucket"
          onDragOver={allowDrop}
          onDrop={drop}
          style={styles.bucket}
        >
          <h2 style={styles.bucketTitle}>Kernel Mode</h2>
        </div>
        <div id="items" style={styles.bucket}>
          <h2 style={styles.bucketTitle}>Drag Items</h2>
          <div id="item1" draggable="true" onDragStart={drag} style={styles.item}>Play a Video Game</div>
          <div id="item2" draggable="true" onDragStart={drag} style={styles.item}>Write to Disk</div>
          <div id="item3" draggable="true" onDragStart={drag} style={styles.item}>Open a Browser</div>
          <div id="item4" draggable="true" onDragStart={drag} style={styles.item}>Memory Management</div>
          <div id="item5" draggable="true" onDragStart={drag} style={styles.item}>File System Control</div>
          <div id="item6" draggable="true" onDragStart={drag} style={styles.item}>Use a Calculator App</div>
        </div>
      </div>

      <button onClick={checkAnswers} style={styles.button}>✅ Check Answers</button>
      <div style={styles.result(result)}>{result}</div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#f0f8ff",
    padding: "20px",
    textAlign: "center"
  },
  h1: {
    color: "#2c3e50"
  },
  explanation: {
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "16px",
    marginBottom: "30px"
  },
  gameArea: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px"
  },
  bucket: {
    border: "2px dashed #333",
    padding: "20px",
    width: "220px",
    minHeight: "300px",
    borderRadius: "10px",
    backgroundColor: "#fff"
  },
  bucketTitle: {
    color: "#2980b9"
  },
  item: {
    backgroundColor: "#ecf0f1",
    border: "1px solid #bbb",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "6px",
    width: "80%",
    cursor: "grab"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  result: (text) => ({
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: text.includes("🎉") ? "green" : text ? "red" : "black"
  })
};

export default KernelVsUserModeGame;
