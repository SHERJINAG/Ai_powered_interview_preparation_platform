import React from 'react';

const Simplification = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simplification - Explanation and Examples</h1>

      <section>
        <h2>What is Simplification?</h2>
        <p>
          Simplification is the process of reducing an expression or equation to its simplest form. It involves combining like terms, reducing fractions, or performing basic arithmetic operations.
        </p>
        <p>
          For example, in a fraction like <strong>8/16</strong>, the simplification would be <strong>1/2</strong> by dividing both the numerator and denominator by 8.
        </p>
        <p><strong>Key Steps in Simplification:</strong></p>
        <ul>
          <li>Combine like terms (e.g., 3x + 2x = 5x).</li>
          <li>Reduce fractions to their lowest terms (e.g., 8/16 = 1/2).</li>
          <li>Simplify arithmetic expressions (e.g., 12 × 5 = 60).</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>
        
        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> Simplify the expression: 12 × 4 ÷ 6
        </p>
        <p>Options: A. 6 B. 8 C. 4 D. 10</p>
        <p><strong>Answer:</strong> A. 6</p>
        <p><strong>Explanation:</strong> First, perform the multiplication: 12 × 4 = 48. Then, divide the result by 6: 48 ÷ 6 = 8. The answer is <strong>8</strong>.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> Simplify: (4 + 8) × 3 − 10 ÷ 2
        </p>
        <p>Options: A. 26 B. 28 C. 30 D. 32</p>
        <p><strong>Answer:</strong> B. 28</p>
        <p><strong>Explanation:</strong> First, simplify inside the parentheses: (4 + 8) = 12. Then, multiply: 12 × 3 = 36. Finally, divide 10 by 2: 10 ÷ 2 = 5. Subtract: 36 − 5 = 28. The answer is <strong>28</strong>.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> Simplify the following expression: (12 × 2 − 5 × 3) ÷ (4 + 2)
        </p>
        <p>Options: A. 2 B. 3 C. 4 D. 5</p>
        <p><strong>Answer:</strong> A. 2</p>
        <p><strong>Explanation:</strong> 
          First, simplify inside the parentheses: 
          <br />
          12 × 2 = 24 and 5 × 3 = 15, so the expression becomes: (24 − 15) ÷ (4 + 2).
          <br />
          Now, simplify: (24 − 15) = 9, and (4 + 2) = 6. 
          <br />
          Finally, divide: 9 ÷ 6 = 1.5, which rounds to <strong>2</strong>.
        </p>
      </section>
    </div>
  );
};

export default Simplification;
