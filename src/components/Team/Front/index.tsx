import React, { FC } from 'react';
import { Code, GitHub, Telegram } from '../Icon';
import aleksey from '../../../assets/img/aleksey.png';
import slava from '../../../assets/img/slava.png';

import style from './front.module.scss';

const Front: FC = () => {
  return (
    <>
      <div className={style.front}>
        <div className={style.orientation}>
          <Code />
          <span>Front End</span>
        </div>
        <div className={style.card}>
          <div className={style.info}>
            <img src={aleksey} alt="Фото Алексея Попова" />
            <div className={style.main}>
              <h2 className={style.name}>
                Попов
                <br /> Алексей
              </h2>
              <div className={style.links}>
                <a href="https://github.com/1PopovAleksey" target={'_blank'}>
                  <GitHub />
                </a>
                <a href="https://t.me/AlekseyPopovDev" target={'_blank'}>
                  <Telegram />
                </a>
              </div>
            </div>
          </div>
          <p className={style.achievement}>
            Попукал в код, сделал говно дизайн, но все вроде доволны так что всё хорошо. Или нет...
          </p>
        </div>
        <div className={style.card}>
          <div className={style.info}>
            <img src={slava} alt="Фото Алексея Попова" />
            <div className={style.main}>
              <h2 className={style.name}>
                Вячеслав
                <br /> Кагарлицкий
              </h2>
              <div className={style.links}>
                <a href="https://github.com/StelsP" target={'_blank'}>
                  <GitHub />
                </a>
                <a href="https://t.me/StelsP" target={'_blank'}>
                  <Telegram />
                </a>
              </div>
            </div>
          </div>
          <p className={style.achievement}>
            Попукал в код, cделал сломанные компоненты, но все вроде доволны так что всё хорошо. Или
            нет...
          </p>
        </div>
      </div>
    </>
  );
};

export default Front;
