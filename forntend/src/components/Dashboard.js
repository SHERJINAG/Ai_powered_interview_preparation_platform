import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { 
  FaUserCircle, FaGamepad, FaBrain, FaBook, FaPencilAlt, 
  FaMapMarkedAlt, FaLightbulb, FaComments, FaTrophy, FaChartLine 
} from 'react-icons/fa';
import './Dashboard.css';

const features = [
  {
    title: 'Gamified Learning',
    description: 'Engage with learning through interactive challenges and rewards.',
    icon: <FaGamepad />,
    path: '/gamified-learning'
  },
  {
    title: 'Interview Assistant',
    description: 'Get mock interviews, tips, and personalized questions.',
    icon: <FaBrain />,
    path: '/interview-prep'
  },
  {
    title: 'Notes',
    description: 'Write and organize your study notes efficiently.',
    icon: <FaBook />,
    path: '/notes'
  },
  {
    title: 'Mini Games',
    description: 'Refresh your mind with fun and educational games.',
    icon: <FaPencilAlt />,
    path: '/mini-games'
  },
  {
    title: 'Problem Solving',
    description: 'Practice coding problems with difficulty levels.',
    icon: <FaLightbulb />,
    path: '/problem-solving'
  },
  {
    title: 'Roadmap',
    description: 'Follow a structured learning path to achieve your goals.',
    icon: <FaMapMarkedAlt />,
    path: '/roadmap'
  },
  {
    title: 'Discussion Forum',
    description: 'Engage in discussions with peers and mentors.',
    icon: <FaComments />,
    path: '/discussion-forum'
  },
  {
    title: 'CS Quiz',
    description: 'Test your computer science knowledge with quizzes.',
    icon: <FaBrain />,
    path: '/cs-quiz'
  },
  {
    title: 'Leaderboard',
    description: 'Check the leaderboard for top performers.',
    icon: <FaTrophy />,
    path: '/leaderboard'
  },
 
];

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

 useEffect(() => {
  const userEmail = localStorage.getItem("userEmail"); // Fetch email from storage

  if (!userEmail) {
    console.error("No user email found in localStorage");
    return;
  }

  fetch(`https://sherjinag-ai-learning.hf.space/profile/${userEmail}`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch profile");
      return res.json();
    })
    .then(data => setProfile(data))
    .catch(err => console.error("Failed to load profile", err));
}, []);


  return (
    <div className="dashboard-container">
      {/* Profile and Header Section */}
      <div className="sidebar">
        <div className="profile">
          <FaUserCircle className="profile-icon" />
          {profile ? (
            <>
              <h3 className="profile-name">{profile.full_name}</h3>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>College: {profile.college}</p>
              <p>Course: {profile.course}</p>
              <p>Year: {profile.year}</p>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>
      </div>
      
      {/* Main Dashboard */}
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>📘 My Learning Dashboard</h1>
        </header>
        <div className="card-container">
          {features.map((feature, index) => (
            <Link to={feature.path} className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
