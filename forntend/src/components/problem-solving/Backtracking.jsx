import React from "react";

export default function Backtracking() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Backtracking Algorithms
      </h1>

      {/* Introduction to Backtracking */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">What is Backtracking?</h2>
        <p>
          Backtracking is a general algorithm for finding solutions to computational problems
          by systematically trying all possible candidates and abandoning a candidate (backtracking)
          as soon as it is determined that it cannot lead to a valid solution.
        </p>
        <p>
          It's typically used for problems where the solution needs to be built incrementally and
          where decisions can be undone if they lead to a dead end.
        </p>
      </section>

      {/* Example 1: N-Queens Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Example 1: N-Queens Problem</h2>
        <p>
          The N-Queens problem is a classical backtracking problem where you must place N queens on
          an NxN chessboard such that no two queens threaten each other. This means that no two queens
          can share the same row, column, or diagonal.
        </p>
        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class NQueens {
    static int N = 4; // Size of the chessboard

    // A utility function to print the solution
    static void printSolution(int[][] board) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    // A utility function to check if a queen can be placed at board[row][col]
    static boolean isSafe(int[][] board, int row, int col) {
        // Check this column on upper side
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 1) {
                return false;
            }
        }

        // Check upper diagonal on left side
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        // Check upper diagonal on right side
        for (int i = row, j = col; i >= 0 && j < N; i--, j++) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        return true;
    }

    // A recursive utility function to solve N-Queens problem
    static boolean solveNQUtil(int[][] board, int row) {
        // Base case: If all queens are placed, return true
        if (row >= N) {
            return true;
        }

        // Try placing this queen in all columns one by one
        for (int col = 0; col < N; col++) {
            // Check if queen can be placed on board[row][col]
            if (isSafe(board, row, col)) {
                // Place the queen on the board
                board[row][col] = 1;

                // Recur to place the rest of the queens
                if (solveNQUtil(board, row + 1)) {
                    return true;
                }

                // If placing queen in board[row][col] doesn't lead to a solution, backtrack
                board[row][col] = 0;
            }
        }

        return false;
    }

    // Solves the N-Queens problem using Backtracking
    static boolean solveNQ() {
        int[][] board = new int[N][N];
        if (!solveNQUtil(board, 0)) {
            System.out.println("Solution does not exist");
            return false;
        }

        printSolution(board);
        return true;
    }

    public static void main(String[] args) {
        solveNQ();
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def isSafe(board, row, col, N):
    # Check column
    for i in range(row):
        if board[i][col] == 1:
            return False

    # Check left diagonal
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False

    # Check right diagonal
    for i, j in zip(range(row, -1, -1), range(col, N)):
        if board[i][j] == 1:
            return False

    return True

def solveNQUtil(board, row, N):
    if row >= N:
        return True
    
    for col in range(N):
        if isSafe(board, row, col, N):
            board[row][col] = 1
            if solveNQUtil(board, row + 1, N):
                return True
            board[row][col] = 0  # Backtrack
    
    return False

def solveNQ(N):
    board = [[0] * N for _ in range(N)]
    if not solveNQUtil(board, 0, N):
        print("Solution does not exist")
        return False
    
    for row in board:
        print(" ".join(str(x) for x in row))
    return True

solveNQ(4)`}
        </pre>
      </section>

      {/* Example 2: Sudoku Solver */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Example 2: Sudoku Solver</h2>
        <p>
          The Sudoku Solver problem is another example where we can use backtracking to find the solution
          to a given Sudoku puzzle. The idea is to fill the empty cells with digits from 1 to 9 such that
          each row, each column, and each of the nine 3x3 subgrids contain all the digits from 1 to 9.
        </p>

        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`public class SudokuSolver {
    static final int N = 9; // Size of the grid

    // A utility function to print the Sudoku grid
    static void printGrid(int[][] board) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    // A function to check if it's safe to place a number in the given position
    static boolean isSafe(int[][] board, int row, int col, int num) {
        // Check if the number is in the row
        for (int i = 0; i < N; i++) {
            if (board[row][i] == num) {
                return false;
            }
        }

        // Check if the number is in the column
        for (int i = 0; i < N; i++) {
            if (board[i][col] == num) {
                return false;
            }
        }

        // Check if the number is in the 3x3 subgrid
        int startRow = row - row % 3, startCol = col - col % 3;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i + startRow][j + startCol] == num) {
                    return false;
                }
            }
        }

        return true;
    }

    // A recursive utility function to solve the Sudoku puzzle using backtracking
    static boolean solveSudoku(int[][] board) {
        for (int row = 0; row < N; row++) {
            for (int col = 0; col < N; col++) {
                if (board[row][col] == 0) {  // Find an empty cell
                    for (int num = 1; num <= 9; num++) {
                        if (isSafe(board, row, col, num)) {
                            board[row][col] = num;
                            if (solveSudoku(board)) {
                                return true;
                            }
                            board[row][col] = 0;  // Backtrack
                        }
                    }
                    return false;
                }
            }
        }
        return true;  // If all cells are filled correctly
    }

    public static void main(String[] args) {
        int[][] board = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };

        if (solveSudoku(board)) {
            printGrid(board);
        } else {
            System.out.println("No solution exists");
        }
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def isSafe(board, row, col, num):
    # Check row
    for x in range(9):
        if board[row][x] == num:
            return False

    # Check column
    for x in range(9):
        if board[x][col] == num:
            return False

    # Check 3x3 subgrid
    startRow, startCol = row - row % 3, col - col % 3
    for i in range(3):
        for j in range(3):
            if board[i + startRow][j + startCol] == num:
                return False

    return True

def solveSudoku(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:  # Find an empty cell
                for num in range(1, 10):
                    if isSafe(board, row, col, num):
                        board[row][col] = num
                        if solveSudoku(board):
                            return True
                        board[row][col] = 0  # Backtrack
                return False
    return True

def printBoard(board):
    for row in board:
        print(" ".join(str(num) for num in row))

board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

if solveSudoku(board):
    printBoard(board)
else:
    print("No solution exists")
`}
        </pre>
      </section>
    </div>
  );
}
