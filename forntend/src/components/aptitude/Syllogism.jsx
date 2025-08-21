import React from 'react';

const Syllogism = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Syllogism - Explanation, Examples, and Strategies</h1>

      <section>
        <h2>What is a Syllogism?</h2>
        <p>
          **Syllogism** is a form of reasoning in which a conclusion is drawn from two given or assumed propositions (premises). It follows a logical structure of deductive reasoning. Syllogism is often used in logical reasoning and aptitude tests to evaluate your ability to draw logical conclusions.
        </p>

        <h3>Basic Structure of a Syllogism</h3>
        <p>
          A syllogism consists of three parts:
          <ul>
            <li><strong>Major Premise:</strong> A general statement.</li>
            <li><strong>Minor Premise:</strong> A specific statement related to the major premise.</li>
            <li><strong>Conclusion:</strong> The result derived from the two premises.</li>
          </ul>
          <strong>Example:</strong><br />
          Major Premise: All humans are mortal.<br />
          Minor Premise: Socrates is a human.<br />
          Conclusion: Socrates is mortal.
        </p>

        <h3>Types of Syllogism</h3>
        <ul>
          <li><strong>Universal Affirmative (A-type):</strong> All A are B.</li>
          <li><strong>Universal Negative (E-type):</strong> No A are B.</li>
          <li><strong>Particular Affirmative (I-type):</strong> Some A are B.</li>
          <li><strong>Particular Negative (O-type):</strong> Some A are not B.</li>
        </ul>

        <h3>Important Rules for Valid Syllogism</h3>
        <ul>
          <li>If the premises are universal, the conclusion must also be universal.</li>
          <li>If one premise is negative, the conclusion must also be negative.</li>
          <li>The middle term (the term shared between both premises) must be distributed at least once.</li>
        </ul>
      </section>

      <section>
        <h2>Example Syllogisms</h2>

        <h3>Beginner Syllogism</h3>
        <p>
          <strong>Question:</strong> All dogs are animals. All animals are living beings. Therefore, all dogs are living beings.
        </p>
        <p>Options: A. True B. False</p>
        <p><strong>Answer:</strong> A. True</p>
        <p><strong>Explanation:</strong> The major premise is "All dogs are animals," and the minor premise is "All animals are living beings." The conclusion, "All dogs are living beings," follows logically from both premises.</p>

        <h3>Intermediate Syllogism</h3>
        <p>
          <strong>Question:</strong> Some students are intelligent. Some intelligent people are successful. Therefore, some students are successful.
        </p>
        <p>Options: A. True B. False</p>
        <p><strong>Answer:</strong> A. True</p>
        <p><strong>Explanation:</strong> While the premises don't state all students or all intelligent people, the conclusion that some students are successful logically follows from the given premises. This is a valid conclusion in syllogistic reasoning.</p>

        <h3>Advanced Syllogism</h3>
        <p>
          <strong>Question:</strong> No birds are mammals. All sparrows are birds. Therefore, no sparrows are mammals.
        </p>
        <p>Options: A. True B. False</p>
        <p><strong>Answer:</strong> A. True</p>
        <p><strong>Explanation:</strong> The major premise is "No birds are mammals," and the minor premise is "All sparrows are birds." Since sparrows are birds and no birds are mammals, it follows that no sparrows can be mammals.</p>
      </section>

      <section>
        <h2>Additional Tips for Solving Syllogism</h2>
        <ul>
          <li><strong>Read Carefully:</strong> Always read the premises carefully and understand the logical flow before jumping to the conclusion.</li>
          <li><strong>Check for Universal and Particular Statements:</strong> Recognize whether the premises are universal or particular to avoid incorrect conclusions.</li>
          <li><strong>Use Venn Diagrams:</strong> Venn diagrams are a great tool to visualize relationships between the terms in syllogism questions.</li>
          <li><strong>Apply Rules:</strong> Remember the basic rules for valid syllogisms, such as "if one premise is negative, the conclusion must also be negative."</li>
        </ul>
      </section>
    </div>
  );
};

export default Syllogism;
