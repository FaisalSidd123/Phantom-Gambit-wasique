import React, { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Nav';
import Footer from '../footer/footer'; // Import Footer
import Ballpit from '../Background/Background';
import './Layout.css';

function Layout() {
  useEffect(() => {
    // Ensure scrolling is enabled
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.overflowX = 'hidden';
    
    // Clean up
    return () => {
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <div className="main-layout">
      {/* Global Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero/Home section with Ballpit */}
        <section id="home" className="home-section">
          <Ballpit 
            shape="icosahedron"
            colors={['#14053dff', '#8b0959ff', '#40037dff']}
            count={120}
            followCursor={false}
            className="ballpit-background"
            minSize={0.2}
            maxSize={0.5}
            size0={0.5}
          />
          <Home />
        </section>
        
        {/* About section */}
        <section id="about" className="section about-section">
          <About />
        </section>
        
        {/* Contact section */}
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </div>
      
  
    </div>
  );
}

export default Layout;