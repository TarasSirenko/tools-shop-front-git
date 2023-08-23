import s from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

// import { useCreateUserMutation } from 'redux/contactsApi/contactsApi';

import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const [fetchUser, data] = useCreateUserMutation();
  // console.log(data);

  const handleClick = errors => {
    if (errors.name)
      toast.error(errors.name.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

    if (errors.email)
      toast.error(errors.email.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

    if (errors.password)
      toast.error(errors.password.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  const onSubmit = data => {
    console.log(data);
    // console.log(fetchUser(JSON.stringify(data)));
    console.log(data);
    reset();
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.title}>Сторінка рєєстрації</h1>

        <label className={s.label}>
          <span className={s.labelTitle}>Телефон</span>
          <input
            {...register('phone', {
              required: 'Без имени невозможна ваша регистрация',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message: 'Имя должно содержать только латинские буквы',
              },
            })}
            type="text"
            name="phone"
            placeholder="Phone"
            autoComplete="phone"
            className={`${s.input} ${errors.name ? s.invalid : s.valid}`}
          />
          <p>{errors.name?.message}</p>
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Пошта</span>
          <input
            {...register('email', {
              required: 'Без имейла невозможна ваша регистрация',
              pattern: {
                value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                message: 'Имейл должен содержать только латинские буквы и @',
              },
            })}
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className={`${s.input} ${errors.email ? s.invalid : s.valid}`}
          />
          <p>{errors.email?.message}</p>
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Пароль</span>
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
        </label>

        <input
          className={s.submit}
          type="submit"
          value="Зареєструватися"
          onClick={() => handleClick(errors)}
        />
      </form>
    </>
  );
}
