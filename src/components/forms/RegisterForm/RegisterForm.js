import s from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Fragment } from 'react';
import IconPassword from 'svgImage/IconPassword';
import IconEmail from 'svgImage/IconEmail';
import IconPhone from 'svgImage/IconPhone';

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
          <div className={s.inputWrap}>
            <div className={s.svgWrap}>
              <IconPhone />
            </div>

            <input
              {...register('phone', {
                required: 'Введіть номер мобільного телефону',
                pattern: {
                  value: /^(?:\+380|0)\d{9}$/,
                  message: `Номер телефону повинен бути такого формату:\n 
                  0991112233 або +380991112233;
                  `,
                },
              })}
              type="text"
              name="phone"
              placeholder="Phone"
              autoComplete="phone"
              className={`${s.input} ${errors.phone ? s.invalid : s.valid}`}
            />
          </div>
          {errors.phone && (
            <p className={s.errorMessage}>
              {errors.phone.message.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
          )}
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Пошта</span>
          <div className={s.inputWrap}>
            <div className={s.svgWrap}>
              <IconEmail />
            </div>
            <input
              {...register('email', {
                required: 'Введіть свою електронну пошту',
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                  message: `Електронна пошта повинна містити:\n 
                    - лише латинські літери;\n
                    - символ "@".`,
                },
              })}
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className={`${s.input} ${errors.email ? s.invalid : s.valid}`}
            />
          </div>
          {errors.email && (
            <p className={s.errorMessage}>
              {errors.email.message.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
          )}
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Пароль</span>
          <div className={s.inputWrap}>
            <div className={s.svgWrap}>
              <IconPassword />
            </div>
            <input
              {...register('password', {
                required: 'Придумайте пароль',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,16}$/,
                  message: `Пароль повинен відповідати такому формату:\n
        - довжина від 4 до 16 символів;\n
        - лише латинські літери та цифри;\n
        - обов'язково має бути хоча б одна велика літера.`,
                },
              })}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              className={`${s.input} ${errors.password ? s.invalid : s.valid}`}
            />
          </div>
          {errors.password && (
            <p className={s.errorMessage}>
              {errors.password.message.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
          )}
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
