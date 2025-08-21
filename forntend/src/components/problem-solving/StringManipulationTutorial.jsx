import React, { useState } from "react";

export default function StringManipulationTutorial() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        String Manipulation (Basic) in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn basic string operations such as concatenation, substring extraction, reversing a string, and checking for palindromes.
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
          {/* Reading and Printing Strings */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">1. Reading and Printing Strings</h2>
            <p>
              In both Java and Python, strings can be read from user input and printed to the console.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.Scanner;

public class StringExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();  // Reading input string
        System.out.println("You entered: " + input);  // Printing string
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`input_string = input("Enter a string: ")  # Reading input string
print("You entered:", input_string)  # Printing string`}
              </pre>
            </div>
          </section>

          {/* String Concatenation */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. String Concatenation</h2>
            <p>
              String concatenation is the process of combining two or more strings. In Java, we use the "+" operator, and in Python, we can do the same.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class ConcatenationExample {
    public static void main(String[] args) {
        String str1 = "Hello, ";
        String str2 = "World!";
        String result = str1 + str2;  // Concatenation
        System.out.println(result);
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`str1 = "Hello, "
str2 = "World!"
result = str1 + str2  # Concatenation
print(result)`}
              </pre>
            </div>
          </section>

          {/* Substring Extraction */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">3. Substring Extraction</h2>
            <p>
              A substring is a part of a string. Both Java and Python provide methods to extract substrings from a given string.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class SubstringExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        String substr = str.substring(7, 12);  // Extracting substring from index 7 to 11
        System.out.println(substr);  // Outputs: World
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`str = "Hello, World!"
substr = str[7:12]  # Extracting substring from index 7 to 11
print(substr)  # Outputs: World`}
              </pre>
            </div>
          </section>

          {/* String Length */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">4. String Length</h2>
            <p>
              The length of a string is the number of characters it contains. Both Java and Python provide a method to get the length of a string.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class LengthExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        int length = str.length();  // Get the length of the string
        System.out.println("Length: " + length);
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`str = "Hello, World!"
length = len(str)  # Get the length of the string
print("Length:", length)`}
              </pre>
            </div>
          </section>

          {/* Reversing a String */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">5. Reversing a String</h2>
            <p>
              Reversing a string means changing the order of characters from last to first. This can be done using a loop or built-in methods in both Java and Python.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class ReverseExample {
    public static void main(String[] args) {
        String str = "Hello";
        String reversed = new StringBuilder(str).reverse().toString();  // Reverse the string
        System.out.println(reversed);  // Outputs: olleH
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`str = "Hello"
reversed_str = str[::-1]  # Reverse the string
print(reversed_str)  # Outputs: olleH`}
              </pre>
            </div>
          </section>

          {/* Character Frequency */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">6. Character Frequency</h2>
            <p>
              Counting the frequency of characters in a string can be done using arrays (in Java) or dictionaries/maps (in Python).
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.HashMap;

public class CharFrequencyExample {
    public static void main(String[] args) {
        String str = "hello";
        HashMap<Character, Integer> freqMap = new HashMap<>();
        
        for (char c : str.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);  // Count frequency
        }

        System.out.println(freqMap);
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`from collections import Counter

str = "hello"
freq_map = Counter(str)  # Count frequency of characters
print(freq_map)  # Outputs: Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})`}
              </pre>
            </div>
          </section>

          {/* Palindrome Check */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">7. Palindrome Check</h2>
            <p>
              A palindrome is a string that reads the same forwards and backwards. You can check for this by comparing a string with its reverse.
            </p>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold text-blue-600">Java:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public class PalindromeExample {
    public static void main(String[] args) {
        String str = "madam";
        String reversed = new StringBuilder(str).reverse().toString();
        
        if (str.equals(reversed)) {
            System.out.println(str + " is a palindrome.");
        } else {
            System.out.println(str + " is not a palindrome.");
        }
    }
}`}
              </pre>

              <h3 className="text-xl font-semibold text-blue-600">Python:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`str = "madam"
if str == str[::-1]:  # Check if string equals its reverse
    print(f"{str} is a palindrome.")
else:
    print(f"{str} is not a palindrome.")`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
