import React, { useState } from "react";

const RouteRunner = () => {
  const correctPaths = [
    ["A", "C", "E", "G"],
    ["A", "B", "D", "G"],
    ["A", "B", "F", "G"],
    ["A", "D", "F", "G"]
  ];

  const [currentPath, setCurrentPath] = useState(["A"]);
  const [finished, setFinished] = useState(false);
  const [resultText, setResultText] = useState("");

  const selectRouter = (nextHop) => {
    if (finished) return;
    const newPath = [...currentPath, nextHop];
    setCurrentPath(newPath);

    if (nextHop === "G") {
      setFinished(true);
      checkPath(newPath);
    }
  };

  const checkPath = (path) => {
    const isValid = correctPaths.some(
      (p) =>
        p.length === path.length && p.every((node, i) => node === path[i])
    );

    setResultText(
      isValid
        ? "🎉 Packet delivered successfully through optimal path!"
        : "⚠️ Packet lost or took a longer route! Try again."
    );
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>📦 Route Runner - Routing & Switching Game</h1>

      <div style={styles.section}>
        <h2>📚 Concepts</h2>
        <p>
          <strong>Switching:</strong> Inside a local network, switches direct
          data based on <strong>MAC addresses</strong>.
        </p>
        <p>
          <strong>Routing:</strong> Between networks, routers use{" "}
          <strong>IP addresses</strong> and <strong>routing tables</strong> to
          send data through the best path.
        </p>
        <p>
          <strong>Pathfinding:</strong> Like GPS for data — routers choose the
          shortest or most efficient path based on hops or metrics.
        </p>
      </div>

      <div style={styles.section}>
        <h2>🎮 Your Mission: Get the Packet to the Destination!</h2>
        <p>
          Start from <strong>Router A</strong>. Choose the best route to reach{" "}
          <strong>Router G</strong>.
        </p>

        <div style={styles.pathDisplay}>Path: {currentPath.join(" ➡️ ")}</div>

        <div style={styles.routerMap}>
          {["B", "C", "D", "E", "F", "G"].map((router) => (
            <div
              key={router}
              style={styles.router}
              onClick={() => selectRouter(router)}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#2980b9")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#3498db")
              }
            >
              Router {router}
            </div>
          ))}
        </div>

        <div style={styles.result}>{resultText}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eef2f3",
    padding: "20px",
    textAlign: "center"
  },
  heading: {
    color: "#2c3e50"
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "800px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  pathDisplay: {
    marginTop: "20px",
    fontSize: "18px",
    textAlign: "center"
  },
  routerMap: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px"
  },
  router: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none"
  },
  result: {
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "green",
    textAlign: "center"
  }
};

export default RouteRunner;
