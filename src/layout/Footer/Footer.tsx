import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo, Telegram, Vk } from './Icon';

import style from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={style.offset}>
      <div className={style.container}>
        <div className={style.top}>
          <Link to={'/'}>
            <Logo />
          </Link>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link to={'/team'}>BUGMAKERS!</Link>
              </li>
              <li>
                <a href="#language">Языки</a>
              </li>
              <li>
                <a href="#aboutUs">О нас</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#how">Как проходят уроки?</a>
              </li>
              <li>
                <a href="#info">F.A.Q</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.bottom}>
          <ul>
            <li>
              <a href="#" target="_blank">
                <Telegram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <Vk />
              </a>
            </li>
          </ul>
          <span>© 2022 BUGMAKERS!, Inc.</span>
          <a className={style.politics} href="#" target="_blank">
            Политика
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
