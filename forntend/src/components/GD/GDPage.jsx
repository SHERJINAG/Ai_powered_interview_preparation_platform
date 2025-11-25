import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const SPEAKING_GAP = 5000;


const participants = [
  { name: "You", isUser: true },
  { name: "Meera" },
  { name: "Tara" },
  { name: "Ravi" }
];



const TOPIC_LIST = [
  "Impact of AI on jobs",
  "Climate change is real",
  "Online vs offline education",
  "Importance of mental health",
  "Should coding be mandatory?",
  "Future of electric vehicles",
  "Can India become a 5 trillion economy?",
  "Is social media harmful?",
  "Space tourism – a dream or reality?",
  "Work from home – boon or bane?"
];

function GDPage() {
  const [userIsSpeaking, setUserIsSpeaking] = useState(false); 
  const [selectedTopic, setSelectedTopic] = useState("");
  const [topic, setTopic] = useState("");
  const [gdStarted, setGdStarted] = useState(false);
  const [chat, setChat] = useState([]);
  const [gdEnded, setGdEnded] = useState(false);
  const [finalScores, setFinalScores] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [lastSpeaker, setLastSpeaker] = useState(null);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [canRaiseHand, setCanRaiseHand] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
const [textInput, setTextInput] = useState("");
const [showTextBox, setShowTextBox] = useState(false);


  // useRef to persist recognition instance
  const recognitionRef = useRef(null);

  const startGD = async () => {
    try {
      await axios.post("https://sherjinag-ai-learning.hf.space/start", { topic: selectedTopic });
      setTopic(selectedTopic);
      setGdStarted(true);
      startRaiseHandTimer();
    } catch (error) {
      console.error("Failed to start GD", error);
    }
  };

  const speakText = (text, callback) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      setIsAiSpeaking(false);
      if (callback) callback();
    };
    setIsAiSpeaking(true);
    speechSynthesis.speak(utterance);
  };

const startRaiseHandTimer = () => {
  setHandRaised(false);
  setCanRaiseHand(true);
  setShowOptions(true);

  setTimeout(() => {
    if (!handRaised && !userIsSpeaking) {
      setCanRaiseHand(false);
      setShowOptions(false);
      handleAiSpeak();
    }
  }, SPEAKING_GAP);
};


  const triggerRaiseHandWindow = () => {
    setHandRaised(false);
    setCanRaiseHand(true);
    setShowOptions(true);
    setTimeout(() => {
      if (!handRaised) {
        setShowOptions(false);
        setCanRaiseHand(false);
        handleAiSpeak();
      }
    }, SPEAKING_GAP);
  };

 const handleUserRaiseHand = () => {
  if (!canRaiseHand || isAiSpeaking) return;
  setHandRaised(true);
  setCanRaiseHand(false);
  setShowOptions(false);
  setUserIsSpeaking(true);  // Track user is now speaking
  startListening();
};


  const startListening = () => {
    setListening(true);
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser.");
      setListening(false);
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript;
      setTranscript((prev) => prev + " " + result);
    };
    recognitionRef.current.onend = () => {
      setListening(false);
    };
    recognitionRef.current.start();
  };

const stopListeningAndSend = async () => {
  if (recognitionRef.current) {
    recognitionRef.current.stop();
  }
  setListening(false);
  const text = transcript.trim();
  setTranscript("");
  setUserIsSpeaking(false); // Mark user done speaking

  if (text) {
    const res = await axios.post("https://sherjinag-ai-learning.hf.space/speak", { text });
    const msg = { speaker: "You", message: text, score: res.data.score };
    setChat((prev) => [...prev, msg]);
    setCurrentSpeaker("You");
    setLastSpeaker("You");

    // Wait before triggering next AI response
    setTimeout(() => {
      setCurrentSpeaker(null);
      triggerRaiseHandWindow();
    }, SPEAKING_GAP);
  }
};

