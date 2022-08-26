import React, { FC } from 'react';

import style from './style.module.scss';

const Language: FC = () => {
  return (
    <section className={style.language} id="language" aria-label="Все языки">
      <div className={style.container}>
        <h2 className={style.title}>Все языки</h2>
        <div className={style.card}>
          <button className={style.choice}>
            <span>Английский</span>
          </button>
          <button className={style.choice}>
            <span>Испанский</span>
          </button>
          <button className={style.choice} arial-label="Японский язык">
            <span>Японский</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Language;
