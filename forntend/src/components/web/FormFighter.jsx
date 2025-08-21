import React, { useState, useRef } from 'react';

const FormFighter = () => {
  const formRef = useRef(null);

  const inputElements = [
    {
      label: '<input type="text">',
      html: '<input type="text" placeholder="Name" name="name" required />'
    },
    {
      label: '<input type="email">',
      html: '<input type="email" placeholder="Email" name="email" required />'
    },
    {
      label: '<input type="password">',
      html: '<input type="password" placeholder="Password" name="password" required />'
    },
    {
      label: '<textarea>',
      html: '<textarea placeholder="Message" name="message"></textarea>'
    },
    {
      label: '<button type="submit">',
      html: '<button type="submit">Submit</button>'
    }
  ];

  const handleDragStart = (e, html) => {
    e.dataTransfer.setData("text/html", html);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const html = e.dataTransfer.getData("text/html");
    if (formRef.current) {
      formRef.current.insertAdjacentHTML('beforeend', html + '<br />');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f0f8ff",
      padding: "20px",
      color: "#333",
      textAlign: "center"
    }}>
      <h1>📨 Form Fighter - HTML Forms & Input Game</h1>

      <div style={{
        background: "white",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "900px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h2>🧠 HTML Forms & Input Elements - Explained</h2>
        <p>An <strong>HTML form</strong> is used to collect user input and submit data to a server.</p>

        <h3>🔹 Basic Syntax</h3>
        <pre><code>&lt;form action="submit.php" method="post"&gt;
  &lt;input type="text" name="username"&gt;
&lt;/form&gt;</code></pre>

        <h3>🎯 Common Input Types</h3>
        <ul>
          <li><code>text</code> – Single line input</li>
          <li><code>email</code> – Validates email format</li>
          <li><code>password</code> – Hides characters</li>
          <li><code>checkbox</code>, <code>radio</code> – Multiple/single choice</li>
          <li><code>submit</code> – Submit the form</li>
          <li><code>textarea</code> – Multiline input</li>
          <li><code>select</code> – Dropdown menu</li>
        </ul>

        <h3>🔧 Attributes</h3>
        <ul>
          <li><code>name</code>: Used to identify the input when submitting</li>
          <li><code>placeholder</code>: Shows hint text</li>
          <li><code>required</code>: Makes input mandatory</li>
        </ul>
      </div>

      <div style={{
        background: "white",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "900px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h2>🎮 Game: Drag & Drop to Build a Form</h2>
        <p>Drag the input elements below into the form canvas to create a form!</p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          margin: "20px 0"
        }}>
          {inputElements.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, item.html)}
              style={{
                padding: "10px 15px",
                background: "#90caf9",
                borderRadius: "6px",
                cursor: "grab",
                fontWeight: "bold",
                userSelect: "none"
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            minHeight: "200px",
            border: "2px dashed #0d47a1",
            borderRadius: "10px",
            background: "#e3f2fd",
            padding: "20px",
            textAlign: "center"
          }}
        >
          <h3>📄 Form Canvas (Drop Inputs Below)</h3>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            style={{
              marginTop: "15px",
              background: "#fff",
              padding: "15px",
              borderRadius: "8px"
            }}
          />
        </div>

        <button
          onClick={resetForm}
          style={{
            padding: "10px 20px",
            background: "#0d47a1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px"
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default FormFighter;
