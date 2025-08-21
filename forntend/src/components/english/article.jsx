import React, { useEffect, useState } from "react";

const App = () => {
  const [muted, setMuted] = useState(false);
  const [quizResult, setQuizResult] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [articleIndex, setArticleIndex] = useState(0);
  const [tagFeedback, setTagFeedback] = useState("");
  const [articleFeedback, setArticleFeedback] = useState("");

  const tagData = [
    {
      sentence: "He is a teacher",
      correctTag: "isn't he?",
      rule: "Use negative tag for positive sentence with correct verb and subject.",
      example: "She is happy, isn't she?"
    },
    {
      sentence: "They aren’t coming",
      correctTag: "are they?",
      rule: "Use positive tag for negative sentence. Match verb tense.",
      example: "You aren't ready, are you?"
    }
  ];

  const articleData = [
    {
      sentence: "___ orange is juicy.",
      correct: "An",
      rule: "Use 'An' before vowels (a, e, i, o, u)",
      example: "An apple a day keeps the doctor away."
    },
    {
      sentence: "___ cat is on the table.",
      correct: "The",
      rule: "'The' is used when referring to a specific thing.",
      example: "The sun rises in the east."
    }
  ];

  const speak = (text) => {
    if (!muted) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const speakTagRules = () => {
    speak("If a sentence is positive, use a negative question tag. If it’s negative, use a positive one. Like: She is a teacher, isn’t she? They don’t eat rice, do they?");
  };

  const speakArticleRules = () => {
    speak("Use a before consonants, an before vowels, and the for specific things. Like: a car, an apple, the sun.");
  };

  const checkAnswer = (answer) => {
    if (answer === "an") {
      setQuizResult("✅ Correct! It's 'an' because orange starts with a vowel sound.");
      speak("Correct! We say an orange.");
    } else {
      setQuizResult("❌ Oops! Try again. Remember: 'an' before vowels.");
      speak("Oops! That's not right. Try again.");
    }
  };

  const loadTag = () => {
    setTagFeedback("");
  };

  const loadArticle = () => {
    setArticleFeedback("");
  };

  const evaluateTag = (selected) => {
    const q = tagData[tagIndex];
    if (selected === q.correctTag) {
      setTagFeedback(`✅ Correct!\nRule: ${q.rule}\nExample: ${q.example}`);
      speak("Correct tag!");
    } else {
      setTagFeedback(`❌ Incorrect!\nCorrect tag: ${q.correctTag}\nRule: ${q.rule}\nExample: ${q.example}`);
      speak("That's not right. Try again.");
    }
  };

  const evaluateArticle = (selected) => {
    const q = articleData[articleIndex];
    if (selected === q.correct) {
      setArticleFeedback(`✅ Correct!\nRule: ${q.rule}\nExample: ${q.example}`);
      speak("Correct article!");
    } else {
      setArticleFeedback(`❌ Incorrect!\nCorrect article: ${q.correct}\nRule: ${q.rule}\nExample: ${q.example}`);
      speak("That's not correct.");
    }
  };

  useEffect(() => {
    loadTag();
    loadArticle();
  }, [tagIndex, articleIndex]);

  return (
    <div className="container">
      <h1>📚 AI Grammar Game</h1>
      <button onClick={() => setMuted(!muted)} className="mute-btn">
        {muted ? "🔇 Unmute" : "🔊 Mute"}
      </button>

      {/* Question Tag Rules */}
      <section className="card">
        <h2>🔹 Question Tags</h2>
        <p><strong>Rule:</strong> Add a small question at the end of a sentence.</p>
        <p>🧱 Positive ➡️ Use negative tag</p>
        <p>🧱 Negative ➡️ Use positive tag</p>
        <ul className="examples">
          <li>She is a doctor, <strong>isn't she?</strong></li>
          <li>They don’t like milk, <strong>do they?</strong></li>
        </ul>
        <button onClick={speakTagRules}>🔊 Hear Rules</button>
      </section>

      {/* Article Rules */}
      <section className="card">
        <h2>🔸 Articles: <span className="highlight">a</span>, <span className="highlight">an</span>, <span className="highlight">the</span></h2>
        <p><strong>‘a’</strong> ➡️ Before consonant sounds</p>
        <p><strong>‘an’</strong> ➡️ Before vowel sounds</p>
        <p><strong>‘the’</strong> ➡️ Before specific/known things</p>
        <ul className="examples">
          <li>a cat, a car, a boy</li>
          <li>an apple, an umbrella</li>
          <li>the sun, the moon</li>
        </ul>
        <button onClick={speakArticleRules}>🔊 Hear Article Rules</button>
      </section>

      {/* Quick Quiz */}
      <section className="card quiz">
        <h3>🎮 Quick Quiz</h3>
        <p>Choose the correct article:</p>
        <p><strong>___ orange is on the table.</strong></p>
        {["a", "an", "the"].map(opt => (
          <button key={opt} onClick={() => checkAnswer(opt)}>{opt}</button>
        ))}
        <div>{quizResult}</div>
      </section>

      {/* AI Grammar Game - Tag Master */}
      <section className="card">
        <h2>❓ Tag Master</h2>
        <p>{tagData[tagIndex].sentence}</p>
        <div className="options">
          {[tagData[tagIndex].correctTag, "is he?", "don't they?"]
            .sort(() => Math.random() - 0.5)
            .map(opt => (
              <button key={opt} onClick={() => evaluateTag(opt)}>{opt}</button>
            ))}
        </div>
        <p>{tagFeedback}</p>
        <button onClick={() => setTagIndex((tagIndex + 1) % tagData.length)}>Next</button>
      </section>

      {/* AI Grammar Game - Article Arcade */}
      <section className="card">
        <h2>🍎 Article Arcade</h2>
        <p>{articleData[articleIndex].sentence}</p>
        <div className="options">
          {["A", "An", "The"].sort(() => Math.random() - 0.5).map(opt => (
            <button key={opt} onClick={() => evaluateArticle(opt)}>{opt}</button>
          ))}
        </div>
        <p>{articleFeedback}</p>
        <button onClick={() => setArticleIndex((articleIndex + 1) % articleData.length)}>Next</button>
      </section>

      {/* Styles */}
      <style>{`
        .container {
          font-family: sans-serif;
          padding: 20px;
          max-width: 700px;
          margin: auto;
          background: #f9f9f9;
        }
        .card {
          background: white;
          padding: 20px;
          margin: 20px 0;
          border-radius: 12px;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }
        .examples {
          margin-left: 20px;
        }
        .highlight {
          background-color: yellow;
          padding: 0 4px;
          border-radius: 4px;
        }
        button {
          margin: 5px;
          padding: 8px 12px;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background-color: #4CAF50;
          color: white;
        }
        .mute-btn {
          float: right;
          margin-top: -50px;
          background-color: #444;
        }
        .options {
          margin: 10px 0;
        }
        .quiz {
          background-color: #fef3c7;
        }
      `}</style>
    </div>
  );
};

export default App;
