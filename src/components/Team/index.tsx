import React, { FC } from 'react';
import Back from '../Back';
import Title from '../Title';
import Front from './Front';

import style from './team.module.scss';

const TeamCards: FC = () => {
  return (
    <>
      <div className={style.offset}>
        <div className={style.container}>
          <Back address={'/'} />
          <Title />
          <div className={style.direction}>
            <Front />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
