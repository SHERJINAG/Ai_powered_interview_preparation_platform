import React from 'react';

const NumberSystem = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Number System Concepts and Examples</h1>

      <section>
        <h2>1. Prime Numbers</h2>
        <p>
          A <strong>prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself. For example:
        </p>
        <ul>
          <li>2 is a prime number because its divisors are 1 and 2.</li>
          <li>3 is a prime number because its divisors are 1 and 3.</li>
        </ul>

        <p>
          **Note**: 2 is the only even prime number. All other even numbers are composite.
        </p>
      </section>

      <section>
        <h2>2. Composite Numbers</h2>
        <p>
          A <strong>composite number</strong> is a natural number greater than 1 that has more than two divisors. For example:
        </p>
        <ul>
          <li>4 is a composite number because it can be divided by 1, 2, and 4.</li>
          <li>6 is a composite number because it can be divided by 1, 2, 3, and 6.</li>
        </ul>
      </section>

      <section>
        <h2>3. Divisibility Rules</h2>
        <p>
          Some important divisibility rules are:
        </p>
        <ul>
          <li>Divisibility by 2: A number is divisible by 2 if its last digit is even.</li>
          <li>Divisibility by 3: A number is divisible by 3 if the sum of its digits is divisible by 3.</li>
          <li>Divisibility by 5: A number is divisible by 5 if its last digit is either 0 or 5.</li>
        </ul>
      </section>

      <section>
        <h2>4. Prime Factorization</h2>
        <p>
          Prime factorization is expressing a number as a product of prime numbers. For example:
        </p>
        <ul>
          <li>For 60: 60 = 2 × 2 × 3 × 5</li>
          <li>This helps us find the LCM and HCF.</li>
        </ul>
      </section>

      <section>
        <h2>5. LCM (Least Common Multiple)</h2>
        <p>
          The LCM of two numbers is the smallest number divisible by both. For example:
        </p>
        <ul>
          <li>For 12 and 15, the LCM is 60 (LCM = 2² × 3 × 5).</li>
        </ul>
      </section>

      <section>
        <h2>6. HCF (Highest Common Factor)</h2>
        <p>
          The HCF of two numbers is the largest number that divides both. For example:
        </p>
        <ul>
          <li>For 36 and 60, the HCF is 12 (HCF = 2² × 3).</li>
        </ul>
      </section>

      <section>
        <h2>7. Square and Cube Numbers</h2>
        <p>
          A square number is the result of multiplying a number by itself, e.g., 4 = 2². A cube number is the result of multiplying a number by itself three times, e.g., 27 = 3³.
        </p>
      </section>

      <section>
        <h2>8. Even and Odd Numbers</h2>
        <p>
          - Even numbers are divisible by 2, e.g., 0, 2, 4, 6, 8.
          - Odd numbers are not divisible by 2, e.g., 1, 3, 5, 7.
        </p>
      </section>

      <section>
        <h2>9. Example Questions</h2>
        
        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the smallest prime number?
        </p>
        <p>Options: A. 0 B. 1 C. 2 D. 3</p>
        <p><strong>Answer:</strong> C. 2</p>
        <p><strong>Explanation:</strong> 2 is the smallest and only even prime number.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the HCF of 36 and 60?
        </p>
        <p>Options: A. 6 B. 12 C. 18 D. 24</p>
        <p><strong>Answer:</strong> B. 12</p>
        <p><strong>Explanation:</strong> Prime factorization of 36 is 2² × 3², and for 60 is 2² × 3 × 5. The common factors are 2² × 3 = 12, so the HCF is 12.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> What is the LCM of 15 and 25?
        </p>
        <p>Options: A. 25 B. 35 C. 75 D. 125</p>
        <p><strong>Answer:</strong> C. 75</p>
        <p><strong>Explanation:</strong> Prime factorization of 15 is 3 × 5, and of 25 is 5². The LCM is found by taking the highest powers of all the primes involved, which gives LCM = 3 × 5² = 75.</p>
      </section>
    </div>
  );
};

export default NumberSystem;
