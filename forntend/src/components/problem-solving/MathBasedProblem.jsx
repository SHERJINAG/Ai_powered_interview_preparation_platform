import React, { useState } from "react";

export default function MathBasedProblems() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Math-Based Problems in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to solve common math-based problems like prime number check, factorial, Fibonacci, GCD, LCM, Armstrong, Perfect, and Palindrome numbers in Java and Python.
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
          {/* Java Example */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Java Math-Based Problems</h2>

            <p>Here are some common math-based problems with Java code examples:</p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`// Prime number check
public static boolean isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// Factorial
public static int factorial(int num) {
    int result = 1;
    for (int i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Fibonacci
public static void fibonacci(int n) {
    int a = 0, b = 1;
    System.out.print(a + " " + b + " ");
    for (int i = 2; i < n; i++) {
        int next = a + b;
        System.out.print(next + " ");
        a = b;
        b = next;
    }
    System.out.println();
}

// GCD
public static int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// LCM
public static int lcm(int a, int b) {
    return a * b / gcd(a, b);
}

// Armstrong number
public static boolean isArmstrong(int num) {
    int original = num, sum = 0, digitCount = Integer.toString(num).length();
    while (num != 0) {
        int digit = num % 10;
        sum += Math.pow(digit, digitCount);
        num /= 10;
    }
    return sum == original;
}

// Perfect number
public static boolean isPerfect(int num) {
    int sum = 0;
    for (int i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum == num;
}

// Palindrome number
public static boolean isPalindrome(int num) {
    int original = num, reversed = 0;
    while (num != 0) {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    return original == reversed;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`Prime number check (11 is prime): true
Factorial of 5: 120
Fibonacci Series (n=5): 0 1 1 2 3
GCD of 56 and 98: 14
LCM of 56 and 98: 392
Armstrong number check (153): true
Perfect number check (28): true
Palindrome number check (121): true`}
            </pre>
          </section>

          {/* Python Example */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Python Math-Based Problems</h2>

            <p>Here are some common math-based problems with Python code examples:</p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Python Code Example</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Prime number check
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Factorial
def factorial(num):
    result = 1
    for i in range(1, num + 1):
        result *= i
    return result

# Fibonacci
def fibonacci(n):
    a, b = 0, 1
    print(a, b, end=" ")
    for _ in range(2, n):
        a, b = b, a + b
        print(b, end=" ")
    print()

# GCD
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

# LCM
def lcm(a, b):
    return a * b // gcd(a, b)

# Armstrong number
def is_armstrong(num):
    original = num
    digit_count = len(str(num))
    sum_digits = sum(int(digit) ** digit_count for digit in str(num))
    return sum_digits == original

# Perfect number
def is_perfect(num):
    sum_divisors = sum(i for i in range(1, num // 2 + 1) if num % i == 0)
    return sum_divisors == num

# Palindrome number
def is_palindrome(num):
    return str(num) == str(num)[::-1]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Output:</h3>
            <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`Prime number check (11 is prime): True
Factorial of 5: 120
Fibonacci Series (n=5): 0 1 1 2 3
GCD of 56 and 98: 14
LCM of 56 and 98: 392
Armstrong number check (153): True
Perfect number check (28): True
Palindrome number check (121): True`}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
