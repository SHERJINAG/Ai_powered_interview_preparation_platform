import React from "react";

export default function () {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        2D Dynamic Programming: Knapsack, LCS, LIS, Edit Distance
      </h1>

      {/* Java - Knapsack Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Knapsack Problem</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class Knapsack {
    public int knapSack(int W, int[] wt, int[] val, int n) {
        int[][] dp = new int[n + 1][W + 1];

        // Build the dp array
        for (int i = 0; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                if (i == 0 || w == 0)
                    dp[i][w] = 0;
                else if (wt[i - 1] <= w)
                    dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
                else
                    dp[i][w] = dp[i - 1][w];
            }
        }
        return dp[n][W];
    }

    public static void main(String[] args) {
        Knapsack knapsack = new Knapsack();
        int[] val = {60, 100, 120};
        int[] wt = {10, 20, 30};
        int W = 50; // Capacity
        int n = val.length;
        System.out.println("Maximum value in Knapsack = " + knapsack.knapSack(W, wt, val, n));
    }
}`}
        </pre>
      </section>

      {/* Java - Longest Common Subsequence (LCS) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Longest Common Subsequence (LCS)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class LCS {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        LCS lcs = new LCS();
        String text1 = "abcde", text2 = "ace";
        System.out.println("Length of LCS: " + lcs.longestCommonSubsequence(text1, text2));
    }
}`}
        </pre>
      </section>

      {/* Java - Longest Increasing Subsequence (LIS) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Longest Increasing Subsequence (LIS)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class LIS {
    public int lengthOfLIS(int[] nums) {
        if (nums.length == 0) return 0;
        int n = nums.length;
        int[] dp = new int[n];
        int maxLength = 1;

        // Initialize dp array to 1 (every element is an increasing subsequence of length 1)
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
        }

        // Build the dp array to find LIS
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        // Find the maximum length
        for (int i = 0; i < n; i++) {
            maxLength = Math.max(maxLength, dp[i]);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        LIS lis = new LIS();
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Length of Longest Increasing Subsequence: " + lis.lengthOfLIS(nums));
    }
}`}
        </pre>
      </section>

      {/* Java - Edit Distance */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Edit Distance</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class EditDistance {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Fill the dp array
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    dp[i][j] = j;
                } else if (j == 0) {
                    dp[i][j] = i;
                } else if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        EditDistance editDistance = new EditDistance();
        String word1 = "kitten", word2 = "sitting";
        System.out.println("Edit distance: " + editDistance.minDistance(word1, word2));
    }
}`}
        </pre>
      </section>

      {/* Python - Knapsack Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Knapsack Problem</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def knapSack(W, wt, val, n):
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]

    # Build the dp array
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                dp[i][w] = 0
            elif wt[i - 1] <= w:
                dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]

    return dp[n][W]

val = [60, 100, 120]
wt = [10, 20, 30]
W = 50  # Capacity
n = len(val)
print(f"Maximum value in Knapsack = {knapSack(W, wt, val, n)}")
`}
        </pre>
      </section>

      {/* Python - Longest Common Subsequence (LCS) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Longest Common Subsequence (LCS)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]

text1 = "abcde"
text2 = "ace"
print(f"Length of LCS: {longestCommonSubsequence(text1, text2)}")
`}
        </pre>
      </section>

      {/* Python - Longest Increasing Subsequence (LIS) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Longest Increasing Subsequence (LIS)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def lengthOfLIS(nums):
    if not nums:
        return 0
    dp = [1] * len(nums)
    maxLength = 1

    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)

nums = [10, 9, 2, 5, 3, 7, 101, 18]
print(f"Length of Longest Increasing Subsequence: {lengthOfLIS(nums)}")
`}
        </pre>
      </section>

      {/* Python - Edit Distance */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Edit Distance</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0:
                dp[i][j] = j
            elif j == 0:
                dp[i][j] = i
            elif word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j - 1], min(dp[i - 1][j], dp[i][j - 1]))

    return dp[m][n]

word1 = "kitten"
word2 = "sitting"
print(f"Edit distance: {minDistance(word1, word2)}")
`}
        </pre>
      </section>
    </div>
  );
}
