import React from 'react';

const Puzzles = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Puzzles - Explanation, Examples, and Strategies</h1>

      <section>
        <h2>What are Puzzles?</h2>
        <p>
          **Puzzles** are logical problems or brainteasers that require critical thinking and pattern recognition. They involve solving a problem with a given set of conditions and constraints. Puzzles can come in different forms: number puzzles, word puzzles, logical puzzles, and more.
        </p>

        <h3>Common Types of Puzzles</h3>
        <ul>
          <li><strong>Number Puzzles:</strong> These involve finding patterns in a series of numbers.</li>
          <li><strong>Word Puzzles:</strong> These puzzles focus on language and words, like anagrams or crosswords.</li>
          <li><strong>Logic Puzzles:</strong> These involve logical deduction based on given clues.</li>
          <li><strong>Riddles:</strong> A riddle is a question or statement with a hidden meaning that must be figured out.</li>
        </ul>

        <h3>How to Solve Puzzles</h3>
        <ul>
          <li>Read the puzzle carefully and understand all the given information.</li>
          <li>Break down the problem into smaller parts or conditions.</li>
          <li>Identify any patterns or sequences that may help you solve the puzzle.</li>
          <li>Eliminate possibilities that don't fit the conditions.</li>
          <li>Keep an open mind and think outside the box if needed.</li>
        </ul>
      </section>

      <section>
        <h2>Example Puzzles</h2>

        <h3>Beginner Puzzle</h3>
        <p>
          <strong>Question:</strong> If five cats can catch five mice in five minutes, how many cats will it take to catch 100 mice in 100 minutes?
        </p>
        <p>Options: A. 5 B. 10 C. 100 D. 25</p>
        <p><strong>Answer:</strong> A. 5</p>
        <p><strong>Explanation:</strong> Each cat catches one mouse in five minutes. So, five cats will catch five mice in five minutes, and in 100 minutes, the same five cats will catch 100 mice. Thus, it will still take 5 cats.</p>

        <h3>Intermediate Puzzle</h3>
        <p>
          <strong>Question:</strong> Three people (A, B, and C) are standing in a line. A is taller than B, but shorter than C. B is not the shortest. Who is the shortest person?
        </p>
        <p>Options: A. A B. B C. C D. Cannot be determined</p>
        <p><strong>Answer:</strong> A. A</p>
        <p><strong>Explanation:</strong> We know that A is taller than B, and C is taller than A. Since B is not the shortest, A must be the shortest person.</p>

        <h3>Advanced Puzzle</h3>
        <p>
          <strong>Question:</strong> A farmer needs to cross a river with a fox, a goose, and a bag of beans. The farmer has a boat, but can only carry one item at a time. If left alone, the fox will eat the goose, and the goose will eat the beans. How can the farmer get all three across the river safely?
        </p>
        <p>Options: A. Take the fox, then go back and take the goose, and so on. B. Take the goose first, then the beans, and then the fox. C. Take the fox and goose together. D. None of the above.</p>
        <p><strong>Answer:</strong> B. Take the goose first, then the beans, and then the fox.</p>
        <p><strong>Explanation:</strong> The farmer first takes the goose across the river. Then he returns alone and takes the beans across. On the return trip, he takes the goose back and brings the fox across. Finally, the farmer returns and takes the goose across. This way, the fox is never left with the goose, and the goose is never left with the beans.</p>
      </section>

      <section>
        <h2>Additional Tips for Solving Puzzles</h2>
        <ul>
          <li><strong>Stay Calm:</strong> Many puzzles seem difficult at first, but with a logical approach, most can be solved.</li>
          <li><strong>Practice:</strong> The more puzzles you solve, the better you will get at recognizing patterns and finding solutions.</li>
          <li><strong>Think Creatively:</strong> Some puzzles require a creative approach, so don't hesitate to think outside the box.</li>
          <li><strong>Work Backwards:</strong> Sometimes, it’s easier to start from the solution and work backward to find the answer.</li>
        </ul>
      </section>
    </div>
  );
};

export default Puzzles;
