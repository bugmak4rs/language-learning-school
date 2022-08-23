import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <a href="/" className={style.logo}>
            Logo
          </a>
          <div>
            <Link to="/team" className={style.team}>
              Наша команда
            </Link>
            <Link to="/login" className={style.login}>
              Вход / Регистрация
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
