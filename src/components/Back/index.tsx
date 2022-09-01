import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './back.module.scss';

type PropTypes = {
  address: string;
};

const Back: FC<PropTypes> = ({ address }) => {
  return (
    <>
      <Link className={style.link} to={address}>
        &lt; Назад
      </Link>
    </>
  );
};

export default Back;
