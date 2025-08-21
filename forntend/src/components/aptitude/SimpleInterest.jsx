import React from 'react';

const SimpleInterest = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Interest - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Simple Interest?</h2>
        <p>
          **Simple Interest** is a method of calculating the interest charge on a loan or investment. It is calculated using the original principal amount, the rate of interest, and the time period for which the money is invested or borrowed.
        </p>

        <h3>Formula for Simple Interest:</h3>
        <ul>
          <li><strong>Simple Interest (SI)</strong> = (Principal × Rate × Time) / 100</li>
          <li><strong>Amount (A)</strong> = Principal + Simple Interest = P + SI</li>
        </ul>

        <h3>Shortcuts for Simple Interest:</h3>
        <ul>
          <li>If you know the interest rate, time, and principal, you can calculate the Simple Interest directly using the formula above.</li>
          <li>If you need to find the principal, you can rearrange the formula:
            <strong>Principal (P) = (SI × 100) / (Rate × Time)</strong>
          </li>
          <li>If you need to find the time, rearrange the formula:
            <strong>Time (T) = (SI × 100) / (Principal × Rate)</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the simple interest on a principal of $1000 at an interest rate of 5% for 2 years?
        </p>
        <p>Options: A. $50 B. $100 C. $200 D. $150</p>
        <p><strong>Answer:</strong> B. $100</p>
        <p><strong>Explanation:</strong> SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = 100.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> If the simple interest on a sum of money is $300 for 3 years at an interest rate of 6%, what is the principal amount?
        </p>
        <p>Options: A. $1200 B. $1000 C. $900 D. $800</p>
        <p><strong>Answer:</strong> B. $1000</p>
        <p><strong>Explanation:</strong> P = (SI × 100) / (R × T) = (300 × 100) / (6 × 3) = 1000.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> The simple interest on a sum of money is $800 after 4 years at a rate of 10% per annum. What is the total amount?
        </p>
        <p>Options: A. $1800 B. $1600 C. $1400 D. $1200</p>
        <p><strong>Answer:</strong> B. $1600</p>
        <p><strong>Explanation:</strong> SI = (P × R × T) / 100, so P = (SI × 100) / (R × T) = (800 × 100) / (10 × 4) = 2000. Then, the total amount (A) = P + SI = 2000 + 800 = 1600.</p>
      </section>
    </div>
  );
};

export default SimpleInterest;
