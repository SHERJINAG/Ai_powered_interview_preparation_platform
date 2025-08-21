import React from 'react';

const SeatingArrangement = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Seating Arrangement (Linear and Circular) - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is a Seating Arrangement?</h2>
        <p>
          **Seating Arrangement** problems involve arranging people in a straight line (Linear Arrangement) or in a circle (Circular Arrangement) based on a set of given conditions or clues.
        </p>

        <h3>Types of Seating Arrangements</h3>
        <ul>
          <li><strong>Linear Arrangement:</strong> Arranging people in a straight line.</li>
          <li><strong>Circular Arrangement:</strong> Arranging people in a circle (either clockwise or anticlockwise).</li>
        </ul>

        <h3>Important Tips and Shortcuts</h3>
        <ul>
          <li>Always consider the number of positions and the direction when dealing with circular arrangements.</li>
          <li>In **Linear Arrangements**, use the positions as straight numbers (1 to N).</li>
          <li>In **Circular Arrangements**, treat the arrangement as a loop where the first position is adjacent to the last one.</li>
          <li>In circular seating, if a person is facing the center, the arrangement follows a clockwise direction; otherwise, it’s anticlockwise.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> In a row of 5 persons, P is sitting to the immediate right of Q, and R is sitting to the immediate left of P. S is sitting at the extreme left. Who is sitting in the middle?
        </p>
        <p>Options: A. P B. Q C. R D. S</p>
        <p><strong>Answer:</strong> A. P</p>
        <p><strong>Explanation:</strong> The seating arrangement from left to right is S, Q, P, R. Therefore, P is in the middle.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> In a circular seating arrangement, A is sitting to the immediate right of B, and C is sitting to the immediate left of A. D is sitting opposite to C. Who is sitting opposite to B?
        </p>
        <p>Options: A. A B. C C. D D. None of the above</p>
        <p><strong>Answer:</strong> A. A</p>
        <p><strong>Explanation:</strong> The circular arrangement can be formed as follows: B, A, C, D. A is sitting opposite to B.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> In a circular arrangement, there are 8 persons seated. If A is sitting 2 places to the right of B and 3 places to the left of C, and D is sitting exactly opposite to A, how many persons are sitting between B and D?
        </p>
        <p>Options: A. 3 B. 4 C. 5 D. 6</p>
        <p><strong>Answer:</strong> C. 5</p>
        <p><strong>Explanation:</strong> The positions can be arranged as follows: B, A, C, D. Since A and D are opposite to each other, there are 5 persons seated between B and D.</p>
      </section>
    </div>
  );
};

export default SeatingArrangement;
