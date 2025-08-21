import React, { useState } from "react";

export default function ArrayStringTechniques() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Array and String Techniques in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn two powerful techniques for solving array and string problems: the Two Pointers Technique and the Sliding Window Technique.
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
          {/* Two Pointers Technique */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Two Pointers Technique</h2>
            <p>
              The Two Pointers Technique is often used for problems involving sorting, searching, or checking conditions on a pair of elements in an array or string. Typically, this approach is used for problems where we need to process elements from both ends of an array or string simultaneously.
            </p>

            <h3 className="text-xl font-semibold text-green-600">Example Problem: Check if a pair with a given sum exists in a sorted array</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static boolean hasPairWithSum(int[] arr, int sum) {
    // Initialize two pointers: 'left' at the beginning and 'right' at the end
    int left = 0, right = arr.length - 1;

    // Loop through the array while the left pointer is less than the right pointer
    while (left < right) {
        int currentSum = arr[left] + arr[right];  // Compute the sum of elements at the two pointers

        // If the sum matches the target sum, return true
        if (currentSum == sum) {
            return true;
        } 
        // If the current sum is smaller than the target, move the 'left' pointer to the right
        else if (currentSum < sum) {
            left++;
        } 
        // If the current sum is greater than the target, move the 'right' pointer to the left
        else {
            right--;
        }
    }
    // If no valid pair is found, return false
    return false;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def has_pair_with_sum(arr, target_sum):
    # Initialize two pointers: 'left' at the beginning and 'right' at the end
    left, right = 0, len(arr) - 1

    # Loop through the array while the left pointer is less than the right pointer
    while left < right:
        current_sum = arr[left] + arr[right]  # Compute the sum of elements at the two pointers

        # If the sum matches the target sum, return True
        if current_sum == target_sum:
            return True
        # If the sum is smaller than the target, move the 'left' pointer to the right
        elif current_sum < target_sum:
            left += 1
        # If the sum is greater than the target, move the 'right' pointer to the left
        else:
            right -= 1

    # If no valid pair is found, return False
    return False`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`Array: [1, 3, 5, 7, 9, 11]
Target Sum: 12
Output: true`}
            </pre>
          </section>

          {/* Sliding Window Technique */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Sliding Window Technique</h2>
            <p>
              The Sliding Window Technique is used to solve problems related to subarrays or substrings. The idea is to maintain a "window" (a subset of the array or string) that slides over the array, adjusting the window's size as needed. It is particularly useful for problems where we need to examine a contiguous segment of an array or string.
            </p>

            <h3 className="text-xl font-semibold text-green-600">Example Problem: Find the maximum sum of a subarray of size k</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int maxSumSubarray(int[] arr, int k) {
    int maxSum = 0;  // Variable to store the maximum sum
    int windowSum = 0;  // Variable to store the sum of the current window

    // Calculate the sum of the first window of size 'k'
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;  // Set the max sum to the sum of the first window

    // Slide the window one element at a time
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];  // Add the new element and remove the old one
        maxSum = Math.max(maxSum, windowSum);  // Update maxSum if a larger sum is found
    }

    // Return the maximum sum
    return maxSum;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def max_sum_subarray(arr, k):
    max_sum = 0  # Variable to store the maximum sum
    window_sum = sum(arr[:k])  # Calculate the sum of the first window of size 'k'
    max_sum = window_sum  # Set the max_sum to the sum of the first window

    # Slide the window one element at a time
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]  # Add the new element and subtract the old one
        max_sum = max(max_sum, window_sum)  # Update max_sum if a larger sum is found

    # Return the maximum sum
    return max_sum`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`Array: [2, 1, 5, 1, 3, 2]
Window Size: 3
Output: 9 (subarray [5, 1, 3])`}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
