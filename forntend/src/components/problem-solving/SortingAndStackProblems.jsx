import React, { useState } from "react";

export default function SortingAndStackProblems() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Sorting + Binary Search & Stack-based Problems
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn sorting algorithms, binary search, and solve stack-based problems.
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
          {/* Sorting + Binary Search */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Sorting + Binary Search</h2>

            <h3 className="text-xl font-semibold text-green-600">Sorting Algorithms:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Sorting algorithms arrange the elements of a collection in a specified order, such as ascending or descending. Here are common sorting algorithms:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Bubble Sort</strong>: Repeatedly compares adjacent elements and swaps them if they are in the wrong order. O(n^2)</li>
                <li><strong>Selection Sort</strong>: Selects the minimum element and places it at the correct position. O(n^2)</li>
                <li><strong>Insertion Sort</strong>: Builds the final sorted array one element at a time. O(n^2)</li>
                <li><strong>Merge Sort</strong>: Divides the array into two halves, recursively sorts them, and then merges them. O(n log n)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Binary Search:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Binary Search is an efficient algorithm to find an element in a sorted array. It works by repeatedly dividing the search interval in half. 
                If the value is less than the item in the middle of the interval, the search continues in the left half, otherwise, it continues in the right half.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Binary Search in Java

public class SortingAndBinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if target is at mid
            if (arr[mid] == target) {
                return mid;  // Target found
            }
            
            // If target is smaller, discard right half
            if (arr[mid] > target) {
                right = mid - 1;
            } 
            // If target is larger, discard left half
            else {
                left = mid + 1;
            }
        }
        
        return -1;  // Target not found
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 5;
        System.out.println(binarySearch(arr, target));  // Output: 2
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Binary Search in Python

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        # Check if target is at mid
        if arr[mid] == target:
            return mid  # Target found
        
        # If target is smaller, discard right half
        if arr[mid] > target:
            right = mid - 1
        # If target is larger, discard left half
        else:
            left = mid + 1
    
    return -1  # Target not found

arr = [1, 3, 5, 7, 9, 11]
target = 5
print(binary_search(arr, target))  # Output: 2`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Binary Search Time Complexity**: O(log n), because each step reduces the search range by half.
                <br />
                - **Space Complexity**: O(1), since we are only using a few extra variables.
              </p>
            </div>
          </section>

          {/* Stack-based Problems */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">2. Stack-based Problems</h2>

            <h3 className="text-xl font-semibold text-green-600">Next Greater Element</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The **Next Greater Element** problem asks us to find the next greater element for each element in an array. For an element, 
                its next greater element is the first element to its right that is larger. If no such element exists, it is marked as -1.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Next Greater Element using Stack in Java

import java.util.Stack;

public class StackProblems {
    public static void nextGreaterElement(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        int[] result = new int[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            result[i] = -1;  // Initialize result array with -1
            
            while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
                result[stack.pop()] = nums[i];  // Update next greater element for the element at the stack's top
            }
            
            stack.push(i);  // Push current index to the stack
        }
        
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {4, 5, 2, 10, 8};
        nextGreaterElement(nums);  // Output: 5 10 10 -1 -1
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Next Greater Element using Stack in Python

def next_greater_element(nums):
    stack = []
    result = [-1] * len(nums)
    
    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            result[stack.pop()] = nums[i]
        
        stack.append(i)
    
    print(result)

nums = [4, 5, 2, 10, 8]
next_greater_element(nums)  # Output: [5, 10, 10, -1, -1]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Valid Parentheses</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The **Valid Parentheses** problem asks whether the parentheses in a given string are balanced. Each opening parenthesis must be closed by the corresponding closing parenthesis.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Java Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Valid Parentheses using Stack in Java

import java.util.Stack;

public class StackProblems {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);  // Push opening brackets onto the stack
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {
                    return false;  // If brackets don't match, return false
                }
            }
        }
        
        return stack.isEmpty();  // If stack is empty, brackets are balanced
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]{}"));  // Output: true
        System.out.println(isValid("(]"));  // Output: false
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Valid Parentheses using Stack in Python

def is_valid(s):
    stack = []
    for c in s:
        if c in "({[":
            stack.append(c)
        else:
            if not stack:
                return False
            top = stack.pop()
            if c == ')' and top != '(' or c == '}' and top != '{' or c == ']' and top != '[':
                return False
    return not stack

print(is_valid("()[]{}"))  # Output: True
print(is_valid("(]"))  # Output: False`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
