import React, { useState } from "react";

export default function SearchAlgorithmsTutorial() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Linear Search & Binary Search in Python & Java
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn about Linear Search and Binary Search algorithms, two fundamental searching algorithms in computer science.
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
          {/* Linear Search in Java */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">1. Linear Search in Java</h2>
            <p>Linear Search is the simplest searching algorithm. It checks each element in the array sequentially until it finds the target value or reaches the end of the array.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class LinearSearchExample {
  public static void main(String[] args) {
    int[] arr = {5, 2, 9, 12, 7, 8};
    int target = 9;
    boolean found = false;

    // Linear search algorithm
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        found = true;
        break;
      }
    }

    if (found) {
      System.out.println("Element " + target + " found in the array.");
    } else {
      System.out.println("Element " + target + " not found.");
    }
  }
}`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
               <li><code>for (int i = 0; i &lt; arr.length; i++)</code> – Loops through each element of the array.</li>

                <li><code>if (arr[i] == target)</code> – Compares each element to the target value.</li>
                <li><code>break</code> – Stops the loop once the element is found.</li>
              </ul>
            </div>
          </section>

          {/* Linear Search in Python */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Linear Search in Python</h2>
            <p>Linear Search in Python works similarly, using a loop to check each element of the list until the target is found.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Linear search function in Python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return True
    return False

arr = [5, 2, 9, 12, 7, 8]
target = 9

if linear_search(arr, target):
    print(f"Element {target} found in the array.")
else:
    print(f"Element {target} not found.")`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>for i in range(len(arr))</code> – Loops through each element in the list.</li>
                <li><code>if arr[i] == target</code> – Compares each element to the target value.</li>
                <li><code>return True</code> – Returns true if the element is found, else returns false.</li>
              </ul>
            </div>
          </section>

          {/* Binary Search in Java */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">3. Binary Search in Java</h2>
            <p>Binary Search is an efficient algorithm for finding an element in a sorted array. It divides the array into halves repeatedly to find the target value.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class BinarySearchExample {
  public static void main(String[] args) {
    int[] arr = {1, 3, 5, 7, 9, 11, 13};
    int target = 9;
    int result = binarySearch(arr, target);

    if (result == -1) {
      System.out.println("Element not found.");
    } else {
      System.out.println("Element found at index " + result);
    }
  }

  // Binary Search function
  public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }
}`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>int left = 0, right = arr.length - 1</code> – Sets up the search bounds.</li>
                <li><code>int mid = left + (right - left) / 2</code> – Finds the middle index.</li>
                <li><code>if (arr[mid] == target)</code> – Checks if the middle element is the target.</li>
                <li><code>return mid</code> – Returns the index of the target if found.</li>
                <li><code>right = mid - 1</code> and <code>left = mid + 1</code> – Adjust the bounds based on comparison with the target.</li>
              </ul>
            </div>
          </section>

          {/* Binary Search in Python */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">4. Binary Search in Python</h2>
            <p>Binary Search in Python works similarly to Java, but Python’s slicing and simple syntax make the code more concise.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Binary Search function in Python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

arr = [1, 3, 5, 7, 9, 11, 13]
target = 9
result = binary_search(arr, target)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found.")`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>left, right = 0, len(arr) - 1</code> – Sets the initial bounds for the search.</li>
                <li><code>mid = left + (right - left) // 2</code> – Finds the middle index.</li>
                <li><code>if arr[mid] == target</code> – Compares the middle element with the target.</li>
                <li><code>return mid</code> – Returns the index if the target is found.</li>
                <li><code>left = mid + 1</code> and <code>right = mid - 1</code> – Adjusts the search bounds based on the comparison.</li>
              </ul>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-700">Summary of Key Concepts</h3>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Linear Search:</strong> Simple but inefficient, checks each element until the target is found.</li>
              <li><strong>Binary Search:</strong> Efficient on sorted arrays, divides the search space in half each time.</li>
              <li><strong>Java:</strong> Uses `for` loop for linear search and `while` loop for binary search.</li>
              <li><strong>Python:</strong> Similar logic with Python’s list and slicing capabilities.</li>
              <li>Binary Search is O(log n), making it much faster than Linear Search (O(n)) for large datasets.</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
