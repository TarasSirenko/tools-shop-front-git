import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconPassword from 'svgImage/IconPassword';
import IconEmail from 'svgImage/IconEmail';
import FormErrorMessage from '../FormErrorMessage';
import s from './LoginForm.module.css';
import 'animate.css';

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
      <div className="animate__animated animate__zoomIn animate__faster">
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.formTitleWrap}>
            <h1 className={s.title}>Увійдіть або виконайте</h1>
            <NavLink to="/register">
              <button type="button" className={s.registerLink}>
                Реєстрацію
              </button>
            </NavLink>
          </div>
          <label className={s.label}>
            <span className={s.labelTitle}>Пошта</span>
            <div className={s.inputWrap}>
              <div className={s.svgWrap}>
                <IconEmail />
              </div>

              <input
                {...register('email', {
                  required: 'Введено невірну адресу електронноі пошти',
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
              <FormErrorMessage errorText={errors.email.message} />
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
                  required: 'Введено невірний пароль',
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
                className={`${s.input} ${
                  errors.password ? s.invalid : s.valid
                }`}
              />
            </div>

            {errors.password && (
              <FormErrorMessage errorText={errors.password.message} />
            )}
          </label>

          <input
            className={s.submit}
            type="submit"
            value="Вхід"
            onClick={() => handleClick(errors)}
          />
        </form>
      </div>
    </>
  );
}
