import React from 'react';

const AlphabetSeries = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Alphabet Series - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is an Alphabet Series?</h2>
        <p>
          An **alphabet series** is a sequence of letters from the English alphabet that follows a certain pattern or rule. These patterns often involve a certain number of steps between consecutive letters (such as alternating letters, or moving forward or backward in the alphabet).
        </p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Forward Series:</strong> A series where each next letter follows a fixed number of steps ahead in the alphabet.</li>
          <li><strong>Backward Series:</strong> A series where each next letter follows a fixed number of steps backward in the alphabet.</li>
          <li><strong>Alternating Series:</strong> A series where the letters alternate between moving forward and backward in the alphabet.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the next letter in the series: A, C, E, G, ___?
        </p>
        <p>Options: A. H B. I C. F D. J</p>
        <p><strong>Answer:</strong> A. H</p>
        <p><strong>Explanation:</strong> The series follows a pattern where each letter is two steps ahead of the previous one. So, after G (7th letter), the next letter is H (8th letter).</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the next letter in the series: Z, W, S, O, ___?
        </p>
        <p>Options: A. K B. M C. N D. L</p>
        <p><strong>Answer:</strong> D. L</p>
        <p><strong>Explanation:</strong> The series moves backward by 4 letters each time: Z, W (4 steps backward), S (4 steps backward), O (4 steps backward). Therefore, the next letter is L.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> What is the missing letter in the series: B, D, G, K, ___, P?
        </p>
        <p>Options: A. L B. M C. N D. O</p>
        <p><strong>Answer:</strong> B. M</p>
        <p><strong>Explanation:</strong> The difference between consecutive letters is increasing by one letter at each step: D (2 steps), G (3 steps), K (4 steps). Therefore, the next letter is M (5 steps). The series is: B, D, G, K, M, P.</p>
      </section>
    </div>
  );
};

export default AlphabetSeries;
