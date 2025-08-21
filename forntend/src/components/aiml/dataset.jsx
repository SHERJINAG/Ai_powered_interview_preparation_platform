import React, { useState } from "react";

const DatasetFeatureSelection = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFeatures([...selectedFeatures, value]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== value));
    }
  };

  const checkFeatures = () => {
    const important = ["Glucose", "BloodPressure", "Insulin", "BMI"];
    const irrelevant = selectedFeatures.filter((x) => !important.includes(x));

    if (selectedFeatures.length === 0) {
      setResultMessage("❓ Please select at least one feature to continue.");
      setResultClass("wrong");
    } else if (irrelevant.length > 0) {
      setResultMessage(
        `🚫 You selected irrelevant features: <b>${irrelevant.join(
          ", "
        )}</b><br>Try again by choosing only relevant features.`
      );
      setResultClass("wrong");
    } else {
      setResultMessage(
        "✅ Great! You selected the correct features for training the model."
      );
      setResultClass("correct");
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>🧠 AI/ML Concepts - Module 4: Dataset & Feature Selection</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📘 What is a Dataset?</h2>
        <p>
          A <span style={styles.highlight}>dataset</span> is a structured collection of data used to train and test machine learning models. Each row is an example, and each column is a feature (input) or the target (output).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔍 What are Features?</h2>
        <p>
          <span style={styles.highlight}>Features</span> are the input variables that help the model learn and make predictions.
        </p>
        <p>For example, in a diabetes prediction dataset:</p>
        <ul>
          <li><strong>Glucose</strong>: Sugar level in the blood</li>
          <li><strong>BMI</strong>: Body Mass Index</li>
          <li><strong>Insulin</strong>: Insulin level</li>
          <li><strong>Blood Pressure</strong>: Patient's blood pressure</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Why is Feature Selection Important?</h2>
        <ul>
          <li>✅ Improves accuracy</li>
          <li>⚡ Speeds up training</li>
          <li>🚫 Avoids overfitting and confusion</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎮 Game: Select the Right Features</h2>
        <p><strong>Goal:</strong> Predict if a patient has diabetes. Select only the most relevant features:</p>

        <div style={styles.checkboxGroup}>
          {[
            "Glucose Level",
            "Blood Pressure",
            "Skin Thickness",
            "Favorite Color",
            "Insulin Level",
            "BMI",
            "Pet's Name"
          ].map((label) => {
            const value = label.split(" ")[0];
            return (
              <label key={value} style={styles.label}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleCheckboxChange}
                />{" "}
                {label}
              </label>
            );
          })}
        </div>

        <button style={styles.button} onClick={checkFeatures}>Submit</button>

        <div
          className={`result ${resultClass}`}
          style={{ ...styles.result, color: resultClass === "correct" ? "green" : "red" }}
          dangerouslySetInnerHTML={{ __html: resultMessage }}
        />
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f0f8ff",
    padding: "20px",
    color: "#333",
    textAlign: "center"
  },
  title: {
    color: "#1e88e5"
  },
  section: {
    background: "#fff",
    margin: "20px auto",
    padding: "20px",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  sectionTitle: {
    color: "#2e7d32"
  },
  highlight: {
    backgroundColor: "#e3f2fd",
    padding: "5px",
    borderRadius: "4px"
  },
  checkboxGroup: {
    margin: "15px 0"
  },
  label: {
    display: "block",
    margin: "5px 0"
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    background: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  result: {
    marginTop: "20px",
    fontSize: "1.1em",
    fontWeight: "bold"
  }
};

export default DatasetFeatureSelection;
