import React, { useState } from "react";

export default function ProblemSolvingPatterns() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Problem Solving Patterns: Frequency Counting
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to use frequency counting for solving various problems.
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
          {/* Frequency Counting */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Frequency Counting</h2>

            <h3 className="text-xl font-semibold text-green-600">What is Frequency Counting?</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Frequency counting is a common problem-solving technique in programming, where we count how many times each element appears
                in a collection (such as an array or string). It helps solve problems such as finding duplicates, finding the most common elements,
                and checking if two collections have the same elements.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Example Problem:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Given an array of integers, return whether any value appears at least twice. You need to solve it using frequency counting.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.HashMap;

public class FrequencyCounting {
    public static boolean hasDuplicate(int[] nums) {
        HashMap<Integer, Integer> freqMap = new HashMap<>();
        
        for (int num : nums) {
            // If the number already exists in the map, we found a duplicate
            if (freqMap.containsKey(num)) {
                return true;
            }
            // Add the number to the map with frequency 1
            freqMap.put(num, 1);
        }
        return false;  // No duplicates found
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 1};
        System.out.println(hasDuplicate(nums));  // Output: true
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def has_duplicate(nums):
    freq_map = {}
    
    for num in nums:
        # If the number already exists in the map, we found a duplicate
        if num in freq_map:
            return True
        # Add the number to the map with frequency 1
        freq_map[num] = 1
        
    return False  # No duplicates found

nums = [1, 2, 3, 4, 5, 6, 1]
print(has_duplicate(nums))  # Output: True`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Explanation of the Algorithm:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                In the above examples, we use a HashMap (or dictionary in Python) to store the frequency of each number. We iterate through the array,
                and for each number, we check if it already exists in the map. If it does, we immediately return true (indicating a duplicate).
                If it doesn't exist, we add the number to the map with a frequency of 1. If we finish iterating through the entire array without finding
                duplicates, we return false.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(n), where n is the length of the array. We iterate through the array once, and each map operation (insertion and lookup)
                takes constant time on average.
                <br />
                - **Space Complexity**: O(n), where n is the length of the array. We store each element in the map, so in the worst case, we use extra space proportional to the size of the input.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
