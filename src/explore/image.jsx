import React, { useState, useEffect } from 'react';
import deceptionistLogo from './Deceptionist_Logo 1.png'; // Import the logo
import boardImage from './board.jpg'; // Import the board image
import './image.css';

const Image = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add image-specific background class to body
    document.body.classList.add('image-page-active');
    
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('image-page-active');
    };
  }, []);

  return (
    <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Effects */}
      <div className="image-background">
        <div className="bg-pattern"></div>
        <div className="bg-overlay"></div>
      </div>
      
      
      {/* Main Content */}
      <div className="image-content">
      

        {/* Image Display */}
        <div className={`image-display ${isImageLoaded ? 'loaded' : ''}`}>
          <div className="image-frame">
            <div className="frame-border frame-border-top"></div>
            <div className="frame-border frame-border-right"></div>
            <div className="frame-border frame-border-bottom"></div>
            <div className="frame-border frame-border-left"></div>
            
            <div className="image-wrapper">
              <img 
                src={boardImage} 
                alt="Deceptionist Board Game" 
                className="board-image"
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="image-shine"></div>
            </div>
            
            {/* Image Corner Accents */}
            <div className="corner-accent corner-tl">
              <div className="corner-line"></div>
              <div className="corner-dot"></div>
            </div>
            <div className="corner-accent corner-tr">
              <div className="corner-line"></div>
              <div className="corner-dot"></div>
            </div>
            <div className="corner-accent corner-br">
              <div className="corner-line"></div>
              <div className="corner-dot"></div>
            </div>
            <div className="corner-accent corner-bl">
              <div className="corner-line"></div>
              <div className="corner-dot"></div>
            </div>
          </div>
        </div>

        {/* Tagline below the image */}
        <div className="image-tagline">
          <h2 className="tagline-text">"EXPLORE THE BATTLEFIELD"</h2>
        </div>
      </div>
    </div>
  );
};

export default Image;