import React, { useState } from 'react';

export default function BootProcessApp() {
  const [view, setView] = useState('simulator'); // 'simulator' or 'builder'
  const [currentStep, setCurrentStep] = useState(0);
  const [dragged, setDragged] = useState(null);
  const [message, setMessage] = useState('');

  const steps = [
    {
      title: "Step 1: Power On",
      desc: "The computer receives power and initializes its hardware.",
      icon: "🔌",
    },
    {
      title: "Step 2: POST (Power-On Self Test)",
      desc: "The system checks if all necessary hardware (RAM, CPU, etc.) is working properly.",
      icon: "🧪",
    },
    {
      title: "Step 3: Bootloader",
      desc: "The BIOS/UEFI loads the bootloader which is responsible for starting the OS.",
      icon: "📦",
    },
    {
      title: "Step 4: Load OS Kernel",
      desc: "The operating system kernel is loaded into memory and begins execution.",
      icon: "🧠",
    },
    {
      title: "Step 5: User Login",
      desc: "The system loads the graphical interface and presents the login screen.",
      icon: "👤",
    },
    {
      title: "✅ Boot Complete!",
      desc: "Your system is fully loaded and ready to use.",
      icon: "🎉",
    },
  ];

  const dragSteps = [
    { id: 'step3', label: 'Bootloader Loads' },
    { id: 'step1', label: 'Power On' },
    { id: 'step5', label: 'User Login' },
    { id: 'step2', label: 'POST (Power-On Self Test)' },
    { id: 'step4', label: 'Load OS Kernel' },
  ];

  const correctOrder = ['step1', 'step2', 'step3', 'step4', 'step5'];
  const [drops, setDrops] = useState([null, null, null, null, null]);

  const handleDrop = (index) => {
    if (!drops[index] && dragged) {
      const newDrops = [...drops];
      newDrops[index] = dragged;
      setDrops(newDrops);
    }
  };

  const checkOrder = () => {
    const isCorrect = drops.every((d, i) => d === correctOrder[i]);
    setMessage(isCorrect
      ? '🎉 Success! You completed the boot process correctly!'
      : '❌ Oops! Try again. Check the order of steps.');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', textAlign: 'center', background: '#eef1f7' }}>
      <h1>{view === 'simulator' ? '🔧 Boot Process Simulator' : '🧠 Bootcamp Builder - Complete the Boot Steps!'}</h1>
      <button style={{ marginBottom: '20px' }} onClick={() => {
        setView(view === 'simulator' ? 'builder' : 'simulator');
        setCurrentStep(0);
        setDrops([null, null, null, null, null]);
        setMessage('');
      }}>
        🔄 Switch to {view === 'simulator' ? 'Builder' : 'Simulator'}
      </button>

      {view === 'simulator' ? (
        <div style={{
          background: 'white',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '500px',
          margin: '0 auto',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2980b9' }}>{steps[currentStep].title}</div>
          <div style={{ color: '#555', marginTop: '10px' }}>{steps[currentStep].desc}</div>
          <div style={{ fontSize: '40px', marginTop: '20px', animation: 'bounce 1s infinite alternate' }}>{steps[currentStep].icon}</div>
          {currentStep < steps.length - 1 && (
            <button style={{ marginTop: '30px' }} onClick={() => setCurrentStep(currentStep + 1)}>➡️ Next Step</button>
          )}
        </div>
      ) : (
        <>
          <p>🧩 Drag the boot steps into the correct order</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {dragSteps.map(step => (
              <div
                key={step.id}
                draggable
                onDragStart={() => setDragged(step.id)}
                style={{
                  padding: '15px 20px',
                  border: '2px dashed #888',
                  background: '#fff',
                  borderRadius: '8px',
                  width: '180px',
                  minHeight: '60px',
                  cursor: 'grab',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                {step.label}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {drops.map((d, i) => (
              <div
                key={i}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(i)}
                style={{
                  border: '2px solid #3498db',
                  background: '#ecf5ff',
                  borderRadius: '8px',
                  width: '180px',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {d && dragSteps.find(step => step.id === d)?.label}
              </div>
            ))}
          </div>

          <button onClick={checkOrder}>✅ Check Order</button>
          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold', color: message.includes('Success') ? 'green' : 'red' }}>{message}</div>
        </>
      )}
    </div>
  );
}
