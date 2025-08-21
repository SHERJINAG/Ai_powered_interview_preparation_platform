import React, { useState } from "react";

export default function LearnProblemSolving() {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Learn to Understand & Break Down a Problem
      </h1>

      <p className="text-gray-700 text-lg">
        Before writing any code, the most important skill is learning how to
        <strong> understand a problem</strong> and <strong>break it into steps</strong>. Let's walk through this process using a simple example.
      </p>

      <div className="bg-gray-100 p-5 rounded">
        <h2 className="text-xl font-semibold text-green-600">Example Problem:</h2>
        <p className="text-lg italic">
          “Write a program that takes two numbers from the user and prints their sum.”
        </p>
      </div>

      <button
        onClick={toggleSteps}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        {showSteps ? "Hide Step-by-Step Explanation" : "Show Step-by-Step Explanation"}
      </button>

      {showSteps && (
        <div className="space-y-5 text-gray-800 text-md">
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <strong>Step 1: Read the Problem Carefully</strong>
            <p>
              Don’t rush. Understand what is being asked. The key phrases here are:
              <ul className="list-disc ml-6 mt-2">
                <li>“takes two numbers from the user” → this means <strong>inputs</strong></li>
                <li>“prints their sum” → this means <strong>output the result</strong></li>
              </ul>
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <strong>Step 2: Identify Inputs and Outputs</strong>
            <p>
              Every programming problem involves:
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Inputs:</strong> What does the program need to work with?</li>
                <li><strong>Outputs:</strong> What result does the program need to show?</li>
              </ul>
              <p className="mt-2">For our problem:</p>
              <ul className="list-disc ml-6">
                <li><strong>Inputs:</strong> number1, number2</li>
                <li><strong>Output:</strong> number1 + number2</li>
              </ul>
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <strong>Step 3: Break Into Logical Steps (Pseudocode)</strong>
            <p>Think about how you would explain the steps to a friend:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Ask the user to enter the first number.</li>
              <li>Ask the user to enter the second number.</li>
              <li>Add both numbers.</li>
              <li>Show the result.</li>
            </ol>
            <p className="mt-2 italic">This thinking is called pseudocode – plain-language instructions.</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
            <strong>Step 4: Think About Edge Cases</strong>
            <p>
              What if the user enters a letter instead of a number? Should we allow decimals?
              These are called <strong>edge cases</strong> and thinking about them helps you write better programs.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
            <strong>Conclusion:</strong>
            <p>
              Breaking down problems helps you think clearly and write better code.
              Don’t jump straight into coding — take a moment to understand, analyze, and plan.
            </p>
          </div>
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded mt-6 border-l-4 border-blue-400">
        <h2 className="font-semibold text-blue-700">Try This:</h2>
        <p className="mt-2">
          Think about this problem: <strong>“Check if a number is even or odd.”</strong>
        </p>
        <p className="mt-2">Can you apply the same steps?</p>
        <ul className="list-disc ml-6">
          <li>What are the inputs?</li>
          <li>What is the expected output?</li>
          <li>What steps should the logic follow?</li>
        </ul>
      </div>
    </div>
  );
}
