import React, { useState } from "react";

export default function ConditionalsAndLoops() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Conditionals and Loops: Java vs Python
      </h1>
      <p className="text-gray-800 text-lg text-center">
        Learn how to use <strong>if-else statements</strong> and <strong>loops</strong> to control program flow.
      </p>

      <button
        onClick={() => setShowLesson(!showLesson)}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        {showLesson ? "Hide Lesson" : "Show Lesson"}
      </button>

      {showLesson && (
        <div className="space-y-10 text-gray-800 mt-6">
          {/* IF-ELSE */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">1. Conditionals (if, else)</h2>
            <p className="mt-2">Conditionals let you run code based on decisions.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`int num = 10;
if (num > 0) {
  System.out.println("Positive");
} else if (num < 0) {
  System.out.println("Negative");
} else {
  System.out.println("Zero");
}`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`num = 10
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`}
                </pre>
              </div>
            </div>
          </section>

          {/* FOR LOOP */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">2. For Loops</h2>
            <p className="mt-2">Use loops to repeat tasks efficiently.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`for (int i = 1; i <= 5; i++) {
  System.out.println("Count: " + i);
}`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`for i in range(1, 6):
    print("Count:", i)`}
                </pre>
              </div>
            </div>
          </section>

          {/* WHILE LOOP */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">3. While Loops</h2>
            <p className="mt-2">Repeat while a condition is true.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`int i = 1;
while (i <= 5) {
  System.out.println("Java While Count: " + i);
  i++;
}`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`i = 1
while i <= 5:
    print("Python While Count:", i)
    i += 1`}
                </pre>
              </div>
            </div>
          </section>

          {/* Summary */}
          <div className="bg-blue-100 p-5 rounded-lg border-l-4 border-blue-500 mt-8">
            <h3 className="text-lg font-semibold text-blue-700">Summary</h3>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>If-else</strong> checks conditions and branches the code accordingly.</li>
              <li><strong>For loops</strong> are used when the number of iterations is known.</li>
              <li><strong>While loops</strong> are used when you repeat until a condition fails.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
