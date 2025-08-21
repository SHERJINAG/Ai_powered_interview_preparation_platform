import React from 'react';

const Average = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Average - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is an Average?</h2>
        <p>
          The **average** (also called the **mean**) of a set of numbers is the sum of the numbers divided by the count of the numbers. It is a measure of central tendency that gives a single number that represents the central point of a data set.
        </p>

        <h3>Formula for Average:</h3>
        <p>
          The formula to calculate the average of 'n' numbers is: 
          <strong>Average = (Sum of all numbers) ÷ (Number of values)</strong>
        </p>
        <ul>
          <li>If the data set is {3, 7, 8, 5}, then the average is <strong>(3 + 7 + 8 + 5) ÷ 4 = 23 ÷ 4 = 5.75</strong>.</li>
        </ul>

        <h2>Shortcuts for Average:</h2>
        <ul>
          <li>Always sum the numbers first, then divide by the count of the numbers. This is the simplest and fastest method for calculating averages.</li>
          <li>If the numbers are grouped or have a pattern, try using weighted averages to make the calculation faster.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> Find the average of the numbers: 6, 12, 18, 24.
        </p>
        <p>Options: A. 15 B. 12 C. 10 D. 16</p>
        <p><strong>Answer:</strong> A. 15</p>
        <p><strong>Explanation:</strong> The sum of the numbers = 6 + 12 + 18 + 24 = 60. The number of values = 4. So, Average = 60 ÷ 4 = 15.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> The average of five numbers is 20. If four of the numbers are 15, 18, 22, and 25, what is the fifth number?
        </p>
        <p>Options: A. 35 B. 40 C. 45 D. 50</p>
        <p><strong>Answer:</strong> B. 40</p>
        <p><strong>Explanation:</strong> Let the fifth number be x. The sum of the numbers = 20 × 5 = 100. So, 15 + 18 + 22 + 25 + x = 100. Solving for x, we get x = 40.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> The average of 12 numbers is 30. When one number is excluded, the average of the remaining 11 numbers is 29. What is the excluded number?
        </p>
        <p>Options: A. 29 B. 30 C. 31 D. 32</p>
        <p><strong>Answer:</strong> C. 31</p>
        <p><strong>Explanation:</strong> The sum of the 12 numbers = 30 × 12 = 360. The sum of the remaining 11 numbers = 29 × 11 = 319. The excluded number = 360 - 319 = 31.</p>
      </section>
    </div>
  );
};

export default Average;
