import React, { useState } from 'react';

const JavaClassesObjectsGame = () => {
  const [code, setCode] = useState(
`clas Spell {
    String name;
    int power;
}

Spell fireSpell = new Spell(;`
  );
  const [resultMsg, setResultMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const checkCode = () => {
    const text = code.trim();
    const errors = [];

    if (!text.includes('class Spell')) {
      errors.push('📘 Typo: use `class` instead of `clas`.');
    }
    if (!text.includes('String name;') || !text.includes('int power;')) {
      errors.push('📖 Missing class fields: name or power.');
    }
    if (!text.includes('Spell fireSpell = new Spell();')) {
      errors.push('🔥 Object declaration is incorrect. Check parentheses and semicolon.');
    }

    if (errors.length === 0) {
      setResultMsg('✨ Excellent! Your fireSpell is now ready to cast!');
      setIsError(false);
    } else {
      setResultMsg(errors.join('\n'));
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <h1>📘 SpellBook Challenge – Level 2</h1>

      <div className="section">
        <h2>📘 Concept: Java Classes & Objects</h2>
        <p>
          In Java, a <b>class</b> is like a blueprint or a spellbook. It describes the properties (fields) and actions (methods) of something.
        </p>
        <p>An <b>object</b> is a real-world spell created from that book – with real values.</p>
        <p><b>Syntax:</b></p>
        <pre>
{`class Spell {
    String name;
    int power;
}

Spell fireSpell = new Spell();`}
        </pre>
      </div>

      <div className="section">
        <h2>🎮 Story</h2>
        <p>
          You’ve found an ancient SpellBook! Inside are templates (classes) to craft your spells (objects). But the book’s pages are scrambled! Fix the code and bring the fireSpell to life.
        </p>
      </div>

      <div className="section">
        <h2>💡 Challenge</h2>
        <p>Fix the class and object declaration below:</p>
        <textarea
          id="code-area"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={checkCode}>Cast the Spell</button>
        <p id="result-msg" className={isError ? 'error' : ''}> {resultMsg.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)} </p>

        <div className="book">
          <div className="page">
            <h3>Class</h3>
            <p><code>Spell</code></p>
          </div>
          <div className="page">
            <h3>Fields</h3>
            <p><code>name</code><br/><code>power</code></p>
          </div>
          <div className="page">
            <h3>Object</h3>
            <p><code>fireSpell</code></p>
          </div>
        </div>
      </div>

      <style>{`
        body { background: #f0f8ff; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; }
        .container { max-width: 750px; margin: auto; background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 0 15px rgba(0,0,0,0.1); }
        h1, h2 { color: #4b0082; }
        .section { margin-bottom: 25px; }
        textarea { width: 100%; height: 160px; font-family: monospace; font-size: 14px; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
        button { background: #4b0082; color: white; padding: 10px 20px; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px; }
        #result-msg { margin-top: 15px; font-weight: bold; color: #006400; }
        .error { color: #cc0000; }
        .book { margin-top: 20px; display: flex; gap: 20px; }
        .page { background: #fdf5e6; border: 2px solid #deb887; border-radius: 10px; width: 120px; padding: 10px; text-align: center; box-shadow: 2px 2px 5px rgba(0,0,0,0.2); }
        .page h3 { margin: 5px 0; }
      `}</style>
    </div>
  );
};

export default JavaClassesObjectsGame;
