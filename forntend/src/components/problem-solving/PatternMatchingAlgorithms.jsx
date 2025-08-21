import React, { useState } from "react";

export default function PatternMatchingAlgorithms() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Pattern Matching Algorithms: Naive and KMP
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn about Naive Pattern Matching and KMP (Knuth-Morris-Pratt) Pattern Matching algorithms.
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
          {/* Naive Pattern Matching */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Naive Pattern Matching</h2>

            <h3 className="text-xl font-semibold text-green-600">Naive Algorithm Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The naive algorithm checks for the occurrence of a pattern by sliding the pattern over the text one character at a time.
                For each position in the text, it checks whether the substring starting at that position matches the pattern.
                The time complexity of this algorithm is O(n * m), where n is the length of the text and m is the length of the pattern.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Naive Pattern Matching):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int naivePatternSearch(String text, String pattern) {
    int n = text.length();
    int m = pattern.length();

    for (int i = 0; i <= n - m; i++) {
        int j = 0;
        while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
            j++;
        }
        if (j == m) {
            return i;  // Pattern found at index i
        }
    }
    return -1;  // Pattern not found
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Naive Pattern Matching):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def naive_pattern_search(text, pattern):
    n = len(text)
    m = len(pattern)

    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            return i  # Pattern found at index i
    return -1  # Pattern not found`}
              </pre>
            </div>
          </section>

          {/* KMP Pattern Matching */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. KMP (Knuth-Morris-Pratt) Pattern Matching</h2>

            <h3 className="text-xl font-semibold text-green-600">KMP Algorithm Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The KMP algorithm improves upon the naive pattern matching algorithm by using information about previously matched characters.
                It precomputes an array called the LPS (Longest Prefix Suffix) array, which helps in skipping unnecessary comparisons.
                The time complexity of the KMP algorithm is O(n + m), where n is the length of the text and m is the length of the pattern.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (KMP Pattern Matching):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static int[] computeLPSArray(String pattern) {
    int m = pattern.length();
    int[] lps = new int[m];
    int length = 0;
    int i = 1;
    
    while (i < m) {
        if (pattern.charAt(i) == pattern.charAt(length)) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length != 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

public static int KMPSearch(String text, String pattern) {
    int n = text.length();
    int m = pattern.length();
    int[] lps = computeLPSArray(pattern);
    int i = 0;  // index for text
    int j = 0;  // index for pattern

    while (i < n) {
        if (pattern.charAt(j) == text.charAt(i)) {
            i++;
            j++;
        }

        if (j == m) {
            return i - j;  // Pattern found at index i - j
        } else if (i < n && pattern.charAt(j) != text.charAt(i)) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return -1;  // Pattern not found
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (KMP Pattern Matching):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def compute_lps_array(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1

    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

def KMP_search(text, pattern):
    n = len(text)
    m = len(pattern)
    lps = compute_lps_array(pattern)
    i = 0  # index for text
    j = 0  # index for pattern

    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == m:
            return i - j  # Pattern found at index i - j
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    return -1  # Pattern not found`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
