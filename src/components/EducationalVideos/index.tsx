import React, { FC } from 'react';

import style from './style.module.scss';

const EducationalVideos: FC = () => {
  return (
    <section
      className={style.educationalVideos}
      id="educationalVideos"
      aria-label="Обучающие видео"
    >
      <div className={style.container}>
        <h2 className={style.title}>Видео</h2>
        <div className={style.videos}></div>
      </div>
    </section>
  );
};

export default EducationalVideos;
