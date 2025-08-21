import React, { useState } from "react";

export default function RecursionBacktracking() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Recursion + Backtracking Basics
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn the fundamentals of recursion and backtracking with problems like subset generation and permutations.
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
          {/* Recursion and Backtracking Basics */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">Recursion + Backtracking Basics</h2>

            <p>
              Recursion is a method of solving problems where the solution depends on solving smaller instances of the same problem. 
              Backtracking is a technique used to find solutions by exploring all possible options and undoing decisions that don't lead to a valid solution.
            </p>

            <h3 className="text-xl font-semibold text-green-600">1. Subset Generation</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The **subset generation** problem asks to find all subsets of a given set. A subset is any combination of elements from the set, 
                including the empty set and the set itself. This problem is solved using **recursion** to explore all combinations.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Subset Generation using Recursion in Java

import java.util.ArrayList;
import java.util.List;

public class RecursionBacktracking {
    public static void generateSubsets(int[] nums, int index, List<Integer> current, List<List<Integer>> result) {
        // Add the current subset to the result
        result.add(new ArrayList<>(current));
        
        // Recursively generate subsets
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);  // Include current element
            generateSubsets(nums, i + 1, current, result);  // Move to the next element
            current.remove(current.size() - 1);  // Backtrack (remove last element)
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> result = new ArrayList<>();
        generateSubsets(nums, 0, new ArrayList<>(), result);
        
        System.out.println(result);
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Subset Generation using Recursion in Python

def generate_subsets(nums, index, current, result):
    result.append(list(current))  # Add the current subset to the result
    
    for i in range(index, len(nums)):
        current.append(nums[i])  # Include current element
        generate_subsets(nums, i + 1, current, result)  # Move to the next element
        current.pop()  # Backtrack (remove last element)

nums = [1, 2, 3]
result = []
generate_subsets(nums, 0, [], result)

print(result)  # Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(2^n), where n is the number of elements in the set, because there are 2^n subsets.
                <br />
                - **Space Complexity**: O(2^n), for storing all the subsets in the result.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600">2. Permutations</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The **permutation** problem asks to generate all possible permutations of a given set of elements. 
                Each permutation is a unique arrangement of the elements. This problem is typically solved using **backtracking**.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Permutation Generation using Backtracking in Java

import java.util.ArrayList;
import java.util.List;

public class RecursionBacktracking {
    public static void generatePermutations(int[] nums, List<Integer> current, List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));  // Add complete permutation to the result
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (current.contains(nums[i])) continue;  // Skip already used elements
            current.add(nums[i]);
            generatePermutations(nums, current, result);  // Recursively generate permutations
            current.remove(current.size() - 1);  // Backtrack (remove last element)
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> result = new ArrayList<>();
        generatePermutations(nums, new ArrayList<>(), result);
        
        System.out.println(result);
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Permutation Generation using Backtracking in Python

def generate_permutations(nums, current, result):
    if len(current) == len(nums):
        result.append(list(current))  # Add complete permutation to the result
        return
    
    for i in range(len(nums)):
        if nums[i] in current:
            continue  # Skip already used elements
        current.append(nums[i])
        generate_permutations(nums, current, result)  # Recursively generate permutations
        current.pop()  # Backtrack (remove last element)

nums = [1, 2, 3]
result = []
generate_permutations(nums, [], result)

print(result)  # Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(n!), where n is the number of elements, because there are n! permutations of n elements.
                <br />
                - **Space Complexity**: O(n!), for storing all the permutations in the result.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
