import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Particles from '../Particles/Particles';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    // Get current timestamp
    const currentTime = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // CORRECTED: Only send variables that exist in your template
    const templateParams = {
      name: formData.name,      // Maps to {{name}} in template
      time: currentTime,        // Maps to {{time}} in template
      message: formData.message // Maps to {{message}} in template
      // REMOVED: email and subject since they're not in your template
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,   // for Vite
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setSubmitStatus({ 
        success: true, 
        message: 'Transmission successful! We will respond within 24 hours.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Add success animation
      const submitBtn = document.querySelector('.contact-submit-btn');
      if (submitBtn) {
        submitBtn.classList.add('contact-success');
        setTimeout(() => {
          submitBtn.classList.remove('contact-success');
        }, 3000);
      }
      
    } catch (error) {
      console.error('Transmission failed:', error);
      let errorMessage = 'Transmission failed! Please try again.';
      
      if (error.text) {
        errorMessage = `Transmission failed: ${error.text}`; // FIXED: Added backtick
      } else if (error.status === 412) {
        errorMessage = 'Template configuration error. Please check your EmailJS template variables.';
      }
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Use Particles Component */}
      <Particles 
        count={20} 
        color="#6366f1" 
        size={4} 
        duration={6}
        className="contact-particles"
      />

      {/* Animated Background Elements */}
      <div className="contact-background">
        <div className="contact-floating-shapes">
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
          <div className="contact-shape contact-shape-3"></div>
        </div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-header-glow"></div>
          <h1 className="contact-title">
            <span className="contact-title-text">CONTACT</span>
            <span className="contact-title-subtext">PHANTOM GAMBIT</span>
          </h1>
          <div className="contact-title-underline"></div>
          <p className="contact-subtitle">
            Ready to level up your gaming experience? Let's strategize together.
          </p>
          <div className="contact-header-stats">
            <div className="contact-stat">
              <span className="contact-stat-number">24h</span>
              <span className="contact-stat-label">Response Time</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat-number">99%</span>
              <span className="contact-stat-label">Satisfaction</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat-number">1k+</span>
              <span className="contact-stat-label">Players Helped</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Left Side - Contact Info Card */}
       

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-container-wrapper">
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h2>SEND TRANSMISSION</h2>
                  <p>Initiate contact protocol. We'll see your message ASAP.</p>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`contact-status-message ${submitStatus.success ? 'contact-success' : 'contact-error'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label">NAME</label>
                      <div className="contact-input-container">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          className={`contact-form-input ${activeField === 'name' ? 'contact-active' : ''}`}
                          placeholder="Enter Your Name"
                          required
                        />
                        <div className="contact-input-glow"></div>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">EMAIL</label>
                      <div className="contact-input-container">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          className={`contact-form-input ${activeField === 'email' ? 'contact-active' : ''}`}
                          placeholder="Your Email"
                          required
                        />
                        <div className="contact-input-glow"></div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">MESSAGE</label>
                    <div className="contact-input-container">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        className={`contact-form-textarea ${activeField === 'message' ? 'contact-active' : ''}`}
                        placeholder="Write here..."
                        rows="6"
                        required
                        maxLength={500}
                      ></textarea>
                      <div className="contact-input-glow"></div>
                      <div className="contact-char-counter">
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`contact-submit-btn ${isSubmitting ? 'contact-submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    <span className="contact-btn-content">
                      {isSubmitting ? (
                        <>
                          <div className="contact-transmission-loader">
                            <div className="contact-loader-dot"></div>
                            <div className="contact-loader-dot"></div>
                            <div className="contact-loader-dot"></div>
                          </div>
                          INITIATING TRANSMISSION...
                        </>
                      ) : (
                        <>
                          <span className="contact-btn-icon">🚀</span>
                          SEND
                        </>
                      )}
                    </span>
                    <div className="contact-btn-glow"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="contact-quick-actions-wrapper">
        
        </div>
      </div>
    </div>
  );
};

export default Contact;