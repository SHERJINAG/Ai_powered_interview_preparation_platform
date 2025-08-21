// src/components/JavaAbstractionGame.js
import React, { useState } from 'react';

const JavaAbstractionGame = () => {
  const [code, setCode] = useState('/* Complete the interface and classes */\ninterface Castable {\n    // method declaration\n}\n\nclass FireSpell implements Castable {\n    public void castSpell() {\n        System.out.println("🔥 Fire spell casted!");\n    }\n}\n\nclass IceSpell implements Castable {\n    public void castSpell() {\n        System.out.println("❄️ Ice spell casted!");\n    }\n}');
  const [resultMsg, setResultMsg] = useState('');
  const [resultClass, setResultClass] = useState('');
  const [scrollText, setScrollText] = useState('📜 Ancient Interface Scroll: Castable');

  const checkCode = () => {
    let errors = [];

    const hasInterface = code.includes('interface Castable');
    const hasMethod = code.includes('void castSpell()');
    const hasFire = code.includes('class FireSpell');
    const hasIce = code.includes('class IceSpell');

    if (!hasInterface) {
      errors.push('📜 Interface "Castable" is missing.');
    }

    if (!hasMethod) {
      errors.push('🪄 Method castSpell() is missing from interface or class.');
    }

    if (!hasFire || !hasIce) {
      errors.push('🔥❄️ One or both classes (FireSpell, IceSpell) are missing.');
    }

    if (errors.length === 0) {
      setResultMsg('✅ Interface implemented successfully! Spells obey the scroll!');
      setResultClass('success');
      setScrollText('🪄 Scroll Accepted – All Spells Cast Successfully!');
    } else {
      setResultMsg(errors.join('\n'));
      setResultClass('error');
      setScrollText('📜 Ancient Interface Scroll: Castable');
    }
  };

  return (
    <div className="container">
      <h1>📜 Level 7: Abstraction – The Interface Scroll</h1>

      <h2>📘 Concept: Java Abstraction</h2>
      <p>
        <strong>Abstraction</strong> hides complex implementation by defining <code>interfaces</code> – like contracts every spell must follow.<br />
        Think of it as writing a scroll that all wizards must obey! 🧙‍♂️
      </p>

      <pre>
        {`
interface Castable {
    void castSpell();
}

class FireSpell implements Castable {
    public void castSpell() {
        System.out.println("🔥 Casting Fire Spell!");
    }
}
        `}
      </pre>

      <h2>🎮 Story</h2>
      <p>
        You’ve discovered an ancient scroll named <code>Castable</code> – every spell must now follow its ritual! Create a <strong>FireSpell</strong> and <strong>IceSpell</strong> that obey this scroll.
      </p>

      <div className="scroll">{scrollText}</div>

      <h2>💡 Challenge</h2>
      <p>
        Complete the code by writing the <code>Castable</code> interface and implementing it in both classes.
      </p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        id="code-area"
      ></textarea>

      <button onClick={checkCode}>Check Code</button>
      <p id="result-msg" className={resultClass}>{resultMsg}</p>
    </div>
  );
};

export default JavaAbstractionGame;
