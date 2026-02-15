import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from '../Particles/Particles';
import deceptionistLogo from './Deceptionist_Logo 1.png'; // Import the logo
import './Games.css';

const Games = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Add games-specific background class to body
    document.body.classList.add('games-page-active');
    
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('games-page-active');
    };
  }, []);

  const games = [
    {
      id: 'deceptionist',
      title: "Deceptionist",
      subtitle: "A Game of Lies and Strategy",
      description: "Uncover the truth while hiding your own secrets in this social deduction masterpiece. Outwit your opponents through cunning strategies and clever bluffs.",
      players: "2-4",
      duration: "45-90min",
      age: "14+",
      rating: "4.8",
      tags: [],
      featured: true,
      color: "#7877c6",
      gradient: "linear-gradient(135deg, #7877c6, #ff77c6)",
      logo: deceptionistLogo // Add logo reference
    }
  ];

  const handleGameSelect = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  return (
    <div className={`games-page ${isLoaded ? 'loaded' : ''}`}>
               
        {/* Use Particles Component */}
      <Particles 
        count={30} 
        color="#8b5cf6" 
        size={4} 
        duration={8}
        className="games-particles"
      />
      {/* Games-specific background */}
      <div className="games-background">
        <div className="games-bg-pattern"></div>
        <div className="games-bg-overlay"></div>
      </div>
      
      {/* Enhanced Header */}
      <header className="games-header">
        <div className="header-background">
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
        </div>
        <div className="header-content">
          <div className="brand-logo">
            <h1 className="brand-title">
              Phantom <span className="accent">Gambit</span>
            </h1>
            <div className="title-underline"></div>
          </div>
          <p className="brand-subtitle">Where Strategy Meets Deception</p>
          <p className="brand-description">
            Immerse yourself in our collection of mind-bending board games designed 
            for strategic thinkers and master deceivers.
          </p>
        </div>
        <div className="scroll-indicator">
         
        </div>
      </header>

      {/* Enhanced Games Section */}
      <section className="games-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Game</h2>
            <p className="section-subtitle">Experience the ultimate deception challenge</p>
          </div>
          
          <div className="games-grid">
            {games.map((game, index) => (
              <div 
                key={game.id} 
                className={`game-card ${game.featured ? 'featured' : ''} ${
                  hoveredCard === game.id ? 'hovered' : ''
                }`}
                style={{ '--card-color': game.color, '--card-gradient': game.gradient }}
                onMouseEnter={() => setHoveredCard(game.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleGameSelect(game.id)}
              >
                {/* Card Background Effects */}
                <div className="card-glow"></div>
                <div className="card-background"></div>
                
                {/* Card Header */}
                <div className="card-header">
                  <div className="game-badges">
                    {game.featured && (
                      <span className="featured-badge">
                        <span className="badge-star">⭐</span>
                        Featured Game
                      </span>
                    )}
                    <span className="rating-badge">
                      ★ {game.rating}
                    </span>
                  </div>
                  
                  {/* Logo Container */}
                  <div className="card-logo-container">
                    <img 
                      src={game.logo} 
                      alt={`${game.title} Logo`}
                      className="game-logo"
                    />
                  </div>
                  
                  <div className="card-corner">
                    
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="game-header">
                    <h3 className="game-name">{game.title}</h3>
                    <p className="game-type">{game.subtitle}</p>
                  </div>
                  
                  <p className="game-desc">{game.description}</p>
                  
                  <div className="game-stats">
                    <div className="stat-group">
                      <div className="stat-item">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                          <span className="stat-value">{game.players}</span>
                          <span className="stat-label">Players</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-info">
                          <span className="stat-value">{game.duration}</span>
                          <span className="stat-label">Duration</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">🎯</div>
                        <div className="stat-info">
                          <span className="stat-value">{game.age}</span>
                          <span className="stat-label">Age</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="game-tags">
                    {game.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <button className="explore-btn">
                    <span className="btn-text">Explore Game</span>
                    <span className="btn-arrow">→</span>
                    <div className="btn-shine"></div>
                  </button>
                </div>

                {/* Hover Effect Layer */}
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Games;