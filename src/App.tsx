import React, { FC } from 'react';
import Header from './layout/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import './scss/global.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
