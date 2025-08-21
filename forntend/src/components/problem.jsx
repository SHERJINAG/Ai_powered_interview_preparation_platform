import React from "react";
import { Link } from "react-router-dom";

const topics = [
  "IntervalProblem", "Backtracking", "GreedyAlgorithm", "AdvancedProblemPatterns",
  "DPBitManipulatio", "DPSubsetsBitmas", "DP2DExamples", "DP1DExamples",
  "GraphAlgorithms", "GraphAlgorithms1", "GraphTraversal", "GraphRepresentations",
  "SegmentFenwickTrees", "DisjointSetUnio", "HeapPriorityQueu", "TreeExamples",
  "StacksQueuesLinkedLists", "DataStructures", "BitManipulation", "MathematicalThinking",
  "RecursionBacktracking", "SortingAndStackProblems", "HashingForLooku",
  "ProblemSolvingPatterns", "PatternMatchingAlgorithms", "StringManipulationAdvanced",
  "StringManipulation", "ArrayOperations", "PrefixSuffixSum", "ArrayStringTechniques",
  "MathBasedProblem", "ArraysAndListsTutorial", "PatternPrintingTutorial",
  "StringManipulationTutorial", "SearchAlgorithmsTutorial", "StacksQueuesTutorial",
  "FunctionsAndModularProgramming", "ConditionalsAndLoops", "ProgrammingBasic",
  "ProblemAnalysisLesson", "LearnProblemSolving","ProblemList"
].reverse();

// Format PascalCase to readable text
const formatTopic = (topic) =>
  topic.replace(/([A-Z])/g, " $1").trim();

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧠 Problem Solving Dashboard</h1>
      <div style={styles.listContainer}>
        {topics.map((topic, index) => (
          <Link
            key={index}
            to={`/problem-solving/${topic.replace(/\s+/g, "-")}`}
            style={styles.card}
          >
            <span>{formatTopic(topic)}</span>
            <span style={styles.arrow}>&#8250;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Embedded CSS styles
const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e40af",
    marginBottom: "32px",
  },
  listContainer: {
    maxWidth: "700px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "16px",
    textDecoration: "none",
    color: "#1f2937",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.2s, box-shadow 0.2s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  arrow: {
    fontSize: "20px",
    color: "#2563eb",
  },
};

export default Dashboard;
