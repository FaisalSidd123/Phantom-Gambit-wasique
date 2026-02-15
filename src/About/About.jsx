import React, { useEffect } from 'react';
import { FaGamepad, FaUsers, FaInstagram, FaFacebook, FaBoxOpen } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumbers = () => {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        
        let current = start;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
      });
    };
    
    // Trigger when section comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }
    
    return () => observer.disconnect();
  }, []);

  const openInstagram = () => {
    window.open('https://www.instagram.com/deceptionistgame/?hl=en', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/share/1CjGdYKNoC/', '_blank');
  };

  return (
    <div className="about-container">
      {/* Animated Background Elements */}
      <div className="about-bg-pattern"></div>
      <div className="about-bg-gradient"></div>
      
      {/* Floating Game Elements */}
      <div className="floating-icon floating-dice">🎲</div>
      <div className="floating-icon floating-card">🃏</div>
      <div className="floating-icon floating-chess">♟️</div>
      
      <div className="about-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="title-reveal">WELCOME TO <span className="highlight-text">PHANTOM GAMBIT</span></h2>
          <div className="header-underline"></div>
          <p className="header-subtitle">Where Every Game Tells a Story</p>
        </div>
        
        {/* Main About Content */}
        <div className="about-grid">
          <div className="about-text animate-slide-in-left">
            <h3>The Beginning of Something Great</h3>
            <p>
              Phantom Gambit was born from a simple yet powerful idea: to create 
              board games that challenge the mind and spark meaningful connections. 
              We're a passionate team of game designers, storytellers, and 
              strategists dedicated to crafting unforgettable gaming experiences.
            </p>
            <p>
              Our journey begins with <strong>Deceptionist</strong>, our flagship 
              social deduction game that's designed to bring people together through 
              clever gameplay and immersive storytelling. Each game is more than 
              just a board - it's an experience packaged in our signature 
              Deceptionist boxes.
            </p>
            
            <div className="core-values">
              <h4>Our Core Values</h4>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">🎭</span>
                  <span className="value-text">Immersive Gameplay</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <span className="value-text">Community Building</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <span className="value-text">Strategic Depth</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">📦</span>
                  <span className="value-text">Premium Packaging</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards - Square layout with 2 top, 1 bottom */}
          <div className="stats-container animate-slide-in-right">
            <h3>Our Journey Begins</h3>
            <div className="stats-grid-square">
              <div className="stats-top-row">
                <div className="stat-card">
                  <div className="stat-icon"><FaGamepad /></div>
                  <div className="stat-number" data-count="1">1</div>
                  <div className="stat-label">Launch Title</div>
                  <div className="stat-subtext">Deceptionist</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><FaBoxOpen /></div>
                  <div className="stat-number" data-count="250">50</div>
                  <div className="stat-label">Deceptionist Boxes</div>
                  <div className="stat-subtext">Initial Production Run</div>
                </div>
              </div>
              <div className="stats-bottom-row">
                <div className="stat-card wide-card">
                  <div className="stat-icon"><FaUsers /></div>
                  <div className="stat-text">Join Our Growing Community</div>
                  <div className="stat-label">Be a  Member</div>
                  <div className="stat-subtext">Connect with us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Focus Section */}
        <div className="focus-section animate-fade-in">
          <h3>What We're Building Right Now</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">📦</div>
              <h4>Deceptionist Boxes</h4>
              <p>Our premium game packaging that contains everything needed for an unforgettable night of deception and strategy with friends.</p>
              <div className="focus-status">
                <span className="status-badge">In Production</span>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🌱</div>
              <h4>Founding Community</h4>
              <p>Building a community of board game enthusiasts who will help shape the future of Phantom Gambit through early feedback and support.</p>
              <div className="focus-status">
                <span className="status-badge">Growing</span>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🚀</div>
              <h4>Game Expansion</h4>
              <p>Developing expansion packs and additional content to enhance the Deceptionist experience and keep gameplay fresh and exciting.</p>
              <div className="focus-status">
                <span className="status-badge">Development Phase</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="cta-section animate-fade-in">
          <div className="cta-content">
            <h3>Join Our Founding Community</h3>
            <p>
              Be among the first to experience Deceptionist! Follow our journey, 
              get exclusive updates, and be notified when our Deceptionist boxes 
              become available for pre-order.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={openInstagram}>
                <FaInstagram className="cta-icon" />
                Follow on Instagram
              </button>
              <button className="cta-secondary" onClick={openFacebook}>
                <FaFacebook className="cta-icon" />
                Like on Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement animate-fade-in">
          <div className="mission-quote">
            "Great games aren't just played - they're experiences that bring people 
            together. Each Deceptionist box is crafted to create those memorable moments."
          </div>
          <div className="mission-author">- The Phantom Gambit Team</div>
        </div>
      </div>
    </div>
  );
};

export default About;