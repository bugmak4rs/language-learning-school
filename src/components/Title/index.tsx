import React, { FC } from 'react';

import style from './title.module.scss';

const Title: FC = () => {
  return (
    <>
      <h1 className={style.title}>Наша команда</h1>
    </>
  );
};

export default Title;
