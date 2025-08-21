import React, { useState } from "react";

export default function ArrayOperations() {
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Rotating Arrays and Sorting Techniques in Java & Python
      </h1>

      <p className="text-lg text-center text-gray-700">
        Learn how to rotate arrays and implement sorting algorithms.
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
          {/* Rotating Arrays */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700">1. Rotating Arrays</h2>

            <h3 className="text-xl font-semibold text-green-600">Rotation Explanation:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                In array rotation, elements are shifted to the left or right by a given number of positions.
                For example, rotating an array by 2 positions to the right means the last two elements will be moved to the front.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600">Java Code Example (Right Rotation):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static void rotateArray(int[] arr, int d) {
    int n = arr.length;
    d = d % n; // In case the rotation exceeds array size

    // Reverse first part of the array
    reverse(arr, 0, n - d - 1);

    // Reverse second part of the array
    reverse(arr, n - d, n - 1);

    // Reverse entire array
    reverse(arr, 0, n - 1);
}

private static void reverse(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example (Left Rotation):</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def rotate_array(arr, d):
    n = len(arr)
    d = d % n  # In case the rotation exceeds array size

    # Reverse first part of the array
    reverse(arr, 0, n - d - 1)

    # Reverse second part of the array
    reverse(arr, n - d, n - 1)

    # Reverse entire array
    reverse(arr, 0, n - 1)

def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1`}
              </pre>
            </div>
          </section>

          {/* Sorting Techniques */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-700">2. Sorting Techniques</h2>

            {/* Bubble Sort */}
            <h3 className="text-xl font-semibold text-green-600">Bubble Sort</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
`}
              </pre>
            </div>

            {/* Selection Sort */}
            <h3 className="text-xl font-semibold text-green-600">Selection Sort</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>Selection Sort is an in-place comparison-based algorithm. It works by dividing the array into two parts: a sorted part and an unsorted part, and selecting the smallest element from the unsorted part.</p>
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]`}
              </pre>
            </div>

            {/* Insertion Sort */}
            <h3 className="text-xl font-semibold text-green-600">Insertion Sort</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>Insertion Sort builds the sorted array one item at a time. It works similarly to the way you might sort playing cards in your hands.</p>
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`}
              </pre>
            </div>

            {/* Merge Sort */}
            <h3 className="text-xl font-semibold text-green-600">Merge Sort</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p>Merge Sort is a divide-and-conquer algorithm. It divides the array into halves, sorts each half, and then merges them together.</p>
              <h3 className="text-xl font-semibold text-blue-600">Java Code Example:</h3>
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`public static void mergeSort(int[] arr) {
    if (arr.length < 2) return;
    int mid = arr.length / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, arr.length);

    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
}

private static void merge(int[] arr, int[] left, int[] right) {
    int i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-green-600">Python Code Example:</h3>
            <div className="bg-gray-100 p-4 rounded">
              <pre className="bg-gray-200 p-3 rounded overflow-auto text-sm">
{`def merge_sort(arr):
    if len(arr) < 2:
        return
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    merge_sort(left)
    merge_sort(right)
    merge(arr, left, right)

def merge(arr, left, right):
    i = j = k = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
