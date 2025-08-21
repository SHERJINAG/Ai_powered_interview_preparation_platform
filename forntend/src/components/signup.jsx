import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaCheck, FaPhone, FaUniversity, FaBook } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup/', {
        full_name: fullName,
        email,
        phone,
        college,
        course,
        year,
        password
      });

      console.log(response.data);

      localStorage.setItem('user', JSON.stringify({ fullName, email }));

      navigate('/login');
    } catch (error) {
      console.error("Signup failed", error.response?.data || error);
      alert('Error in creating account');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg animate__animated animate__fadeInUp" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">📝 Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label"><FaUser /> Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><FaEnvelope /> Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label"><FaPhone /> Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="college" className="form-label"><FaUniversity /> College</label>
            <input
              type="text"
              className="form-control"
              id="college"
              placeholder="Enter your college name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label"><FaBook /> Course</label>
            <input
              type="text"
              className="form-control"
              id="course"
              placeholder="Enter your course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">🎓 Year</label>
            <select
              className="form-select"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select your year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><FaLock /> Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label"><FaCheck /> Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Create Account</button>
        </form>
        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
