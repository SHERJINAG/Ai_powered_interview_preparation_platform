import React from 'react';

const BloodRelations = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blood Relations - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Blood Relation?</h2>
        <p>
          **Blood Relations** is a type of reasoning question that asks you to find the relationship between different family members based on the given information. The relationships can involve parents, siblings, children, grandparents, cousins, etc.
        </p>
        <h3>Common Blood Relations</h3>
        <ul>
          <li><strong>Father's Brother:</strong> Uncle</li>
          <li><strong>Father's Sister:</strong> Aunt</li>
          <li><strong>Mother's Brother:</strong> Uncle</li>
          <li><strong>Mother's Sister:</strong> Aunt</li>
          <li><strong>Son's Daughter:</strong> Granddaughter</li>
          <li><strong>Father's Son:</strong> Brother</li>
          <li><strong>Mother's Daughter:</strong> Sister</li>
        </ul>
        <h3>Important Tips</h3>
        <ul>
          <li>Pay attention to terms like "father's brother" or "mother's sister," as they help to define the relationships.</li>
          <li>Consider the direction of relationships such as from "father to son" or "mother to daughter" while solving.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If A is the son of B and C is the daughter of A, what is C’s relationship to B?
        </p>
        <p>Options: A. Granddaughter B. Niece C. Sister D. Daughter</p>
        <p><strong>Answer:</strong> A. Granddaughter</p>
        <p><strong>Explanation:</strong> A is B’s son, and C is A’s daughter, so C is B’s granddaughter.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> If P is the mother of Q, and Q is the brother of R, then how is R related to P?
        </p>
        <p>Options: A. Son B. Daughter C. Sister D. Son-in-law</p>
        <p><strong>Answer:</strong> A. Son</p>
        <p><strong>Explanation:</strong> Q is the brother of R, which means both are children of P. Hence, R is P's son.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> If A is the maternal uncle of B, and C is the sister of A, how is C related to B?
        </p>
        <p>Options: A. Mother B. Aunt C. Niece D. Grandmother</p>
        <p><strong>Answer:</strong> B. Aunt</p>
        <p><strong>Explanation:</strong> Since A is the maternal uncle of B, C is A's sister and thus B's aunt.</p>
      </section>
    </div>
  );
};

export default BloodRelations;
