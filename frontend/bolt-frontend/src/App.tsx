import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleAuthModeSwitch = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleGetStarted = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header 
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />
          
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home onGetStarted={handleGetStarted} />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing onGetStarted={handleGetStarted} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
          
          <AuthModal 
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            mode={authMode}
            onModeSwitch={handleAuthModeSwitch}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;