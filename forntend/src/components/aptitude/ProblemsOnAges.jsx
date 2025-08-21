import React from 'react';

const ProblemsOnAges = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Problems on Ages - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Problems on Ages?</h2>
        <p>
          Problems on ages involve finding the present ages of individuals, given some relationships between their ages at different points in time. These problems are generally based on algebraic equations involving age differences and ratios.
        </p>

        <h3>General Approach</h3>
        <ul>
          <li>Assume the current ages of individuals as variables.</li>
          <li>Translate the given relationship or condition into an equation.</li>
          <li>Solve the equation to find the required age(s).</li>
        </ul>

        <h3>Formulas and Key Concepts</h3>
        <ul>
          <li><strong>Age Difference Method:</strong> If the difference between two persons' ages is constant, their ages increase by the same amount as time passes.</li>
          <li><strong>Age Ratio Method:</strong> If the ratio of two persons' ages remains constant, their age difference also increases at the same rate.</li>
          <li><strong>Algebraic Equations:</strong> Set up an equation based on the given conditions, such as "In 5 years, Person A will be twice the age of Person B."</li>
        </ul>

        <h3>Shortcuts</h3>
        <ul>
          <li>Use "let" to assign variables for ages of individuals.</li>
          <li>Translate the problem's conditions into simple linear or quadratic equations.</li>
          <li>Always remember to consider the future or past ages as given in the problem.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> The sum of the ages of A and B is 30 years. A is 4 years older than B. What are their present ages?
        </p>
        <p>Options: A. A = 18, B = 12 B. A = 17, B = 13 C. A = 20, B = 10 D. A = 22, B = 8</p>
        <p><strong>Answer:</strong> A. A = 18, B = 12</p>
        <p><strong>Explanation:</strong> Let A's age be 'x' and B's age be 'x - 4'. According to the given condition, x + (x - 4) = 30. Solving this gives x = 18. Therefore, A = 18 and B = 12.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> Five years ago, the age of A was three times the age of B. After five years, the age of A will be twice the age of B. What are their present ages?
        </p>
        <p>Options: A. A = 25, B = 10 B. A = 30, B = 12 C. A = 20, B = 15 D. A = 24, B = 14</p>
        <p><strong>Answer:</strong> B. A = 30, B = 12</p>
        <p><strong>Explanation:</strong> Let A's present age be 'x' and B's present age be 'y'. The two conditions are:
          1. Five years ago, A was three times B: x - 5 = 3(y - 5).
          2. After five years, A will be twice B: x + 5 = 2(y + 5).

          Solving these equations gives x = 30 and y = 12.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> The ratio of the present ages of A and B is 5:3. After 5 years, the ratio will be 7:5. What are their present ages?
        </p>
        <p>Options: A. A = 35, B = 21 B. A = 40, B = 24 C. A = 25, B = 15 D. A = 30, B = 18</p>
        <p><strong>Answer:</strong> A. A = 35, B = 21</p>
        <p><strong>Explanation:</strong> Let A's present age be 5x and B's present age be 3x. According to the second condition:
          After 5 years, the ratio will be 7:5, so (5x + 5) / (3x + 5) = 7/5.

          Solving this equation gives x = 7, so A's present age is 5x = 35 and B's present age is 3x = 21.</p>
      </section>
    </div>
  );
};

export default ProblemsOnAges;
