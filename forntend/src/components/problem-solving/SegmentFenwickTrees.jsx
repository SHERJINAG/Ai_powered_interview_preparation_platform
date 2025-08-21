import React from "react";

export default function SegmentFenwickTrees() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Segment Trees and Fenwick Trees (Binary Indexed Trees)
      </h1>

      <p className="mb-4 text-gray-800">
        These data structures are used for range queries and updates. 
        <strong>Segment Trees</strong> allow range queries and point updates in O(log n) time. 
        <strong>Fenwick Trees</strong> are more space-efficient and support prefix sum queries and updates.
      </p>

      {/* Segment Tree - Java */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java - Segment Tree</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class SegmentTree {
    int[] tree;
    int n;

    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, n - 1, 1);
    }

    void build(int[] arr, int start, int end, int node) {
        if (start == end) {
            tree[node] = arr[start]; // Leaf node
            return;
        }
        int mid = (start + end) / 2;
        build(arr, start, mid, 2 * node);
        build(arr, mid + 1, end, 2 * node + 1);
        tree[node] = tree[2 * node] + tree[2 * node + 1]; // Internal node
    }

    int query(int l, int r) {
        return queryUtil(0, n - 1, l, r, 1);
    }

    int queryUtil(int start, int end, int l, int r, int node) {
        if (r < start || l > end) return 0; // No overlap
        if (l <= start && end <= r) return tree[node]; // Complete overlap
        int mid = (start + end) / 2;
        int left = queryUtil(start, mid, l, r, 2 * node);
        int right = queryUtil(mid + 1, end, l, r, 2 * node + 1);
        return left + right;
    }

    void update(int index, int value) {
        updateUtil(0, n - 1, index, value, 1);
    }

    void updateUtil(int start, int end, int idx, int val, int node) {
        if (start == end) {
            tree[node] = val;
            return;
        }
        int mid = (start + end) / 2;
        if (idx <= mid) updateUtil(start, mid, idx, val, 2 * node);
        else updateUtil(mid + 1, end, idx, val, 2 * node + 1);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
}`}
        </pre>
      </section>

      {/* Fenwick Tree - Python */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python - Fenwick Tree</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class FenwickTree:
    def __init__(self, size):
        self.n = size
        self.bit = [0] * (self.n + 1)  # 1-based index

    def update(self, index, value):
        index += 1
        while index <= self.n:
            self.bit[index] += value
            index += index & -index  # Move to next

    def query(self, index):
        index += 1
        result = 0
        while index > 0:
            result += self.bit[index]
            index -= index & -index  # Move to parent
        return result

    def range_query(self, l, r):
        return self.query(r) - self.query(l - 1)

# Example
ft = FenwickTree(5)
arr = [1, 2, 3, 4, 5]
for i in range(len(arr)):
    ft.update(i, arr[i])

print(ft.range_query(1, 3))  # Output: 2 + 3 + 4 = 9`}
        </pre>
      </section>

      <p className="text-gray-800">
        <strong>Segment Tree:</strong> Better for both range queries and updates when working on custom operations (min, max, gcd).
        <br />
        <strong>Fenwick Tree:</strong> More memory-efficient, good for cumulative/prefix sum-type queries.
      </p>
    </div>
  );
}
