import React, { useState } from "react";

export default function DataStructures() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Data Structures: Arrays, Strings, HashMaps, HashSets
      </h1>

      <p className="text-lg text-center text-gray-700">
        Explore basic data structures like Arrays, Strings, HashMaps, and HashSets.
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
          {/* Arrays */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Arrays</h2>
            <p>
              An **Array** is a collection of elements stored in contiguous memory locations. Each element can be accessed using an index.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-green-600">Example (Java):</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Java Code Example: Arrays
public class ArraysExample {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};  // Declare and initialize an array
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);  // Access elements by index
        }
    }
}`}
              </pre>
            </div>
            <h3 className="text-xl font-semibold text-green-600">Example (Python):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Python Code Example: Arrays
arr = [1, 2, 3, 4, 5]
for num in arr:
    print(num)  # Access elements by index`}
              </pre>
            </div>
          </section>

          {/* Strings */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">2. Strings</h2>
            <p>
              A **String** is a sequence of characters. Strings are used to store and manipulate text.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-green-600">Example (Java):</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Java Code Example: Strings
public class StringsExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println(str.length());  // Output the length of the string
        System.out.println(str.charAt(0));  // Access the first character
    }
}`}
              </pre>
            </div>
            <h3 className="text-xl font-semibold text-green-600">Example (Python):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Python Code Example: Strings
str = "Hello, World!"
print(len(str))  # Output the length of the string
print(str[0])  # Access the first character`}
              </pre>
            </div>
          </section>

          {/* HashMaps */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">3. HashMaps (Dictionaries in Python)</h2>
            <p>
              A **HashMap** (or **Dictionary** in Python) is a data structure that stores key-value pairs. It allows for fast lookups by key.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-green-600">Example (Java):</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Java Code Example: HashMap
import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 3);
        map.put("banana", 5);
        System.out.println(map.get("apple"));  // Access value by key
    }
}`}
              </pre>
            </div>
            <h3 className="text-xl font-semibold text-green-600">Example (Python):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Python Code Example: Dictionary (HashMap)
my_dict = {"apple": 3, "banana": 5}
print(my_dict["apple"])  # Access value by key`}
              </pre>
            </div>
          </section>

          {/* HashSets */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">4. HashSets (Sets in Python)</h2>
            <p>
              A **HashSet** (or **Set** in Python) is a collection of unique elements. It provides fast membership testing and ensures no duplicates.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-green-600">Example (Java):</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Java Code Example: HashSet
import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("apple");
        set.add("banana");
        set.add("apple");  // Duplicates are ignored
        System.out.println(set);  // Output: [apple, banana]
    }
}`}
              </pre>
            </div>
            <h3 className="text-xl font-semibold text-green-600">Example (Python):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Python Code Example: Set (HashSet)
my_set = {"apple", "banana", "apple"}  # Duplicates are ignored
print(my_set)  # Output: {'banana', 'apple'}`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
