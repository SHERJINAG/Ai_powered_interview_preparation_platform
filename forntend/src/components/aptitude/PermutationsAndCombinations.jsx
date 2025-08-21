import React from 'react';

const PermutationsAndCombinations = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI', backgroundColor: '#fdfdfd' }}>
      <h1 style={{ color: '#2c3e50' }}>🔢 Permutations and Combinations</h1>

      {/* Explanation */}
      <section style={{ marginBottom: '30px' }}>
        <h2>📘 Concept</h2>
        <p>
          <strong>Permutations:</strong> Arrangement of items in a specific order. Order matters.<br />
          <strong>Combinations:</strong> Selection of items without regard to order.
        </p>
      </section>

      {/* Formulas and Shortcuts */}
      <section style={{ marginBottom: '30px' }}>
        <h2>🧠 Formulas & Shortcuts</h2>
        <ul>
          <li><strong>Permutations (nPr) =</strong> n! / (n - r)!</li>
          <li><strong>Combinations (nCr) =</strong> n! / [r! × (n - r)!]</li>
          <li>For permutations, order matters: ABC ≠ BAC</li>
          <li>For combinations, order does not matter: AB = BA</li>
          <li><strong>n! (n factorial):</strong> n × (n-1) × (n-2) × ... × 1</li>
        </ul>
      </section>

      {/* Beginner Level Question */}
      <section style={{ marginBottom: '30px' }}>
        <h2>🔰 Beginner Level</h2>
        <p><strong>Question:</strong> How many ways can 3 books be arranged on a shelf?</p>
        <p>Options: A. 3 B. 6 C. 9 D. 27</p>
        <p><strong>Answer:</strong> B. 6</p>
        <p><strong>Explanation:</strong> Number of arrangements = 3! = 3 × 2 × 1 = 6.</p>
      </section>

      {/* Intermediate Level Question */}
      <section style={{ marginBottom: '30px' }}>
        <h2>⚙️ Intermediate Level</h2>
        <p><strong>Question:</strong> From 6 students, how many different teams of 3 can be formed?</p>
        <p>Options: A. 20 B. 120 C. 60 D. 15</p>
        <p><strong>Answer:</strong> A. 20</p>
        <p><strong>Explanation:</strong> Number of combinations = 6C3 = 6! / (3! × 3!) = 20.</p>
      </section>

      {/* Advanced Level Question */}
      <section>
        <h2>🚀 Advanced Level</h2>
        <p><strong>Question:</strong> In how many ways can the letters of the word “APPLE” be arranged?</p>
        <p>Options: A. 120 B. 60 C. 240 D. 30</p>
        <p><strong>Answer:</strong> B. 60</p>
        <p>
          <strong>Explanation:</strong> Total letters = 5 (A, P, P, L, E).<br />
          Since 'P' is repeated twice, total arrangements = 5! / 2! = 120 / 2 = 60.
        </p>
      </section>
    </div>
  );
};

export default PermutationsAndCombinations;
