import React from 'react';

const JavaCoreConceptsSpellbook = () => {
  return (
    <div className="container">
      <h1>🧙 Java Core Concepts Spellbook</h1>

      <details>
        <summary>📘 Java Syntax</summary>
        <p>Java programs are written inside <strong>classes</strong>. Execution begins in the <code>main()</code> method.</p>
        <p>Syntax must be precise — every statement ends with a semicolon, and blocks are enclosed in curly braces.</p>
        <pre><code>{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Wizard!");
    }
}`}</code></pre>
      </details>

      <details>
        <summary>➗ Operators</summary>
        <p>Operators are magical runes that perform actions on data.</p>
        <ul>
          <li><strong>Arithmetic:</strong> +, -, *, /</li>
          <li><strong>Relational:</strong> ==, !=, &gt;, &lt;</li>
          <li><strong>Logical:</strong> &amp;&amp;, ||, !</li>
        </ul>
        <pre><code>{`int power = 10 + 5;
boolean isEqual = (power == 15);
boolean strong = (power > 10) && (power < 20);`}</code></pre>
      </details>

      <details>
        <summary>🔀 Conditional Statements</summary>
        <p>Conditionals let you decide which path your magic takes.</p>
        <pre><code>{`if (mana > 50) {
    castSpell();
} else {
    rest();
}`}</code></pre>
      </details>

      <details>
        <summary>🔁 Looping</summary>
        <p>Use loops to repeat spells or rituals until a condition is met.</p>
        <pre><code>{`for (int i = 0; i < 5; i++) {
    chantSpell();
}

while (mana > 0) {
    recharge();
}`}</code></pre>
      </details>

      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f3f0e7;
          padding: 30px;
        }
        .container {
          max-width: 900px;
          margin: auto;
          background-color: #fff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
          text-align: center;
          color: #5a3d2b;
          font-size: 32px;
        }
        details {
          margin-top: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 15px;
          background-color: #fefcf8;
        }
        summary {
          font-size: 20px;
          font-weight: bold;
          color: #6b4226;
          cursor: pointer;
        }
        pre {
          background-color: #272822;
          color: #f8f8f2;
          padding: 15px;
          border-radius: 8px;
          overflow-x: auto;
        }
        p {
          font-size: 16px;
          margin-bottom: 10px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default JavaCoreConceptsSpellbook;
