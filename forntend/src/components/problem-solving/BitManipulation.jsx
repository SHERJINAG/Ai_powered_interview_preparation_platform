import React, { useState } from "react";

export default function BitManipulation() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Bit Manipulation
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn the basics of **Bit Manipulation**, including counting set bits,
        XOR, swapping bits, and other common bitwise operations.
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
          {/* Introduction to Bit Manipulation */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">Bit Manipulation</h2>
            <p>
              **Bit Manipulation** is a technique used to solve problems using bitwise operators. These operators allow you to perform operations on binary numbers directly, which is efficient and commonly used in low-level programming, cryptography, and optimization problems.
            </p>

            {/* Counting Set Bits */}
            <h3 className="text-xl font-semibold text-green-600">1. Counting Set Bits</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                A **set bit** is a bit that is 1. Counting set bits in a number is the process of determining how many 1's are present in its binary representation.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Counting Set Bits):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Count Set Bits in Java

public class CountSetBits {
    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            n = n & (n - 1);  // Remove the rightmost set bit
            count++;
        }
        return count;
    }
    
    public static void main(String[] args) {
        int n = 29;  // 29 in binary is 11101, so it has 4 set bits
        System.out.println("Number of set bits: " + countSetBits(n));  // Output: 4
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Counting Set Bits):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Count Set Bits in Python

def count_set_bits(n):
    count = 0
    while n > 0:
        n = n & (n - 1)  # Remove the rightmost set bit
        count += 1
    return count

n = 29  # 29 in binary is 11101, so it has 4 set bits
print("Number of set bits:", count_set_bits(n))  # Output: 4`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(log n), as the number of iterations is proportional to the number of bits in n.
                <br />
                - **Space Complexity**: O(1), as only a constant amount of space is used.
              </p>
            </div>

            {/* XOR Operation */}
            <h3 className="text-xl font-semibold text-green-600">2. XOR Operation</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                **XOR (exclusive OR)** is a bitwise operator that outputs 1 if the input bits are different and 0 if they are the same. It has various applications, such as toggling bits and checking for equality.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (XOR):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// XOR Operation in Java

public class XORExample {
    public static void main(String[] args) {
        int a = 5;  // 0101 in binary
        int b = 3;  // 0011 in binary
        int result = a ^ b;  // XOR operation
        System.out.println("5 XOR 3 = " + result);  // Output: 6 (0110 in binary)
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (XOR):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# XOR Operation in Python

a = 5  # 0101 in binary
b = 3  # 0011 in binary
result = a ^ b  # XOR operation
print("5 XOR 3 =", result)  # Output: 6 (0110 in binary)`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(1), as XOR is a constant-time operation.
                <br />
                - **Space Complexity**: O(1), as only a constant amount of space is used.
              </p>
            </div>

            {/* Swapping Bits */}
            <h3 className="text-xl font-semibold text-green-600">3. Swapping Bits</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Swapping bits means exchanging two bits in a binary number. We can perform this operation using XOR to avoid using extra space.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Swap Bits):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Swap Two Bits in Java

public class SwapBits {
    public static int swapBits(int n, int i, int j) {
        // Check if the bits are different
        if (((n >> i) & 1) != ((n >> j) & 1)) {
            // Swap bits by flipping them
            n = n ^ (1 << i);
            n = n ^ (1 << j);
        }
        return n;
    }
    
    public static void main(String[] args) {
        int n = 29;  // 29 in binary: 11101
        int i = 1, j = 3;
        System.out.println("Number after swapping bits: " + swapBits(n, i, j));  // Output: 21
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Swap Bits):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Swap Two Bits in Python

def swap_bits(n, i, j):
    # Check if the bits are different
    if ((n >> i) & 1) != ((n >> j) & 1):
        # Swap bits by flipping them
        n = n ^ (1 << i)
        n = n ^ (1 << j)
    return n

n = 29  # 29 in binary: 11101
i, j = 1, 3
print("Number after swapping bits:", swap_bits(n, i, j))  # Output: 21`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(1), as swapping bits involves a constant number of operations.
                <br />
                - **Space Complexity**: O(1), no extra space is used.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
