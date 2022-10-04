import React, { FC } from 'react';

import style from './title.module.scss';

const Title: FC = () => {
  return (
    <div className={style.heading}>
      <h1 className={style.heading__title}>Регистрация</h1>
      <button className={style.heading__button}>Или войдите</button>
    </div>
  );
};

export default Title;
