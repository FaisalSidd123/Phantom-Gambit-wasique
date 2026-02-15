import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord, FaGamepad, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://www.instagram.com/deceptionistgame/', label: 'Instagram' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1CjGdYKNoC/', label: 'Facebook' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Games', url: '#games' },
    { name: 'About', url: '#about' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <FaGamepad className="logo-icon" />
                <span className="logo-text">PHANTOM <span className="logo-highlight">GAMBIT</span></span>
              </div>
              <p className="footer-tagline">
                Redefining competitive board gaming through immersive experiences and strategic gameplay.
              </p>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section quick-links">
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section contact-info-section">
              <h3 className="footer-section-title">Contact Us</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>phantomgambit5@gmail.com</span>
                </li>
            
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>campus 153 Oric office Szabist University Block 5 Clifton</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} Phantom Gambit. All rights reserved.
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <div className="floating-shape shape-1">🎲</div>
          <div className="floating-shape shape-2">🃏</div>
          <div className="floating-shape shape-3">♟️</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;