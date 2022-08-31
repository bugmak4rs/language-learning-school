import React, { FC } from 'react';

import style from './style.module.scss';

const Info: FC = () => {
  return (
    <section className={style.info} id="info" aria-label="Информация">
      <div className={style.container}>
        <h2 className={style.title}>F.A.Q.</h2>
      </div>
    </section>
  );
};

export default Info;
