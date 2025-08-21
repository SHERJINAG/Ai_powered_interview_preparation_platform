import React, { useState } from 'react';

const NetworkTopologyBuilder = () => {
  const [topology, setTopology] = useState('star');

  const drawLine = (x1, y1, x2, y2, ctx) => {
    ctx.beginPath();
    ctx.moveTo(x1 + 30, y1 + 30);
    ctx.lineTo(x2 + 30, y2 + 30);
    ctx.strokeStyle = "#0d47a1";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const createDevice = (id, x, y, canvasDiv) => {
    const device = document.createElement("div");
    device.className = "device";
    device.innerText = `PC${id}`;
    device.style.left = `${x}px`;
    device.style.top = `${y}px`;
    device.setAttribute("data-id", id);
    canvasDiv.appendChild(device);
    return device;
  };

  const clearCanvas = (canvasDiv, ctx) => {
    ctx.clearRect(0, 0, 1000, 500);
    [...canvasDiv.querySelectorAll('.device')].forEach(d => d.remove());
  };

  const generateTopology = () => {
    const canvasDiv = document.getElementById("canvas");
    const ctx = document.getElementById("lineCanvas").getContext("2d");

    clearCanvas(canvasDiv, ctx);

    const positions = [
      [100, 200],
      [250, 100],
      [400, 200],
      [550, 100],
      [700, 200]
    ];
    const devices = positions.map((pos, i) => createDevice(i + 1, pos[0], pos[1], canvasDiv));

    switch (topology) {
      case "star":
        const center = createDevice("Hub", 400, 300, canvasDiv);
        devices.forEach(d => drawLine(d.offsetLeft, d.offsetTop, center.offsetLeft, center.offsetTop, ctx));
        break;

      case "bus":
        for (let i = 0; i < devices.length - 1; i++) {
          drawLine(devices[i].offsetLeft, devices[i].offsetTop, devices[i + 1].offsetLeft, devices[i + 1].offsetTop, ctx);
        }
        break;

      case "ring":
        for (let i = 0; i < devices.length; i++) {
          const next = (i + 1) % devices.length;
          drawLine(devices[i].offsetLeft, devices[i].offsetTop, devices[next].offsetLeft, devices[next].offsetTop, ctx);
        }
        break;

      case "mesh":
        for (let i = 0; i < devices.length; i++) {
          for (let j = i + 1; j < devices.length; j++) {
            drawLine(devices[i].offsetLeft, devices[i].offsetTop, devices[j].offsetLeft, devices[j].offsetTop, ctx);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>🌐 Net Designer: Network Topology Builder</h1>

      <div className="section">
        <h2>📘 Concept</h2>
        <p><strong>Star</strong> – Devices connected to a central hub<br />
          <strong>Bus</strong> – Devices connected in a straight line<br />
          <strong>Ring</strong> – Devices connected in a closed loop<br />
          <strong>Mesh</strong> – Every device connects to every other</p>
      </div>

      <div className="section">
        <h2>🎮 Build Your Topology</h2>
        <label htmlFor="topology">Choose a Topology:</label>
        <select
          id="topology"
          value={topology}
          onChange={(e) => setTopology(e.target.value)}
        >
          <option value="star">Star</option>
          <option value="bus">Bus</option>
          <option value="ring">Ring</option>
          <option value="mesh">Mesh</option>
        </select>
        <button className="btn" onClick={generateTopology}>Build</button>

        <div id="canvas">
          <canvas id="lineCanvas" width="1000" height="500"></canvas>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background: #eef6ff;
          text-align: center;
          padding: 20px;
        }
        h1 {
          color: #0d47a1;
        }
        .section {
          background: #fff;
          margin: 20px auto;
          padding: 20px;
          border-radius: 12px;
          max-width: 1000px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .device {
          width: 60px;
          height: 60px;
          background: #90caf9;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
          font-weight: bold;
          cursor: pointer;
          position: absolute;
        }
        #canvas {
          border: 2px dashed #90caf9;
          height: 500px;
          position: relative;
          border-radius: 12px;
        }
        .btn {
          padding: 10px 20px;
          margin: 10px;
          background: #0d47a1;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        canvas {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        select {
          padding: 10px;
          border-radius: 6px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default NetworkTopologyBuilder;
