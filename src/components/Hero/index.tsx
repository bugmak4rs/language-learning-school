import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';

import style from './style.module.scss';

const Hero: FC = () => {
  const { test } = useAppSelector((state) => state.test);
  console.log(test);

  return <div className={style.hero}>Hero</div>;
};

export default Hero;
