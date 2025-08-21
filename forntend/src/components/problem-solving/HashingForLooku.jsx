import React, { useState } from "react";

export default function HashingForLookup() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Hashing/Maps for Lookup
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to use Hash Maps/Hashing for fast lookup in problems.
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
          {/* Hashing/Maps for Lookup */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Hashing/Maps for Lookup</h2>

            <h3 className="text-xl font-semibold text-green-600">What is Hashing?</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Hashing is a technique used to uniquely identify a value based on its content. Hash maps (or dictionaries in Python) are data structures
                that store key-value pairs, where each key maps to a specific value. The major advantage of using hash maps is that they allow fast lookups,
                insertions, and deletions, all in average constant time O(1).
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Example Problem:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Given an array of integers, return whether any two numbers add up to a specific target sum.
                You need to solve this using a hash map for fast lookups.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.HashMap;

public class HashingForLookup {
    public static boolean hasPairWithSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int num : nums) {
            // Check if the complement (target - num) exists in the map
            if (map.containsKey(target - num)) {
                return true; // Pair found
            }
            // Add the current number to the map
            map.put(num, 1);
        }
        
        return false; // No pair found
    }
    
    public static void main(String[] args) {
        int[] nums = {10, 15, 3, 7};
        int target = 17;
        System.out.println(hasPairWithSum(nums, target));  // Output: true
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def has_pair_with_sum(nums, target):
    seen = {}
    
    for num in nums:
        # Check if the complement (target - num) exists in the dictionary
        if target - num in seen:
            return True  # Pair found
        # Add the current number to the dictionary
        seen[num] = 1
    
    return False  # No pair found

nums = [10, 15, 3, 7]
target = 17
print(has_pair_with_sum(nums, target))  # Output: True`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Explanation of the Algorithm:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                In the above examples, we use a HashMap (or dictionary in Python) to store the numbers we have seen so far. As we iterate through the array,
                for each number, we check if the complement (target - num) already exists in the map. If it does, that means we've found a pair that adds up to
                the target sum, so we return true. If we don't find any pair, we return false.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(n), where n is the length of the array. We traverse the array once, and each operation (insertion and lookup in the map)
                takes constant time on average.
                <br />
                - **Space Complexity**: O(n), where n is the length of the array. In the worst case, we need to store each element in the map.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Use Cases:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <ul className="list-disc pl-6">
                <li>Finding pairs that sum up to a target value</li>
                <li>Checking if two arrays have the same elements (subset check)</li>
                <li>Counting frequencies of elements in a dataset</li>
                <li>Detecting duplicate elements in a collection</li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
