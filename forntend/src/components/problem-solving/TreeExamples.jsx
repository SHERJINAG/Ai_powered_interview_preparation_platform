import React from "react";

export default function TreeExamples() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Tree (Binary Tree) in Java & Python</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Binary Tree in Java</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`// Define the structure of a Node
class Node {
    int data;
    Node left, right;

    // Constructor to create a new node
    Node(int value) {
        data = value;
        left = right = null;
    }
}

public class BinaryTree {
    Node root;

    // Insert nodes manually for simplicity
    public BinaryTree() {
        root = new Node(10);              // Root node
        root.left = new Node(20);         // Left child
        root.right = new Node(30);        // Right child
        root.left.left = new Node(40);    // Left-left grandchild
    }

    // In-order Traversal (Left -> Root -> Right)
    void inOrder(Node node) {
        if (node != null) {
            inOrder(node.left);                      // Visit left subtree
            System.out.print(node.data + " ");       // Print root
            inOrder(node.right);                     // Visit right subtree
        }
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.inOrder(tree.root);  // Output: 40 20 10 30
    }
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Binary Tree in Python</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`# Define the structure of a Node
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# Binary Tree class
class BinaryTree:
    def __init__(self):
        self.root = Node(10)              # Root node
        self.root.left = Node(20)         # Left child
        self.root.right = Node(30)        # Right child
        self.root.left.left = Node(40)    # Left-left grandchild

    # In-order Traversal (Left -> Root -> Right)
    def in_order(self, node):
        if node:
            self.in_order(node.left)             # Visit left subtree
            print(node.data, end=' ')            # Print root
            self.in_order(node.right)            # Visit right subtree

# Create tree and traverse
tree = BinaryTree()
tree.in_order(tree.root)  # Output: 40 20 10 30`}
        </pre>
      </section>
    </div>
  );
}
