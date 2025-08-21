import React, { useState, useRef } from 'react';

const PagingAndSegmentation = () => {
  const [activeTab, setActiveTab] = useState('paging');
  const [frames, setFrames] = useState(Array(4).fill(null));
  const draggedItem = useRef(null);
  const [result, setResult] = useState('');

  const handleDragStart = (id) => {
    draggedItem.current = id;
  };

  const handleDrop = (index) => {
    if (!frames[index]) {
      const updatedFrames = [...frames];
      updatedFrames[index] = draggedItem.current;
      setFrames(updatedFrames);
    }
  };

  const checkAnswer = () => {
    const uniquePages = new Set(frames);
    if (frames.includes(null) || uniquePages.size !== frames.length) {
      setResult({ text: "⚠️ Incorrect! Try again. No repeats and all frames must be filled.", color: "red" });
    } else {
      setResult({ text: "🎉 Perfect Fit! Paging logic is optimal!", color: "green" });
    }
  };

  const pageSlotStyle = {
    width: "100px", height: "60px", lineHeight: "60px",
    backgroundColor: "#f4a261", color: "white",
    fontWeight: "bold", borderRadius: "8px",
    cursor: "grab", userSelect: "none", textAlign: "center"
  };

  const frameStyle = (filled) => ({
    width: "100px", height: "60px", lineHeight: "60px",
    backgroundColor: filled ? "#2a9d8f" : "#e76f51",
    color: "white", fontWeight: "bold",
    border: "2px dashed #ccc", borderRadius: "8px",
    textAlign: "center"
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f0f4f8", textAlign: "center" }}>
      <h1>📦 Paging & 📂 Segmentation</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div className={`tab ${activeTab === 'paging' ? 'active' : ''}`}
          style={{
            padding: "10px 20px", margin: "5px", backgroundColor: activeTab === 'paging' ? "#21867a" : "#2a9d8f",
            color: "white", cursor: "pointer", borderRadius: "8px"
          }}
          onClick={() => setActiveTab('paging')}>
          Paging
        </div>
        <div className={`tab ${activeTab === 'segmentation' ? 'active' : ''}`}
          style={{
            padding: "10px 20px", margin: "5px", backgroundColor: activeTab === 'segmentation' ? "#21867a" : "#2a9d8f",
            color: "white", cursor: "pointer", borderRadius: "8px"
          }}
          onClick={() => setActiveTab('segmentation')}>
          Segmentation
        </div>
      </div>

      {activeTab === 'paging' && (
        <div>
          <h2>📦 Paging Example</h2>
          <p>Logical memory is divided into fixed-size pages (P0–P3)</p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
            <div className="block" style={blockStyle}>P0 → F2</div>
            <div className="block" style={blockStyle}>P1 → F0</div>
            <div className="block" style={blockStyle}>P2 → F3</div>
            <div className="block" style={blockStyle}>P3 → F1</div>
          </div>
          <div style={explanationStyle}>
            <strong>Explanation:</strong> Paging divides both logical and physical memory into fixed-size blocks.
            A Page Table maps each page to a frame. No external fragmentation occurs, but internal fragmentation may happen.
          </div>
        </div>
      )}

      {activeTab === 'segmentation' && (
        <div>
          <h2>📂 Segmentation Example</h2>
          <p>Logical memory is divided into segments like Code, Data, and Stack.</p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
            <div className="block" style={{ ...blockStyle, backgroundColor: "#f4a261" }}>Code</div>
            <div className="block" style={{ ...blockStyle, backgroundColor: "#e76f51" }}>Data</div>
            <div className="block" style={{ ...blockStyle, backgroundColor: "#2a9d8f" }}>Stack</div>
          </div>
          <div style={explanationStyle}>
            <strong>Explanation:</strong> Segmentation divides memory into variable-sized segments based on the program's logical structure.
            It’s more user-friendly but can cause external fragmentation.
          </div>
        </div>
      )}

      <hr style={{ margin: "40px 0" }} />
      <h1>📦 Page Fit Game - Paging Simulation</h1>
      <p style={{ fontSize: "16px" }}>Drag the pages to available memory frames. Fill all frames without duplicates!</p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "50px" }}>
        <div className="pages">
          {["P1", "P2", "P3", "P4"].map(id => (
            <div
              key={id}
              draggable
              style={pageSlotStyle}
              onDragStart={() => handleDragStart(id)}
              hidden={frames.includes(id)}
            >
              {id.replace("P", "Page ")}
            </div>
          ))}
        </div>

        <div className="frames">
          {frames.map((frame, i) => (
            <div
              key={i}
              style={frameStyle(!!frame)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(i)}
            >
              {frame ? frame.replace("P", "Page ") : ""}
            </div>
          ))}
        </div>
      </div>

      <button
        style={{
          marginTop: "20px", padding: "10px 20px", backgroundColor: "#264653",
          color: "white", border: "none", borderRadius: "8px", cursor: "pointer"
        }}
        onClick={checkAnswer}
      >
        ✅ Check Fit
      </button>

      {result && <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold", color: result.color }}>{result.text}</div>}
    </div>
  );
};

const blockStyle = {
  width: "80px", height: "80px",
  border: "2px solid #264653", display: "flex",
  justifyContent: "center", alignItems: "center",
  backgroundColor: "#e9c46a", fontWeight: "bold"
};

const explanationStyle = {
  marginTop: "20px",
  backgroundColor: "#fff",
  borderLeft: "4px solid #2a9d8f",
  padding: "15px",
  maxWidth: "600px",
  marginInline: "auto",
  textAlign: "left"
};

export default PagingAndSegmentation;
