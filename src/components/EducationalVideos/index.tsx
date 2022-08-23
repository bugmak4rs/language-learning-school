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
        <div className={style.videos}>
          <iframe
            width="530"
            height="285"
            src="https://www.youtube.com/embed/cGbEUDeRtzE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="530"
            height="285"
            src="https://www.youtube.com/embed/3GDWXTBJpfc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="530"
            height="285"
            src="https://www.youtube.com/embed/bglVOxMaM70"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="530"
            height="285"
            src="https://www.youtube.com/embed/3im6wLx7b24"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EducationalVideos;
