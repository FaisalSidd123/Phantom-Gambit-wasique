import React, { useState, useEffect } from 'react';
import { FaGamepad, FaEnvelope, FaInfoCircle, FaUser, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/auth";
import './Nav.css';

const Navbar = () => {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element not found, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (section) => {
    // If clicking "home" from anywhere
    if (section === 'home') {
      if (location.pathname === '/') {
        // Already on home page, scroll to top
        scrollToSection('home');
      } else {
        // On another page, navigate to home
        navigate('/');
        // Scroll to top after navigation
        setTimeout(() => {
          scrollToSection('home');
        }, 100);
      }
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (section === 'games') {
      navigate(`/${section.toLowerCase()}`);
      setIsMobileMenuOpen(false);
      return;
    }
    
    // For 'about' and 'contact', scroll to sections on home page
    if (location.pathname === '/') {
      // Already on home page, scroll to section
      scrollToSection(section);
    } else {
      // On another page, navigate to home first
      navigate('/');
      // Then scroll to section after a short delay
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  // ... rest of the component remains the same


  const handleSignIn = () => {
    navigate('/signin');
    setIsMobileMenuOpen(false);
  };

  const handleSignUp = () => {
    navigate('/signup');
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Mobile Header */}
      <div className="navbar-mobile-header">
        <button className="navbar-mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {currentUser && (
          <div className="navbar-user-display-mobile">
            <FaUser className="navbar-user-icon" />
            <span>{currentUser.displayName || currentUser.email.split('@')[0]}</span>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <div className={`navbar-items ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        {/* Home Tab */}
        <div className="navbar-item">
          <button onClick={() => handleNavClick('home')}>
            <FaHome className="navbar-icon" />
            <span>HOME</span>
          </button>
        </div>
        
        <div className="navbar-item">
          <button onClick={() => handleNavClick('games')}>
            <FaGamepad className="navbar-icon" />
            <span>GAMES</span>
          </button>
        </div>
        
        <div className="navbar-item">
          <button onClick={() => handleNavClick('about')}>
            <FaInfoCircle className="navbar-icon" />
            <span>ABOUT</span>
          </button>
        </div>
        
        <div className="navbar-item">
          <button onClick={() => handleNavClick('contact')}>
            <FaEnvelope className="navbar-icon" />
            <span>CONTACT</span>
          </button>
        </div>
      </div>
      
      {/* Auth Buttons */}
      <div className={`navbar-auth-buttons ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        {currentUser ? (
          <div className="navbar-user-section">
            <div className="navbar-user-display">
              <FaUser className="navbar-user-icon" />
              <span>{currentUser.displayName || currentUser.email.split('@')[0]}</span>
            </div>
            <button className="navbar-auth-btn navbar-signout-btn" onClick={handleSignOut}>
              <span className="navbar-auth-btn-text">SIGN OUT</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
          </div>
        ) : (
          <>
            <button className="navbar-auth-btn navbar-signin-btn" onClick={handleSignIn}>
              <span className="navbar-auth-btn-text">SIGN IN</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
            <button className="navbar-auth-btn navbar-signup-btn" onClick={handleSignUp}>
              <span className="navbar-auth-btn-text">SIGN UP</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;