import React from 'react';

const TimeSpeedDistance = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Time, Speed and Distance - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Time, Speed, and Distance?</h2>
        <p>
          <strong>Time, Speed, and Distance</strong> problems are a key component in competitive exams and math problems. These problems are based on the relationship between distance, speed, and time. They are primarily used to determine any one of these three values if the other two are known.
        </p>

        <h3>Formulas for Time, Speed, and Distance:</h3>
        <ul>
          <li><strong>Speed = Distance / Time</strong></li>
          <li><strong>Time = Distance / Speed</strong></li>
          <li><strong>Distance = Speed × Time</strong></li>
        </ul>

        <h3>Unit Conversion:</h3>
        <ul>
          <li>Speed is typically measured in kilometers per hour (km/h) or meters per second (m/s).</li>
          <li>Distance is usually measured in kilometers (km) or meters (m).</li>
          <li>Time is measured in hours (h), minutes (min), or seconds (s).</li>
        </ul>

        <h3>Shortcuts for Time, Speed, and Distance:</h3>
        <ul>
          <li>To convert from km/h to m/s, multiply by {"\u{000A}"}(5/18).<br />
            <strong>Formula:</strong> {"Speed in m/s = Speed in km/h × 5/18"}
          </li>
          <li>To convert from m/s to km/h, multiply by {"\u{000A}"}(18/5).<br />
            <strong>Formula:</strong> {"Speed in km/h = Speed in m/s × 18/5"}
          </li>
          <li>In relative speed problems (when two objects are moving in opposite or same directions), the relative speed is the sum or difference of their individual speeds.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A car travels 150 km in 3 hours. What is its speed?
        </p>
        <p>Options: A. 50 km/h B. 45 km/h C. 55 km/h D. 60 km/h</p>
        <p><strong>Answer:</strong> A. 50 km/h</p>
        <p><strong>Explanation:</strong> Using the formula for speed: <br />
          {"Speed = Distance / Time"} <br />
          {"Speed = 150 km / 3 hours = 50 km/h"}
        </p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A train travels 240 km at a speed of 60 km/h. How much time will it take to complete the journey?
        </p>
        <p>Options: A. 4 hours B. 5 hours C. 6 hours D. 3 hours</p>
        <p><strong>Answer:</strong> A. 4 hours</p>
        <p><strong>Explanation:</strong> Using the formula for time: <br />
          {"Time = Distance / Speed"} <br />
          {"Time = 240 km / 60 km/h = 4 hours"}
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A person walks 30 km towards the north in 5 hours and then turns to the right and walks 40 km in 8 hours. What is his average speed for the whole journey?
        </p>
        <p>Options: A. 5 km/h B. 6 km/h C. 7 km/h D. 8 km/h</p>
        <p><strong>Answer:</strong> B. 6 km/h</p>
        <p><strong>Explanation:</strong> <br />
          {"Total distance traveled = 30 km + 40 km = 70 km"} <br />
          {"Total time taken = 5 hours + 8 hours = 13 hours"} <br />
          {"Average speed = Total distance / Total time = 70 km / 13 hours ≈ 6 km/h"}
        </p>
      </section>
    </div>
  );
};

export default TimeSpeedDistance;
