import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import FormPage from '../../pages/FormPage';
import Home from '../../pages/Home';
import Team from '../../pages/Team';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/form" element={<FormPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
