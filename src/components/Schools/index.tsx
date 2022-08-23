import React, { FC } from 'react';

import style from './style.module.scss';

const Schools: FC = () => {
  return (
    <section className={style.schools} id="schools" aria-label="Языковые школы">
      <div className={style.container}>
        <h2 className={style.title}>Языковые школы</h2>
        <div className={style.card}>
          <button className={style.choice}>
            <span>Iure explicabo?</span>
          </button>
          <button className={style.choice}>
            <span>Facilis repudiandae</span>
          </button>
          <button className={style.choice}>
            <span>Debitis, atque</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schools;
