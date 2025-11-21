import React, { useState } from 'react';
import axios from 'axios';

export default function InterviewApp() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [started, setStarted] = useState(false);
  const [final, setFinal] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [log, setLog] = useState([]);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const form = new FormData();
    form.append('file', file);
    try {
      await axios.post('https://sherjinag-ai-learning.hf.space/upload-resume', form);
      const res = await axios.get('https://sherjinag-ai-learning.hf.space/get-resume-info');
      setData(res.data);
      setStarted(false);
      setQuestion('');
      setAnswer('');
      setFinal(null);
      setQuestionIndex(0);
      setLog([]);
    } catch {
      alert('Upload failed');
    }
    setLoading(false);
  };

  const handleStartInterview = async () => {
    try {
      const res = await axios.post('https://sherjinag-ai-learning.hf.space/start-interview', {
        Name: data?.Name,
        Email: data?.Email,
        Phone: data?.Phone,
        Education: data?.Education || [],
        Skills: data?.Skills || [],
        Projects: data?.Projects || [],
        Interests: data?.Interests || [],
      });
      setQuestion(res.data.question);
      setStarted(true);
    } catch (err) {
      console.error("Error starting interview:", err);
      alert("Failed to start interview.");
    }
  };

const handleSubmitAnswer = async () => {
  if (!answer.trim()) return;

  try {
    const res = await axios.post('https://sherjinag-ai-learning.hf.space/next-question', {
      answer,
      prev_question: question
    });

    const nextQuestion = res.data.question?.trim();

    setLog(prev => [...prev, { question, answer, ...res.data }]);
    setAnswer('');
    setQuestionIndex(prev => prev + 1);

    // If interview is complete (backend sends "Interview Complete.")
    if (!nextQuestion || nextQuestion.toLowerCase().includes("interview complete")) {
      setQuestion('');
      setStarted(false);
      alert("Interview complete. Fetching final feedback...");
      await endInterview();  // Auto-call final feedback here
    } else {
      setQuestion(nextQuestion);
    }

  } catch (err) {
    console.error(err);
    alert("Error processing answer.");
  }
};



  const endInterview = async () => {
    try {
      const res = await axios.get('https://sherjinag-ai-learning.hf.space/get-interview-feedback');
      setFinal(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch final feedback.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        AI Mock Interview
      </h1>

      <div className="mb-6">
        <input
          type="file"
          accept="application/pdf"
          onChange={e => setFile(e.target.files[0])}
          className="file-input"
        />
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="upload-btn"
        >
          {loading ? 'Processing...' : 'Upload Resume'}
        </button>
      </div>

      {data?.Name && !started && (
        <div className="result-box mb-6 text-center">
          <p className="text-xl font-semibold mb-2">Welcome, {data.Name}!</p>
          <p className="text-md mb-2">Skills: {data.Skills.join(', ')}</p>
          <button onClick={handleStartInterview} className="start-btn">
            🚀 Start Interview
          </button>
        </div>
      )}

      {started && question && (
        <section className="result-box mb-6">
          <h2 className="section-title">Question {questionIndex + 1}</h2>
          <p className="font-medium mb-2">{question}</p>
          <textarea
            rows={3}
            placeholder="Your answer..."
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="answer-input"
          />
          <button onClick={handleSubmitAnswer} className="score-btn">
            Submit Answer
          </button>
        </section>
      )}

      {started && !question && (
  <div className="text-center mt-6">
    <button onClick={endInterview} className="end-btn">
      🛑 Get Final Feedback
    </button>
  </div>
)}

{final && (
  <section className="result-box mt-8">
    <h2 className="section-title">📊 Final Feedback</h2>
    <p><strong>🧪 Technical Avg:</strong> {final.technical_avg?.toFixed(2)}%</p>
    <p><strong>💬 HR Avg:</strong> {final.hr_avg?.toFixed(2)}%</p>
    <p><strong>📘 Scenario Avg:</strong> {final.scenario_avg?.toFixed(2)}%</p>
    <p><strong>🧮 Total:</strong> {final.overall}</p>
    <p className="mt-2">{final.feedback}</p>

    {["technical", "hr", "scenario"].map((section) => (
      <div key={section} className="mt-6">
        <h3 className="section-subtitle">📂 {section.toUpperCase()} ROUND</h3>
        {final.section_logs[section].length === 0 ? (
          <p>No questions answered in this section.</p>
        ) : (
          final.section_logs[section].map((q, index) => (
            <div key={index} className="question-box mb-4">
              <p><strong>Q{index + 1}:</strong> {q.question}</p>
              
              {section === "technical" && (
                <>
                  <p><strong>📌 Expected:</strong> {q.expected_answer}</p>
                  {q.follow_up_question && (
                    <p><strong>🔄 Follow-up:</strong> {q.follow_up_question}</p>
                  )}
                </>
              )}
              <p><strong>📈 Similarity:</strong> {q.similarity_score}</p>
              <p><strong>🧠 Emotion:</strong> {q.emotion}</p>
            </div>
          ))
        )}
      </div>
    ))}
  </section>
)}


      <style>{`
        .file-input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: #f9f9f9;
          cursor: pointer;
          width: 60%;
        }
        .upload-btn, .start-btn, .end-btn, .score-btn {
          margin-left: 12px;
          padding: 8px 16px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .upload-btn:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }
        .upload-btn:hover:not(:disabled), .start-btn:hover, .end-btn:hover, .score-btn:hover {
          background: #1e40af;
        }
        .result-box {
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .section-title {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .answer-input {
          width: 100%;
          padding: 8px;
          margin-top: 4px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
        }
      `}</style>
    </div>
  );
}
