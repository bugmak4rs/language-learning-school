import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import hand from '../../assets/img/about-us-1.jpg';
import people from '../../assets/img/about-us-2.jpg';

import style from './style.module.scss';

const AboutUs: FC = () => {
  return (
    <section className={style.aboutUs} id="aboutUs" aria-label="О нас">
      <div className={style.container}>
        <h2 className={style.title}>О нас</h2>
        <div className={style.top}>
          <p className={style.text}>
            Мы&nbsp;просто энтузиасты, которые хотят помочь людям учить иностранные языки. Чтобы
            после наших полностью бесплатных курсов человек имел базу языка которого выбрал
            и&nbsp;дальше просто развивался и&nbsp;расширял свой вокабуляр. Нам хочется чтобы люди
            получали удовольствие от&nbsp;изучение языков и&nbsp;развивались. Также наша программа
            сделана так чтобы человек смог понять нравиться ему выбран язык или нет.
          </p>
          <img src={hand} alt="Рука с глазками" />
        </div>
        <div className={style.bottom}>
          <p className={style.text}>
            Мы&nbsp;небольшая команда <Link to={'/team'}>BUGMAKERS!</Link>, наша сфера деятельности
            это IT, мы&nbsp;занимаемся разработкой сайтов и&nbsp;созданием веб&nbsp;&mdash;
            приложений. И&nbsp;для нас этот продукт имеет большое знание, ведь в&nbsp;IT сейчас
            необходим Английский и&nbsp;получить качественную базу это очень важно.
          </p>
          <img src={people} alt="Люди встречают закат" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
