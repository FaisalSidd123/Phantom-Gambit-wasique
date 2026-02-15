import React, { useState, useRef } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaDiscord, FaTwitch, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../Context/authContext';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../Firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef();
  const { setCurrentUser, setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { user, role } = await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password,
        formData.username
      );
      
      setCurrentUser(user);
      setUserRole(role);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const MovetoSignIn = () => {
    navigate("/signin");
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsSubmitting(true);
    
    try {
      await doSignInWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("signup-ripple");

    const ripple = button.getElementsByClassName("signup-ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="signup-page">


      {/* Background elements */}
      <div className="gradient-bg"></div>
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--size': `${Math.random() * 4 + 2}px`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 10 + 5}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--move-x': `${Math.random() * 100 - 50}px`,
            '--move-y': `${Math.random() * 100 - 50}px`
          }}></div>
        ))}
      </div>
      
      {/* Main Content Area */}
      <main className="signup-content">
        <motion.div 
          ref={modalRef}
          className="signup-container"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ 
            type: 'spring',
            damping: 20,
            stiffness: 300
          }}
        >
          {/* Close button */}
          <button className="close-btn" onClick={handleGoHome}>
            <FaTimes />
          </button>

          {/* Header */}
          <div className="signup-header">
            <h2>CREATE ACCOUNT</h2>
            <div className="signup-subtitle">Join the Phantom Gambit community</div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              className="auth-error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Username */}
            <div className="input-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="signup-btn"
              onClick={createRipple}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="signup-spinner"></span>
                  CREATING ACCOUNT...
                </>
              ) : (
                'SIGN UP'
              )}
            </button>

            {/* Social Login */}
            <div className="social-login">
              <div className="divider">
                <span>OR CONTINUE WITH</span>
              </div>
              <div className="social-icons">
                <button 
                  type="button" 
                  className="social-btn google"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting}
                >
                  <FaGoogle />
                </button>
              
               
              </div>
            </div>

            {/* Sign In Link */}
            <div className="signin-link">
              Already have an account? <button type="button" onClick={MovetoSignIn}>Sign in</button>
            </div>
          </form>
        </motion.div>
      </main>


    </div>
  );
};

export default SignUp;