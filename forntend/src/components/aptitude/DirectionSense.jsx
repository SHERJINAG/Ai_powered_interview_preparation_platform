import React from 'react';

const DirectionSense = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Direction Sense - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Direction Sense?</h2>
        <p>
          **Direction Sense** problems are a type of reasoning question that involves finding the direction in which a person is facing or moving, based on a series of instructions. These instructions typically involve turning left, right, or moving forward a certain distance, and you need to determine the person's final position or direction.
        </p>

        <h3>Common Directions</h3>
        <ul>
          <li><strong>North (N):</strong> Upward</li>
          <li><strong>South (S):</strong> Downward</li>
          <li><strong>East (E):</strong> Rightward</li>
          <li><strong>West (W):</strong> Leftward</li>
        </ul>
        <h3>Important Tips</h3>
        <ul>
          <li>Assume a starting point and directions (usually facing North) for solving the problem.</li>
          <li>Track every turn and movement based on the given instructions (e.g., 90-degree turns).</li>
          <li>If the person makes a 180-degree turn, they will be facing the opposite direction.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A person is facing North. He turns 90° to the left, then turns 180° to his right. In which direction is he now facing?
        </p>
        <p>Options: A. North B. East C. South D. West</p>
        <p><strong>Answer:</strong> C. South</p>
        <p><strong>Explanation:</strong> Initially, the person is facing North. After turning 90° left, he faces West. Then, a 180° right turn will make him face South.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A person is facing West. He walks 5 meters, turns left, walks 10 meters, turns left again, and walks 5 meters. In which direction is he now facing?
        </p>
        <p>Options: A. North B. South C. East D. West</p>
        <p><strong>Answer:</strong> B. South</p>
        <p><strong>Explanation:</strong> The person starts by facing West. After the first left turn, he faces South. Then, after walking 10 meters, another left turn will make him face East. After walking 5 meters, the last left turn will make him face South.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A person starts at point A facing North. He moves 20 meters forward, then turns right and moves 30 meters. After that, he turns right again and moves 20 meters. In which direction is he from his starting point?
        </p>
        <p>Options: A. North B. East C. South D. West</p>
        <p><strong>Answer:</strong> B. East</p>
        <p><strong>Explanation:</strong> The person starts by facing North and moves 20 meters. After turning right, he faces East and moves 30 meters. Turning right again, he faces South and moves 20 meters. The final position is 30 meters East of the starting point.</p>
      </section>
    </div>
  );
};

export default DirectionSense;
