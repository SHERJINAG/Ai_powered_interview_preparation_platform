import React from 'react';

const CodingDecoding = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Coding-Decoding - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Coding-Decoding?</h2>
        <p>
          In **coding-decoding**, a word or a set of words is converted into another word or set of words by following a particular rule or pattern. The goal is to identify the rule and decode the message. The patterns often involve shifting letters, reversing letters, or other transformations based on fixed steps or formulas.
        </p>

        <h3>Types of Coding-Decoding Patterns</h3>
        <ul>
          <li><strong>Letter Shifting:</strong> Each letter in a word is shifted by a fixed number of steps either forward or backward in the alphabet.</li>
          <li><strong>Substitution:</strong> A letter or number is substituted with another letter or number based on a pattern.</li>
          <li><strong>Reverse Coding:</strong> The letters or numbers are written in reverse order.</li>
          <li><strong>Alphanumeric Coding:</strong> A combination of numbers and letters is used to represent words or phrases.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If in a certain code, 'CAT' is written as 'DBU', how is 'DOG' written in that code?
        </p>
        <p>Options: A. EPH B. EOG C. DPF D. EPJ</p>
        <p><strong>Answer:</strong> A. EPH</p>
        <p><strong>Explanation:</strong> Each letter is shifted by one place forward in the alphabet: C -> D, A -> B, T -> U. Hence, DOG becomes EPH (D -> E, O -> P, G -> H).</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> If in a certain code, 'MANGO' is written as 'OBPHQ', how is 'APPLE' written in that code?
        </p>
        <p>Options: A. BQQKF B. BQQJE C. CQQKF D. BQPKF</p>
        <p><strong>Answer:</strong> A. BQQKF</p>
        <p><strong>Explanation:</strong> Each letter is shifted forward by one place in the alphabet: M -> N, A -> B, N -> O, G -> H, O -> P. Therefore, APPLE will be written as BQQKF.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> In a code language, 'WORLD' is written as 'XPSME'. How is 'HELLO' written in that code?
        </p>
        <p>Options: A. IFMMP B. JGMNP C. IPMNP D. JFMMO</p>
        <p><strong>Answer:</strong> A. IFMMP</p>
        <p><strong>Explanation:</strong> The pattern here is each letter is shifted one place forward in the alphabet: W -> X, O -> P, R -> S, L -> M, D -> E. Therefore, HELLO will be written as IFMMP.</p>
      </section>
    </div>
  );
};

export default CodingDecoding;
