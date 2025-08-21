import React from "react";

export default function DPSubsetsBitmask() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Dynamic Programming on Subsets / Bitmasking
      </h1>

      {/* Java - Subset Sum Problem (DP on Subsets) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Subset Sum Problem (DP on Subsets)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class SubsetSum {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        if (sum % 2 != 0) {
            return false;
        }
        
        sum = sum / 2;
        boolean[] dp = new boolean[sum + 1];
        dp[0] = true; // Base case
        
        for (int num : nums) {
            for (int i = sum; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        
        return dp[sum];
    }

    public static void main(String[] args) {
        SubsetSum subsetSum = new SubsetSum();
        int[] nums = {1, 5, 11, 5};
        System.out.println("Can partition: " + subsetSum.canPartition(nums));
    }
}`}
        </pre>
      </section>

      {/* Python - Subset Sum Problem (DP on Subsets) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Subset Sum Problem (DP on Subsets)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def canPartition(nums):
    total_sum = sum(nums)
    if total_sum % 2 != 0:
        return False
    
    target = total_sum // 2
    dp = [False] * (target + 1)
    dp[0] = True  # Base case
    
    for num in nums:
        for i in range(target, num - 1, -1):
            dp[i] = dp[i] or dp[i - num]
    
    return dp[target]

nums = [1, 5, 11, 5]
print(f"Can partition: {canPartition(nums)}")
`}
        </pre>
      </section>

      {/* Java - Bitmasking Example (Subset Enumeration) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Bitmasking Example (Subset Enumeration)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class Bitmasking {
    public void subsetEnumeration(int[] nums) {
        int n = nums.length;
        for (int mask = 0; mask < (1 << n); mask++) {
            System.out.print("{ ");
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    System.out.print(nums[i] + " ");
                }
            }
            System.out.println("}");
        }
    }

    public static void main(String[] args) {
        Bitmasking bitmasking = new Bitmasking();
        int[] nums = {1, 2, 3};
        System.out.println("Subsets are:");
        bitmasking.subsetEnumeration(nums);
    }
}`}
        </pre>
      </section>

      {/* Python - Bitmasking Example (Subset Enumeration) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Bitmasking Example (Subset Enumeration)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def subsetEnumeration(nums):
    n = len(nums)
    for mask in range(1 << n):
        subset = []
        for i in range(n):
            if mask & (1 << i):
                subset.append(nums[i])
        print(subset)

nums = [1, 2, 3]
print("Subsets are:")
subsetEnumeration(nums)
`}
        </pre>
      </section>

      {/* Java - Bitmasking Example (Subset Sum Problem) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Bitmasking Example (Subset Sum Problem)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class BitmaskSubsetSum {
    public boolean subsetSum(int[] nums, int target) {
        int n = nums.length;
        for (int mask = 0; mask < (1 << n); mask++) {
            int sum = 0;
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    sum += nums[i];
                }
            }
            if (sum == target) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        BitmaskSubsetSum bitmaskSubsetSum = new BitmaskSubsetSum();
        int[] nums = {1, 2, 3, 4};
        int target = 5;
        System.out.println("Subset sum of " + target + " exists: " + bitmaskSubsetSum.subsetSum(nums, target));
    }
}`}
        </pre>
      </section>

      {/* Python - Bitmasking Example (Subset Sum Problem) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Bitmasking Example (Subset Sum Problem)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def subsetSum(nums, target):
    n = len(nums)
    for mask in range(1 << n):
        sum_val = 0
        for i in range(n):
            if mask & (1 << i):
                sum_val += nums[i]
        if sum_val == target:
            return True
    return False

nums = [1, 2, 3, 4]
target = 5
print(f"Subset sum of {target} exists: {subsetSum(nums, target)}")
`}
        </pre>
      </section>
    </div>
  );
}
