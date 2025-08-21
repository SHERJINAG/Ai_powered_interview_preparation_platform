import React from "react";

export default function GreedyAlgorithms() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Greedy Algorithms
      </h1>

      {/* Introduction to Greedy Algorithms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          What are Greedy Algorithms?
        </h2>
        <p>
          A greedy algorithm is an algorithmic paradigm that builds a solution
          piece by piece, always choosing the next piece that offers the most
          immediate benefit. The idea is to make the locally optimal choice at
          each step with the hope of finding the global optimum.
        </p>
        <p>
          While greedy algorithms don't always guarantee an optimal solution for
          all problems, they work well for problems where local optimization leads
          to a globally optimal solution.
        </p>
      </section>

      {/* Example 1: Coin Change Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Example 1: Coin Change Problem (Greedy Approach)
        </h2>
        <p>
          The problem is to find the minimum number of coins required to make a
          certain amount using the given denominations. We use the greedy
          approach by always choosing the largest denomination coin first.
        </p>

        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.Arrays;

public class CoinChange {
    public static int minCoins(int[] coins, int amount) {
        int count = 0;
        
        // Sort coins in descending order to start with the largest denomination
        Arrays.sort(coins);
        int n = coins.length;
        
        for (int i = n - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                count++;
            }
        }
        
        // If amount becomes zero, return the coin count
        return amount == 0 ? count : -1; // -1 indicates that the exact amount can't be made
    }

    public static void main(String[] args) {
        int[] coins = {1, 5, 10, 25};
        int amount = 63;
        System.out.println("Minimum coins required: " + minCoins(coins, amount));
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def minCoins(coins, amount):
    count = 0
    # Sort coins in descending order to start with the largest denomination
    coins.sort(reverse=True)
    
    for coin in coins:
        while amount >= coin:
            amount -= coin
            count += 1
    
    # If the amount becomes zero, return the coin count
    return count if amount == 0 else -1  # -1 means exact amount can't be made

coins = [1, 5, 10, 25]
amount = 63
print("Minimum coins required:", minCoins(coins, amount))
`}
        </pre>
      </section>

      {/* Example 2: Activity Selection Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Example 2: Activity Selection Problem
        </h2>
        <p>
          The problem is to select the maximum number of activities that don't
          overlap with each other. The greedy choice is to always pick the
          activity that finishes the earliest, allowing more room for subsequent
          activities.
        </p>

        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.Arrays;

class ActivitySelection {
    public static void selectActivities(int[] start, int[] finish) {
        int n = start.length;
        int i = 0; // The first activity is always selected
        
        System.out.println("Selected activities:");
        System.out.println("Activity " + i);
        
        // Iterate over activities and select the non-conflicting ones
        for (int j = 1; j < n; j++) {
            if (start[j] >= finish[i]) {
                System.out.println("Activity " + j);
                i = j;
            }
        }
    }

    public static void main(String[] args) {
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] finish = {2, 4, 6, 7, 9, 9};
        selectActivities(start, finish);
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def selectActivities(start, finish):
    n = len(start)
    i = 0  # The first activity is always selected
    
    print("Selected activities:")
    print("Activity", i)
    
    # Iterate over activities and select the non-conflicting ones
    for j in range(1, n):
        if start[j] >= finish[i]:
            print("Activity", j)
            i = j

start = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]
selectActivities(start, finish)
`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">
          Explanation
        </h2>
        <p>
          - **Greedy Choice Property**: Greedy algorithms work by selecting the best
          option at each step. In the case of the Coin Change problem, the greedy
          choice is to select the largest coin denomination at each step, and in
          the Activity Selection problem, it's to select the earliest finishing
          activity.
        </p>
        <p>
          - **Optimal Substructure**: A problem exhibits an optimal substructure if
          the optimal solution of the problem can be constructed efficiently from
          the optimal solutions of its subproblems. For example, the activity selection
          problem can be broken down into smaller subproblems of selecting the next
          non-overlapping activity after selecting one.
        </p>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">
          Use Cases of Greedy Algorithms
        </h2>
        <ul>
          <li>Optimal Job Scheduling</li>
          <li>Activity Selection Problem</li>
          <li>Huffman Encoding (used in compression algorithms)</li>
          <li>Minimum Spanning Tree (Prim's and Kruskal's algorithm)</li>
          <li>Graph Coloring</li>
        </ul>
      </section>
    </div>
  );
}
