import React from "react";
import { useNavigate } from "react-router-dom";

const SavedResourcesPage = () => {
  const navigate = useNavigate();
  const apiUrl =  "https://sherjinag-ai-learning.hf.space";

  return (
    <div className="container">
      <style>{`
        .saved-resources-container {
          font-family: 'Arial', sans-serif;
        }

        .saved-resources-content {
          margin-top: 30px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #004085;
        }

        .pdf-download-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
        }

        .pdf-download-section a {
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .pdf-download-section {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .pdf-download-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="saved-resources-content py-4">
        <h2 className="text-center">Saved Resources</h2>
        <p className="text-center">Access your saved documents and notes here.</p>

        {/* Download Links for PDFs */}
        <div className="pdf-download-section text-center">
          <a href={`${apiUrl}/downloads/download/program.pdf`} download>
            <button className="btn btn-primary m-2">Download Program PDF</button>
          </a>
          <a href={`${apiUrl}/downloads/download/python_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download Python Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/web_dev_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download Web Dev Guide</button>
          </a>
          <a href={`${apiUrl}/downloads/download/ai_lecture_notes.pdf`} download>
            <button className="btn btn-primary m-2">Download AI Lecture Notes</button>
          </a>
          <a href={`${apiUrl}/downloads/download/machine_learning_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download Machine Learning Guide</button>
          </a>
          <a href={`${apiUrl}/downloads/download/interactive_tools.pdf`} download>
            <button className="btn btn-primary m-2">Download Interactive Tools</button>
          </a>
          <a href={`${apiUrl}/downloads/download/data_science_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download Data Science Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/coding_interview_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download Coding Interview Guide</button>
          </a>
          <a href={`${apiUrl}/downloads/download/java_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download Java Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/web_development_notes.pdf`} download>
            <button className="btn btn-primary m-2">Download Web Development Notes</button>
          </a>
          <a href={`${apiUrl}/downloads/download/react_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download React Guide</button>
          </a>
          <a href={`${apiUrl}/downloads/download/js_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download JS Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/database_design_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download Database Design Guide</button>
          </a>
          <a href={`${apiUrl}/downloads/download/python_notes.pdf`} download>
            <button className="btn btn-primary m-2">Download Python Notes</button>
          </a>
          <a href={`${apiUrl}/downloads/download/dsa_notes.pdf`} download>
            <button className="btn btn-primary m-2">Download DSA Notes</button>
          </a>
          <a href={`${apiUrl}/downloads/download/cpp_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download C++ Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/csharp_cheat_sheet.pdf`} download>
            <button className="btn btn-primary m-2">Download C# Cheat Sheet</button>
          </a>
          <a href={`${apiUrl}/downloads/download/advanced_sql_guide.pdf`} download>
            <button className="btn btn-primary m-2">Download Advanced SQL Guide</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SavedResourcesPage;
