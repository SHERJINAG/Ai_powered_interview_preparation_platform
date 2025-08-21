import React from 'react';

const Clock = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Clock - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Clock?</h2>
        <p>
          Clock problems usually involve finding the angle between the hour and minute hands, the time when the hands overlap, or the time taken for the hands to meet after a specific interval.
        </p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Angle Between Hour and Minute Hands:</strong> The angle between the two hands is determined by the positions of the hour and minute hands on the clock face.</li>
          <li><strong>Time Taken for Hands to Meet:</strong> This concept deals with the time at which the hands of the clock overlap or meet.</li>
          <li><strong>Speed of Hour and Minute Hands:</strong> The minute hand moves 360 degrees in 60 minutes, i.e., 6 degrees per minute. The hour hand moves 360 degrees in 12 hours, i.e., 0.5 degrees per minute.</li>
          <li><strong>Angle Formula:</strong> The formula to calculate the angle between the hour and minute hands is: 
            <ul>
              <li>Angle = |(30 × Hour - (11/2) × Minute)|</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the angle between the hour and minute hands at 3:00 PM?
        </p>
        <p>Options: A. 0° B. 90° C. 180° D. 270°</p>
        <p><strong>Answer:</strong> B. 90°</p>
        <p><strong>Explanation:</strong> At 3:00, the minute hand is at 12 (0 degrees), and the hour hand is at 3 (90 degrees). So, the angle between them is 90°.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> What is the angle between the hour and minute hands at 5:30?
        </p>
        <p>Options: A. 15° B. 30° C. 75° D. 105°</p>
        <p><strong>Answer:</strong> D. 105°</p>
        <p><strong>Explanation:</strong> 
          Using the formula, 
          <br /> 
          Angle = |(30 × Hour - (11/2) × Minute)| = |(30 × 5 - (11/2) × 30)| = |150 - 165| = 15°. 
          So, the angle between the hands at 5:30 is 105°.
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> How many times do the hour and minute hands overlap in 24 hours?
        </p>
        <p>Options: A. 22 B. 24 C. 12 D. 24</p>
        <p><strong>Answer:</strong> A. 22</p>
        <p><strong>Explanation:</strong> The hands of the clock overlap 22 times in 24 hours. The hands overlap slightly more than once every hour, but it is not exactly at the same time every hour.</p>
      </section>
    </div>
  );
};

export default Clock;
