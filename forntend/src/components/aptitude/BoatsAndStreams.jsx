import React from 'react'; 

const BoatsAndStreams = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Boats and Streams - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Problems on Boats and Streams?</h2>
        <p>
          **Boats and Streams** problems deal with the motion of a boat in a stream. The speed of the boat is affected by the current of the stream, and these problems require calculating relative speeds in still water and in moving water.
        </p>

        <h3>Formulas for Boats and Streams:</h3>
        <ul>
          <li><strong>Speed of boat in still water = (Speed of boat downstream + Speed of boat upstream) / 2</strong></li>
          <li><strong>Speed of stream = (Speed of boat downstream - Speed of boat upstream) / 2</strong></li>
          <li><strong>Speed downstream = Speed of boat in still water + Speed of stream</strong></li>
          <li><strong>Speed upstream = Speed of boat in still water - Speed of stream</strong></li>
          <li><strong>Time to cover distance downstream = Distance / Speed downstream</strong></li>
          <li><strong>Time to cover distance upstream = Distance / Speed upstream</strong></li>
        </ul>

        <h3>Shortcuts for Boats and Streams:</h3>
        <ul>
          <li>If the boat is going downstream (with the current), the effective speed of the boat is increased by the speed of the stream.</li>
          <li>If the boat is going upstream (against the current), the effective speed of the boat is reduced by the speed of the stream.</li>
          <li>The time taken to cover a distance is directly related to the effective speed of the boat.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A boat covers a certain distance downstream in 5 hours. The same distance is covered upstream in 6 hours. If the speed of the stream is 2 km/h, what is the speed of the boat in still water?
        </p>
        <p>Options: A. 4 km/h B. 5 km/h C. 6 km/h D. 8 km/h</p>
        <p><strong>Answer:</strong> B. 5 km/h</p>
        <p><strong>Explanation:</strong> Let the speed of the boat in still water be 'x' km/h. The speed downstream is (x + 2) km/h, and the speed upstream is (x - 2) km/h. Since the time taken to cover the distance is distance / speed, we can write: <br />
          (Distance / (x + 2)) = 5 and (Distance / (x - 2)) = 6.<br />
          Solving these equations, we find that x = 5 km/h.
        </p>


        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A boat takes 2 hours to cover a distance downstream and 3 hours to cover the same distance upstream. If the speed of the boat in still water is 15 km/h, what is the speed of the stream?
        </p>
        <p>Options: A. 2.5 km/h B. 3 km/h C. 4 km/h D. 5 km/h</p>
        <p><strong>Answer:</strong> B. 3 km/h</p>
        <p><strong>Explanation:</strong> Let the speed of the stream be 's' km/h. The speed of the boat downstream is (15 + s) km/h and upstream is (15 - s) km/h.<br />
          Using the formula Time = Distance / Speed, we have:<br />
          (D / (15 + s)) = 2 and (D / (15 - s)) = 3.<br />
          Solving these equations, we find that s = 3 km/h.
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A boat can cover a certain distance downstream in 4 hours, and it takes 5 hours to cover the same distance upstream. The speed of the stream is 3 km/h. What is the speed of the boat in still water?
        </p>
        <p>Options: A. 6 km/h B. 7 km/h C. 8 km/h D. 9 km/h</p>
        <p><strong>Answer:</strong> C. 8 km/h</p>
        <p><strong>Explanation:</strong> Let the speed of the boat in still water be 'x' km/h.<br />
          Speed downstream = (x + 3) km/h, and speed upstream = (x - 3) km/h.<br />
          Using the formula Time = Distance / Speed, we get:<br />
          (D / (x + 3)) = 4 and (D / (x - 3)) = 5.<br />
          Solving these equations, we find that x = 8 km/h.
        </p>
      </section>
    </div>
  );
};

export default BoatsAndStreams;
