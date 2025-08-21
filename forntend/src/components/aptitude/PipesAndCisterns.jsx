import React from 'react';

const PipesAndCisterns = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pipes and Cisterns - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Pipes and Cisterns?</h2>
        <p>
          **Pipes and Cisterns** is a concept used to solve problems related to the flow of liquids into or out of a container (cistern). The problems typically involve the time it takes to fill or empty the cistern using one or more pipes, and they often require determining the combined rates of flow of multiple pipes working together.
        </p>

        <h3>Formulas for Pipes and Cisterns:</h3>
        <ul>
          <li>
            **Filling Rate Formula**:
            <br />
            If a pipe fills a cistern in <strong>t₁</strong> hours, its filling rate is <code>1/t₁</code> of the cistern per hour.
          </li>
          <li>
            **Emptying Rate Formula**:
            <br />
            If a pipe empties a cistern in <strong>t₂</strong> hours, its emptying rate is <code>1/t₂</code> of the cistern per hour.
          </li>
          <li>
            **Combined Rate Formula**:
            <br />
            If one pipe fills the cistern and another pipe empties it, their combined rate is:
            <br />
            <code>Combined Rate = (1/t₁) - (1/t₂)</code>
            <br />
            where <strong>t₁</strong> is the filling time and <strong>t₂</strong> is the emptying time.
          </li>
          <li>
            **Time Taken to Fill or Empty the Cistern**:
            <br />
            The time taken to fill or empty the cistern can be calculated by:
            <br />
            <code>Time Taken = 1 / Combined Rate</code>
          </li>
        </ul>

        <h3>Shortcuts for Pipes and Cisterns:</h3>
        <ul>
          <li>
            For filling pipes, the rate is positive (<code>1/t₁</code>), and for emptying pipes, the rate is negative (<code>1/t₂</code>).
          </li>
          <li>
            If multiple pipes are working together, add their rates (fillers add, emptiers subtract).
          </li>
          <li>
            When a pipe is filling and another is emptying, subtract the emptying rate from the filling rate to get the effective rate.
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> A pipe fills a tank in 12 hours. How much of the tank does the pipe fill in 1 hour?
        </p>
        <p>Options: A. 1/12 B. 1/6 C. 1/10 D. 1/15</p>
        <p><strong>Answer:</strong> A. 1/12</p>
        <p><strong>Explanation:</strong> The filling rate of the pipe is <code>1/12</code> of the tank per hour, so in 1 hour, it fills <code>1/12</code> of the tank.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> A pipe can fill a tank in 8 hours, and a second pipe can empty the tank in 12 hours. If both pipes are open together, how long will it take to fill the tank?
        </p>
        <p>Options: A. 24 hours B. 48 hours C. 6 hours D. 4 hours</p>
        <p><strong>Answer:</strong> C. 6 hours</p>
        <p><strong>Explanation:</strong> 
          - Filling rate of first pipe = <code>1/8</code> (fills 1 tank per 8 hours)
          <br />
          - Emptying rate of second pipe = <code>1/12</code> (empties 1 tank per 12 hours)
          <br />
          - Combined rate = <code>(1/8) - (1/12) = 1/24</code>
          <br />
          - Time to fill the tank = <code>1 / (1/24) = 6</code> hours.
        </p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> Pipe A fills a tank in 15 hours, Pipe B fills the same tank in 20 hours, and Pipe C empties the tank in 25 hours. If all pipes are open together, how long will it take to fill the tank?
        </p>
        <p>Options: A. 10 hours B. 12 hours C. 14 hours D. 15 hours</p>
        <p><strong>Answer:</strong> A. 10 hours</p>
        <p><strong>Explanation:</strong> 
          - Filling rate of A = <code>1/15</code>
          <br />
          - Filling rate of B = <code>1/20</code>
          <br />
          - Emptying rate of C = <code>1/25</code>
          <br />
          - Combined rate = <code>(1/15) + (1/20) - (1/25) = 1/10</code>
          <br />
          - Time to fill the tank = <code>1 / (1/10) = 10</code> hours.
        </p>
      </section>
    </div>
  );
};

export default PipesAndCisterns;
