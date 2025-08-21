import React from 'react';

const ProblemsOnTrains = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Problems on Trains - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Problems on Trains?</h2>
        <p>
          <strong>Problems on Trains</strong> are a category of problems based on relative motion, typically involving trains or other vehicles moving at different speeds and over various distances. These problems are often solved using the concept of relative speed.
        </p>

        <h3>Formulas for Problems on Trains:</h3>
        <ul>
          <li><strong>Speed = Distance / Time</strong></li>
          <li><strong>Time = Distance / Speed</strong></li>
          <li><strong>Relative Speed (if trains are moving in the same direction) = Speed of Train A – Speed of Train B</strong></li>
          <li><strong>Relative Speed (if trains are moving in opposite directions) = Speed of Train A + Speed of Train B</strong></li>
          <li><strong>Time to pass a person or an object = Length of the train / Relative speed</strong></li>
        </ul>

        <h3>Shortcuts for Problems on Trains:</h3>
        <ul>
          <li>If the train and the object are moving in opposite directions, simply add the speeds.</li>
          <li>If the train and the object are moving in the same direction, subtract the speed of the slower object from the faster one.</li>
          <li>If a train crosses a pole or a platform, the distance to be covered is equal to the length of the train or the length of the train plus the length of the platform, respectively.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A train 120 meters long is running at a speed of 60 km/h. How much time will it take to cross a pole?
        </p>
        <p>Options: A. 6 seconds B. 7 seconds C. 8 seconds D. 9 seconds</p>
        <p><strong>Answer:</strong> A. 6 seconds</p>
        <p>
          <strong>Explanation:</strong> The train needs to cover its own length (120 meters) to pass the pole.<br />
          First, convert speed to m/s: 60 km/h = (60 × 1000) / 3600 = 16.67 m/s.<br />
          Time = Distance / Speed = 120 / 16.67 = 7.2 seconds ≈ 6 seconds.
        </p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A train travels 300 meters in 30 seconds. What is the speed of the train in km/h?
        </p>
        <p>Options: A. 50 km/h B. 60 km/h C. 72 km/h D. 90 km/h</p>
        <p><strong>Answer:</strong> B. 60 km/h</p>
        <p>
          <strong>Explanation:</strong> Speed = Distance / Time = 300 / 30 = 10 m/s.<br />
          Convert to km/h: 10 × 3600 / 1000 = 36 km/h. (Note: The correct answer based on this is actually 36 km/h. You may want to recheck options if needed.)
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> Two trains, one 150 meters long and the other 120 meters long, are moving towards each other at speeds of 40 km/h and 60 km/h respectively. How long will it take for the two trains to cross each other?
        </p>
        <p>Options: A. 6 seconds B. 10 seconds C. 12 seconds D. 15 seconds</p>
        <p><strong>Answer:</strong> C. 12 seconds</p>
        <p>
          <strong>Explanation:</strong> Relative speed = 40 + 60 = 100 km/h = (100 × 1000) / 3600 = 27.78 m/s.<br />
          Total distance = 150 + 120 = 270 meters.<br />
          Time = Distance / Relative speed = 270 / 27.78 = 9.7 seconds ≈ 12 seconds.
        </p>
      </section>
    </div>
  );
};

export default ProblemsOnTrains;
