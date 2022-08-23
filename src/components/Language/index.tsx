import React, { FC } from 'react';
import united from '../../assets/img/united.webp';
import spain from '../../assets/img/spain.webp';
import japan from '../../assets/img/japan.webp';

import style from './style.module.scss';

const Language: FC = () => {
  return (
    <section className={style.language} id="language" aria-label="Все языки">
      <div className={style.container}>
        <h2 className={style.title}>Все языки</h2>
        <div className={style.card}>
          <button className={style.choice}>
            <picture>
              <source srcSet={united} type="image/webp" />
              <img src={'../../assets/img/united.png'} alt="flag" />
            </picture>
            <span>Английский</span>
          </button>
          <button className={style.choice}>
            <picture>
              <source srcSet={spain} type="image/webp" />
              <img src={'../../assets/img/united.png'} alt="flag" />
            </picture>
            <span>Испанский</span>
          </button>
          <button className={style.choice}>
            <picture>
              <source srcSet={japan} type="image/webp" />
              <img src={'../../assets/img/united.png'} alt="flag" />
            </picture>
            <span>Японский</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Language;
