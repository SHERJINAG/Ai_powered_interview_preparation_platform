import React from 'react';

const Partnership = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Partnership - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Partnership?</h2>
        <p>
          In a **partnership**, two or more people (partners) contribute money, assets, or labor to a business in exchange for a share of the profits or losses. The contribution of each partner is considered based on the amount of money or work they put in, and the profit or loss is shared according to this ratio.
        </p>

        <h3>Formula for Partnership:</h3>
        <ul>
          <li>
            If the investments of A and B are in the ratio of a:b, and the time period is in the ratio of t1:t2, then the profit-sharing ratio will be (a × t1):(b × t2).
          </li>
        </ul>

        <h3>Shortcuts for Partnership:</h3>
        <ul>
          <li>Profit-sharing depends on the ratio of investment and the time period of investment.</li>
          <li>If two partners invest in a business for different durations, multiply their investment by the time period they invested to calculate the share of profit.</li>
          <li>When the total profit is given, use the ratio of investments and time periods to find the share of each partner.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A and B invested in a business in the ratio of 3:2. After 1 year, they made a profit of $6000. What is A’s share of the profit?
        </p>
        <p>Options: A. $3000 B. $3500 C. $4000 D. $4500</p>
        <p><strong>Answer:</strong> A. $3000</p>
        <p><strong>Explanation:</strong> The ratio of investment is 3:2. So, the total ratio is 3 + 2 = 5. A’s share = (3/5) × 6000 = 3000.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A invests $5000 in a business for 6 months, and B invests $7000 for 12 months. What is B’s share of the profit if the total profit after 1 year is $12000?
        </p>
        <p>Options: A. $5000 B. $7000 C. $9000 D. $11000</p>
        <p><strong>Answer:</strong> B. $7000</p>
        <p><strong>Explanation:</strong> A’s investment = 5000 × 6 = 30000, B’s investment = 7000 × 12 = 84000. The total investment ratio is 30000:84000 = 3:8. B’s share = (8/11) × 12000 = 7000.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A, B, and C invest in a business in the ratio 4:5:6. After 8 months, A withdraws half of his investment, and B doubles his investment. After 1 year, the total profit is $18000. What is C’s share of the profit?
        </p>
        <p>Options: A. $6000 B. $7000 C. $8000 D. $9000</p>
        <p><strong>Answer:</strong> C. $8000</p>
        <p><strong>Explanation:</strong> 
          - A's effective investment = (4 × 8) + (2 × 4) = 32 + 8 = 40
          - B's effective investment = (5 × 8) + (10 × 4) = 40 + 40 = 80
          - C’s investment = 6 × 12 = 72
          - The total effective investment ratio is 40:80:72 = 5:10:9.
          - C’s share = (9/24) × 18000 = 8000.
        </p>
      </section>
    </div>
  );
};

export default Partnership;
