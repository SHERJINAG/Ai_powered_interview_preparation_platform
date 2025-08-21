import React, { useState } from "react";

export default function StacksQueuesTutorial() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Stacks & Queues in Python & Java
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn about Stacks and Queues, two important data structures used in programming.
      </p>

      <div className="text-center">
        <button
          onClick={() => setShowLesson(!showLesson)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showLesson ? "Hide Lesson" : "Show Lesson"}
        </button>
      </div>

      {showLesson && (
        <div className="space-y-10 text-gray-800 mt-6">
          {/* Java Stack Section */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">1. Java Stack</h2>
            <p>In Java, the <code>Stack</code> class implements a last-in, first-out (LIFO) stack of objects.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.Stack;

public class StackExample {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<>();

    // Pushing elements onto the stack
    stack.push(10);
    stack.push(20);
    stack.push(30);

    // Popping elements from the stack
    System.out.println("Popped: " + stack.pop());  // Removes 30

    // Peeking at the top element without removing it
    System.out.println("Top Element: " + stack.peek());  // Displays 20

    // Checking if the stack is empty
    System.out.println("Is the stack empty? " + stack.isEmpty());
  }
}`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>stack.push()</code> – Adds an element to the top of the stack.</li>
                <li><code>stack.pop()</code> – Removes the top element of the stack and returns it.</li>
                <li><code>stack.peek()</code> – Returns the top element without removing it.</li>
                <li><code>stack.isEmpty()</code> – Checks if the stack is empty.</li>
              </ul>
            </div>
          </section>

          {/* Python Stack Section */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Python Stack</h2>
            <p>In Python, stacks can be implemented using a list, which supports LIFO operations.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`# Creating a stack using a list
stack = []

# Pushing elements onto the stack
stack.append(10)
stack.append(20)
stack.append(30)

# Popping elements from the stack
print("Popped:", stack.pop())  # Removes 30

# Peeking at the top element
print("Top Element:", stack[-1])  # Displays 20

# Checking if the stack is empty
print("Is the stack empty?", len(stack) == 0)`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>append()</code> – Adds an element to the top of the stack.</li>
                <li><code>pop()</code> – Removes the top element of the stack and returns it.</li>
                <li><code>stack[-1]</code> – Accesses the top element without removing it.</li>
                <li><code>len(stack) == 0</code> – Checks if the stack is empty.</li>
              </ul>
            </div>
          </section>

          {/* Java Queue Section */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700">3. Java Queue</h2>
            <p>In Java, the <code>Queue</code> interface represents a collection of elements with FIFO (First-In-First-Out) order.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
  public static void main(String[] args) {
    Queue<Integer> queue = new LinkedList<>();

    // Enqueue (Add elements)
    queue.offer(10);
    queue.offer(20);
    queue.offer(30);

    // Dequeue (Remove and return element)
    System.out.println("Dequeued: " + queue.poll());  // Removes 10

    // Peeking at the front element
    System.out.println("Front Element: " + queue.peek());  // Displays 20

    // Checking if the queue is empty
    System.out.println("Is the queue empty? " + queue.isEmpty());
  }
}`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>offer()</code> – Adds an element to the queue.</li>
                <li><code>poll()</code> – Removes and returns the front element.</li>
                <li><code>peek()</code> – Returns the front element without removing it.</li>
                <li><code>isEmpty()</code> – Checks if the queue is empty.</li>
              </ul>
            </div>
          </section>

          {/* Python Queue Section */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">4. Python Queue</h2>
            <p>In Python, the <code>queue</code> module or lists can be used to implement a queue with FIFO operations.</p>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`from collections import deque

# Creating a queue using deque
queue = deque()

# Enqueue (Add elements)
queue.append(10)
queue.append(20)
queue.append(30)

# Dequeue (Remove and return element)
print("Dequeued:", queue.popleft())  # Removes 10

# Peeking at the front element
print("Front Element:", queue[0])  # Displays 20

# Checking if the queue is empty
print("Is the queue empty?", len(queue) == 0)`}
              </pre>
              <ul className="list-disc ml-6 text-sm mt-3 space-y-1">
                <li><code>append()</code> – Adds an element to the queue.</li>
                <li><code>popleft()</code> – Removes and returns the front element.</li>
                <li><code>queue[0]</code> – Accesses the front element without removing it.</li>
                <li><code>len(queue) == 0</code> – Checks if the queue is empty.</li>
              </ul>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-700">Summary of Key Concepts</h3>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Stack:</strong> LIFO (Last-In-First-Out) structure. Use <code>push</code> to add and <code>pop</code> to remove.</li>
              <li><strong>Queue:</strong> FIFO (First-In-First-Out) structure. Use <code>offer</code> to add and <code>poll</code> to remove.</li>
              <li><strong>Java:</strong> Use <code>Stack</code> and <code>Queue</code> classes.</li>
              <li><strong>Python:</strong> Use <code>list</code> for stack and <code>deque</code> for queue.</li>
              <li>Both data structures help solve problems like undo actions, task scheduling, and more.</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
