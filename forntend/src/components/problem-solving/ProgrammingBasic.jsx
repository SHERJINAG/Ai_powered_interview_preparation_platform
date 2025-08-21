import React, { useState } from "react";

export default function ProgrammingBasics() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Basic Programming Constructs
      </h1>
      <p className="text-gray-800 text-lg text-center">
        Learn about <strong>Variables</strong>, <strong>Data Types</strong>, and <strong>Operators</strong> in both <span className="text-green-700 font-bold">Java</span> and <span className="text-yellow-600 font-bold">Python</span>.
      </p>

      <button
        onClick={() => setShowCode(!showCode)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {showCode ? "Hide Lesson" : "Show Lesson"}
      </button>

      {showCode && (
        <div className="space-y-10 text-gray-800 mt-6">
          {/* Variables */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">1. Variables</h2>
            <p className="mt-2">Variables are containers for storing data values.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`int age = 25;
String name = "Alice";
double score = 92.5;`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`age = 25
name = "Alice"
score = 92.5`}
                </pre>
              </div>
            </div>
          </section>

          {/* Data Types */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">2. Data Types</h2>
            <p className="mt-2">Each language supports different types of data like integers, strings, booleans, etc.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <ul className="list-disc ml-5">
                  <li><code>int</code>: Whole numbers</li>
                  <li><code>double</code>: Decimal numbers</li>
                  <li><code>String</code>: Text</li>
                  <li><code>boolean</code>: true / false</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <ul className="list-disc ml-5">
                  <li><code>int</code>: Whole numbers</li>
                  <li><code>float</code>: Decimal numbers</li>
                  <li><code>str</code>: Text</li>
                  <li><code>bool</code>: True / False</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Operators */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">3. Operators</h2>
            <p className="mt-2">Operators perform actions like addition, comparison, or logical tests.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <ul className="list-disc ml-5">
                  <li><code>+</code> Addition</li>
                  <li><code>-</code> Subtraction</li>
                  <li><code>*</code> Multiplication</li>
                  <li><code>/</code> Division</li>
                  <li><code>==</code> Equal to</li>
                  <li><code>&&</code> Logical AND</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <ul className="list-disc ml-5">
                  <li><code>+</code> Addition</li>
                  <li><code>-</code> Subtraction</li>
                  <li><code>*</code> Multiplication</li>
                  <li><code>/</code> Division</li>
                  <li><code>==</code> Equal to</li>
                  <li><code>and</code> Logical AND</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Summary */}
          <div className="bg-blue-100 p-5 rounded-lg border-l-4 border-blue-500 mt-8">
            <h3 className="text-lg font-semibold text-blue-700">Summary</h3>
            <p className="mt-2">
              Understanding variables, data types, and operators is the first step in any programming language.
              While Java is statically typed (you declare types), Python is dynamically typed (types are assigned at runtime).
              Practice writing small programs to explore how each construct behaves.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
