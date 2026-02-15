import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GameDetails.css';
import Particles from '../Particles/Particles';
import Image from '../explore/image'; // Import the Image component

const GameDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { gameId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuyNow = () => {
    window.open('https://deceptionistgame.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhU8T9wHgyx9vAClIsAampxNS1q5k0SH0itT-GDIt4EMEAMisosVkiJ_GDTU_aem_w_ZUZawix_P9z5Zut13vbA', '_blank');
  };

  const gameData = {
    title: "Deceptionist",
    subtitle: "A Game of Strategic Blockade",
    description: "Navigate through a maze of deception, block opponents, and race to the exit in this tactical board game of wits and strategy.",
    price: "39.99",
    players: "2-4",
    duration: "30-60min",
    age: "8+",
    rating: "4.6",
    features: [
      "Strategic Movement & Block Placement",
      "Dynamic Board State Changes",
      "Risk vs Reward Decision Making",
      "High Interaction & Player Conflict"
    ],
    rules: [
      "Setup: Pick a color and place your piece on its Start Point. Your exit is the opposite color's Entry Point.",
      "Turn: Roll the die (clockwise). On a 6, choose ONE: unlock your piece or place a block (no extra turn).",
      "Movement: Move straight vertically or horizontally (no diagonals). You cannot jump over blocks.",
      "Blocks: Blocks can be placed only on a 6. Each block stays for 3 turns, then is removed.",
      "Win Condition: First player to exit through their opposite-color's Entry Point wins."
    ],
    components: [
      "Game Board with Grid",
      "Player Pieces (4 colors)",
      "Block Tokens (12 pieces)",
      "Custom Six-Sided Die",
      "Rule Booklet"
    ]
  };

  return (
    <div className="gd-page">
      <Particles 
        count={30} 
        color="#8b5cf6" 
        size={4} 
        duration={8}
        className="games-particles"
      />

      {/* Show Image component when explore tab is active */}
      {activeTab === 'explore' ? (
        <Image />
      ) : (
        <>
          {/* Hero Section */}
          <section className="gd-hero">
            <div className="gd-hero-background">
              <div className="gd-hero-glow gd-glow-1"></div>
              <div className="gd-hero-glow gd-glow-2"></div>
            </div>
            <div className="gd-hero-content">
              <div className="gd-title-container">
                <h1 className="gd-game-title">
                  <span className="gd-title-text">{gameData.title}</span>
                  <span className="gd-title-shadow">{gameData.title}</span>
                </h1>
                <div className="gd-title-accent"></div>
              </div>
              
              <p className="gd-game-subtitle">{gameData.subtitle}</p>
              <p className="gd-game-description">{gameData.description}</p>
              
              <div className="gd-game-stats">
                <div className="gd-stat">
                  <div className="gd-stat-icon">👥</div>
                  <span className="gd-stat-value">{gameData.players}</span>
                  <span className="gd-stat-label">Players</span>
                </div>
                <div className="gd-stat">
                  <div className="gd-stat-icon">⏱️</div>
                  <span className="gd-stat-value">{gameData.duration}</span>
                  <span className="gd-stat-label">Duration</span>
                </div>
                <div className="gd-stat">
                  <div className="gd-stat-icon">🎯</div>
                  <span className="gd-stat-value">{gameData.age}</span>
                  <span className="gd-stat-label">Age</span>
                </div>
                <div className="gd-stat">
                  <div className="gd-stat-icon">⭐</div>
                  <span className="gd-stat-value">{gameData.rating}</span>
                  <span className="gd-stat-label">Rating</span>
                </div>
              </div>

              <div className="gd-hero-actions">
                <button className="gd-primary-btn" onClick={handleBuyNow}>
                  <span className="gd-btn-sparkle">✨</span>
                  Buy Now
                  <span className="gd-btn-sparkle">✨</span>
                </button>
              </div>
            </div>
          </section>

          {/* Content Tabs */}
          <section className="gd-content-section">
            <div className="gd-container">
              <nav className="gd-tabs-nav">
                {['overview', 'features', 'rules', 'components', 'explore'].map(tab => (
                  <button
                    key={tab}
                    className={`gd-tab ${activeTab === tab ? 'gd-tab-active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="gd-tab-icon">
                      {tab === 'overview' && '📖'}
                      {tab === 'features' && '🚀'}
                      {tab === 'rules' && '📝'}
                      {tab === 'components' && '🎁'}
                      {tab === 'explore' && '🖼️'}
                    </span>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>

              <div className="gd-tab-content">
                {activeTab === 'overview' && (
                  <div className="gd-tab-panel">
                    <div className="gd-panel-header">
                      <h2>About the Game</h2>
                      <div className="gd-header-decoration"></div>
                    </div>
                    <p>Deceptionist is a tactical board game where players race to reach their exit point while strategically blocking opponents. With simple rules but deep strategy, every game is a new puzzle to solve.</p>
                    <div className="gd-overview-highlights">
                      <div className="gd-highlight-card">
                        <span className="gd-highlight-emoji">🧩</span>
                        <h3>Strategic Puzzles</h3>
                        <p>Plan your route while anticipating opponents' moves</p>
                      </div>
                      <div className="gd-highlight-card">
                        <span className="gd-highlight-emoji">🚧</span>
                        <h3>Dynamic Blocks</h3>
                        <p>Temporary blockades that disappear after 3 turns</p>
                      </div>
                      <div className="gd-highlight-card">
                        <span className="gd-highlight-emoji">⚔️</span>
                        <h3>Player Interaction</h3>
                        <p>Direct competition and strategic blocking</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="gd-tab-panel">
                    <div className="gd-panel-header">
                      <h2>Game Features</h2>
                      <div className="gd-header-decoration"></div>
                    </div>
                    <ul className="gd-features-list">
                      {gameData.features.map((feature, idx) => (
                        <li key={idx} className="gd-feature-item">
                          <div className="gd-feature-icon">
                            <div className="gd-icon-bg"></div>
                            <span>✨</span>
                          </div>
                          <div className="gd-feature-content">
                            <h3>{feature}</h3>
                            <p>Key gameplay mechanic that creates engaging strategic decisions.</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'rules' && (
                  <div className="gd-tab-panel">
                    <div className="gd-panel-header">
                      <h2>How to Play</h2>
                      <div className="gd-header-decoration"></div>
                    </div>
                    <ol className="gd-rules-list">
                      {gameData.rules.map((rule, idx) => (
                        <li key={idx} className="gd-rule-item">
                          <div className="gd-rule-step">
                            <span className="gd-step-number">{idx + 1}</span>
                            <div className="gd-step-line"></div>
                          </div>
                          <div className="gd-rule-content">
                            <h3>{rule.split(':')[0]}</h3>
                            <p>{rule.split(':')[1] || rule}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <div className="gd-rules-note">
                      <h3>💡 Important Notes:</h3>
                      <ul>
                        <li>Each player starts with 3 blocks</li>
                        <li>Blocks cannot be placed on Start or Entry points</li>
                        <li>Removed blocks cannot be reused</li>
                        <li>Using the wrong exit sends you back to Start</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'components' && (
                  <div className="gd-tab-panel">
                    <div className="gd-panel-header">
                      <h2>What's Included</h2>
                      <div className="gd-header-decoration"></div>
                    </div>
                    <div className="gd-components-grid">
                      {gameData.components.map((component, idx) => (
                        <div key={idx} className="gd-component-card">
                          <div className="gd-component-icon">
                            <div className="gd-icon-shine"></div>
                            <span>📦</span>
                          </div>
                          <h3>{component}</h3>
                          <p>High-quality game components designed for durability and smooth gameplay.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default GameDetails;