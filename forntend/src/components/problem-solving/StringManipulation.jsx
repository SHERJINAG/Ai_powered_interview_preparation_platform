import React, { useState } from "react";

export default function StringManipulation() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        String Manipulation - Intermediate Techniques
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to perform Anagram Check and find Longest Common Prefix/Suffix in strings.
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
          {/* Anagram Check */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Anagram Check</h2>

            <h3 className="text-xl font-semibold text-green-600">Anagram Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                Two strings are anagrams if they contain the same characters with the same frequencies, but potentially in a different order.
                For example, "listen" and "silent" are anagrams because they both contain the same characters: 'l', 'i', 's', 't', 'e', 'n'.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Anagram Check):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static boolean isAnagram(String str1, String str2) {
    if (str1.length() != str2.length()) return false;

    char[] charArray1 = str1.toCharArray();
    char[] charArray2 = str2.toCharArray();

    Arrays.sort(charArray1);
    Arrays.sort(charArray2);

    return Arrays.equals(charArray1, charArray2);
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Anagram Check):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def is_anagram(str1, str2):
    if len(str1) != len(str2):
        return False
    return sorted(str1) == sorted(str2)`}
              </pre>
            </div>
          </section>

          {/* Longest Common Prefix */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Longest Common Prefix</h2>

            <h3 className="text-xl font-semibold text-green-600">Longest Common Prefix Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The longest common prefix (LCP) of a set of strings is the longest string that is a prefix of all the strings in the set.
                For example, the longest common prefix of ["flower", "flow", "flight"] is "fl".
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Longest Common Prefix):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Longest Common Prefix):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for string in strs[1:]:
        while not string.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix`}
              </pre>
            </div>
          </section>

          {/* Longest Common Suffix */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700">3. Longest Common Suffix</h2>

            <h3 className="text-xl font-semibold text-green-600">Longest Common Suffix Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                The longest common suffix (LCS) of a set of strings is the longest string that is a suffix of all the strings in the set.
                For example, the longest common suffix of ["walking", "running", "singing"] is "ing".
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Longest Common Suffix):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static String longestCommonSuffix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    
    String suffix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (!strs[i].endsWith(suffix)) {
            suffix = suffix.substring(1);
            if (suffix.isEmpty()) return "";
        }
    }
    return suffix;
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Longest Common Suffix):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def longest_common_suffix(strs):
    if not strs:
        return ""
    suffix = strs[0]
    for string in strs[1:]:
        while not string.endswith(suffix):
            suffix = suffix[1:]
            if not suffix:
                return ""
    return suffix`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
