import React from 'react';

const LogicalReasoning = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Logical Reasoning - Data Sufficiency, Input-Output, Venn Diagrams, and Cubes & Dice</h1>

      {/* Data Sufficiency Section */}
      <section>
        <h2>Data Sufficiency</h2>
        <p>
          **Data Sufficiency** questions provide a statement and ask whether the data given is enough to answer the question.
        </p>
        <p>
          The task is to evaluate whether the information provided is sufficient to solve the problem or if additional data is needed.
        </p>

        <h3>Beginner Level</h3>
        <p>
          Question: "Is x > y?"
        </p>
        <p>
          Statement 1: "x = 3." <br />
          Statement 2: "y = 2."
        </p>
        <p>Options: A. Statement 1 alone is sufficient. B. Statement 2 alone is sufficient. C. Both statements together are sufficient. D. Neither statement is sufficient.</p>
        <p><strong>Answer:</strong> C. Both statements together are sufficient.</p>
        <p><strong>Explanation:</strong> With both statements combined, we know that x = 3 and y = 2, so x > y.</p>

        <h3>Intermediate Level</h3>
        <p>
          Question: "Is x > y?"
        </p>
        <p>
          Statement 1: "x + y = 10." <br />
          Statement 2: "x - y = 2."
        </p>
        <p>Options: A. Statement 1 alone is sufficient. B. Statement 2 alone is sufficient. C. Both statements together are sufficient. D. Neither statement is sufficient.</p>
        <p><strong>Answer:</strong> C. Both statements together are sufficient.</p>
        <p><strong>Explanation:</strong> Solving the system of equations, x + y = 10 and x - y = 2, we find that x = 6 and y = 4, so x > y.</p>

        <h3>Advanced Level</h3>
        <p>
          Question: "Is x^2 > y^2?"
        </p>
        <p>
          Statement 1: "x + y = 10." <br />
          Statement 2: "x > 0."
        </p>
        <p>Options: A. Statement 1 alone is sufficient. B. Statement 2 alone is sufficient. C. Both statements together are sufficient. D. Neither statement is sufficient.</p>
        <p><strong>Answer:</strong> A. Statement 1 alone is sufficient.</p>
        <p><strong>Explanation:</strong> From Statement 1, x + y = 10. Since x > 0, we know that x must be greater than y, which implies x^2 > y^2.</p>
      </section>

      {/* Input-Output Section */}
      <section>
        <h2>Input-Output</h2>
        <p>
          **Input-Output** problems involve a sequence of numbers or letters, and you need to determine how they transform according to a given pattern.
        </p>

        <h3>Beginner Level</h3>
        <p>
          Input: 1 2 3 4 5<br />
          Output: 5 4 3 2 1
        </p>
        <p>What is the output for the input sequence: 10 20 30 40 50?</p>
        <p>Options: A. 50 40 30 20 10 B. 10 20 30 40 50 C. 20 10 40 30 50 D. None of these</p>
        <p><strong>Answer:</strong> A. 50 40 30 20 10</p>
        <p><strong>Explanation:</strong> The output reverses the order of the input sequence.</p>

        <h3>Intermediate Level</h3>
        <p>
          Input: 5 7 9 11 13<br />
          Output: 7 9 11 13 5
        </p>
        <p>What is the output for the input sequence: 3 6 9 12 15?</p>
        <p>Options: A. 6 9 12 15 3 B. 15 12 9 6 3 C. 9 12 15 3 6 D. None of these</p>
        <p><strong>Answer:</strong> A. 6 9 12 15 3</p>
        <p><strong>Explanation:</strong> The output shifts the first element of the input sequence to the end.</p>

        <h3>Advanced Level</h3>
        <p>
          Input: 1 2 4 8 16<br />
          Output: 2 4 8 16 32
        </p>
        <p>What is the output for the input sequence: 3 6 12 24 48?</p>
        <p>Options: A. 6 12 24 48 96 B. 48 24 12 6 3 C. 12 24 48 96 192 D. None of these</p>
        <p><strong>Answer:</strong> A. 6 12 24 48 96</p>
        <p><strong>Explanation:</strong> The output follows a pattern of multiplying each number by 2.</p>
      </section>

      {/* Logical Venn Diagrams Section */}
      <section>
        <h2>Logical Venn Diagrams</h2>
        <p>
          **Venn Diagrams** are used to represent sets and their relationships. A Venn diagram uses circles to represent sets and shows their intersections, unions, and differences.
        </p>

        <h3>Beginner Level</h3>
        <p>
          Question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?"
        </p>
        <p>Options: A. {1, 2, 3} B. {2, 3} C. {4} D. {1, 4}</p>
        <p><strong>Answer:</strong> B. {2, 3}</p>
        <p><strong>Explanation:</strong> The intersection of sets A and B is the common elements, which are 2 and 3.</p>

        <h3>Intermediate Level</h3>
        <p>Question: If A = {'{a, b, c}'} and B = {'{b, c, d}'}, what is A ∪ B?</p>

<p>Options: A. {'{a, b, c, d}'} B. {'{b, c}'} C. {'{a, d}'} D. {'{a, b, c}'}</p>
<p><strong>Answer:</strong> A. {'{a, b, c, d}'}</p>

        <p><strong>Explanation:</strong> The union of sets A and B includes all the elements from both sets without duplication.</p>

        <h3>Advanced Level</h3>
        <p>
          Question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A - B?"
        </p>
        <p>Options: A. {1} B. {4} C. {1, 2} D. {2, 3}</p>
        <p><strong>Answer:</strong> A. {1}</p>
        <p><strong>Explanation:</strong> A - B represents the elements in A that are not in B, which is {1}.</p>
      </section>

      {/* Cubes and Dice Section */}
      <section>
        <h2>Cubes and Dice</h2>
        <p>
          **Cubes and Dice** problems typically involve understanding the arrangement of faces on a die or cube. These problems test the ability to visualize the opposite and adjacent faces of cubes and dice.
        </p>

        <h3>Beginner Level</h3>
        <p>
          Question: "If a die is rolled, what is the probability of getting a number less than 3?"
        </p>
        <p>Options: A. 1/3 B. 1/2 C. 1/6 D. 1/4</p>
        <p><strong>Answer:</strong> A. 1/3</p>
        <p><strong>Explanation:</strong> The possible outcomes are 1, 2, 3, 4, 5, 6. The numbers less than 3 are 1 and 2, so the probability is 2/6 = 1/3.</p>

        <h3>Intermediate Level</h3>
        <p>
          Question: "If a die is rolled, what is the probability of getting an odd number?"
        </p>
        <p>Options: A. 1/2 B. 2/3 C. 1/6 D. 1/3</p>
        <p><strong>Answer:</strong> A. 1/2</p>
        <p><strong>Explanation:</strong> The odd numbers on a die are 1, 3, and 5, so the probability is 3/6 = 1/2.</p>

        <h3>Advanced Level</h3>
        <p>
          Question: "How many different ways can a cube be painted using 3 different colors, such that no two adjacent faces are the same color?"
        </p>
        <p>Options: A. 24 B. 36 C. 48 D. 72</p>
        <p><strong>Answer:</strong> B. 36</p>
        <p><strong>Explanation:</strong> This problem involves coloring a cube's faces with 3 different colors, with adjacent faces having different colors. There are 36 possible ways to do this.</p>
      </section>
    </div>
  );
};

export default LogicalReasoning;
