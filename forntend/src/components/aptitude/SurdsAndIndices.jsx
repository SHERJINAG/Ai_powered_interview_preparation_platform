import React from 'react';

const SurdsAndIndices = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Surds and Indices - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Surds?</h2>
        <p>
          A **surd** is an expression containing a square root, cube root, or any other root of a number that cannot be simplified into a rational number. Surds are generally expressed in the form of roots like <strong>√a</strong>, <strong>∛a</strong>, etc., where 'a' is a number that is not a perfect square or cube.
        </p>

        <p><strong>Common Surd Examples:</strong></p>
        <ul>
          <li>√2 (Square root of 2)</li>
          <li>∛3 (Cube root of 3)</li>
        </ul>

        <h3>Key Rules of Surds:</h3>
        <ul>
          <li>√a × √b = √(a × b)</li>
          <li>√a ÷ √b = √(a ÷ b)</li>
          <li>(√a)² = a</li>
        </ul>

        <h2>What are Indices?</h2>
        <p>
          **Indices** (also called exponents) are shorthand notations for repeated multiplication of the same number. For example, <strong>a²</strong> means <strong>a × a</strong>, and <strong>a³</strong> means <strong>a × a × a</strong>.
        </p>

        <h3>Key Rules of Indices:</h3>
        <ul>
          <li>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></li>
          <li>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></li>
          <li>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></li>
          <li>a<sup>0</sup> = 1 (any number raised to the power 0 is 1)</li>
          <li>a<sup>-n</sup> = 1/a<sup>n</sup> (Negative exponent means reciprocal)</li>
        </ul>
      </section>

      <section>
        <h2>Shortcuts for Surds and Indices</h2>
        <ul>
          <li>For multiplication of square roots: √a × √b = √(a × b). This simplifies your work and avoids calculating large square roots individually.</li>
          <li>For dividing square roots: √a ÷ √b = √(a ÷ b). This makes it easier to simplify fractions involving roots.</li>
          <li>For powers: When an exponent is zero (a⁰), the result is always 1. This applies to all numbers except 0.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> Simplify the expression: √25 × √16
        </p>
        <p>Options: A. 5 B. 6 C. 10 D. 4</p>
        <p><strong>Answer:</strong> C. 10</p>
        <p><strong>Explanation:</strong> √25 = 5 and √16 = 4, so √25 × √16 = 5 × 4 = 20.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> Simplify: (√8) × (√2) ÷ √4
        </p>
        <p>Options: A. 2 B. 3 C. 1 D. 4</p>
        <p><strong>Answer:</strong> A. 2</p>
        <p><strong>Explanation:</strong> Simplify: (√8 × √2) ÷ √4 = √(8 × 2) ÷ √4 = √16 ÷ 2 = 4 ÷ 2 = 2.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> Simplify the expression: (√12 + √75) ÷ √3
        </p>
        <p>Options: A. 4 B. 5 C. 3 D. 2</p>
        <p><strong>Answer:</strong> B. 5</p>
        <p><strong>Explanation:</strong> 
          First, simplify each term: 
          <br />
          √12 = 2√3, √75 = 5√3.
          <br />
          So, the expression becomes: (2√3 + 5√3) ÷ √3 = 7√3 ÷ √3 = 7.
          <br />
          The answer is <strong>5</strong>.
        </p>
      </section>
    </div>
  );
};

export default SurdsAndIndices;
