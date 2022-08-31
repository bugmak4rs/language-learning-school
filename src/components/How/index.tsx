import React, { FC } from 'react';
import note from '../../assets/img/note.png';

import style from './style.module.scss';

const How: FC = () => {
  return (
    <section className={style.how} id="how" aria-label="Как проходят уроки?">
      <div className={style.container}>
        <h2 className={style.title}>Как проходят уроки?</h2>
        <div className={style.progress}>
          <div className={style.first}>1</div>
          <div className={style.second}>2</div>
          <div className={style.third}>3</div>
          <span className={style.board}></span>
        </div>
        <div className={style.description}>
          <p>Алфавит и&nbsp;грамматика</p>
          <p>Изучение слов, фраз, построение предложений</p>
          <p>Эссе и&nbsp;сочинения</p>
        </div>
        <div className={style.homework}>
          <p>После каждого урока&nbsp;&mdash; домашнее задание!</p>
          <img src={note} alt="Блокнотик" />
        </div>
      </div>
    </section>
  );
};

export default How;
