import React from 'react';

const CompoundInterest = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Compound Interest - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Compound Interest?</h2>
        <p>
          **Compound Interest** is the interest calculated on both the initial principal and the accumulated interest from previous periods. It is different from simple interest, where interest is only calculated on the original principal amount.
        </p>

        <h3>Formula for Compound Interest:</h3>
        <ul>
          <li><strong>Compound Interest (CI)</strong> = P × (1 + R/100)^T - P</li>
          <li><strong>Amount (A)</strong> = P × (1 + R/100)^T</li>
        </ul>

        <h3>Shortcuts for Compound Interest:</h3>
        <ul>
          <li>If the interest is compounded annually, you can use the above formula directly.</li>
          <li>If the interest is compounded half-yearly or quarterly, adjust the rate and time as follows:
            <ul>
              <li>For half-yearly compounding: R' = R/2, T' = 2T</li>
              <li>For quarterly compounding: R' = R/4, T' = 4T</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the compound interest on a principal of $1000 at an interest rate of 5% per annum for 2 years, compounded annually?
        </p>
        <p>Options: A. $102.50 B. $110.25 C. $120.50 D. $100.00</p>
        <p><strong>Answer:</strong> B. $110.25</p>
        <p><strong>Explanation:</strong> CI = P × (1 + R/100)^T - P = 1000 × (1 + 5/100)^2 - 1000 = 1000 × (1.05)^2 - 1000 = 1000 × 1.1025 - 1000 = 1102.5 - 1000 = 110.25.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the compound interest on a principal of $1500 at an interest rate of 8% per annum for 3 years, compounded annually?
        </p>
        <p>Options: A. $400.00 B. $420.00 C. $450.00 D. $500.00</p>
        <p><strong>Answer:</strong> B. $420.00</p>
        <p><strong>Explanation:</strong> CI = P × (1 + R/100)^T - P = 1500 × (1 + 8/100)^3 - 1500 = 1500 × (1.08)^3 - 1500 = 1500 × 1.2597 - 1500 = 1889.55 - 1500 = 420.00.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> If $5000 is invested at a rate of 10% per annum for 2 years, compounded half-yearly, what is the compound interest?
        </p>
        <p>Options: A. $1105.00 B. $1125.00 C. $1150.00 D. $1200.00</p>
        <p><strong>Answer:</strong> B. $1125.00</p>
        <p><strong>Explanation:</strong> For half-yearly compounding, R' = R/2 = 10/2 = 5% and T' = 2T = 2 × 2 = 4. Now,
          CI = P × (1 + R'/100)^T' - P = 5000 × (1 + 5/100)^4 - 5000 = 5000 × (1.05)^4 - 5000 = 5000 × 1.21550625 - 5000 = 6077.53125 - 5000 = 1127.53.
        </p>
      </section>
    </div>
  );
};

export default CompoundInterest;
