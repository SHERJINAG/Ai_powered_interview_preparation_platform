import React, { useState } from "react";

export default function MathematicalThinking() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Mathematical Thinking - Number Theory
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn the basics of **Number Theory** including **Modular Arithmetic**, **Power**, and **Modulo Inverse** with examples and applications.
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
          {/* Introduction to Number Theory */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">Mathematical Thinking: Number Theory</h2>
            <p>
              Number Theory is a branch of mathematics dealing with the properties and relationships of numbers, particularly integers. Some of the key concepts we will discuss are **Modular Arithmetic**, **Power**, and **Modulo Inverse**.
            </p>

            <h3 className="text-xl font-semibold text-green-600">1. Modular Arithmetic</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                **Modular Arithmetic** is a system of arithmetic for integers, where numbers "wrap around" after reaching a certain value (called the modulus). It is widely used in computer science for tasks like hashing and cryptography.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Modular Arithmetic):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Modular Arithmetic in Java

public class ModularArithmetic {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        
        // Find a % b (remainder of division)
        int result = a % b; 
        
        System.out.println("17 mod 5 = " + result);  // Output: 17 mod 5 = 2
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Modular Arithmetic):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Modular Arithmetic in Python

a = 17
b = 5

# Find a % b (remainder of division)
result = a % b

print("17 mod 5 =", result)  # Output: 17 mod 5 = 2`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(1), as modular arithmetic involves a simple division and remainder calculation.
                <br />
                - **Space Complexity**: O(1), only a small constant space is used.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600">2. Power</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                **Power** is the operation of multiplying a number by itself a certain number of times. For example, <i>x<sup>n</sup></i> means multiplying x by itself n times. We can use **modular exponentiation** to efficiently compute large powers under a modulus.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Power Calculation):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Power Calculation in Java (x^n mod m)

public class PowerCalculation {
    // Function to calculate (x^n) % m using modular exponentiation
    public static int powerMod(int x, int n, int m) {
        int result = 1;
        x = x % m; // Take x modulo m
        
        while (n > 0) {
            if (n % 2 == 1) {
                result = (result * x) % m;  // If n is odd
            }
            x = (x * x) % m;  // Square the base
            n = n / 2;  // Reduce exponent by half
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int x = 2, n = 10, m = 1000;
        System.out.println("2^10 mod 1000 = " + powerMod(x, n, m));  // Output: 2^10 mod 1000 = 24
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Power Calculation):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Power Calculation in Python (x^n mod m)

def power_mod(x, n, m):
    result = 1
    x = x % m  # Take x modulo m
    
    while n > 0:
        if n % 2 == 1:  # If n is odd
            result = (result * x) % m
        x = (x * x) % m  # Square the base
        n = n // 2  # Reduce exponent by half
        
    return result

x, n, m = 2, 10, 1000
print("2^10 mod 1000 =", power_mod(x, n, m))  # Output: 2^10 mod 1000 = 24`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(log n), as the exponent is halved in each iteration (binary exponentiation).
                <br />
                - **Space Complexity**: O(1), as only a constant amount of space is used.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600">3. Modulo Inverse</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                **Modulo Inverse** is the number that, when multiplied with a given number, results in 1 under a given modulus. The modulo inverse is useful in solving equations in modular arithmetic.
                <br />
                The formula to find the modulo inverse of a number a under modulo m is:
                <br />
                <i>a * b ≡ 1 (mod m)</i>
                <br />
                This is solved using **Extended Euclidean Algorithm**.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Modulo Inverse):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Modulo Inverse using Extended Euclidean Algorithm in Java

public class ModuloInverse {
    // Function to find the modulo inverse of 'a' under 'm'
    public static int extendedGCD(int a, int m) {
        int m0 = m;
        int y = 0, x = 1;
        
        if (m == 1) return 0;
        
        while (a > 1) {
            int q = a / m;
            int t = m;
            
            m = a % m;
            a = t;
            
            t = y;
            
            y = x - q * y;
            x = t;
        }
        
        if (x < 0) x += m0;
        
        return x;
    }
    
    public static void main(String[] args) {
        int a = 3, m = 11;
        System.out.println("Modulo Inverse of 3 under 11 is: " + extendedGCD(a, m));  // Output: 4
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Modulo Inverse):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Modulo Inverse using Extended Euclidean Algorithm in Python

def extended_gcd(a, m):
    m0, x, y = m, 0, 1
    
    if m == 1:
        return 0
    
    while a > 1:
        q = a // m
        t = m
        m = a % m
        a = t
        t = y
        y = x - q * y
        x = t
    
    if x < 0:
        x += m0
    
    return x

a, m = 3, 11
print("Modulo Inverse of 3 under 11 is:", extended_gcd(a, m))  # Output: 4`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-yellow-600">Time and Space Complexity:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                - **Time Complexity**: O(log m), as the Euclidean algorithm takes logarithmic time.
                <br />
                - **Space Complexity**: O(1), since only a constant amount of space is used.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
