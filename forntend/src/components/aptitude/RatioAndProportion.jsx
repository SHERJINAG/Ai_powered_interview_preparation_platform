import React from 'react';

const RatioAndProportion = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ratio and Proportion - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Ratio and Proportion?</h2>
        <p>
          **Ratio** is a comparison of two or more quantities. It tells how much of one quantity is compared to another.
        </p>
        <p>
          **Proportion** is an equation that states that two ratios are equal. For example, if the ratio of A to B is the same as the ratio of C to D, we write it as A:B = C:D.
        </p>

        <h3>Formula for Ratio and Proportion:</h3>
        <ul>
          <li><strong>Ratio (A:B)</strong> = A / B</li>
          <li><strong>Proportion:</strong> If A:B = C:D, then A × D = B × C</li>
        </ul>

        <h3>Shortcuts for Ratio and Proportion:</h3>
        <ul>
          <li>If the given quantities are in the form of a ratio, use cross-multiplication for proportions.</li>
          <li>For simple problems involving ratios, simplify by finding the greatest common divisor (GCD) of the terms.</li>
          <li>When a quantity is divided into parts in a given ratio, the part corresponding to a particular number is found by using the total parts and the total quantity.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If the ratio of A to B is 3:4, and B has 12 apples, how many apples does A have?
        </p>
        <p>Options: A. 6 B. 7 C. 9 D. 10</p>
        <p><strong>Answer:</strong> C. 9</p>
        <p><strong>Explanation:</strong> Given that A:B = 3:4, if B = 12, then A = (3/4) × 12 = 9 apples.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> The ratio of the ages of A and B is 5:7. If the difference in their ages is 10 years, what is the age of A?
        </p>
        <p>Options: A. 15 B. 20 C. 25 D. 30</p>
        <p><strong>Answer:</strong> C. 25</p>
        <p><strong>Explanation:</strong> Let the ages of A and B be 5x and 7x. The difference in their ages is 10, so 7x - 5x = 10. Hence, 2x = 10, which gives x = 5. Therefore, A’s age = 5x = 5 × 5 = 25 years.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A, B, and C invest in a partnership in the ratio 3:5:7. If the total profit after 1 year is $4500, how much does B get?
        </p>
        <p>Options: A. $1250 B. $1500 C. $1750 D. $2000</p>
        <p><strong>Answer:</strong> B. $1500</p>
        <p><strong>Explanation:</strong> The total ratio is 3 + 5 + 7 = 15. B’s share = (5/15) × 4500 = 1500.</p>
      </section>
    </div>
  );
};

export default RatioAndProportion;
