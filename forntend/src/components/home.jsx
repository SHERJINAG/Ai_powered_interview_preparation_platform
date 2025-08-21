import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 AI-Powered Interactive Learning Platform</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/signup" style={styles.navLink}>Sign Up</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Learn. Practice. Crack Interviews.</h2>
        <p style={styles.description}>
          Master CS fundamentals, programming, aptitude, and interview skills with AI tools and interactive content.
        </p>
        <Link to="/signup" style={styles.ctaButton}>Get Started Free</Link>
      </section>

      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>🔥 Platform Features</h2>
        <ul style={styles.featureList}>
          <li>📘 <strong>Learn CS Concepts:</strong> OS, DBMS, CN, OOPs & more.</li>
          <li>💻 <strong>Programming Tutorials:</strong> Python, Java, C++, Web Dev.</li>
          <li>🤖 <strong>AI Interviewer:</strong> Mock interviews with real-time tips.</li>
          <li>🎤 <strong>AI Group Discussions:</strong> Speak confidently & improve fluency.</li>
          <li>🧠 <strong>Aptitude Training:</strong> Master logical, verbal & quantitative problems.</li>
          <li>📝 <strong>Notes & Community:</strong> Ask, share, solve together.</li>
          <li>🕹️ <strong>Mini Coding Games:</strong> Make learning fun!</li>
          <li>🚀 <strong>Problem Solving Hub:</strong> With hints & solutions.</li>
        </ul>
      </section>

      <section id="about" style={styles.infoSection}>
        <h2 style={styles.sectionTitle}>🌟 About Us</h2>
        <p style={styles.infoText}>
          We aim to transform the way you prepare for tech careers. With AI-driven tools, structured learning paths, and an engaging UI — we empower students to learn, practice, and succeed.
        </p>
      </section>

      <section id="contact" style={styles.infoSection}>
        <h2 style={styles.sectionTitle}>📞 Contact Us</h2>
        <p style={styles.infoText}>
          📧 Email: support@ailearningplatform.com<br />
          📞 Phone: +91-98765-43210<br />
          📍 Location: Chennai, India
        </p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 AI Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to right, #eef2f3, #8ec5fc)',
    color: '#2c3e50',
    padding: '0',
    margin: '0',
  },
  header: {
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: '#fff',
    padding: '25px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  title: {
    margin: '0',
    fontSize: '28px',
    fontWeight: '700',
  },
  nav: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    background: '#ffffff',
  },
  heroTitle: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    maxWidth: '700px',
    margin: '0 auto 20px',
    color: '#555',
  },
  ctaButton: {
    padding: '12px 25px',
    backgroundColor: '#4a90e2',
    color: '#fff',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
  },
  features: {
    padding: '50px 20px',
    backgroundColor: '#fdfdfd',
    textAlign: 'left',
    maxWidth: '900px',
    margin: 'auto',
  },
  sectionTitle: {
    fontSize: '26px',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#34495e',
  },
  featureList: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#333',
  },
  infoSection: {
    backgroundColor: '#e9f0f7',
    padding: '40px 20px',
    textAlign: 'left',
    maxWidth: '900px',
    margin: 'auto',
  },
  infoText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#444',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
  },
};

export default HomePage;
