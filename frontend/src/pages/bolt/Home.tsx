import React from 'react';
import Hero from '../../components/bolt/Hero';
import Features from '../../components/bolt/Features';
import Reviews from '../../components/bolt/Reviews';

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