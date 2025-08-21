import React from 'react';

const StatementsAndConclusions = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Statements and Conclusions - Explanation, Examples, and Strategies</h1>

      <section>
        <h2>What are Statements and Conclusions?</h2>
        <p>
          **Statements and Conclusions** is a logical reasoning concept where a statement is an assertion, and a conclusion is the inference drawn from the given statement. The main task is to evaluate whether a conclusion logically follows from the statement.
        </p>

        <h3>Key Concepts</h3>
        <p>
          - A **statement** is a declaration or assertion that could be true or false. 
          - A **conclusion** is a logical deduction made from the statement.
          - The conclusion must be directly supported by the statement and should not introduce new information outside of it.
        </p>

        <h3>How to Solve Statements and Conclusions Questions</h3>
        <ul>
          <li><strong>Read the Statement Carefully:</strong> Understand what is being stated.</li>
          <li><strong>Understand the Conclusion:</strong> Identify what the conclusion is trying to infer based on the statement.</li>
          <li><strong>Evaluate the Validity:</strong> Check whether the conclusion logically follows from the statement. If the conclusion introduces any new information or contradicts the statement, it is invalid.</li>
        </ul>
      </section>

      <section>
        <h2>Example Statements and Conclusions</h2>

        <h3>Beginner Level</h3>
        <p>
          <strong>Statement:</strong> "All flowers are plants."
        </p>
        <p>
          <strong>Conclusion 1:</strong> Roses are plants.<br />
          <strong>Conclusion 2:</strong> All plants are flowers.
        </p>
        <p>Options: A. Only Conclusion 1 follows B. Only Conclusion 2 follows C. Both Conclusions follow D. Neither Conclusion follows</p>
        <p><strong>Answer:</strong> A. Only Conclusion 1 follows</p>
        <p><strong>Explanation:</strong> Conclusion 1 follows because roses are flowers, and all flowers are plants. However, Conclusion 2 does not follow because not all plants are flowers.</p>

        <h3>Intermediate Level</h3>
        <p>
          <strong>Statement:</strong> "Some birds can fly."
        </p>
        <p>
          <strong>Conclusion 1:</strong> All birds can fly.<br />
          <strong>Conclusion 2:</strong> Some birds cannot fly.
        </p>
        <p>Options: A. Only Conclusion 1 follows B. Only Conclusion 2 follows C. Both Conclusions follow D. Neither Conclusion follows</p>
        <p><strong>Answer:</strong> B. Only Conclusion 2 follows</p>
        <p><strong>Explanation:</strong> Conclusion 1 does not follow because the statement says only some birds can fly, not all. Conclusion 2 is valid because the statement allows for the possibility that some birds cannot fly.</p>

        <h3>Advanced Level</h3>
        <p>
          <strong>Statement:</strong> "No dogs are cats, and all animals that are dogs have fur."
        </p>
        <p>
          <strong>Conclusion 1:</strong> No cats have fur.<br />
          <strong>Conclusion 2:</strong> All dogs have fur.
        </p>
        <p>Options: A. Only Conclusion 1 follows B. Only Conclusion 2 follows C. Both Conclusions follow D. Neither Conclusion follows</p>
        <p><strong>Answer:</strong> B. Only Conclusion 2 follows</p>
        <p><strong>Explanation:</strong> Conclusion 1 does not follow because there is no information about cats having fur in the statement. Conclusion 2 follows because the statement explicitly mentions that all dogs have fur.</p>
      </section>

      <section>
        <h2>Additional Tips for Solving Statements and Conclusions Questions</h2>
        <ul>
          <li><strong>Understand the Statement:</strong> The conclusion must logically follow from the given statement. If the statement doesn't imply the conclusion directly, it is invalid.</li>
          <li><strong>Pay Attention to Extremes:</strong> Be cautious of statements that use absolutes like "all," "none," or "only" because conclusions based on those words need to match exactly.</li>
          <li><strong>Logical Inferences:</strong> Use logical reasoning to check if the conclusion is a natural consequence of the statement, or if it introduces new concepts.</li>
        </ul>
      </section>
    </div>
  );
};

export default StatementsAndConclusions;
