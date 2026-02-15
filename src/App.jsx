import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import Navbar from './Navbar/Nav';
import Footer from './footer/footer'; // Import Footer

import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Layout from './Layout/Layout';
import GameDetails from './GamesDetail/GamesDetail';
import Games from './Games/Games';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="main-container">
      {/* Navbar is now visible on ALL pages */}
      <Navbar />
      
      {/* Main content area with proper spacing */}
      <main className="main-content">
        <Routes>  
          <Route path="/" element={<Layout />} /> 
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      
      {/* Footer is now visible on ALL pages */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;