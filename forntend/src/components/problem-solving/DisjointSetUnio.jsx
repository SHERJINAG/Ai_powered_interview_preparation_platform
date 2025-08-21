import React from "react";

export default function DisjointSetUnion() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Disjoint Set Union (DSU) - Union Find</h1>

      <p className="mb-4 text-gray-800">
        Disjoint Set Union (DSU) is a data structure that keeps track of elements partitioned into disjoint sets.
        It supports two main operations:
        <br />
        <strong>1. Find:</strong> Determine which subset a particular element is in.
        <br />
        <strong>2. Union:</strong> Join two subsets into a single subset.
      </p>

      {/* Java Implementation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: DSU with Path Compression and Union by Rank</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class DSU {
    int[] parent, rank;

    // Constructor to initialize DSU
    public DSU(int size) {
        parent = new int[size];
        rank = new int[size];
        for (int i = 0; i < size; i++) {
            parent[i] = i; // Initially, each node is its own parent
            rank[i] = 0;   // Initial rank is 0
        }
    }

    // Find with path compression
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Recursively update parent
        }
        return parent[x];
    }

    // Union by rank
    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX == rootY) return; // Already in same set

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }

    public static void main(String[] args) {
        DSU dsu = new DSU(5);
        dsu.union(0, 1);
        dsu.union(1, 2);

        System.out.println(dsu.find(0)); // Should print same parent as 2
        System.out.println(dsu.find(2));
    }
}`}
        </pre>
      </section>

      {/* Python Implementation */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: DSU with Path Compression and Union by Rank</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class DSU:
    def __init__(self, size):
        self.parent = [i for i in range(size)]  # Each element is its own parent
        self.rank = [0] * size  # Rank starts as 0 for all

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX == rootY:
            return  # Same group

        if self.rank[rootX] < self.rank[rootY]:
            self.parent[rootX] = rootY
        elif self.rank[rootX] > self.rank[rootY]:
            self.parent[rootY] = rootX
        else:
            self.parent[rootY] = rootX
            self.rank[rootX] += 1

# Example usage
dsu = DSU(5)
dsu.union(0, 1)
dsu.union(1, 2)

print(dsu.find(0))  # Should be same as find(2)
print(dsu.find(2))`}
        </pre>
      </section>
    </div>
  );
}
