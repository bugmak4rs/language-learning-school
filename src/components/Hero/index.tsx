import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Next } from '../Icons/Icons';

import style from './style.module.scss';

const Hero: FC = () => {
  return (
    <section className={style.hero} id="hero" aria-label="Главный контент">
      <div className={style.container}>
        <h1 className={style.greeting}>Привет, Алексей!</h1>
        <p className={style.progress}>Ты остановился на уроке</p>
        <Link className={style.link} to="/lessons">
          Глаголы
          <Next />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
