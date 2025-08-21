import React, { useState } from "react";

export default function PatternPrintingTutorial() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Pattern Printing in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to print various patterns using stars, numbers, and alphabets in Java and Python. These patterns include pyramids, inverted pyramids, diamonds, hollow patterns, and triangles.
      </p>

      <div className="text-center">
        <button
          onClick={() => setShowLesson(!showLesson)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showLesson ? "Hide Lesson" : "Show Lesson"}
        </button>
      </div>

      {showLesson && (
        <div className="space-y-10 text-gray-800 mt-6">
          {/* Right-Aligned Triangle */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">1. Right-Aligned Triangle</h2>
            <p>
              A right-aligned triangle is a pattern where the right side is aligned, and stars or numbers are printed in a right-angled fashion.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class RightAlignedTriangle {
    public static void main(String[] args) {
        int n = 5;  // Height of the triangle
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");  // Spaces for right alignment
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`n = 5  # Height of the triangle
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * i)  # Spaces for right alignment and stars printed`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`    *
   **
  ***
 ****
*****
`}
            </pre>
          </section>

          {/* Left-Aligned Triangle */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Left-Aligned Triangle</h2>
            <p>
              A left-aligned triangle has stars or numbers aligned to the left side. It forms a shape where each row contains one more star than the previous one.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class LeftAlignedTriangle {
    public static void main(String[] args) {
        int n = 5;  // Height of the triangle
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`n = 5  # Height of the triangle
for i in range(1, n + 1):
    print("*" * i)  # Stars printed`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`*
**
***
****
*****
`}
            </pre>
          </section>

          {/* Pyramid */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">3. Pyramid</h2>
            <p>
              A pyramid pattern has stars printed in a way that the middle is aligned. It’s often used to print symmetrical patterns.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class Pyramid {
    public static void main(String[] args) {
        int n = 5;  // Height of the pyramid
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");  // Spaces before stars
            }
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`n = 5  # Height of the pyramid
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))  # Spaces and stars printed`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`    *
   ***
  *****
 *******
*********
`}
            </pre>
          </section>

          {/* Inverted Pyramid */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">4. Inverted Pyramid</h2>
            <p>
              An inverted pyramid is the reverse of a regular pyramid. It starts with the largest number of stars at the top and decreases as we move down.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class InvertedPyramid {
    public static void main(String[] args) {
        int n = 5;  // Height of the inverted pyramid
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");  // Spaces before stars
            }
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`n = 5  # Height of the inverted pyramid
for i in range(n, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))  # Spaces and stars printed`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`*********
 *******
  *****
   ***
    *
`}
            </pre>
          </section>

          {/* Diamond */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">5. Diamond</h2>
            <p>
              A diamond pattern combines both pyramid and inverted pyramid, forming a symmetric shape.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class Diamond {
    public static void main(String[] args) {
        int n = 5;  // Height of the diamond
        // Upper part of the diamond (pyramid)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");  // Spaces before stars
            }
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
        // Lower part of the diamond (inverted pyramid)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");  // Spaces before stars
            }
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");  // Stars printed
            }
            System.out.println();  // Move to the next line
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`n = 5  # Height of the diamond
# Upper part of the diamond (pyramid)
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))  # Spaces and stars printed
# Lower part of the diamond (inverted pyramid)
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))  # Spaces and stars printed`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
`}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
