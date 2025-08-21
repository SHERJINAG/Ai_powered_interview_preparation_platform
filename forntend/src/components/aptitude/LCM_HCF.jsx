import React from 'react';

const LCM_HCF = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>LCM and HCF - Explanation and Examples</h1>

      <section>
        <h2>1. LCM (Least Common Multiple)</h2>
        <p>
          The <strong>LCM</strong> of two or more numbers is the smallest number that is divisible by all the given numbers. It is also known as the least common divisor of the numbers.
        </p>
        <p><strong>Example:</strong> Find the LCM of 4 and 5.</p>
        <ul>
          <li>Multiples of 4: 4, 8, 12, 16, 20, 24...</li>
          <li>Multiples of 5: 5, 10, 15, 20, 25, 30...</li>
          <li>The smallest common multiple is 20.</li>
        </ul>
        <p>The LCM of 4 and 5 is <strong>20</strong>.</p>
        <p>
          To calculate the LCM using prime factorization: 
          <br />
          LCM(4, 5) = 2² × 5 = 20.
        </p>
      </section>

      <section>
        <h2>2. HCF (Highest Common Factor)</h2>
        <p>
          The <strong>HCF</strong> of two or more numbers is the largest number that divides all the given numbers exactly (without any remainder).
        </p>
        <p><strong>Example:</strong> Find the HCF of 36 and 60.</p>
        <ul>
          <li>Prime factorization of 36: 2² × 3²</li>
          <li>Prime factorization of 60: 2² × 3 × 5</li>
          <li>The common factors are 2² × 3 = 12.</li>
        </ul>
        <p>The HCF of 36 and 60 is <strong>12</strong>.</p>
      </section>

      <section>
        <h2>3. Example Questions</h2>
        
        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the LCM of 6 and 8?
        </p>
        <p>Options: A. 12 B. 24 C. 36 D. 48</p>
        <p><strong>Answer:</strong> B. 24</p>
        <p><strong>Explanation:</strong> The LCM of 6 and 8 is 24. This can be verified by listing the multiples of both numbers and finding the smallest common multiple.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the HCF of 45 and 75?
        </p>
        <p>Options: A. 5 B. 15 C. 25 D. 35</p>
        <p><strong>Answer:</strong> B. 15</p>
        <p><strong>Explanation:</strong> Prime factorization of 45 is 3² × 5, and for 75, it is 3 × 5². The common factors are 3 × 5 = 15, so the HCF is 15.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> What is the LCM and HCF of 24, 36, and 60?
        </p>
        <p><strong>Answer (LCM):</strong> The LCM is 180.</p>
        <p><strong>Explanation:</strong> 
          Prime factorization:
          <ul>
            <li>24 = 2³ × 3</li>
            <li>36 = 2² × 3²</li>
            <li>60 = 2² × 3 × 5</li>
          </ul>
          The LCM is found by taking the highest powers of all prime factors: LCM = 2³ × 3² × 5 = 180.
        </p>
        <p><strong>Answer (HCF):</strong> The HCF is 12.</p>
        <p><strong>Explanation:</strong> The HCF is found by taking the lowest powers of the common prime factors: HCF = 2² × 3 = 12.</p>
      </section>
    </div>
  );
};

export default LCM_HCF;
