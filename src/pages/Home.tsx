import React, { FC } from 'react';
import AboutUs from '../components/AboutUs';
import How from '../components/How';
import Hero from '../components/Hero';
import Language from '../components/Language';
import Info from '../components/Info';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Language />
      <AboutUs />
      <How />
      <Info />
    </>
  );
};

export default Home;
