import React from 'react';

const NumberSeries = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Number Series - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is a Number Series?</h2>
        <p>
          A number series is a sequence of numbers that follow a specific pattern or rule. These patterns may involve addition, subtraction, multiplication, division, or even powers of numbers. The goal is to find the next number in the sequence or identify the missing number.
        </p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Arithmetic Progression (AP):</strong> A series where the difference between consecutive terms is constant. The formula is:  
            <ul>
              <li>nth term (Tn) = a + (n-1) × d</li>
            </ul>
          </li>
          <li><strong>Geometric Progression (GP):</strong> A series where each term after the first is found by multiplying the previous term by a constant. The formula is: 
            <ul>
              <li>nth term (Tn) = a × r^(n-1)</li>
            </ul>
          </li>
          <li><strong>Fibonacci Sequence:</strong> A sequence where each number is the sum of the two preceding ones, usually starting with 0 and 1.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the next number in the series: 2, 4, 6, 8, ___?
        </p>
        <p>Options: A. 9 B. 10 C. 12 D. 11</p>
        <p><strong>Answer:</strong> B. 10</p>
        <p><strong>Explanation:</strong> The series follows an arithmetic progression where each term increases by 2. So, the next number will be 8 + 2 = 10.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the next number in the series: 3, 9, 27, 81, ___?
        </p>
        <p>Options: A. 243 B. 162 C. 128 D. 202</p>
        <p><strong>Answer:</strong> A. 243</p>
        <p><strong>Explanation:</strong> The series follows a geometric progression where each term is multiplied by 3. So, 81 × 3 = 243.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> What is the missing number in the series: 2, 6, 12, 20, ___, 42?
        </p>
        <p>Options: A. 30 B. 28 C. 26 D. 25</p>
        <p><strong>Answer:</strong> B. 28</p>
        <p><strong>Explanation:</strong> The difference between consecutive numbers increases by 2 each time: 6-2 = 4, 12-6 = 6, 20-12 = 8. So, the next difference will be 10. Thus, 20 + 10 = 28.</p>
      </section>
    </div>
  );
};

export default NumberSeries;
