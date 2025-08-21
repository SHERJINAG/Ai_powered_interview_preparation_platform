import React from 'react';

const Probability = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#3f51b5' }}>🧮 Probability</h1>

      {/* Explanation */}
      <section style={{ marginBottom: '30px' }}>
        <h2>📘 Concept</h2>
        <p>
          Probability measures the chance of an event happening and is represented as a number between 0 and 1. 
          A probability of 0 means the event will not happen, and 1 means it certainly will.
        </p>
        <p>
          For a random experiment with all equally likely outcomes, the probability of an event E is given by:
        </p>
        <blockquote style={{ backgroundColor: '#e8f0fe', padding: '10px', borderLeft: '4px solid #3f51b5' }}>
          <strong>Formula:</strong><br />
          <code>P(E) = (Number of favorable outcomes) / (Total number of outcomes)</code>
        </blockquote>
      </section>

      {/* Formulas and Shortcuts */}
      <section style={{ marginBottom: '30px' }}>
        <h2>🧠 Formulas & Shortcuts</h2>
        <ul>
          <li><strong>P(Event) =</strong> Favorable outcomes / Total outcomes</li>
          <li><strong>0 ≤ P(E) ≤ 1</strong></li>
          <li>If an event is certain, P(E) = 1; If impossible, P(E) = 0</li>
          <li><strong>P(Not E) =</strong> 1 − P(E)</li>
          <li><strong>Mutually Exclusive Events:</strong> P(A ∪ B) = P(A) + P(B)</li>
          <li><strong>Independent Events:</strong> P(A ∩ B) = P(A) × P(B)</li>
        </ul>
      </section>

      {/* Beginner Level Question */}
      <section style={{ marginBottom: '30px' }}>
        <h2>🔰 Beginner Level</h2>
        <p><strong>Question:</strong> What is the probability of rolling a 3 on a fair six-sided die?</p>
        <p>Options: A. 1/2 B. 1/6 C. 1/4 D. 1/3</p>
        <p><strong>Answer:</strong> B. 1/6</p>
        <p><strong>Explanation:</strong> There are 6 total outcomes: {`{1, 2, 3, 4, 5, 6}`}. Only 1 outcome (3) is favorable. So P(3) = 1/6.</p>
      </section>

      {/* Intermediate Level Question */}
      <section style={{ marginBottom: '30px' }}>
        <h2>⚙️ Intermediate Level</h2>
        <p><strong>Question:</strong> A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a blue ball?</p>
        <p>Options: A. 3/8 B. 2/8 C. 1/8 D. 5/8</p>
        <p><strong>Answer:</strong> A. 3/8</p>
        <p><strong>Explanation:</strong> Total balls = 5 + 3 = 8. Favorable outcomes = 3 blue. So, P(blue) = 3/8.</p>
      </section>

      {/* Advanced Level Question */}
      <section>
        <h2>🚀 Advanced Level</h2>
        <p><strong>Question:</strong> A box contains 4 green, 5 red, and 6 blue marbles. If 2 marbles are drawn at random, what is the probability that both are green?</p>
        <p>Options: A. 6/105 B. 2/35 C. 3/15 D. 1/7</p>
        <p><strong>Answer:</strong> B. 2/35</p>
        <p><strong>Explanation:</strong> Total = 15 marbles.<br />
          Ways to choose 2 = C(15,2) = 105.<br />
          Ways to choose 2 green = C(4,2) = 6.<br />
          So, P(both green) = 6 / 105 = 2 / 35.
        </p>
      </section>
    </div>
  );
};

export default Probability;
