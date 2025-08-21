import React from "react";

export default function GraphAlgorithms() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Dijkstra's and Bellman-Ford Algorithm (Java + Python)
      </h1>

      {/* Java - Dijkstra's Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Dijkstra's Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class Dijkstra {
    static final int INF = Integer.MAX_VALUE;

    public void dijkstra(int graph[][], int src, int V) {
        int dist[] = new int[V];
        boolean visited[] = new boolean[V];

        // Initialize distances to infinity and visited to false
        Arrays.fill(dist, INF);
        dist[src] = 0;

        for (int count = 0; count < V - 1; count++) {
            // Select the vertex with the smallest distance value
            int u = minDistance(dist, visited, V);

            visited[u] = true;

            // Update distance value of the adjacent vertices
            for (int v = 0; v < V; v++) {
                if (!visited[v] && graph[u][v] != 0 && dist[u] != INF && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }

        // Print the result
        printSolution(dist, V);
    }

    // Find vertex with minimum distance value
    public int minDistance(int dist[], boolean visited[], int V) {
        int min = INF, minIndex = -1;
        for (int v = 0; v < V; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }

    // Print the calculated shortest distances
    public void printSolution(int dist[], int V) {
        System.out.println("Vertex \t Distance from Source");
        for (int i = 0; i < V; i++) {
            System.out.println(i + " \t " + dist[i]);
        }
    }

    public static void main(String[] args) {
        int graph[][] = { { 0, 10, 0, 0, 0, 0 }, 
                          { 10, 0, 5, 0, 0, 0 }, 
                          { 0, 5, 0, 20, 1, 0 }, 
                          { 0, 0, 20, 0, 2, 1 }, 
                          { 0, 0, 1, 2, 0, 3 }, 
                          { 0, 0, 0, 1, 3, 0 } };

        Dijkstra d = new Dijkstra();
        d.dijkstra(graph, 0, 6); // Run Dijkstra starting from vertex 0
    }
}`}
        </pre>
      </section>

      {/* Java - Bellman-Ford Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Bellman-Ford Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class BellmanFord {
    static final int INF = Integer.MAX_VALUE;

    public void bellmanFord(int graph[][], int V, int E, int src) {
        int dist[] = new int[V];
        
        Arrays.fill(dist, INF);
        dist[src] = 0;

        // Relax edges repeatedly
        for (int i = 1; i < V - 1; i++) {
            for (int u = 0; u < V; u++) {
                for (int v = 0; v < V; v++) {
                    if (graph[u][v] != 0 && dist[u] != INF && dist[u] + graph[u][v] < dist[v]) {
                        dist[v] = dist[u] + graph[u][v];
                    }
                }
            }
        }

        // Check for negative-weight cycles
        for (int u = 0; u < V; u++) {
            for (int v = 0; v < V; v++) {
                if (graph[u][v] != 0 && dist[u] != INF && dist[u] + graph[u][v] < dist[v]) {
                    System.out.println("Graph contains negative weight cycle");
                    return;
                }
            }
        }

        // Print the result
        printSolution(dist, V);
    }

    // Print the calculated shortest distances
    public void printSolution(int dist[], int V) {
        System.out.println("Vertex \t Distance from Source");
        for (int i = 0; i < V; i++) {
            System.out.println(i + " \t " + dist[i]);
        }
    }

    public static void main(String[] args) {
        int graph[][] = { { 0, -1, 4, 0, 0, 0 }, 
                          { -1, 0, 3, 2, 2, 0 }, 
                          { 4, 3, 0, 5, 0, 0 }, 
                          { 0, 2, 5, 0, -3, 0 }, 
                          { 0, 2, 0, -3, 0, 3 }, 
                          { 0, 0, 0, 0, 3, 0 } };

        BellmanFord bf = new BellmanFord();
        bf.bellmanFord(graph, 6, 7, 0); // Run Bellman-Ford starting from vertex 0
    }
}`}
        </pre>
      </section>

      {/* Python - Dijkstra's Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Python: Dijkstra's Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import heapq

def dijkstra(graph, src, V):
    dist = [float("inf")] * V
    dist[src] = 0
    visited = [False] * V
    pq = [(0, src)]  # (distance, vertex)

    while pq:
        d, u = heapq.heappop(pq)
        if visited[u]:
            continue
        visited[u] = True

        for v, weight in enumerate(graph[u]):
            if not visited[v] and graph[u][v] != 0 and d + graph[u][v] < dist[v]:
                dist[v] = d + graph[u][v]
                heapq.heappush(pq, (dist[v], v))

    print("Vertex \t Distance from Source")
    for i in range(V):
        print(f"{i} \t {dist[i]}")

graph = [
    [0, 10, 0, 0, 0, 0],
    [10, 0, 5, 0, 0, 0],
    [0, 5, 0, 20, 1, 0],
    [0, 0, 20, 0, 2, 1],
    [0, 0, 1, 2, 0, 3],
    [0, 0, 0, 1, 3, 0]
]

dijkstra(graph, 0, 6)  # Run Dijkstra starting from vertex 0`}
        </pre>
      </section>

      {/* Python - Bellman-Ford Algorithm */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: Bellman-Ford Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def bellman_ford(graph, V, E, src):
    dist = [float("inf")] * V
    dist[src] = 0

    # Relax edges repeatedly
    for _ in range(V - 1):
        for u in range(V):
            for v in range(V):
                if graph[u][v] != 0 and dist[u] != float("inf") and dist[u] + graph[u][v] < dist[v]:
                    dist[v] = dist[u] + graph[u][v]

    # Check for negative-weight cycles
    for u in range(V):
        for v in range(V):
            if graph[u][v] != 0 and dist[u] != float("inf") and dist[u] + graph[u][v] < dist[v]:
                print("Graph contains negative weight cycle")
                return

    print("Vertex \t Distance from Source")
    for i in range(V):
        print(f"{i} \t {dist[i]}")

graph = [
    [0, -1, 4, 0, 0, 0],
    [-1, 0, 3, 2, 2, 0],
    [4, 3, 0, 5, 0, 0],
    [0, 2, 5, 0, -3, 0],
    [0, 2, 0, -3, 0, 3],
    [0, 0, 0, 0, 3, 0]
]

bellman_ford(graph, 6, 7, 0)  # Run Bellman-Ford starting from vertex 0`}
        </pre>
      </section>
    </div>
  );
}
