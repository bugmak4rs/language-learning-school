import React, { FC } from 'react';
import AboutUs from '../components/AboutUs';
import EducationalVideos from '../components/EducationalVideos';
import Hero from '../components/Hero';
import Language from '../components/Language';
import Schools from '../components/Schools';

const Home: FC = () => {
  return (
    <div>
      <div className="section-container">
        <Hero />
        <AboutUs />
        <EducationalVideos />
        <Language />
        <Schools />
      </div>
    </div>
  );
};

export default Home;
