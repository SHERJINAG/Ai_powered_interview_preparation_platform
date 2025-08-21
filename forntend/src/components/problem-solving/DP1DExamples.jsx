import React from "react";

export default function DP1DExamples() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        1D Dynamic Programming: Fibonacci, Climbing Stairs, House Robber
      </h1>

      {/* Java - Fibonacci Sequence */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Fibonacci Sequence</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class Fibonacci {
    public int fib(int n) {
        // Base cases
        if (n <= 1) return n;

        // Initialize an array to store Fibonacci numbers
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        // Fill the dp array with Fibonacci numbers
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        // Return the nth Fibonacci number
        return dp[n];
    }

    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        int n = 10;  // Change n as needed
        System.out.println("Fibonacci of " + n + " is: " + fibonacci.fib(n));
    }
}`}
        </pre>
      </section>

      {/* Java - Climbing Stairs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Climbing Stairs</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class ClimbingStairs {
    public int climbStairs(int n) {
        if (n <= 1) return 1;

        // Initialize dp array
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;

        // Fill the dp array using the relation dp[i] = dp[i-1] + dp[i-2]
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {
        ClimbingStairs climbingStairs = new ClimbingStairs();
        int n = 5;  // Change n as needed
        System.out.println("Number of ways to climb " + n + " stairs: " + climbingStairs.climbStairs(n));
    }
}`}
        </pre>
      </section>

      {/* Java - House Robber */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: House Robber</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class HouseRobber {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[nums.length - 1];
    }

    public static void main(String[] args) {
        HouseRobber houseRobber = new HouseRobber();
        int[] nums = {2, 7, 9, 3, 1};  // Change the input as needed
        System.out.println("Maximum money the robber can steal: " + houseRobber.rob(nums));
    }
}`}
        </pre>
      </section>

      {/* Python - Fibonacci Sequence */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Fibonacci Sequence</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def fib(n):
    if n <= 1:
        return n

    # Initialize dp array
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1

    # Fill the dp array with Fibonacci numbers
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

n = 10  # Change n as needed
print(f"Fibonacci of {n} is: {fib(n)}")
`}
        </pre>
      </section>

      {/* Python - Climbing Stairs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Climbing Stairs</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def climb_stairs(n):
    if n <= 1:
        return 1

    # Initialize dp array
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1

    # Fill the dp array using the relation dp[i] = dp[i-1] + dp[i-2]
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

n = 5  # Change n as needed
print(f"Number of ways to climb {n} stairs: {climb_stairs(n)}")
`}
        </pre>
      </section>

      {/* Python - House Robber */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: House Robber</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

    return dp[-1]

nums = [2, 7, 9, 3, 1]  # Change the input as needed
print(f"Maximum money the robber can steal: {rob(nums)}")
`}
        </pre>
      </section>
    </div>
  );
}
