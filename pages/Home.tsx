import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from './Features';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Blog />
      <FAQ />
      <Sponsors />
    </>
  );
};

export default Home;