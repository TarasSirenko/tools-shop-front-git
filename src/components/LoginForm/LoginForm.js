import s from './LoginForm.module.css';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClick = errors => {
    if (errors.name)
      toast.error(errors.name.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

    if (errors.password)
      toast.error(errors.password.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          {...register('email', {
            required: 'Без имени невозможна ваша регистрация',
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message: 'Имя должно содержать только латинские буквы',
            },
          })}
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="email"
          className={`${s.input} ${errors.name ? s.invalid : s.valid}`}
        />
        <p>{errors.name?.message}</p>

        <input
          {...register('password', {
            required: 'Без пароля невозможна ваша регистрация',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,16}$/,
              message:
                'Пароль должен быть такого вормата: длина от 4 до 16 символов, только латинские буквы и цифры, должна быть хотя бы одна заглавная буква ',
            },
          })}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          className={`${s.input} ${errors.password ? s.invalid : s.valid}`}
        />
        <p>{errors.password?.message}</p>

        <input
          type="submit"
          value="Register"
          onClick={() => handleClick(errors)}
        />
      </form>
    </>
  );
}
