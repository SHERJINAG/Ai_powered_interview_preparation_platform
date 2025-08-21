import React from 'react';

const ProfitAndLoss = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Profit and Loss - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Profit and Loss?</h2>
        <p>
          **Profit** refers to the financial gain made when the selling price of an item is greater than the cost price. 
          **Loss** occurs when the cost price exceeds the selling price.
        </p>

        <h3>Formulas:</h3>
        <ul>
          <li><strong>Profit</strong> = Selling Price (SP) - Cost Price (CP)</li>
          <li><strong>Loss</strong> = Cost Price (CP) - Selling Price (SP)</li>
          <li><strong>Profit Percentage</strong> = (Profit / Cost Price) × 100</li>
          <li><strong>Loss Percentage</strong> = (Loss / Cost Price) × 100</li>
        </ul>

        <h3>Shortcuts for Profit and Loss:</h3>
        <ul>
          <li>If the cost price and profit percentage are given, the selling price can be calculated using the formula:
            <strong>SP = CP × (1 + Profit Percentage / 100)</strong>.
          </li>
          <li>If the cost price and loss percentage are given, the selling price can be calculated using the formula:
            <strong>SP = CP × (1 - Loss Percentage / 100)</strong>.
          </li>
          <li>To calculate profit or loss percentage quickly, use the difference between SP and CP and divide by CP, then multiply by 100.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If an item is sold for $1200 and the cost price is $1000, what is the profit?
        </p>
        <p>Options: A. $100 B. $200 C. $300 D. $400</p>
        <p><strong>Answer:</strong> B. $200</p>
        <p><strong>Explanation:</strong> Profit = Selling Price - Cost Price = 1200 - 1000 = 200.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A man sells an article at a profit of 20%. If the cost price is $500, what is the selling price?
        </p>
        <p>Options: A. $600 B. $650 C. $550 D. $700</p>
        <p><strong>Answer:</strong> A. $600</p>
        <p><strong>Explanation:</strong> Selling Price = Cost Price × (1 + Profit Percentage / 100) = 500 × (1 + 20/100) = 500 × 1.2 = $600.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A shopkeeper bought 30 items at a cost price of $200 each. He sold 20 of them at a profit of 25%. How much profit did he make on the total 30 items?
        </p>
        <p>Options: A. $1000 B. $1200 C. $1500 D. $2000</p>
        <p><strong>Answer:</strong> B. $1200</p>
        <p><strong>Explanation:</strong> The profit on 20 items is: 20 × (200 × 25 / 100) = 20 × 50 = $1000. For the remaining 10 items, there is no profit or loss, so the total profit is $1000.</p>
      </section>
    </div>
  );
};

export default ProfitAndLoss;
