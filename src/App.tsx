import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/global.scss';
import Header from './components/Header';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
