import React from "react";

export default function GraphAlgorithms() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Floyd-Warshall & Topological Sort (Java + Python)
      </h1>

      {/* Java - Floyd-Warshall Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Floyd-Warshall Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class FloydWarshall {
    static final int INF = Integer.MAX_VALUE;

    public void floydWarshall(int graph[][], int V) {
        // dist[][] will store the shortest distance between every pair of vertices
        int dist[][] = new int[V][V];

        // Initialize distance array with graph values
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (graph[i][j] == 0 && i != j) {
                    dist[i][j] = INF;
                } else {
                    dist[i][j] = graph[i][j];
                }
            }
        }

        // Apply Floyd-Warshall algorithm to find shortest paths between all pairs of vertices
        for (int k = 0; k < V; k++) {
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Print the shortest distance matrix
        printSolution(dist, V);
    }

    public void printSolution(int dist[][], int V) {
        System.out.println("Shortest distances between every pair of vertices:");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][j] == INF) {
                    System.out.print("INF ");
                } else {
                    System.out.print(dist[i][j] + " ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int graph[][] = {
            {0, 3, INF, INF, INF, INF},
            {3, 0, 1, INF, INF, INF},
            {INF, 1, 0, 7, INF, 2},
            {INF, INF, 7, 0, 2, 3},
            {INF, INF, INF, 2, 0, 3},
            {INF, INF, 2, 3, 3, 0}
        };
        FloydWarshall fw = new FloydWarshall();
        fw.floydWarshall(graph, 6); // Run Floyd-Warshall on the graph
    }
}`}
        </pre>
      </section>

      {/* Java - Topological Sort */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Topological Sort</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class TopologicalSort {
    private int V;
    private LinkedList<Integer> adj[];

    public TopologicalSort(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i)
            adj[i] = new LinkedList();
    }

    // Add edge to graph
    public void addEdge(int v, int w) {
        adj[v].add(w);
    }

    // Helper function for DFS
    public void topologicalSortUtil(int v, boolean visited[], Stack<Integer> stack) {
        visited[v] = true;

        // Recur for all the vertices adjacent to this vertex
        for (Integer neighbor : adj[v]) {
            if (!visited[neighbor]) {
                topologicalSortUtil(neighbor, visited, stack);
            }
        }

        // Push current vertex to stack which stores result
        stack.push(v);
    }

    // Main function to do topological sort
    public void topologicalSort() {
        Stack<Integer> stack = new Stack<>();
        boolean visited[] = new boolean[V];

        // Call topologicalSortUtil for all unvisited nodes
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, stack);
            }
        }

        // Print contents of stack
        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }

    public static void main(String args[]) {
        TopologicalSort graph = new TopologicalSort(6);
        graph.addEdge(5, 2);
        graph.addEdge(5, 0);
        graph.addEdge(4, 0);
        graph.addEdge(4, 1);
        graph.addEdge(2, 3);
        graph.addEdge(3, 1);

        System.out.println("Topological Sort of the graph:");
        graph.topologicalSort();
    }
}`}
        </pre>
      </section>

      {/* Python - Floyd-Warshall Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Floyd-Warshall Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def floyd_warshall(graph, V):
    # Initialize distance matrix
    dist = [[float("inf")] * V for _ in range(V)]

    # Fill the distance matrix with graph values
    for i in range(V):
        for j in range(V):
            if i == j:
                dist[i][j] = 0
            elif graph[i][j] != 0:
                dist[i][j] = graph[i][j]

    # Apply Floyd-Warshall algorithm
    for k in range(V):
        for i in range(V):
            for j in range(V):
                if dist[i][k] != float("inf") and dist[k][j] != float("inf") and dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    # Print the result
    for i in range(V):
        for j in range(V):
            if dist[i][j] == float("inf"):
                print("INF", end=" ")
            else:
                print(dist[i][j], end=" ")
        print()

graph = [
    [0, 3, 0, 0, 0, 0],
    [3, 0, 1, 0, 0, 0],
    [0, 1, 0, 7, 0, 2],
    [0, 0, 7, 0, 2, 3],
    [0, 0, 0, 2, 0, 3],
    [0, 0, 2, 3, 3, 0]
]

floyd_warshall(graph, 6)  # Run Floyd-Warshall on the graph`}
        </pre>
      </section>

      {/* Python - Topological Sort */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: Topological Sort</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import defaultdict

class Graph:
    def __init__(self, V):
        self.V = V
        self.graph = defaultdict(list)

    def add_edge(self, v, w):
        self.graph[v].append(w)

    def topological_sort_util(self, v, visited, stack):
        visited[v] = True

        # Recur for all the vertices adjacent to this vertex
        for neighbor in self.graph[v]:
            if not visited[neighbor]:
                self.topological_sort_util(neighbor, visited, stack)

        # Push current vertex to stack which stores result
        stack.append(v)

    def topological_sort(self):
        stack = []
        visited = [False] * self.V

        # Call topologicalSortUtil for all unvisited nodes
        for i in range(self.V):
            if not visited[i]:
                self.topological_sort_util(i, visited, stack)

        # Print contents of stack
        print("Topological Sort of the graph:")
        print(stack[::-1])

g = Graph(6)
g.add_edge(5, 2)
g.add_edge(5, 0)
g.add_edge(4, 0)
g.add_edge(4, 1)
g.add_edge(2, 3)
g.add_edge(3, 1)

g.topological_sort()  # Perform topological sort`}
        </pre>
      </section>
    </div>
  );
}
