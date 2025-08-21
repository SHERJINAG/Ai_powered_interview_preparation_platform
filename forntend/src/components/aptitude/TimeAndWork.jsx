import React from 'react';

const TimeAndWork = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Time and Work - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Time and Work?</h2>
        <p>
          <strong>Time and Work</strong> is a concept used to solve problems that involve people working together or alone to complete a task. The main idea is to determine how long it will take for individuals or groups to finish a task, given their rates of work.
        </p>

        <h3>Formulas for Time and Work:</h3>
        <ul>
          <li>
            <strong>Work Formula:</strong><br />
            Work = Rate × Time<br />
            If a person takes t time to finish a job, then the rate of work is 1/t.
          </li>
          <li>
            <strong>Combined Work Formula:</strong><br />
            If two or more people are working together, their combined rate of work is the sum of their individual rates:<br />
            Combined Rate = 1/t1 + 1/t2 + ...
          </li>
          <li>
            <strong>Time Taken to Complete a Work:</strong><br />
            If the work is divided between n people, the time taken to complete the task is:<br />
            Time Taken = 1 / Total Rate
          </li>
        </ul>

        <h3>Shortcuts for Time and Work:</h3>
        <ul>
          <li>When people work together, add their individual rates to find the combined rate.</li>
          <li>For efficiency, convert "work done in a day" into fractions or ratios for easier calculation.</li>
          <li>When the problem involves multiple people working together, use the combined rate formula to solve for time.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> If a person can complete a task in 10 days, how much of the task does the person complete in 1 day?
        </p>
        <p>Options: A. 1/10 B. 1/2 C. 1/5 D. 1/20</p>
        <p><strong>Answer:</strong> A. 1/10</p>
        <p><strong>Explanation:</strong> The work done in 1 day is the reciprocal of the number of days to complete the task. So, the person does 1/10 of the work each day.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A and B can complete a job in 12 days and 18 days, respectively. How long will it take for them to complete the job together?
        </p>
        <p>Options: A. 7.2 days B. 6 days C. 8 days D. 9 days</p>
        <p><strong>Answer:</strong> A. 7.2 days</p>
        <p><strong>Explanation:</strong><br />
          - A’s rate of work = 1/12<br />
          - B’s rate of work = 1/18<br />
          - Combined rate = 1/12 + 1/18 = 5/36<br />
          - Time taken to complete the job = 1 ÷ (5/36) = 7.2 days
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A, B, and C can complete a task in 10, 15, and 20 days, respectively. If they work together, how long will it take for them to complete the task?
        </p>
        <p>Options: A. 5 days B. 6 days C. 7 days D. 8 days</p>
        <p><strong>Answer:</strong> B. 6 days</p>
        <p><strong>Explanation:</strong><br />
          - A’s rate = 1/10<br />
          - B’s rate = 1/15<br />
          - C’s rate = 1/20<br />
          - Combined rate = 1/10 + 1/15 + 1/20 = 1/6<br />
          - Time taken = 1 ÷ (1/6) = 6 days
        </p>
      </section>
    </div>
  );
};

export default TimeAndWork;
