import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="roadmap-dashboard">
      <h1 className="dashboard-title">🚀 Career Roadmaps</h1>

      <div className="roadmap-grid">
        {[
          {
            name: 'AI Engineer',
            path: '/road-map/airoadmap',
            desc: 'Explore the roadmap for becoming an AI engineer, including key concepts, tools, and projects in ML and AI research.'
          },
          {
            name: 'Data Analytics',
            path: '/road-map/dataaroadmap',
            desc: 'Learn data wrangling, visualization, statistical analysis, and tools like Python and R.'
          },
          {
            name: 'Web Development',
            path: '/road-map/webdroadmap',
            desc: 'Master web dev from HTML/CSS/JS to React, Node.js, and full-stack development.'
          },
          {
            name: 'Data Science',
            path: '/road-map/datasroadmap',
            desc: 'Learn data exploration, machine learning, and statistical modeling with Python.'
          },
          {
            name: 'Cyber Security',
            path: '/road-map/cyberroadmap',
            desc: 'Understand cybersecurity: network defense, cryptography, and ethical hacking.'
          }
        ].map((item, idx) => (
          <div className="roadmap-card" key={idx}>
            <h3><Link to={item.path}>{item.name}</Link></h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .roadmap-dashboard {
          padding: 50px 20px;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f5f9ff;
          min-height: 100vh;
        }

        .dashboard-title {
          text-align: center;
          font-size: 2.6rem;
          margin-bottom: 40px;
          color: #222;
        }

        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .roadmap-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: left;
        }

        .roadmap-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .roadmap-card h3 {
          margin-bottom: 10px;
          font-size: 1.4rem;
          color: #0056b3;
        }

        .roadmap-card a {
          text-decoration: none;
          color: #0056b3;
        }

        .roadmap-card a:hover {
          text-decoration: underline;
        }

        .roadmap-card p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
