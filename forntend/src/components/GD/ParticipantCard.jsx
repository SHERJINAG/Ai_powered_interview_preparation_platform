import React from 'react';
import './ParticipantCard.css';

const ParticipantCard = ({ name, score, isSpeaking }) => {
  return (
    <div className={`participant-card ${isSpeaking ? 'speaking' : ''}`}>
      <div className="avatar-circle">
        <span className="initial">{name.charAt(0)}</span>
      </div>
      <h4>{name}</h4>
      <p>Score: {score}</p>
      {isSpeaking && <p className="status">🎙️ Speaking...</p>}
    </div>
  );
};

export default ParticipantCard;
