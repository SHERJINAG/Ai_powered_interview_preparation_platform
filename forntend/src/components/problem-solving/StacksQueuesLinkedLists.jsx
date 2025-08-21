import React, { useState } from "react";

export default function StacksQueuesLinkedLists() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        Stacks, Queues & Linked Lists
      </h1>

      <div className="text-center mb-6">
        <button
          onClick={() => setShowContent(!showContent)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showContent ? "Hide" : "Show"} Content
        </button>
      </div>

      {showContent && (
        <div className="space-y-10 text-gray-800">
          {/* Stacks using Array */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">1. Stack using Array</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20`}
            </pre>
          </section>

          {/* Queue using Array */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">2. Queue using Array</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1`}
            </pre>
          </section>

          {/* Linked List Node */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">3. Linked List - Basic Operations</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.printList(); // 10 -> 20 -> null`}
            </pre>
          </section>

          {/* Stack using Linked List */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">4. Stack using Linked List</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    return this.top?.value || null;
  }
}

const s = new LinkedStack();
s.push(1);
s.push(2);
console.log(s.pop()); // 2`}
            </pre>
          </section>

          {/* Queue using Linked List */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">5. Queue using Linked List</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.front = this.rear = null;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.rear) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }
}

const q = new LinkedQueue();
q.enqueue(10);
q.enqueue(20);
console.log(q.dequeue()); // 10`}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
