import React, { useState } from "react";

const MultithreadingSimulation = () => {
  const [counter, setCounter] = useState(0);
  const [lock, setLock] = useState(false);
  const [logOutput, setLogOutput] = useState([]);
  const [useLock, setUseLock] = useState(false);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const thread = async (name, iterations) => {
    for (let i = 0; i < iterations; i++) {
      if (useLock) {
        // Using lock
        while (lock) {
          await sleep(1); // wait for lock release
        }
        setLock(true); // acquire lock
        let temp = counter;
        log(`${name} reading counter: ${temp}`);
        await sleep(Math.random() * 50); // simulate work
        temp++;
        setCounter(temp);
        log(`${name} updated counter to: ${temp}`);
        setLock(false); // release lock
      } else {
        // No lock - race condition may happen
        let temp = counter;
        log(`${name} reading counter: ${temp}`);
        await sleep(Math.random() * 50); // simulate work
        temp++;
        setCounter(temp);
        log(`${name} updated counter to: ${temp}`);
      }
    }
  };

  const updateCounter = () => {
    setCounter(counter);
  };

  const log = (message) => {
    setLogOutput((prevLog) => [...prevLog, message]);
  };

  const startThreads = () => {
    setCounter(0);
    setLock(false);
    setLogOutput([]);
    updateCounter();

    thread("🧵 Thread 1", 5);
    thread("🧵 Thread 2", 5);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "#2b7a78" }}>🔄 Multithreading Simulation</h1>
      <div>
        <div
          id="counter"
          style={{ fontSize: "40px", color: "#17252a", margin: "20px 0" }}
        >
          Counter: {counter}
        </div>
        <button
          onClick={startThreads}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            margin: "10px",
            backgroundColor: "#3aafa9",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Start Threads
        </button>
        <label style={{ fontSize: "16px", marginTop: "20px", display: "block" }}>
          <input
            type="checkbox"
            checked={useLock}
            onChange={(e) => setUseLock(e.target.checked)}
          />{" "}
          Use Lock (Avoid Race Condition)
        </label>
      </div>

      <div
        className="log"
        id="logOutput"
        style={{
          backgroundColor: "#def2f1",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
          maxHeight: "200px",
          overflowY: "auto",
          textAlign: "left",
        }}
      >
        {logOutput.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>

      <div
        className="info"
        style={{
          background: "#ffffff",
          borderLeft: "6px solid #2b7a78",
          padding: "10px 20px",
          marginTop: "30px",
          textAlign: "left",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 style={{ color: "#2b7a78" }}>🧠 What Is Happening?</h2>
        <p>
          In this simulation, we have <strong>two threads</strong> trying to
          increment a <strong>shared counter</strong>. If both threads try to
          access and update the counter at the same time without coordination,
          it can cause errors like skipping numbers — this is called a{" "}
          <strong>race condition</strong>.
        </p>
        <p>
          When you enable the <strong>lock</strong> checkbox, the threads must
          wait for each other to finish updating the counter — like waiting your
          turn. This ensures that the shared data (counter) is updated correctly
          and safely.
        </p>
        <p>
          This is how <strong>multithreading</strong> works in real systems —
          managing multiple tasks at once, carefully handling access to shared
          resources.
        </p>
        <p>
          Try running it with and without the lock to observe the difference.
        </p>
      </div>
    </div>
  );
};

export default MultithreadingSimulation;
