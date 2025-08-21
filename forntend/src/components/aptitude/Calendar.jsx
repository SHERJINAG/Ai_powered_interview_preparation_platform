import React from 'react';

const Calendar = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Calendar - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Calendar?</h2>
        <p>
          Calendar problems involve finding the day of the week for a given date, calculating the number of odd days, and understanding the different types of calendars used in various systems (Gregorian, Julian, etc.). The concept also includes calculating leap years and understanding the number of days in a month or year.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Odd Days:</strong> The number of days more than complete weeks (7 days) in a given period. For example, if the total number of days is 365, the odd days would be 1 because 365 days equals 52 weeks and 1 extra day.</li>
          <li><strong>Leap Year:</strong> A year is a leap year if it is divisible by 4, except for years that are divisible by 100 but not by 400.</li>
          <li><strong>Month Days:</strong> The number of days in a month. For example, February has 28 days in a normal year and 29 days in a leap year, while April has 30 days.</li>
          <li><strong>Century Year:</strong> A century year (like 1900) is a leap year only if it is divisible by 400. So, 2000 was a leap year, but 1900 was not.</li>
        </ul>

        <h3>Formulas and Shortcuts</h3>
        <ul>
          <li><strong>Odd Days Formula:</strong> If the number of days from a given starting date is known, divide the total days by 7. The remainder is the odd days.</li>
          <li><strong>Leap Year Calculation:</strong> To check if a year is a leap year, use the rule:
            <ul>
              <li>If the year is divisible by 4, it is a leap year unless it is also divisible by 100 but not by 400.</li>
            </ul>
          </li>
          <li><strong>Day Calculation:</strong> To find the day of the week for any given date, use the Zeller's Congruence formula or the method of counting odd days since a known reference point (like January 1, 1900, was a Monday).</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What day of the week was January 1st, 2021?
        </p>
        <p>Options: A. Monday B. Tuesday C. Wednesday D. Friday</p>
        <p><strong>Answer:</strong> D. Friday</p>
        <p><strong>Explanation:</strong> Using Zeller's congruence or counting odd days, January 1st, 2021, was a Friday.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> How many odd days are there in 2000 years?
        </p>
        <p>Options: A. 0 B. 1 C. 2 D. 3</p>
        <p><strong>Answer:</strong> B. 1</p>
        <p><strong>Explanation:</strong> Every 4 years is a leap year, but a century year is not a leap year unless it is divisible by 400. Hence, the number of odd days in 2000 years is 1.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> What day of the week will it be on March 15, 2050?
        </p>
        <p>Options: A. Tuesday B. Wednesday C. Thursday D. Friday</p>
        <p><strong>Answer:</strong> A. Tuesday</p>
        <p><strong>Explanation:</strong> Use Zeller's Congruence or odd days counting method to calculate the exact day of the week. March 15, 2050, will fall on a Tuesday.</p>
      </section>
    </div>
  );
};

export default Calendar;
