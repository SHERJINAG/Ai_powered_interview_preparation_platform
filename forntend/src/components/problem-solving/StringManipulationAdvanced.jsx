import React, { useState } from "react";

export default function StringManipulationAdvanced() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Advanced String Manipulation
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn about Longest Palindrome Substring, Removing Duplicates, and String Compression techniques.
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
          {/* Longest Palindrome Substring */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Longest Palindrome Substring</h2>

            <h3 className="text-xl font-semibold text-green-600">Palindrome Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                A palindrome is a word, phrase, or sequence that reads the same backward as forward. For example, "racecar" is a palindrome.
                The problem is to find the longest palindromic substring in a given string.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Longest Palindrome Substring):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";

    int start = 0, maxLength = 1;

    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);  // Odd length palindrome
        int len2 = expandAroundCenter(s, i, i + 1);  // Even length palindrome
        int len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            start = i - (len - 1) / 2;
        }
    }

    return s.substring(start, start + maxLength);
}

private static int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Longest Palindrome Substring):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def longest_palindrome(s):
    if not s:
        return ""

    def expand_around_center(s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    start, max_length = 0, 1
    for i in range(len(s)):
        len1 = expand_around_center(s, i, i)
        len2 = expand_around_center(s, i, i + 1)
        length = max(len1, len2)
        if length > max_length:
            max_length = length
            start = i - (length - 1) // 2
    return s[start:start + max_length}`}
              </pre>
            </div>
          </section>

          {/* Removing Duplicates or Characters */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Removing Duplicates or Characters</h2>

            <h3 className="text-xl font-semibold text-green-600">Removing Duplicates Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Removing duplicates or specific characters from a string is a common problem. You can use a hash set or other techniques to efficiently
                remove duplicates or unwanted characters from a string.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Remove Duplicates):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static String removeDuplicates(String s) {
    StringBuilder result = new StringBuilder();
    Set<Character> seen = new HashSet<>();

    for (char c : s.toCharArray()) {
        if (!seen.contains(c)) {
            result.append(c);
            seen.add(c);
        }
    }

    return result.toString();
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Remove Duplicates):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def remove_duplicates(s):
    seen = set()
    result = []

    for char in s:
        if char not in seen:
            result.append(char)
            seen.add(char)
    
    return ''.join(result)`}
              </pre>
            </div>
          </section>

          {/* String Compression */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700">3. String Compression</h2>

            <h3 className="text-xl font-semibold text-green-600">String Compression Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                String compression is a process of reducing the size of a string by representing repeated characters in a shortened form.
                For example, "aaabb" can be compressed as "a3b2".
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (String Compression):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static String compressString(String s) {
    StringBuilder compressed = new StringBuilder();
    int count = 1;

    for (int i = 1; i < s.length(); i++) {
        if (s.charAt(i) == s.charAt(i - 1)) {
            count++;
        } else {
            compressed.append(s.charAt(i - 1)).append(count);
            count = 1;
        }
    }
    compressed.append(s.charAt(s.length() - 1)).append(count);

    return compressed.length() < s.length() ? compressed.toString() : s;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (String Compression):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def compress_string(s):
    compressed = []
    count = 1

    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            compressed.append(s[i - 1] + str(count))
            count = 1

    compressed.append(s[-1] + str(count))

    compressed_str = ''.join(compressed)
    return compressed_str if len(compressed_str) < len(s) else s`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
