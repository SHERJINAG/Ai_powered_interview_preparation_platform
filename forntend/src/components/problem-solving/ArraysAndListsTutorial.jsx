import React, { useState } from "react";

export default function ArraysAndListsTutorial() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Arrays and Lists in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn about array and list operations such as traversal, insertion, deletion, maximum/minimum element, sum, average, and searching elements in Java and Python.
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
          {/* Java Example */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Java Array and List Operations</h2>

            <p>Here are the basic operations that can be performed on an array and a list in Java.</p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.ArrayList;

public class ArraysAndLists {
    public static void main(String[] args) {
        // Array Example
        int[] arr = {1, 2, 3, 4, 5};
        
        // Traversal
        System.out.println("Array Traversal:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        // Insertion (inserting 6 at the end)
        arr[4] = 6;
        System.out.println("Array after insertion: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        // Deletion (removing 6)
        arr[4] = 0;
        System.out.println("Array after deletion: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        // Maximum/Minimum Element
        int max = arr[0];
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
        }
        System.out.println("Max Element: " + max + ", Min Element: " + min);

        // Sum and Average
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("Sum: " + sum + ", Average: " + (sum / arr.length));

        // Searching
        int searchElement = 3;
        boolean found = false;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == searchElement) {
                found = true;
                break;
            }
        }
        System.out.println("Element " + searchElement + " found: " + found);
        
        // List Example
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1); list.add(2); list.add(3); list.add(4); list.add(5);

        // Traversal
        System.out.println("List Traversal:");
        for (int num : list) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`Array Traversal:
1 2 3 4 5 
Array after insertion: 
1 2 3 4 6 
Array after deletion: 
1 2 3 4 0 
Max Element: 6, Min Element: 0
Sum: 16, Average: 3
Element 3 found: true
List Traversal:
1 2 3 4 5 `}
            </pre>
          </section>

          {/* Python Example */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Python List Operations</h2>

            <p>Here are the basic operations that can be performed on a list in Python. Lists are versatile and dynamic data structures in Python.</p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Python Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Python List Example
arr = [1, 2, 3, 4, 5]

# Traversal
print("List Traversal:")
for element in arr:
    print(element, end=" ")
print()

# Insertion (inserting 6 at the end)
arr[4] = 6
print("List after insertion: ")
print(arr)

# Deletion (removing 6)
arr[4] = 0
print("List after deletion: ")
print(arr)

# Maximum/Minimum Element
max_element = max(arr)
min_element = min(arr)
print(f"Max Element: {max_element}, Min Element: {min_element}")

# Sum and Average
sum_elements = sum(arr)
average = sum_elements / len(arr)
print(f"Sum: {sum_elements}, Average: {average}")

# Searching
search_element = 3
found = search_element in arr
print(f"Element {search_element} found: {found}")

# Python List Example
list_example = [1, 2, 3, 4, 5]
print("List Traversal:")
for num in list_example:
    print(num, end=" ")
print()`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`List Traversal:
1 2 3 4 5 
List after insertion: 
[1, 2, 3, 4, 6]
List after deletion: 
[1, 2, 3, 4, 0]
Max Element: 6, Min Element: 0
Sum: 16, Average: 3.2
Element 3 found: True
List Traversal:
1 2 3 4 5 `}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
