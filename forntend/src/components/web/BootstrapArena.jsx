import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapArena = () => {
  const [previewHtml, setPreviewHtml] = useState('');
  const [codeHtml, setCodeHtml] = useState('<!-- Your HTML will appear here -->');

  const addComponent = (type) => {
    let html = '';

    if (type === 'button') {
      html = `<button class="btn btn-primary">Click Me</button>`;
    } else if (type === 'card') {
      html = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-success">Go somewhere</a>
  </div>
</div>`;
    } else if (type === 'alert') {
      html = `<div class="alert alert-warning" role="alert">This is a Bootstrap Alert!</div>`;
    } else if (type === 'form') {
      html = `
<form>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" placeholder="name@example.com" />
  </div>
  <div class="mb-3">
    <label class="form-label">Message</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>`;
    }

    const updatedHtml = previewHtml + html;
    setPreviewHtml(updatedHtml);
    setCodeHtml(updatedHtml.trim());
  };

  const resetArena = () => {
    setPreviewHtml('');
    setCodeHtml('<!-- Your HTML will appear here -->');
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🎮 Bootstrap Arena - Build with Bootstrap</h1>

      <div className="section" style={styles.section}>
        <div className="mb-4">
          <h4>🧱 Choose a Bootstrap Component:</h4>
          <button className="btn btn-primary component-btn" onClick={() => addComponent('button')}>Button</button>
          <button className="btn btn-success component-btn" onClick={() => addComponent('card')}>Card</button>
          <button className="btn btn-warning component-btn" onClick={() => addComponent('alert')}>Alert</button>
          <button className="btn btn-secondary component-btn" onClick={() => addComponent('form')}>Form</button>
          <button className="btn btn-danger component-btn" onClick={resetArena}>Reset</button>
        </div>

        <h5>🎨 Preview Area:</h5>
        <div className="preview" style={styles.preview} dangerouslySetInnerHTML={{ __html: previewHtml }}></div>

        <h5>💻 HTML Code:</h5>
        <div className="code-box" style={styles.codeBox}>
          {codeHtml}
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    background: '#f7f9fc',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
  },
  h1: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  section: {
    maxWidth: '1000px',
    margin: 'auto',
  },
  preview: {
    background: 'white',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '150px',
    border: '1px solid #ddd',
    marginBottom: '20px',
  },
  codeBox: {
    background: '#f8f9fa',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '150px',
    border: '1px solid #ddd',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
};

export default BootstrapArena;
