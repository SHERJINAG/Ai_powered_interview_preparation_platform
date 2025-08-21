import React, { useEffect, useState } from "react";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState([]);

  // Load problems from JSON
  useEffect(() => {
    fetch("/problem.json")
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
        setFilteredProblems(data);
      })
      .catch((err) => console.error("Failed to load problems", err));
  }, []);

  // Load solved from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("solvedProblems")) || [];
    setSolvedProblems(stored);
  }, []);

  // Save to localStorage
  const toggleSolved = (title) => {
    let updated = [...solvedProblems];
    if (updated.includes(title)) {
      updated = updated.filter((item) => item !== title);
    } else {
      updated.push(title);
    }
    setSolvedProblems(updated);
    localStorage.setItem("solvedProblems", JSON.stringify(updated));
  };

  // Get unique tags
  const allTags = [
    ...new Set(
      problems.flatMap((p) => [...(p.data_structures || []), ...(p.concepts || [])])
    ),
  ];

  // Filter logic
  useEffect(() => {
    let filtered = problems.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(search.toLowerCase()) ||
        problem.approach.toLowerCase().includes(search.toLowerCase());

      const matchesTags = selectedTags.every((tag) =>
        [...(problem.data_structures || []), ...(problem.concepts || [])].includes(tag)
      );

      return matchesSearch && matchesTags;
    });
    setFilteredProblems(filtered);
  }, [search, selectedTags, problems]);

  // Toggle tag filter
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🧠 LeetCode Problem Solver</h2>

      <input
        type="text"
        placeholder="🔍 Search problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          margin: "10px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginBottom: "10px" }}>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: selectedTags.includes(tag) ? "#007bff" : "#eee",
              color: selectedTags.includes(tag) ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProblems.map((problem, index) => (
          <li
            key={index}
            style={{
              background: "#f9f9f9",
              marginBottom: "10px",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3>
              <a href={problem.url} target="_blank" rel="noopener noreferrer">
                {problem.title}
              </a>
            </h3>
            <p>🧠 Approach: {problem.approach}</p>
            <p>📚 DS: {problem.data_structures?.join(", ")}</p>
            <p>🔍 Concepts: {problem.concepts?.join(", ")}</p>
            <button
              onClick={() => toggleSolved(problem.title)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: solvedProblems.includes(problem.title)
                  ? "#28a745"
                  : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {solvedProblems.includes(problem.title) ? "✅ Solved" : "Mark as Solved"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
