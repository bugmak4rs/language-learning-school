import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Back from '../Back';
import Title from './Title';

import style from './style.module.scss';

type FormValues = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  whylearn: string;
};

const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className={style.offset}>
      <div className={style.container}>
        <Back address={'/'} />
        <Title />

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <label>
            <p>
              Имя<span>*</span>
            </p>

            <input type="text" placeholder="Введите имя" {...register('name', {})} />
          </label>
          <label>
            <p>
              Фамилия<span>*</span>
            </p>
            <input type="text" placeholder="Введите фамилию" {...register('surname', {})} />
          </label>
          <label>
            <p>
              Телефон<span>*</span>
            </p>
            <input type="tel" placeholder="Введите телефон" {...register('phone', {})} />
          </label>
          <label>
            <p>
              Почта<span>*</span>
            </p>
            <input type="email" placeholder="Введите почту" {...register('email', {})} />
          </label>
          <label className={style.form__whylearn} htmlFor="whylearn">
            <p>
              Причина изучение языка<span>*</span>
            </p>
            <textarea
              id="whylearn"
              placeholder="Введите вашу причину изучание языка"
              {...register('whylearn', {})}
            />
            <p className={style.form__notification}>
              Очень важно понять зачем ты хочешь выучить язык, ведь без точной цели ничего нельзя
              довести до конца.
            </p>
          </label>

          <button className={style.form__submit} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
