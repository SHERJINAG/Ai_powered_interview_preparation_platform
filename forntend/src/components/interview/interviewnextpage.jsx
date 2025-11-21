import React, { useState } from 'react';

const App = () => {
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState('Software Engineer');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [page, setPage] = useState('home'); // home or interview
  const [sessionId, setSessionId] = useState('');
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [recognizing, setRecognizing] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const roles = [
    'Software Engineer', 'Frontend Developer', 'Backend Developer',
    'Full Stack Developer', 'Machine Learning Engineer', 'Data Scientist',
    'DevOps Engineer', 'AI Researcher', 'Cybersecurity Analyst',
    'Cloud Engineer', 'System Architect', 'Database Administrator'
  ];

const handleResumeUpload = async (e) => {
  const file = e.target.files[0];
  setResume(file);
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('https://sharjinag-ai_learning.hf.space/upload_resume/', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();

  // ✅ Store session ID for next step
  setSessionId(data.session_id);

  setName(data.resume_info.name || 'Candidate');
  setSkills((data.resume_info.skills || []).join(', ')); // Turn skills array into comma-separated string
};

const startInterview = async () => {
  if (!sessionId || !role) {
    alert("Missing session ID or role.");
    return;
  }

  const formData = new FormData();
  formData.append('session_id', sessionId); // ✅ Must be sent!
  formData.append('role', role);            // ✅ Required in backend

  // Debugging: log what you're sending
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const res = await fetch('https://sharjinag-ai_learning.hf.space/start_interview/', {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Failed to start interview:", res.status, errText);
    alert("Something went wrong. Check console for details.");
    return;
  }

  const data = await res.json();
  setQuestion(data.question);

  speak(`Welcome ${data.name}. You are interviewing for the role of ${data.role}.`);
  setTimeout(() => speak(`Here are your skills: ${data.skills.join(', ')}`), 2000);
  setTimeout(() => speak(data.question), 4000);

  setPage('interview');
};


  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onstart = () => setRecognizing(true);
    recognition.onend = () => setRecognizing(false);

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setUserAnswer(finalTranscript);
    };

    recognition.start();
    window.recognitionInstance = recognition; // store globally for stop
  };

  const stopListening = async () => {
    if (window.recognitionInstance) {
      window.recognitionInstance.stop();
      setRecognizing(false);

      // Send response to backend
      const res = await fetch('https://sharjinag-ai_learning.hf.space/continue_interview/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          user_response: userAnswer
        })
      });

      const data = await res.json();
      setQuestion(data.question);
      setUserAnswer('');
      speak(data.question);
    }
  };

  const endInterview = async () => {
    const formData = new FormData();
    formData.append('session_id', sessionId);

    const res = await fetch('https://sharjinag-ai_learning.hf.space/end_interview/', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    setFeedback(data);
    speak(`Your interview rating is ${data.rating}.`);
  };

  return (
    <div className="container">
      {page === 'home' && (
        <>
          <h1>AI Interview Trainer</h1>
          <label>Upload Resume:</label>
          <input type="file" onChange={handleResumeUpload} />

          <label>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {roles.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
          </select>

          {resume && role && (
            <button onClick={startInterview}>Start Interview</button>
          )}
        </>
      )}

      {page === 'interview' && (
        <>
          <h2>Welcome {name}</h2>
          <p><strong>Interviewing for:</strong> {role}</p>
          
          <hr />
          <h3>Question:</h3>
          <p>{question}</p>

         <button onClick={recognizing ? stopListening : startListening}>
  {recognizing ? '🛑 Stop Answering' : '🎤 Start Answering'}
</button>


          <p><strong>Speaking:</strong> {userAnswer}</p>

          <button onClick={endInterview}>End Interview</button>
        </>
      )}

      {feedback && (
        <div className="feedback-box">
          <h3>Feedback:</h3>
          <p><strong>Rating:</strong> {feedback.rating}</p>
          <p><strong>Strengths:</strong></p>
          <ul>{feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
          <p><strong>Improvements:</strong></p>
          <ul>{feedback.improvements.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}

      <style>{`
        .container {
          font-family: sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 10px;
        }
        label {
          display: block;
          margin-top: 15px;
        }
        input, select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 6px;
        }
        button {
          margin-top: 15px;
          padding: 10px 15px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        .feedback-box {
          margin-top: 20px;
          background: #e1f5fe;
          padding: 15px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default App;
