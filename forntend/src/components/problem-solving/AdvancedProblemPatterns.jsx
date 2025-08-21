import React from "react";

export default function AdvancedProblemPatterns() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Advanced Problem Patterns: Monotonic Stack/Queue
      </h1>

      {/* Monotonic Stack/Queue Explanation and Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Java: Monotonic Stack - Next Greater Element
        </h2>
        <p>
          The Monotonic Stack is a stack that is either strictly increasing or
          decreasing. It helps in efficiently finding the "next greater" or
          "next smaller" element for each element in an array.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.Stack;

public class MonotonicStack {
    // Function to find the next greater element for each element in the array
    public int[] nextGreaterElement(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();
        
        // Initialize the result array with -1 (default if no greater element is found)
        for (int i = 0; i < n; i++) {
            result[i] = -1;
        }
        
        // Traverse the array from right to left
        for (int i = n - 1; i >= 0; i--) {
            // Pop elements from the stack while the current element is greater than the stack's top
            while (!stack.isEmpty() && nums[i] >= nums[stack.peek()]) {
                stack.pop();
            }
            
            // If the stack is not empty, the next greater element is on top of the stack
            if (!stack.isEmpty()) {
                result[i] = nums[stack.peek()];
            }
            
            // Push the current element's index onto the stack
            stack.push(i);
        }
        
        return result;
    }

    public static void main(String[] args) {
        MonotonicStack solution = new MonotonicStack();
        int[] nums = {4, 5, 2, 10, 8};
        int[] result = solution.nextGreaterElement(nums);
        
        System.out.print("Next Greater Element: ");
        for (int val : result) {
            System.out.print(val + " ");
        }
    }
}`}
        </pre>
      </section>

      {/* Python: Monotonic Stack - Next Greater Element */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Python: Monotonic Stack - Next Greater Element
        </h2>
        <p>
          This Python implementation uses a monotonic stack to solve the Next Greater Element problem in O(n) time.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def nextGreaterElement(nums):
    n = len(nums)
    result = [-1] * n  # Initialize the result array with -1
    stack = []
    
    for i in range(n - 1, -1, -1):
        while stack and nums[i] >= nums[stack[-1]]:
            stack.pop()
        
        if stack:
            result[i] = nums[stack[-1]]
        
        stack.append(i)
    
    return result

nums = [4, 5, 2, 10, 8]
print("Next Greater Element:", nextGreaterElement(nums))
`}
        </pre>
      </section>

      {/* Monotonic Queue Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Monotonic Queue - Sliding Window Maximum
        </h2>
        <p>
          A Monotonic Queue can be used for sliding window problems where we need to maintain a queue of elements in a particular order. It helps solve problems like finding the maximum or minimum value in a sliding window.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import deque

def slidingWindowMaximum(nums, k):
    n = len(nums)
    result = []
    dq = deque()

    for i in range(n):
        # Remove elements from the front if they are out of the window
        if dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove elements from the back while they are smaller than the current element
        while dq and nums[dq[-1]] <= nums[i]:
            dq.pop()
        
        dq.append(i)
        
        # Start adding to the result array once we have a full window
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
print("Sliding Window Maximum:", slidingWindowMaximum(nums, k))
`}
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Explanation
        </h2>
        <p>
          - **Monotonic Stack**: A stack is used where elements are added and removed in such a way that the stack is always in a monotonically decreasing or increasing order. This is used to solve problems like "next greater element," "next smaller element," and range queries.
        </p>
        <p>
          - **Monotonic Queue**: A queue is maintained in a monotonically decreasing or increasing order. It is typically used for sliding window problems like "maximum in a sliding window," "minimum in a sliding window," etc.
        </p>
      </section>
    </div>
  );
}
