import React, { useState } from "react";

export default function FunctionsAndModularProgramming() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Functions and Modular Programming: Java vs Python
      </h1>
      <p className="text-gray-800 text-lg text-center">
        Learn how to organize code into reusable pieces using <strong>functions</strong> in both Java and Python.
      </p>

      <button
        onClick={() => setShowContent(!showContent)}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        {showContent ? "Hide Lesson" : "Show Lesson"}
      </button>

      {showContent && (
        <div className="space-y-10 text-gray-800 mt-6">
          {/* What are Functions */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">1. What is a Function?</h2>
            <p className="mt-2">
              A <strong>function</strong> is a block of code that performs a specific task and can be reused multiple times.
              Functions help in organizing code, reducing duplication, and improving readability.
            </p>
          </section>

          {/* Java and Python Examples */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">2. Defining and Calling Functions</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class Main {
  // Function to add two numbers
  public static int add(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    int result = add(5, 7);
    System.out.println("Sum: " + result);
  }
}`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Function to add two numbers
def add(a, b):
    return a + b

# Calling the function
result = add(5, 7)
print("Sum:", result)`}
                </pre>
              </div>
            </div>
          </section>

          {/* Modular Programming Concept */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700">3. Modular Programming</h2>
            <p className="mt-2">
              Modular programming means breaking a large program into smaller, manageable, and reusable modules (functions, classes, or files).
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-green-700">Java Example</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// File: MathUtils.java
public class MathUtils {
  public static int multiply(int a, int b) {
    return a * b;
  }
}

// File: Main.java
public class Main {
  public static void main(String[] args) {
    int result = MathUtils.multiply(4, 5);
    System.out.println("Product: " + result);
  }
}`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-yellow-600">Python Example</h3>
                <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# File: math_utils.py
def multiply(a, b):
    return a * b

# File: main.py
from math_utils import multiply

result = multiply(4, 5)
print("Product:", result)`}
                </pre>
              </div>
            </div>
          </section>

          {/* Summary */}
          <div className="bg-blue-100 p-5 rounded-lg border-l-4 border-blue-500 mt-8">
            <h3 className="text-lg font-semibold text-blue-700">Summary</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Functions improve code reuse and organization.</li>
              <li>In Java, functions are called methods and defined within classes.</li>
              <li>In Python, functions are defined using <code>def</code> and can be reused anywhere.</li>
              <li>Modular programming helps break down large programs into simpler components.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
