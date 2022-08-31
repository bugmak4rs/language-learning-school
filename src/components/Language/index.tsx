import React, { FC } from 'react';
import uk from '../../assets/img/uk.png';
import spain from '../../assets/img/spain.png';
import japan from '../../assets/img/japan.png';

import style from './style.module.scss';

const Language: FC = () => {
  return (
    <section className={style.language} id="language" aria-label="Все языки">
      <div className={style.container}>
        <h2 className={style.title}>Все языки</h2>
        <div className={style.card}>
          <button className={style.choice} arial-label="Английский язык">
            <img src={uk} alt="Флаг Соединенных Королевств" />
            <span className={style.choice__language}>Английский</span>
            <div className={style.choice__info}>
              <span className={style.choice__amount}>20</span>
              <span className={style.choice__modules}>модулей</span>
            </div>
          </button>
          <button className={style.choice} arial-label="Испанский язык">
            <img src={spain} alt="Флаг Испании" />
            <span className={style.choice__language}>Испанский</span>
            <div className={style.choice__info}>
              <span className={style.choice__amount}>13</span>
              <span className={style.choice__modules}>модулей</span>
            </div>
          </button>
          <button className={style.choice} arial-label="Японский язык">
            <img src={japan} alt="Флаг Японии" />
            <span className={style.choice__language}>Японский</span>
            <div className={style.choice__info}>
              <span className={style.choice__amount}>16</span>
              <span className={style.choice__modules}>модулей</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Language;
