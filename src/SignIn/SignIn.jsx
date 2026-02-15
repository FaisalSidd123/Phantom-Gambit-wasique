import React, { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaDiscord, FaTwitch } from 'react-icons/fa';
import './SignIn.css';
import { useAuth } from '../Context/authContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../Firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setCurrentUser, setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const { user, role } = await doSignInWithEmailAndPassword(
        formData.email, 
        formData.password
      );
      
      setCurrentUser(user);
      setUserRole(role);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const MovetoSignUp = () => {
    navigate("/signup")
  }

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      await doSignInWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="signin-page">
  

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
      <main className="signin-content">
        <div className="signin-container">
          <div className="signin-header">
            <h2>WELCOME BACK</h2>
            <div className="signin-subtitle">Sign in to your account</div>
          </div>

          {error && (
            <div className="auth-error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="input-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
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

            <div className="input-group">
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="forgot-password">
                <a href="#forgot">Forgot password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="signin-btn"
              disabled={loading}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>

            <div className="social-login">
              <div className="divider">
                <span>OR CONTINUE WITH</span>
              </div>
              <div className="social-icons">
                <button 
                  type="button" 
                  className="social-btn google"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <FaGoogle />
                </button>
               
                
              </div>
            </div>

            <div className="signup-link">
              Don't have an account? <button type="button" onClick={MovetoSignUp}>Sign up</button>
            </div>
          </form>
        </div>
      </main>

   
    </div>
  );
};

export default SignIn;