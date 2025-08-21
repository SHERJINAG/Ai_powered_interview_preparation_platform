import React, { useState, useRef } from 'react';

const FixFunctionGame = () => {
  const [message, setMessage] = useState('');
  const functionAreaRef = useRef(null);
  const draggedItem = useRef(null);

  const handleDragStart = (event) => {
    draggedItem.current = event.target;
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (
      draggedItem.current &&
      functionAreaRef.current &&
      !functionAreaRef.current.contains(draggedItem.current)
    ) {
      functionAreaRef.current.appendChild(draggedItem.current);
    }
  };

  const checkFunction = () => {
    const lines = Array.from(functionAreaRef.current.children).map((el) =>
      el.textContent.trim()
    );
    const correctOrder = [
      'def say_hello():',
      'print("Hello, there!")',
      'say_hello()',
    ];
    const isCorrect = JSON.stringify(lines) === JSON.stringify(correctOrder);
    setMessage(
      isCorrect
        ? '🎉 Correct! Your function works perfectly.'
        : '❌ Oops! Try arranging the lines correctly.'
    );
  };

  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '30px',
        color: '#2c3e50',
      }}
    >
      <h1>🔧 Python Functions - Fix the Broken Function</h1>

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h2>📘 Understanding Functions in Python</h2>
        <p>
          Functions are reusable blocks of code that perform a specific task.
          They help organize and simplify your program.
        </p>

        <h3>🔹 Defining a Function:</h3>
        <pre
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderRadius: '6px',
            overflowX: 'auto',
          }}
        >
{`def greet():
    print("Hello, world!")`}
        </pre>

        <h3>🔹 Calling a Function:</h3>
        <pre
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderRadius: '6px',
            overflowX: 'auto',
          }}
        >
{`greet()`}
        </pre>

        <p>Sometimes, a function may be incomplete or broken. Your task is to fix it!</p>
      </div>

      <div
        style={{
          backgroundColor: '#e8f5e9',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h2>🎮 Game: Fix the Broken Function</h2>
        <p>Drag and drop the correct Python lines in order to fix the function.</p>

        <div
          ref={functionAreaRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            backgroundColor: '#dcedc8',
            padding: '10px',
            border: '2px dashed #388e3c',
            borderRadius: '6px',
            margin: '10px auto',
            width: '90%',
            minHeight: '50px',
          }}
        ></div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          {[
            { id: 'line2', text: 'print("Hello, there!")' },
            { id: 'line1', text: 'def say_hello():' },
            { id: 'line3', text: 'say_hello()' },
          ].map((snippet) => (
            <div
              key={snippet.id}
              draggable="true"
              onDragStart={handleDragStart}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'grab',
                userSelect: 'none',
              }}
            >
              {snippet.text}
            </div>
          ))}
        </div>

        <button
          onClick={checkFunction}
          style={{
            padding: '10px 20px',
            backgroundColor: '#388e3c',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2e7d32')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#388e3c')}
        >
          ✅ Check
        </button>

        <div
          style={{
            marginTop: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default FixFunctionGame;
