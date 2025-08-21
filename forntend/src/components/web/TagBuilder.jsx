import React, { useState, useRef } from 'react';

const TagBuilder = () => {
  const renderedAreaRef = useRef(null);

  const tagElements = [
    { label: '<h1> Heading', html: '<h1>Hello, World!</h1>' },
    { label: '<p> Paragraph', html: '<p>This is a paragraph.</p>' },
    { label: '<img> Image', html: '<img src="https://via.placeholder.com/150" alt="Image" />' },
    { label: '<a> Link', html: '<a href="#">Click me</a>' },
    { label: '<ul> List', html: '<ul><li>Item 1</li><li>Item 2</li></ul>' }
  ];

  const handleDragStart = (e, html) => {
    e.dataTransfer.setData("text/html", html);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const html = e.dataTransfer.getData("text/html");
    if (renderedAreaRef.current) {
      renderedAreaRef.current.innerHTML += html;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetPage = () => {
    if (renderedAreaRef.current) {
      renderedAreaRef.current.innerHTML = '';
    }
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f3f9ff",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ color: "#0d47a1" }}>🧱 Tag Builder - Learn HTML Basics</h1>

      {/* HTML Concepts Section */}
      <div style={{
        background: "#ffffff",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        maxWidth: "900px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h2 style={{ color: "#0d47a1" }}>📘 HTML Basics Explained</h2>
        <p><strong>HTML</strong> stands for <strong>HyperText Markup Language</strong> and is used to structure content on the web.</p>

        <h3>📌 Tags and Syntax</h3>
        <p>HTML uses <strong>tags</strong> to mark elements:</p>
        <pre style={{ background: "#e0f7fa", padding: "6px", borderRadius: "4px" }}>
          &lt;tagname&gt;Content&lt;/tagname&gt;
        </pre>

        <p>Most tags have an opening <code>&lt;tag&gt;</code> and a closing <code>&lt;/tag&gt;</code>, but some are self-closing.</p>

        <h3>🧱 Common HTML Tags</h3>
        <ul>
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings</li>
          <li><code>&lt;p&gt;</code>: Paragraphs</li>
          <li><code>&lt;img src="..." alt="..." /&gt;</code>: Image (self-closing)</li>
          <li><code>&lt;a href="..."&gt;</code>: Links</li>
          <li><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>: Unordered list and list item</li>
        </ul>

        <h3>🔧 Attributes</h3>
        <p>Attributes add extra information to elements:</p>
        <pre style={{ background: "#e0f7fa", padding: "6px", borderRadius: "4px" }}>
          &lt;a href="https://example.com"&gt;Visit&lt;/a&gt;
        </pre>
        <p><code>href</code> is an attribute of the <code>&lt;a&gt;</code> tag that defines the link destination.</p>
      </div>

      {/* Game Section */}
      <div style={{
        background: "#ffffff",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        maxWidth: "900px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h2 style={{ color: "#0d47a1" }}>🎮 Game: Drag & Drop the Tags</h2>
        <p>Drag HTML tags below into the preview area to create your web page!</p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
          minHeight: "100px"
        }}>
          {tagElements.map((tag, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, tag.html)}
              style={{
                background: "#90caf9",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "6px",
                cursor: "grab",
                fontWeight: "bold"
              }}
            >
              {tag.label}
            </div>
          ))}
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            width: "100%",
            border: "2px dashed #90caf9",
            minHeight: "150px",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "12px",
            background: "#e3f2fd",
            position: "relative"
          }}
        >
          <h3>🖥️ Webpage Preview Area</h3>
          <div
            ref={renderedAreaRef}
            className="rendered"
            style={{
              background: "#fff",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)"
            }}
          ></div>
        </div>

        <button
          onClick={resetPage}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            background: "#0d47a1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default TagBuilder;
