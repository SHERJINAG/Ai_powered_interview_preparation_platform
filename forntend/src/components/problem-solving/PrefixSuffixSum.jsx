import React, { useState } from "react";

export default function PrefixSuffixSum() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Prefix Sum & Suffix Sum in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to use Prefix and Suffix sums to efficiently solve subarray problems.
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
          {/* Prefix Sum and Suffix Sum */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Prefix Sum & Suffix Sum</h2>

            <h3 className="text-xl font-semibold text-green-600">Prefix Sum Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int[] computePrefixSum(int[] arr) {
    int n = arr.length;
    int[] prefixSum = new int[n];
    prefixSum[0] = arr[0];

    // Fill the prefix sum array
    for (int i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    return prefixSum;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def compute_prefix_sum(arr):
    prefix_sum = [0] * len(arr)
    prefix_sum[0] = arr[0]

    # Fill the prefix sum array
    for i in range(1, len(arr)):
        prefix_sum[i] = prefix_sum[i - 1] + arr[i]

    return prefix_sum`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Suffix Sum Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int[] computeSuffixSum(int[] arr) {
    int n = arr.length;
    int[] suffixSum = new int[n];
    suffixSum[n - 1] = arr[n - 1];

    // Fill the suffix sum array
    for (int i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + arr[i];
    }

    return suffixSum;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def compute_suffix_sum(arr):
    suffix_sum = [0] * len(arr)
    suffix_sum[len(arr) - 1] = arr[len(arr) - 1]

    # Fill the suffix sum array
    for i in range(len(arr) - 2, -1, -1):
        suffix_sum[i] = suffix_sum[i + 1] + arr[i]

    return suffix_sum`}
              </pre>
            </div>
          </section>

          {/* Subarray Problems */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Subarray Problems (Max Sum, Fixed Length)</h2>

            <h3 className="text-xl font-semibold text-green-600">Maximum Sum Subarray Problem:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int maxSumSubarray(int[] arr) {
    int maxSum = Integer.MIN_VALUE;
    int currentSum = 0;

    for (int num : arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0; // reset the sum if it becomes negative
        }
    }
    return maxSum;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def max_sum_subarray(arr):
    max_sum = float('-inf')
    current_sum = 0

    for num in arr:
        current_sum += num
        max_sum = max(max_sum, current_sum)
        if current_sum < 0:
            current_sum = 0  # reset the sum if it becomes negative

    return max_sum`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Fixed Length Subarray Sum Problem:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int maxSumSubarrayOfLengthK(int[] arr, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i]; // Calculate sum of the first window
    }

    int maxSum = windowSum;

    // Slide the window and update the sum
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Subtract the leftmost element and add the new one
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def max_sum_subarray_of_length_k(arr, k):
    window_sum = sum(arr[:k])  # Calculate sum of the first window
    max_sum = window_sum

    # Slide the window and update the sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]  # Subtract the leftmost element and add the new one
        max_sum = max(max_sum, window_sum)

    return max_sum`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