const sendTypedMessage = async () => {
  const text = textInput.trim();
  if (!text) return;

  setShowTextBox(false);
  setTextInput("");
  setUserIsSpeaking(false);

  const res = await axios.post("https://sherjinag-ai-learning.hf.space/speak", { text });

  const msg = { speaker: "You", message: text, score: res.data.score };
  setChat((prev) => [...prev, msg]);
  setCurrentSpeaker("You");
  setLastSpeaker("You");

  setTimeout(() => {
    setCurrentSpeaker(null);
    triggerRaiseHandWindow();
  }, SPEAKING_GAP);
};

  const handleAiSpeak = async () => {
    try {
      const res = await axios.get("https://sherjinag-ai-learning.hf.space/ai_speak");
      const { name, response, score } = res.data;
      setCurrentSpeaker(name);
      setLastSpeaker(name);
      const msg = { speaker: name, message: response, score };
      setChat((prev) => [...prev, msg]);
      speakText(response, () => {
        setCurrentSpeaker(null);
        triggerRaiseHandWindow();
      });
    } catch (error) {
      console.error("AI speak failed", error);
    }
  };

  const endGd = async () => {
    try {
      const res = await axios.get("https://sherjinag-ai-learning.hf.space/end");
      setFinalScores(res.data.final_scores);
      setFeedback(res.data.feedback);
      setGdEnded(true);
    } catch (error) {
      console.error("Failed to end GD", error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>🧠 Group Discussion</h1>

      {!gdStarted && (
        <>
          <h2>Select a Topic:</h2>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={{ padding: 10, marginBottom: 20 }}
          >
            <option value="">-- Choose Topic --</option>
            {TOPIC_LIST.map((t, idx) => (
              <option key={idx} value={t}>
                {t}
              </option>
            ))}
          </select>
          <br />
          <button
            disabled={!selectedTopic}
            onClick={startGD}
            style={{ padding: 10, backgroundColor: "#34A853", color: "white", border: "none", borderRadius: 5 }}
          >
            🚀 Start GD
          </button>
        </>
      )}

      {gdStarted && (
        <>
          <h2>Topic: {topic}</h2>

          {!gdEnded ? (
            <>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
                {participants.map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 200,
                      padding: 15,
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      border: p.name === lastSpeaker ? "3px solid #4285F4" : "1px solid #ccc",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      textAlign: "center"
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "#4285F4",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                        margin: "0 auto 10px"
                      }}
                    >
                      {p.name.charAt(0)}
                    </div>
                    <b>{p.name}</b>
                    {p.name === "You" && canRaiseHand && showOptions && (
  <div style={{ marginTop: 10 }}>
    <button
      onClick={handleUserRaiseHand}
      style={{
        padding: 6,
        backgroundColor: "#34A853",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        marginBottom: 6,
        width: "100%"
      }}
    >
      🎤 Speak (Voice)
    </button>

    <button
      onClick={() => {
        setShowTextBox(true);
        setCanRaiseHand(false);
        setShowOptions(false);
        setUserIsSpeaking(true);
      }}
      style={{
        padding: 6,
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        width: "100%"
      }}
    >
      ✍ Type Response
    </button>
  </div>
)}

                  </div>
                ))}
              </div>

              <div style={{ marginTop: 30 }}>
                {currentSpeaker && (
                  <h3 style={{ textAlign: "center", color: "#d93025" }}>{currentSpeaker} is speaking...</h3>
                )}
                {!currentSpeaker && canRaiseHand && showOptions && (
                  <h4 style={{ textAlign: "center", color: "#555" }}>⏳ You have 5 seconds to raise your hand</h4>
                )}
              </div>

              {listening && (
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <p>
                    <b>🎤 Listening...</b>
                  </p>
                  <p>{transcript}</p>
                  <button
                    onClick={stopListeningAndSend}
                    style={{
                      padding: 8,
                      backgroundColor: "#ea4335",
                      color: "#fff",
                      border: "none",
                      borderRadius: 5
                    }}
                  >
                    🛑 Finish Speech
                  </button>
                </div>
              )}
{showTextBox && (
  <div style={{ textAlign: "center", marginTop: 20 }}>
    <textarea
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      rows={4}
      style={{
        width: "90%",
        padding: 10,
        borderRadius: 6,
        border: "1px solid #ccc"
      }}
      placeholder="Type your response..."
    ></textarea>

    <br />

    <button
      onClick={sendTypedMessage}
      style={{
        marginTop: 10,
        padding: 8,
        backgroundColor: "#34A853",
        color: "#fff",
        border: "none",
        borderRadius: 5,
        cursor: "pointer"
      }}
    >
      📤 Send Response
    </button>
  </div>
)}


              <div
                style={{
                  marginTop: 30,
                  background: "#f0f0f0",
                  padding: 20,
                  borderRadius: 10,
                  maxHeight: "200px",
                  overflowY: "scroll"
                }}
              >
                {chat.map((c, idx) => (
                  <div key={idx} style={{ marginBottom: 10 }}>
                    <b>{c.speaker}:</b> {c.message} <i>({c.score}/10)</i>
                  </div>
                ))}
              </div>


              <div style={{ textAlign: "center", marginTop: 30 }}>
                <button
                  onClick={endGd}
                  style={{
                    padding: 8,
                    backgroundColor: "#fbbc05",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer"
                  }}
                >
                  🛑 End GD
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>🏆 Final Scores</h2>
              {finalScores.map((p, idx) => (
                <div key={idx}>
                  {p.name}: {p.score} points
                </div>
              ))}
              <h3>🧑‍🎓 Feedback: {feedback}</h3>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default GDPage;
