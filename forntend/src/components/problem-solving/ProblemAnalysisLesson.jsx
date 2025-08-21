import React, { useState } from "react";

export default function ProblemAnalysisLesson() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-center text-purple-700">
        Understanding Constraints, Edge Cases & Manual Test Cases
      </h1>

      <p className="text-gray-800 text-lg">
        Once you understand a problem and break it down, the next steps are:
      </p>
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
        <li><strong>Define constraints</strong> – what are the limits or rules?</li>
        <li><strong>Think about edge cases</strong> – unusual or extreme inputs.</li>
        <li><strong>Write manual test cases</strong> – test the logic manually before coding.</li>
      </ul>

      <div className="bg-gray-100 p-5 rounded shadow">
        <h2 className="text-xl font-semibold text-green-600">Example Problem:</h2>
        <p className="italic text-md mt-1">
          “Write a program to check if a number is even or odd.”
        </p>
      </div>

      <button
        onClick={toggleDetails}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        {showDetails ? "Hide Detailed Lesson" : "Show Detailed Lesson"}
      </button>

      {showDetails && (
        <div className="space-y-6 mt-4 text-gray-800">
          {/* Step 1 */}
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <h3 className="text-lg font-semibold">Step 1: Define Constraints</h3>
            <p className="mt-2">
              Constraints are rules the input must follow. They help you know what kinds of input to expect and what edge cases to consider.
            </p>
            <p className="mt-2 font-semibold">For our example:</p>
            <ul className="list-disc ml-6 mt-1">
              <li>Input must be a whole number (integer)</li>
              <li>Negative numbers are allowed</li>
              <li>Input range: -10000 to 10000 (as an example)</li>
              <li>No special characters or text input</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <h3 className="text-lg font-semibold">Step 2: Identify Edge Cases</h3>
            <p>
              Edge cases are unusual situations that might break your program if not handled correctly.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Input is 0 → Is it even?</li>
              <li>Input is a very large or very small number</li>
              <li>Input is a negative number</li>
              <li>Input is not a number (e.g., “abc”)</li>
              <li>Input is a decimal number → should we allow it?</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <h3 className="text-lg font-semibold">Step 3: Write Manual Test Cases</h3>
            <p>Test cases are example inputs and their expected outputs. These help verify the logic:</p>
            <table className="mt-4 w-full text-left border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1 border">Test Case</th>
                  <th className="px-2 py-1 border">Input</th>
                  <th className="px-2 py-1 border">Expected Output</th>
                  <th className="px-2 py-1 border">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">TC1</td>
                  <td className="border px-2 py-1">2</td>
                  <td className="border px-2 py-1">Even</td>
                  <td className="border px-2 py-1">Basic even number</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">TC2</td>
                  <td className="border px-2 py-1">3</td>
                  <td className="border px-2 py-1">Odd</td>
                  <td className="border px-2 py-1">Basic odd number</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">TC3</td>
                  <td className="border px-2 py-1">0</td>
                  <td className="border px-2 py-1">Even</td>
                  <td className="border px-2 py-1">Edge case: 0 is even</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">TC4</td>
                  <td className="border px-2 py-1">-5</td>
                  <td className="border px-2 py-1">Odd</td>
                  <td className="border px-2 py-1">Negative number</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">TC5</td>
                  <td className="border px-2 py-1">10.5</td>
                  <td className="border px-2 py-1">Invalid</td>
                  <td className="border px-2 py-1">Decimal input (not allowed)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Conclusion */}
          <div className="bg-green-100 p-4 rounded border-l-4 border-green-500">
            <h3 className="text-lg font-semibold">Conclusion:</h3>
            <p>
              Thinking about constraints and edge cases helps you write more reliable code.
              Writing test cases before coding allows you to verify logic step by step.
              This process is the foundation of professional software development and debugging.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
