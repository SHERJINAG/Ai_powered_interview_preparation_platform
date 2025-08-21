// src/components/networking/DNSDHCPGame.js
import React, { useEffect, useState } from 'react';

const dnsData = [
  { domain: "www.google.com", ip: "142.250.72.36" },
  { domain: "www.facebook.com", ip: "157.240.18.35" },
  { domain: "www.youtube.com", ip: "142.250.72.78" },
  { domain: "www.wikipedia.org", ip: "208.80.154.224" }
];

const ipPoolInitial = [
  "192.168.1.10", "192.168.1.11", "192.168.1.12",
  "192.168.1.13", "192.168.1.14"
];

const DNSDHCPGame = () => {
  const [dnsQuestion, setDnsQuestion] = useState({});
  const [dnsOptions, setDnsOptions] = useState([]);
  const [dnsResult, setDnsResult] = useState("");
  const [assignedIPs, setAssignedIPs] = useState({});
  const [ipPool, setIpPool] = useState([...ipPoolInitial]);
  const [dhcpResult, setDhcpResult] = useState("");

  useEffect(() => {
    // Style injection
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: 'Segoe UI', sans-serif;
        background: #f4f7fa;
        padding: 20px;
        text-align: center;
      }
      h1 { color: #333; }
      .section {
        background: white;
        border-radius: 12px;
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        max-width: 800px;
      }
      .question { margin-top: 15px; font-weight: bold; }
      .options button {
        padding: 10px 20px;
        font-size: 16px;
        margin: 10px;
        border: none;
        border-radius: 8px;
        background-color: #2196f3;
        color: white;
        cursor: pointer;
      }
      .result {
        font-weight: bold;
        margin-top: 10px;
        color: green;
      }
      .ip-pool {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
      }
      .device {
        background: #eee;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
      }
      .ip {
        background: #ff9800;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        margin-top: 5px;
        display: inline-block;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    loadDNSQuestion();
  }, []);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const loadDNSQuestion = () => {
    const question = dnsData[Math.floor(Math.random() * dnsData.length)];
    const options = shuffle([
      question.ip,
      ...shuffle(dnsData.map(d => d.ip).filter(ip => ip !== question.ip)).slice(0, 2)
    ]);
    setDnsQuestion(question);
    setDnsOptions(options);
    setDnsResult("");
  };

  const assignIP = (deviceId) => {
    if (assignedIPs[deviceId]) return;
    if (ipPool.length === 0) {
      setAssignedIPs(prev => ({ ...prev, [deviceId]: "❌ No IPs left" }));
      return;
    }

    const newIp = ipPool[0];
    setAssignedIPs(prev => ({ ...prev, [deviceId]: newIp }));
    setIpPool(prev => prev.slice(1));

    if (Object.keys(assignedIPs).length + 1 === 5) {
      setDhcpResult("🎉 All IPs assigned!");
    }
  };

  return (
    <div>
      <h1>🌐 DNS & DHCP - Name Resolver Game</h1>

      <div className="section">
        <h2>📚 Concepts</h2>
        <p><strong>DNS:</strong> Converts domain names like <code>www.google.com</code> into IP addresses.</p>
        <p><strong>DHCP:</strong> Automatically assigns IP addresses to devices on a network.</p>
      </div>

      <div className="section">
        <h2>🎮 DNS Resolver Game</h2>
        <p className="question">Which IP address belongs to <span>{dnsQuestion.domain}</span>?</p>
        <div className="options">
          {dnsOptions.map((ip, idx) => (
            <button key={idx} onClick={() => setDnsResult(ip === dnsQuestion.ip ? "✅ Correct!" : "❌ Try again.")}>
              {ip}
            </button>
          ))}
        </div>
        <div className="result">{dnsResult}</div>
      </div>

      <div className="section">
        <h2>🎮 DHCP IP Assignment</h2>
        <p>Click on each device to assign an IP address dynamically.</p>
        <div className="ip-pool">
          {[1, 2, 3, 4, 5].map(id => (
            <div className="device" key={id} onClick={() => assignIP(id)}>
              <strong>Device {id}</strong>
              <div className="ip" style={{ backgroundColor: assignedIPs[id] && assignedIPs[id].includes("❌") ? "#e53935" : assignedIPs[id] ? "#4caf50" : "#ff9800" }}>
                {assignedIPs[id] || "Assign IP"}
              </div>
            </div>
          ))}
        </div>
        <div className="result">{dhcpResult}</div>
      </div>
    </div>
  );
};

export default DNSDHCPGame;
