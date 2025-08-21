import React from "react";

export default function HeapPriorityQueue() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Heap / Priority Queue in Java & Python</h1>

      {/* Java Implementation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Java: Min-Heap and Max-Heap using PriorityQueue</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class HeapExample {
    public static void main(String[] args) {
        // Min-Heap (default behavior of PriorityQueue)
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.add(30);  // Insert 30
        minHeap.add(10);  // Insert 10
        minHeap.add(20);  // Insert 20

        System.out.println("Min-Heap:");
        while (!minHeap.isEmpty()) {
            System.out.println(minHeap.poll());  // Removes smallest element
        }

        // Max-Heap using custom comparator
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.add(30);
        maxHeap.add(10);
        maxHeap.add(20);

        System.out.println("Max-Heap:");
        while (!maxHeap.isEmpty()) {
            System.out.println(maxHeap.poll());  // Removes largest element
        }
    }
}`}
        </pre>
      </section>

      {/* Python Implementation */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Python: Min-Heap and Max-Heap using heapq</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import heapq

# Python's heapq is a Min-Heap by default
min_heap = []
heapq.heappush(min_heap, 30)
heapq.heappush(min_heap, 10)
heapq.heappush(min_heap, 20)

print("Min-Heap:")
while min_heap:
    print(heapq.heappop(min_heap))  # Pops the smallest element

# Max-Heap using negation trick
max_heap = []
heapq.heappush(max_heap, -30)
heapq.heappush(max_heap, -10)
heapq.heappush(max_heap, -20)

print("Max-Heap:")
while max_heap:
    print(-heapq.heappop(max_heap))  # Negate again to get original value`}
        </pre>
      </section>
    </div>
  );
}
