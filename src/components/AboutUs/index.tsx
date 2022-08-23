import React, { FC } from 'react';

import style from './style.module.scss';

const AboutUs: FC = () => {
  return (
    <section className={style.aboutUs} id="aboutUs" aria-label="О нас">
      <div className={style.container}>
        <h2 className={style.title}>О нас</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptate quibusdam
          doloremque reprehenderit, modi praesentium obcaecati rem totam aut veritatis similique,
          debitis a dignissimos perspiciatis quam! Suscipit inventore itaque consequatur. Nesciunt
          accusantium nulla, repellendus explicabo laudantium perspiciatis, consectetur libero,
          mollitia consequatur expedita officia sed nostrum sit molestiae nobis. Eos ducimus nostrum
          quaerat ea dolorem aut esse asperiores eaque. Ipsa, consequatur!
        </p>
        <ul className={style.list}>
          <li>Lorem ipsum dolor sit.</li>
          <li>Explicabo, voluptate quibusdam.</li>
          <li>Ipsa, consequatur!</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
