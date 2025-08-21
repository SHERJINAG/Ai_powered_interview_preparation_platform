import React from "react";

export default function DPBitManipulation() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        DP + Bit Manipulation & DP on Trees or Graphs
      </h1>

      {/* DP + Bit Manipulation: Traveling Salesman Problem (TSP) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Java: DP + Bit Manipulation (Traveling Salesman Problem - TSP)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class TSP {
    public int solveTSP(int[][] graph) {
        int n = graph.length;
        int[][] dp = new int[1 << n][n]; // DP array with 2^n subsets and n cities
        for (int[] row : dp) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        dp[1][0] = 0; // Starting point, city 0
        
        for (int mask = 1; mask < (1 << n); mask++) {
            for (int u = 0; u < n; u++) {
                if ((mask & (1 << u)) == 0) continue;
                for (int v = 0; v < n; v++) {
                    if ((mask & (1 << v)) != 0) continue;
                    dp[mask | (1 << v)][v] = Math.min(dp[mask | (1 << v)][v], dp[mask][u] + graph[u][v]);
                }
            }
        }
        
        int ans = Integer.MAX_VALUE;
        for (int u = 1; u < n; u++) {
            ans = Math.min(ans, dp[(1 << n) - 1][u] + graph[u][0]);
        }
        return ans;
    }

    public static void main(String[] args) {
        TSP tsp = new TSP();
        int[][] graph = {
            {0, 10, 15, 20, 25},
            {10, 0, 35, 25, 30},
            {15, 35, 0, 30, 5},
            {20, 25, 30, 0, 10},
            {25, 30, 5, 10, 0}
        };
        System.out.println("Minimum cost of TSP: " + tsp.solveTSP(graph));
    }
}`}
        </pre>
      </section>

      {/* Python: DP + Bit Manipulation (Traveling Salesman Problem - TSP) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Python: DP + Bit Manipulation (Traveling Salesman Problem - TSP)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def solveTSP(graph):
    n = len(graph)
    dp = [[float('inf')] * n for _ in range(1 << n)]  # DP array with 2^n subsets and n cities
    dp[1][0] = 0  # Starting point, city 0

    for mask in range(1, 1 << n):
        for u in range(n):
            if mask & (1 << u) == 0:
                continue
            for v in range(n):
                if mask & (1 << v):
                    continue
                dp[mask | (1 << v)][v] = min(dp[mask | (1 << v)][v], dp[mask][u] + graph[u][v])

    ans = float('inf')
    for u in range(1, n):
        ans = min(ans, dp[(1 << n) - 1][u] + graph[u][0])
    
    return ans

graph = [
    [0, 10, 15, 20, 25],
    [10, 0, 35, 25, 30],
    [15, 35, 0, 30, 5],
    [20, 25, 30, 0, 10],
    [25, 30, 5, 10, 0]
]

print(f"Minimum cost of TSP: {solveTSP(graph)}")
`}
        </pre>
      </section>

      {/* DP on Trees/Graphs: Maximum Path Sum in a Binary Tree */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Java: DP on Trees (Maximum Path Sum in a Binary Tree)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class MaximumPathSum {
    public int maxPathSum(TreeNode root) {
        int[] maxSum = {Integer.MIN_VALUE};
        helper(root, maxSum);
        return maxSum[0];
    }

    private int helper(TreeNode node, int[] maxSum) {
        if (node == null) return 0;

        int left = Math.max(0, helper(node.left, maxSum));
        int right = Math.max(0, helper(node.right, maxSum));

        maxSum[0] = Math.max(maxSum[0], left + right + node.val);

        return Math.max(left, right) + node.val;
    }

    public static void main(String[] args) {
        MaximumPathSum solution = new MaximumPathSum();
        TreeNode root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println("Maximum Path Sum: " + solution.maxPathSum(root));
    }
}

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}`}
        </pre>
      </section>

      {/* Python: DP on Trees (Maximum Path Sum in a Binary Tree) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Python: DP on Trees (Maximum Path Sum in a Binary Tree)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def maxPathSum(root):
    def helper(node):
        if not node:
            return 0

        left = max(0, helper(node.left))
        right = max(0, helper(node.right))

        maxSum[0] = max(maxSum[0], left + right + node.val)

        return max(left, right) + node.val

    maxSum = [float('-inf')]
    helper(root)
    return maxSum[0]

root = TreeNode(-10)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

print(f"Maximum Path Sum: {maxPathSum(root)}")
`}
        </pre>
      </section>
    </div>
  );
}
