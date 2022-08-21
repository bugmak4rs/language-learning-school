import React, { FC } from 'react';
import AboutUs from '../components/AboutUs';
import EducationalVideos from '../components/EducationalVideos';
import Hero from '../components/Hero';
import Language from '../components/Language';
import Schools from '../components/Schools';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <EducationalVideos />
      <Language />
      <Schools />
    </>
  );
};

export default Home;
