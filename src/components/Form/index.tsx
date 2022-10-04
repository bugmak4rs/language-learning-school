import React, { FC } from 'react';
import Back from '../Back';
import Title from './Title';

import style from './team.module.scss';

const Form: FC = () => {
  return (
    <div className={style.offset}>
      <div className={style.container}>
        <Back address={'/'} />
        <Title />
        <form></form>
      </div>
    </div>
  );
};

export default Form;
