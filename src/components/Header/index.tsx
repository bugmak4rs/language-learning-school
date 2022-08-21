import React, { FC } from 'react';

import style from './style.module.scss';

const Header: FC = () => {
  return (
    <div className={style.header}>
      <div className="section-container">
        <p>Header</p>
      </div>
    </div>
  );
};

export default Header;
