import React from "react";

export default function AdvancedProblemSolving() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Advanced Problem Solving: Scheduling, Optimization, Game-Based Problems, Caching Strategies
      </h1>

      {/* Introduction to Advanced Problem Solving */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Scheduling and Optimization</h2>
        <p>
          Scheduling and optimization problems typically involve allocating resources or tasks efficiently to achieve
          a desired outcome. These problems can often be modeled using algorithms like **Greedy Algorithms**, **Dynamic Programming**,
          or **Backtracking**, and they are common in real-world applications like job scheduling, task allocation, etc.
        </p>
        <p>
          Optimization refers to finding the best solution, such as minimizing cost or maximizing output, subject to constraints.
        </p>
      </section>

      {/* Resource Allocation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Resource Allocation</h2>
        <p>
          Resource allocation involves assigning resources (such as time, money, or equipment) to tasks in a way that maximizes the overall
          benefit or efficiency. This problem is often seen in applications like CPU scheduling, project planning, and budgeting.
        </p>
        <p>
          Common algorithms used for resource allocation include **Greedy Algorithms**, **Knapsack Problem**, and **Dynamic Programming**.
        </p>
      </section>

      {/* Game-based Problems (Minimax) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Game-Based Problems: Minimax</h2>
        <p>
          The **Minimax Algorithm** is used for decision-making in two-player games, where players take turns making moves. The algorithm
          assumes both players play optimally, and it aims to minimize the possible loss for the worst-case scenario (hence the name "minimax").
        </p>
        <p>
          The algorithm works by recursively exploring all possible moves and selecting the best move based on the game tree.
        </p>
        <h3 className="text-xl font-medium">Java Code Example: Minimax for Tic-Tac-Toe</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class Minimax {
    public static int minimax(char[][] board, int depth, boolean isMaximizingPlayer) {
        int score = evaluate(board);

        // If Maximizer has won, return the evaluated score
        if (score == 10)
            return score;

        // If Minimizer has won, return the evaluated score
        if (score == -10)
            return score;

        // If there are no more moves and it's a tie, return 0
        if (isMovesLeft(board) == false)
            return 0;

        // If it's the maximizer's move
        if (isMaximizingPlayer) {
            int best = -1000;

            // Traverse all the possible moves
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    // Check if the cell is empty
                    if (board[i][j] == '_') {
                        // Make the move
                        board[i][j] = 'X';

                        // Call minimax recursively and choose the maximum value
                        best = Math.max(best, minimax(board, depth + 1, !isMaximizingPlayer));

                        // Undo the move
                        board[i][j] = '_';
                    }
                }
            }
            return best;
        }
        // If it's the minimizer's move
        else {
            int best = 1000;

            // Traverse all the possible moves
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    // Check if the cell is empty
                    if (board[i][j] == '_') {
                        // Make the move
                        board[i][j] = 'O';

                        // Call minimax recursively and choose the minimum value
                        best = Math.min(best, minimax(board, depth + 1, !isMaximizingPlayer));

                        // Undo the move
                        board[i][j] = '_';
                    }
                }
            }
            return best;
        }
    }

    public static boolean isMovesLeft(char[][] board) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == '_')
                    return true;
            }
        }
        return false;
    }

    public static int evaluate(char[][] board) {
        // Check rows for victory
        for (int row = 0; row < 3; row++) {
            if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
                if (board[row][0] == 'X')
                    return 10;
                else if (board[row][0] == 'O')
                    return -10;
            }
        }

        // Check columns for victory
        for (int col = 0; col < 3; col++) {
            if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
                if (board[0][col] == 'X')
                    return 10;
                else if (board[0][col] == 'O')
                    return -10;
            }
        }

        // Check diagonals for victory
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            if (board[0][0] == 'X')
                return 10;
            else if (board[0][0] == 'O')
                return -10;
        }
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            if (board[0][2] == 'X')
                return 10;
            else if (board[0][2] == 'O')
                return -10;
        }

        return 0;
    }
}`}
        </pre>
        
        <h3 className="text-xl font-medium">Python Code Example: Minimax for Tic-Tac-Toe</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def minimax(board, depth, is_maximizing_player):
    score = evaluate(board)

    # If Maximizer has won, return the evaluated score
    if score == 10:
        return score

    # If Minimizer has won, return the evaluated score
    if score == -10:
        return score

    # If there are no more moves and it's a tie
    if not is_moves_left(board):
        return 0

    # Maximizer's move
    if is_maximizing_player:
        best = -1000
        for i in range(3):
            for j in range(3):
                if board[i][j] == '_':
                    board[i][j] = 'X'
                    best = max(best, minimax(board, depth + 1, not is_maximizing_player))
                    board[i][j] = '_'
        return best

    # Minimizer's move
    else:
        best = 1000
        for i in range(3):
            for j in range(3):
                if board[i][j] == '_':
                    board[i][j] = 'O'
                    best = min(best, minimax(board, depth + 1, not is_maximizing_player))
                    board[i][j] = '_'
        return best

def is_moves_left(board):
    for i in range(3):
        for j in range(3):
            if board[i][j] == '_':
                return True
    return False

def evaluate(board):
    for row in range(3):
        if board[row][0] == board[row][1] and board[row][1] == board[row][2]:
            if board[row][0] == 'X':
                return 10
            elif board[row][0] == 'O':
                return -10

    for col in range(3):
        if board[0][col] == board[1][col] and board[1][col] == board[2][col]:
            if board[0][col] == 'X':
                return 10
            elif board[0][col] == 'O':
                return -10

    if board[0][0] == board[1][1] and board[1][1] == board[2][2]:
        if board[0][0] == 'X':
            return 10
        elif board[0][0] == 'O':
            return -10
    if board[0][2] == board[1][1] and board[1][1] == board[2][0]:
        if board[0][2] == 'X':
            return 10
        elif board[0][2] == 'O':
            return -10

    return 0`}
        </pre>
      </section>

      {/* Caching Strategy (LRU) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Caching Strategies: LRU (Least Recently Used)</h2>
        <p>
          **LRU Caching** is a cache eviction policy that removes the least recently used items first when the cache is full. This ensures that
          the most recently accessed items remain in the cache, optimizing performance in scenarios where certain items are accessed frequently.
        </p>
        <h3 className="text-xl font-medium">Java Code Example: LRU Cache</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, V> cache;
    private final LinkedHashMap<K, Long> accessOrder;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.accessOrder = new LinkedHashMap<>();
    }

    public V get(K key) {
        if (!cache.containsKey(key)) return null;
        accessOrder.put(key, System.nanoTime());
        return cache.get(key);
    }

    public void put(K key, V value) {
        if (cache.size() >= capacity) {
            long leastAccessTime = Long.MAX_VALUE;
            K leastAccessedKey = null;

            // Find least recently used item
            for (Map.Entry<K, Long> entry : accessOrder.entrySet()) {
                if (entry.getValue() < leastAccessTime) {
                    leastAccessTime = entry.getValue();
                    leastAccessedKey = entry.getKey();
                }
            }

            cache.remove(leastAccessedKey);
            accessOrder.remove(leastAccessedKey);
        }

        cache.put(key, value);
        accessOrder.put(key, System.nanoTime());
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example: LRU Cache</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move the accessed item to the end
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Remove the old entry
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Pop the first (least recently used) item
            self.cache.popitem(last=False)`}
        </pre>
      </section>
    </div>
  );
}
