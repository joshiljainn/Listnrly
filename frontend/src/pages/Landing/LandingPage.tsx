import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/bolt/ThemeContext';
import { LanguageProvider } from '../../contexts/bolt/LanguageContext';
import Header from '../../components/bolt/Header';
import Footer from '../../components/bolt/Footer';
import AuthModal from '../../components/bolt/AuthModal';
import Home from '../bolt/Home';
import Features from '../bolt/Features';
import Pricing from '../bolt/Pricing';
import About from '../bolt/About';
import Contact from '../bolt/Contact';

export function LandingPage() {
  const navigate = useNavigate();
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

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    // Navigate to signup page for the full flow
    navigate('/signup');
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Test div to check if Tailwind is working */}
          <div className="fixed top-0 left-0 z-50 bg-red-500 text-white p-2 text-xs">
            Tailwind Test - If you see this red box, Tailwind is working
          </div>
          
          <Header 
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />
          
          <main className="pt-16">
            <Home onGetStarted={handleGetStarted} />
            <section id="features">
              <Features />
            </section>
            <section id="pricing">
              <Pricing onGetStarted={handleGetStarted} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          
          <Footer />
          
          <AuthModal 
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            mode={authMode}
            onModeSwitch={handleAuthModeSwitch}
            onSuccess={handleAuthSuccess}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
