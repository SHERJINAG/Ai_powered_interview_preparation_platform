import React from "react";

export default function GraphRepresentations() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Graphs: Adjacency List & Matrix (Java + Python)
      </h1>

      <p className="mb-4 text-gray-800">
        A <strong>Graph</strong> is a collection of nodes (vertices) and edges.
        It can be represented using two main ways: <strong>Adjacency Matrix</strong> and <strong>Adjacency List</strong>.
      </p>

      {/* Adjacency Matrix - Java */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Adjacency Matrix</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class GraphMatrix {
    private int[][] adjMatrix;
    private int vertices;

    public GraphMatrix(int v) {
        this.vertices = v;
        adjMatrix = new int[v][v]; // v x v matrix
    }

    public void addEdge(int src, int dest) {
        adjMatrix[src][dest] = 1; // For undirected graph, add both
        adjMatrix[dest][src] = 1;
    }

    public void display() {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphMatrix g = new GraphMatrix(4);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 3);
        g.display();
    }
}`}
        </pre>
      </section>

      {/* Adjacency List - Java */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Adjacency List</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class GraphList {
    private List<List<Integer>> adjList;

    public GraphList(int v) {
        adjList = new ArrayList<>();
        for (int i = 0; i < v; i++) {
            adjList.add(new ArrayList<>()); // Each vertex gets its list
        }
    }

    public void addEdge(int src, int dest) {
        adjList.get(src).add(dest); 
        adjList.get(dest).add(src); // Undirected graph
    }

    public void display() {
        for (int i = 0; i < adjList.size(); i++) {
            System.out.print(i + ": ");
            for (int neighbor : adjList.get(i)) {
                System.out.print(neighbor + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphList g = new GraphList(4);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 3);
        g.display();
    }
}`}
        </pre>
      </section>

      {/* Adjacency Matrix - Python */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Adjacency Matrix</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class GraphMatrix:
    def __init__(self, vertices):
        self.v = vertices
        self.matrix = [[0] * vertices for _ in range(vertices)]

    def add_edge(self, src, dest):
        self.matrix[src][dest] = 1
        self.matrix[dest][src] = 1  # Undirected graph

    def display(self):
        for row in self.matrix:
            print(" ".join(map(str, row)))

g = GraphMatrix(4)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.display()`}
        </pre>
      </section>

      {/* Adjacency List - Python */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: Adjacency List</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import defaultdict

class GraphList:
    def __init__(self):
        self.adj = defaultdict(list)

    def add_edge(self, src, dest):
        self.adj[src].append(dest)
        self.adj[dest].append(src)  # Undirected graph

    def display(self):
        for node in self.adj:
            print(f"{node}: {self.adj[node]}")

g = GraphList()
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.display()`}
        </pre>
      </section>
    </div>
  );
}
