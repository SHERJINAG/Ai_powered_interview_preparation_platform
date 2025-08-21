import React from 'react';

const Mensuration = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mensuration (2D and 3D) - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What is Mensuration?</h2>
        <p>
          **Mensuration** is the branch of mathematics that deals with the measurement of various geometrical figures' area, perimeter, surface area, and volume. It includes 2D (two-dimensional) and 3D (three-dimensional) figures.
        </p>

        <h3>Formulas for Mensuration</h3>
        <h4>2D Shapes (Areas and Perimeter)</h4>
        <ul>
          <li><strong>Area of Square = a²</strong> (where 'a' is the side length)</li>
          <li><strong>Perimeter of Square = 4a</strong> (where 'a' is the side length)</li>
          <li><strong>Area of Rectangle = l × b</strong> (where 'l' is length and 'b' is breadth)</li>
          <li><strong>Perimeter of Rectangle = 2(l + b)</strong> (where 'l' is length and 'b' is breadth)</li>
          <li><strong>Area of Circle = πr²</strong> (where 'r' is the radius)</li>
          <li><strong>Circumference of Circle = 2πr</strong> (where 'r' is the radius)</li>
          <li><strong>Area of Triangle = 1/2 × base × height</strong></li>
        </ul>

        <h4>3D Shapes (Surface Area and Volume)</h4>
        <ul>
          <li><strong>Surface Area of Cube = 6a²</strong> (where 'a' is the side length)</li>
          <li><strong>Volume of Cube = a³</strong> (where 'a' is the side length)</li>
          <li><strong>Surface Area of Rectangular Prism = 2(lb + bh + hl)</strong> (where 'l' is length, 'b' is breadth, and 'h' is height)</li>
          <li><strong>Volume of Rectangular Prism = l × b × h</strong> (where 'l' is length, 'b' is breadth, and 'h' is height)</li>
          <li><strong>Surface Area of Sphere = 4πr²</strong> (where 'r' is the radius)</li>
          <li><strong>Volume of Sphere = 4/3πr³</strong> (where 'r' is the radius)</li>
          <li><strong>Surface Area of Cylinder = 2πr(h + r)</strong> (where 'r' is the radius and 'h' is height)</li>
          <li><strong>Volume of Cylinder = πr²h</strong> (where 'r' is the radius and 'h' is height)</li>
        </ul>

        <h3>Shortcuts for Mensuration</h3>
        <ul>
          <li>For circles, always remember to use π ≈ 3.1416 or 22/7 for approximate calculations.</li>
          <li>For cuboids and cubes, the volume is just the product of length, breadth, and height or side cubed.</li>
          <li>For triangular shapes, focus on knowing the base and height to calculate the area efficiently.</li>
          <li>For surface areas, remember that the surface area of a cube or rectangular prism is the sum of areas of all its faces.</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the area of a square whose side length is 5 cm?
        </p>
        <p>Options: A. 25 cm² B. 15 cm² C. 10 cm² D. 20 cm²</p>
        <p><strong>Answer:</strong> A. 25 cm²</p>
        <p><strong>Explanation:</strong> The area of a square is calculated using the formula: Area = a², where 'a' is the side length. So, Area = 5² = 25 cm².</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> The volume of a cuboid is 240 cm³. If the length is 10 cm and the width is 8 cm, what is the height?
        </p>
        <p>Options: A. 2 cm B. 3 cm C. 4 cm D. 5 cm</p>
        <p><strong>Answer:</strong> C. 3 cm</p>
        <p><strong>Explanation:</strong> The volume of a cuboid is given by the formula: Volume = l × b × h. We are given the volume, length, and breadth. Substituting the known values: 240 = 10 × 8 × h. Solving for 'h', we get h = 3 cm.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A cylinder has a radius of 4 cm and a height of 7 cm. What is the volume of the cylinder?
        </p>
        <p>Options: A. 112π cm³ B. 88π cm³ C. 100π cm³ D. 140π cm³</p>
        <p><strong>Answer:</strong> A. 112π cm³</p>
        <p><strong>Explanation:</strong> The volume of a cylinder is given by the formula: Volume = πr²h. Substituting the given values: Volume = π × 4² × 7 = 112π cm³.</p>
      </section>
    </div>
  );
};

export default Mensuration;
