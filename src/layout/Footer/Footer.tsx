import React, { FC } from 'react';
import footer from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={footer.offset}>
      <div className={footer.container}>
        <p>Footer</p>
      </div>
    </footer>
  );
};

export default Footer;
