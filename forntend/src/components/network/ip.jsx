import React, { useState, useEffect } from 'react';

const IPSniperGame = () => {
  const questions = [
    {
      q: "Which class does IP 10.5.6.7 belong to?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: "Class A",
    },
    {
      q: "What is the default subnet mask for Class B?",
      options: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.255"],
      answer: "255.255.0.0",
    },
    {
      q: "Which IP belongs to Class C?",
      options: ["192.168.1.1", "10.0.0.1", "128.10.0.1", "224.0.0.1"],
      answer: "192.168.1.1",
    },
    {
      q: "Which class is used for multicast?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: "Class D",
    },
    {
      q: "How many usable IPs in subnet 255.255.255.0?",
      options: ["254", "256", "255", "128"],
      answer: "254",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [finished, setFinished] = useState(false);

  const checkAnswer = (selected) => {
    const correct = questions[current].answer;
    if (selected === correct) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Wrong! Correct answer: ${correct}`);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setFeedback('');
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', textAlign: 'center', background: '#0a0a23', color: '#fff', padding: '20px' }}>
      <h1 style={{ color: '#00ffc3' }}>🎯 IP Sniper: Learn IP Classes & Subnetting</h1>

      <div style={{ textAlign: 'left', background: '#11113a', padding: '15px', marginTop: '30px', borderLeft: '5px solid #00ffc3', borderRadius: '5px' }}>
        <h2>💡 Learn Before You Snipe!</h2>
        <p><strong>IP Address:</strong> A unique number assigned to each device on a network (e.g., 192.168.1.1)</p>
        <p><strong>Classes:</strong><br />
          Class A: 1.0.0.0 – 126.255.255.255 (255.0.0.0)<br />
          Class B: 128.0.0.0 – 191.255.255.255 (255.255.0.0)<br />
          Class C: 192.0.0.0 – 223.255.255.255 (255.255.255.0)<br />
          Class D: 224.0.0.0 – 239.255.255.255 (Multicast)
        </p>
        <p><strong>Subnet Masks:</strong> Used to divide networks into smaller networks.<br />
          Common masks: 255.0.0.0 | 255.255.0.0 | 255.255.255.0
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div style={{ fontSize: '24px', marginBottom: '20px' }}>
          {finished ? '🎉 Quiz Finished!' : questions[current].q}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {!finished && questions[current].options.map((opt, index) => (
            <div
              key={index}
              className="option"
              style={{
                background: '#1c1c3c',
                border: '2px solid #00ffc3',
                padding: '15px 30px',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: '0.3s',
              }}
              onClick={() => checkAnswer(opt)}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#00ffc3';
                e.currentTarget.style.color = '#000';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#1c1c3c';
                e.currentTarget.style.color = '#fff';
              }}
            >
              {opt}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', fontSize: '20px' }}>{feedback}</div>
        <div style={{ marginTop: '10px', fontSize: '18px' }}>
          Score: {score}/{questions.length}
        </div>

        {finished && <div style={{ marginTop: '20px' }}>Thanks for playing IP Sniper!</div>}
      </div>
    </div>
  );
};

export default IPSniperGame;