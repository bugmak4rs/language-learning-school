import React, { FC } from 'react';
import Hero from '../components/Hero';

const Home: FC = () => {
  return (
    <div>
      <div className="section-container">
        <Hero />
        <p>Hello, world!</p>
      </div>
    </div>
  );
};

export default Home;
