import React from 'react';

const MixtureAndAlligation = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mixture and Alligation - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Mixture and Alligation?</h2>
        <p>
          **Mixture and Alligation** is a concept used in solving problems related to the mixing of two or more substances with different qualities (like price, concentration, etc.). The alligation method is used to calculate the ratio in which the two or more quantities should be mixed to achieve a desired quantity.
        </p>

        <h3>Formulas for Mixture and Alligation:</h3>
        <ul>
          <li>
            **Alligation Method**: 
            The method to calculate the ratio in which two or more quantities are mixed:
            <br />
            <code>Alligation Ratio = (Difference between one quantity and mean price) / (Difference between other quantity and mean price)</code>
          </li>
          <li>
            **Alligation Rule for Mixtures**: 
            <br />
            When two solutions are mixed, their resulting quantity or cost is a weighted average.
            <br />
            <code>Mean price = ((P₁ × C₁) + (P₂ × C₂)) / (P₁ + P₂)</code>
            <br />
            Where:
            <ul>
              <li>P₁, P₂ are the quantities of the two substances</li>
              <li>C₁, C₂ are the respective costs or concentrations of the substances</li>
            </ul>
          </li>
        </ul>

        <h3>Shortcuts for Mixture and Alligation:</h3>
        <ul>
          <li>
            Use the alligation rule for mixtures when you need to calculate the final mixture ratio or price.
          </li>
          <li>
            For a more complex mixture with multiple quantities, break the problem down into smaller parts and apply the rule step by step.
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If a person mixes 3 liters of solution at $20 per liter with 4 liters of solution at $30 per liter, what is the mean price of the mixture?
        </p>
        <p>Options: A. $24 B. $25 C. $26 D. $27</p>
        <p><strong>Answer:</strong> B. $25</p>
        <p><strong>Explanation:</strong> 
          Using the alligation rule:
          <br />
          P₁ = 3, C₁ = 20
          <br />
          P₂ = 4, C₂ = 30
          <br />
          <code>Mean Price = ((3 × 20) + (4 × 30)) / (3 + 4) = (60 + 120) / 7 = 25</code>
        </p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A person mixes 5 liters of solution at $15 per liter with 8 liters of solution at $20 per liter. What is the quantity of the final mixture if the mean price is $18 per liter?
        </p>
        <p>Options: A. 12 liters B. 13 liters C. 15 liters D. 16 liters</p>
        <p><strong>Answer:</strong> A. 12 liters</p>
        <p><strong>Explanation:</strong> 
          Using the alligation rule:
          <br />
          Mean price = 18
          <br />
          For the first solution: 
          <br />
          Difference = 20 - 18 = 2
          <br />
          For the second solution: 
          <br />
          Difference = 18 - 15 = 3
          <br />
          The ratio of the quantities to be mixed is 2:3.
          <br />
          Total quantity = 2 + 3 = 5 liters and 8 liters, so total = 12 liters.
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A man mixes 10 liters of a 20% solution with 5 liters of a 40% solution. How much solution should he mix with 30 liters of a 25% solution to get a mixture of 30%?
        </p>
        <p>Options: A. 7 liters B. 8 liters C. 9 liters D. 10 liters</p>
        <p><strong>Answer:</strong> B. 8 liters</p>
        <p><strong>Explanation:</strong> 
          Using the alligation rule:
          <br />
          Difference with 20% solution: 30 - 20 = 10
          <br />
          Difference with 40% solution: 40 - 30 = 10
          <br />
          Total quantity of the solution = 8 liters.
        </p>
      </section>
    </div>
  );
};

export default MixtureAndAlligation;
