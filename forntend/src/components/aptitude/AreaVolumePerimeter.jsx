import React from 'react';

const AreaVolumePerimeter = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Area, Volume, and Perimeter - Explanation, Formulas, Shortcuts, and Examples</h1>

      <section>
        <h2>What are Area, Volume, and Perimeter?</h2>
        <p>
          **Area** refers to the amount of space covered by a 2D shape or figure.  
          **Perimeter** refers to the total length around a 2D figure.  
          **Volume** refers to the amount of space occupied by a 3D shape or figure.
        </p>

        <h3>Formulas</h3>

        <h4>2D Shapes (Area and Perimeter)</h4>
        <ul>
          <li><strong>Area of Square:</strong> A = a² (where 'a' is the side length)</li>
          <li><strong>Perimeter of Square:</strong> P = 4a (where 'a' is the side length)</li>
          <li><strong>Area of Rectangle:</strong> A = l × b (where 'l' is length and 'b' is breadth)</li>
          <li><strong>Perimeter of Rectangle:</strong> P = 2(l + b) (where 'l' is length and 'b' is breadth)</li>
          <li><strong>Area of Circle:</strong> A = πr² (where 'r' is the radius)</li>
          <li><strong>Circumference of Circle:</strong> C = 2πr (where 'r' is the radius)</li>
          <li><strong>Area of Triangle:</strong> A = 1/2 × base × height</li>
        </ul>

        <h4>3D Shapes (Surface Area and Volume)</h4>
        <ul>
          <li><strong>Surface Area of Cube:</strong> SA = 6a² (where 'a' is the side length)</li>
          <li><strong>Volume of Cube:</strong> V = a³ (where 'a' is the side length)</li>
          <li><strong>Surface Area of Rectangular Prism:</strong> SA = 2(lb + bh + hl) (where 'l' is length, 'b' is breadth, 'h' is height)</li>
          <li><strong>Volume of Rectangular Prism:</strong> V = l × b × h (where 'l' is length, 'b' is breadth, and 'h' is height)</li>
          <li><strong>Surface Area of Sphere:</strong> SA = 4πr² (where 'r' is the radius)</li>
          <li><strong>Volume of Sphere:</strong> V = 4/3πr³ (where 'r' is the radius)</li>
          <li><strong>Surface Area of Cylinder:</strong> SA = 2πr(h + r) (where 'r' is the radius and 'h' is height)</li>
          <li><strong>Volume of Cylinder:</strong> V = πr²h (where 'r' is the radius and 'h' is height)</li>
        </ul>

        <h3>Shortcuts for Area, Volume, and Perimeter</h3>
        <ul>
          <li>For circles, remember π ≈ 3.1416 or 22/7 for approximate calculations.</li>
          <li>For cuboids and cubes, the volume is simply the product of length, breadth, and height or side cubed for cubes.</li>
          <li>For triangles, the area can be easily calculated using 1/2 × base × height.</li>
          <li>To calculate the perimeter, simply add up the sides of a shape. For a rectangle, it's 2(l + b).</li>
        </ul>
      </section>

      <section>
        <h2>Example Questions</h2>

        <h3>Beginner Question</h3>
        <p>
          <strong>Question:</strong> What is the perimeter of a square whose side length is 4 cm?
        </p>
        <p>Options: A. 12 cm B. 16 cm C. 8 cm D. 20 cm</p>
        <p><strong>Answer:</strong> B. 16 cm</p>
        <p><strong>Explanation:</strong> The perimeter of a square is given by the formula: P = 4a, where 'a' is the side length. So, P = 4 × 4 = 16 cm.</p>

        <h3>Intermediate Question</h3>
        <p>
          <strong>Question:</strong> The area of a rectangle is 36 cm², and its length is 9 cm. What is the breadth of the rectangle?
        </p>
        <p>Options: A. 3 cm B. 4 cm C. 5 cm D. 6 cm</p>
        <p><strong>Answer:</strong> A. 3 cm</p>
        <p><strong>Explanation:</strong> The area of a rectangle is given by the formula: A = l × b. We are given the area and length. Substituting the known values: 36 = 9 × b. Solving for 'b', we get b = 3 cm.</p>

        <h3>Advanced Question</h3>
        <p>
          <strong>Question:</strong> A sphere has a radius of 7 cm. What is its volume?
        </p>
        <p>Options: A. 1078π cm³ B. 1232π cm³ C. 1372π cm³ D. 1496π cm³</p>
        <p><strong>Answer:</strong> A. 1078π cm³</p>
        <p><strong>Explanation:</strong> The volume of a sphere is given by the formula: V = 4/3πr³. Substituting the given radius: V = 4/3 × π × 7³ = 1078π cm³.</p>
      </section>
    </div>
  );
};

export default AreaVolumePerimeter;
