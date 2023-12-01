import s from './StoresInfoCreateForm.module.css';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import StoresLocationForm from '../StoresLocationForm/StoresLocationForm';

import { useState, Fragment } from 'react';

export default function StoresInfoCreateForm() {
  const {
    control,
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState(dayjs('2022-04-17T15:30'));

  const onSubmit = data => {
    console.log(data);
  };
  //   console.log(watch());
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.storeForm}>
      <h2 className={s.locationTitle}>ЛОКАЦІЯ</h2>
      <div className={s.locationForm}>
        <StoresLocationForm control={control} />
      </div>

      <input type="submit" />
    </form>
  );
}
