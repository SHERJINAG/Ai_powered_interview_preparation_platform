import React from "react";

export default function GraphTraversal() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Graph Traversal - BFS & DFS (Java + Python)
      </h1>

      {/* Java - BFS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: BFS</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class BFS {
    private List<List<Integer>> adj;

    public BFS(int v) {
        adj = new ArrayList<>();
        for (int i = 0; i < v; i++)
            adj.add(new ArrayList<>());
    }

    public void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u); // Undirected graph
    }

    public void bfs(int start) {
        boolean[] visited = new boolean[adj.size()]; // Track visited nodes
        Queue<Integer> queue = new LinkedList<>();

        visited[start] = true; // Mark start as visited
        queue.add(start);

        while (!queue.isEmpty()) {
            int node = queue.poll(); // Remove from front
            System.out.print(node + " ");

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(neighbor);
                }
            }
        }
    }

    public static void main(String[] args) {
        BFS g = new BFS(5);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);

        System.out.println("BFS starting from node 0:");
        g.bfs(0);
    }
}`}
        </pre>
      </section>

      {/* Java - DFS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: DFS</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class DFS {
    private List<List<Integer>> adj;

    public DFS(int v) {
        adj = new ArrayList<>();
        for (int i = 0; i < v; i++)
            adj.add(new ArrayList<>());
    }

    public void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    public void dfsUtil(int node, boolean[] visited) {
        visited[node] = true; // Mark visited
        System.out.print(node + " ");

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor])
                dfsUtil(neighbor, visited);
        }
    }

    public void dfs(int start) {
        boolean[] visited = new boolean[adj.size()];
        dfsUtil(start, visited);
    }

    public static void main(String[] args) {
        DFS g = new DFS(5);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);

        System.out.println("DFS starting from node 0:");
        g.dfs(0);
    }
}`}
        </pre>
      </section>

      {/* Python - BFS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: BFS</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import defaultdict, deque

class GraphBFS:
    def __init__(self):
        self.adj = defaultdict(list)

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # Undirected

    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)

        while queue:
            node = queue.popleft()  # Remove from front
            print(node, end=" ")

            for neighbor in self.adj[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

g = GraphBFS()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)

print("BFS starting from node 0:")
g.bfs(0)`}
        </pre>
      </section>

      {/* Python - DFS */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: DFS</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import defaultdict

class GraphDFS:
    def __init__(self):
        self.adj = defaultdict(list)

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def dfs(self, node, visited):
        visited.add(node)
        print(node, end=" ")

        for neighbor in self.adj[node]:
            if neighbor not in visited:
                self.dfs(neighbor, visited)

g = GraphDFS()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)

print("DFS starting from node 0:")
g.dfs(0, set())`}
        </pre>
      </section>
    </div>
  );
}
