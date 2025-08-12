import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <Reviews />
    </>
  );
};

export default Home;