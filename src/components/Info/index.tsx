import React, { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import style from './style.module.scss';

const Info: FC = () => {
  return (
    <section className={style.info} id="info" aria-label="Информация">
      <div className={style.container}>
        <h2 className={style.title}>F.A.Q.</h2>
        <Accordion>
          <Accordion.Item className={style.item} eventKey="0">
            <Accordion.Header className={style.header}>
              Что нужно чтобы начать учиться?
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              Только желание, у&nbsp;нас полностью бесплатные курсы. Вам нужно только
              зарегистроваться.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={style.item} eventKey="1">
            <Accordion.Header className={style.header}>
              Получу я&nbsp;какой нибудь серфитикат?
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              Нет, потому что мы&nbsp;даём только знания)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={style.item} eventKey="2">
            <Accordion.Header className={style.header}>
              Сколько времени займёт обучение?
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              У&nbsp;каждого по&nbsp;разному, но&nbsp;программа сделанна на&nbsp;несколько дней.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={style.item} eventKey="3">
            <Accordion.Header className={style.header}>
              Какой у&nbsp;меня будет уровень по&nbsp;окончанию?
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              У&nbsp;вас будет елементарные знания языка на&nbsp;уровне&nbsp;A1+.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={style.item} eventKey="4">
            <Accordion.Header className={style.header}>
              Почему у&nbsp;вас только база?
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              Потому что уже есть очень много комнаний которые дают хорошие знания, но&nbsp;проблема
              в том что они забывают про базу. И&nbsp;мы&nbsp;эту проблему решаем.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Info;
