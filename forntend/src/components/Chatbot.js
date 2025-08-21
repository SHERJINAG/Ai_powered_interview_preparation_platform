import React, { useState } from 'react';

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');
    setChatHistory(prevHistory => [
      ...prevHistory,
      { user: question, bot: '...' }
    ]);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
      setChatHistory(prevHistory => [
        ...prevHistory.slice(0, -1),
        { user: question, bot: data.answer }
      ]);
    } catch (error) {
      setAnswer("❌ Sorry, I couldn't fetch the answer.");
      setChatHistory(prevHistory => [
        ...prevHistory.slice(0, -1),
        { user: question, bot: "❌ Sorry, I couldn't fetch the answer." }
      ]);
    } finally {
      setLoading(false);
      setQuestion('');  // Clear input after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Ask Me Anything 🤖</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question..."
            className="chatbot-input"
          />

          <button onClick={handleAsk} className="ask-btn">Ask</button>

          <div className="response-box">
            {loading ? <p className="loading">⏳ Loading...</p> : null}

            <div className="chat-history">
              {chatHistory.map((chat, index) => (
                <div key={index} className="chat-message">
                  <p className="user-message">You: {chat.user}</p>
                  <p className="bot-message">Bot: {chat.bot}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;


// CSS-in-JS (Styled using React component)
const style = document.createElement('style');
style.innerHTML = `
  .chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }

  .chat-icon {
    font-size: 32px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .chatbot-box {
    width: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    padding: 15px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .chatbot-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .chatbot-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .ask-btn {
    width: 100%;
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .response-box {
    margin-top: 10px;
    max-height: 200px;
    overflow-y: auto;
  }

  .chat-history {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat-message {
    padding: 8px;
    border-radius: 6px;
    background-color: #f9f9f9;
  }

  .user-message {
    font-weight: bold;
    color: #007bff;
  }

  .bot-message {
    margin-top: 5px;
    color: #333;
  }

  .loading {
    color: #555;
  }
`;

document.head.appendChild(style);
