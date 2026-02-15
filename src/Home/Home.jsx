import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/auth";
import Ballpit from '../Background/Background';
// REMOVE Navbar import from here

function Home() {
  const { currentUser, userRole } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const ballpitRef = useRef();
  const [isBallpitReady, setIsBallpitReady] = useState(false);

  const handleExploreClick = () => {
    navigate('/games');
  };
  
  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/');
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="home-container">
      <Ballpit 
        ref={ballpitRef}
        shape="icosahedron"
        colors={['#14053dff', '#8b0959ff', '#40037dff']}
        count={120}
        followCursor={false}
        className="ballpit-background"
        minSize={0.2}
        maxSize={0.5}
        size0={0.5}
        onLoad={() => {
          setIsBallpitReady(true);
          document.body.classList.add('ballpit-ready');
        }}
      />

      {/* Enhanced Gradient Background */}
      <div className="gradient-bg"></div>
      
      {/* Improved Floating Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--size': `${Math.random() * 6 + 2}px`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 10 + 5}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--move-x': `${Math.random() * 100 - 50}px`,
            '--move-y': `${Math.random() * 100 - 50}px`
          }}></div>
        ))}
      </div>
      
      {/* Glowing Orbs with Enhanced Effects */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Centered Content */}
      <div className="center-container">
        {/* Logo with Enhanced Glow */}
        <div className="logo-container">
          <div className="logo-main">PHANTOM GAMBIT</div>
          <div className="logo-sub">REDEFINE COMPETITIVE GAMING</div>
          <div className="logo-glow"></div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="cta-container">
          <button className="cta-button" onClick={handleExploreClick}>
            <span className="cta-text">EXPLORE TOURNAMENTS</span>
            <span className="cta-icon"><FaChevronRight /></span>
            <div className="cta-hover"></div>
            <div className="cta-pulse"></div>
            <div className="cta-sparkles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="sparkle" style={{
                  '--sparkle-delay': `${i * 0.1}s`,
                  '--sparkle-pos': `${Math.random() * 100}%`
                }}></div>
              ))}
            </div>
          </button>
        </div>

      
      </div>
    </div>
  );
}

export default Home;