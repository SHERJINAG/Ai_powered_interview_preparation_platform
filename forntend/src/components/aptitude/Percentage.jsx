import React from 'react';

const Percentage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Percentage - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is a Percentage?</h2>
        <p>
          A **percentage** is a way of expressing a number as a fraction of 100. It is used to compare values in relation to a total, and it is often denoted by the symbol "%".
        </p>

        <h3>Formula for Percentage:</h3>
        <p>
          The formula to calculate percentage is:
          <strong>Percentage = (Part / Whole) × 100</strong>
        </p>
        <ul>
          <li>If you scored 45 out of 50 in a test, your percentage is calculated as <strong>(45 / 50) × 100 = 90%</strong>.</li>
        </ul>

        <h2>Shortcuts for Percentage Calculations:</h2>
        <ul>
          <li>To calculate X% of a number, multiply the number by X and divide by 100.</li>
          <li>To increase or decrease a number by a percentage, use the formula: <strong>New Value = Original Value × (1 ± Percentage/100)</strong>.</li>
          <li>For quick mental calculations, 10% of any number is simply moving the decimal one place to the left.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is 20% of 150?
        </p>
        <p>Options: A. 25 B. 30 C. 35 D. 40</p>
        <p><strong>Answer:</strong> B. 30</p>
        <p><strong>Explanation:</strong> 20% of 150 is (20 × 150) ÷ 100 = 30.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> If a product costs $250 and the sales tax is 18%, what is the total cost?
        </p>
        <p>Options: A. $280 B. $290 C. $295 D. $300</p>
        <p><strong>Answer:</strong> B. $295</p>
        <p><strong>Explanation:</strong> The sales tax is 18% of $250 = (18 × 250) ÷ 100 = $45. Total cost = $250 + $45 = $295.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A company increases the price of an item by 25%. After a month, it decreases the price by 20%. What is the overall percentage change in the price of the item?
        </p>
        <p>Options: A. 5% increase B. 2% increase C. 3% decrease D. 5% decrease</p>
        <p><strong>Answer:</strong> A. 5% increase</p>
        <p><strong>Explanation:</strong> Let the original price be $100. After a 25% increase, the price becomes $125. Then, after a 20% decrease, the price becomes $125 × (1 - 0.20) = $100. The overall change = (100 - 95) / 95 × 100 = 5% increase.</p>
      </section>
    </div>
  );
};

export default Percentage;
