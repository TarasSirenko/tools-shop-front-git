import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Oval } from 'react-loader-spinner';
import { useModalContext } from '../../../context/ModalContext';

import { addCurrentUser } from 'redux/auth/auth-slice';
import { useSignupUserMutation } from 'redux/api/api';

import IconPassword from 'svgImage/IconPassword';
import IconEmail from 'svgImage/IconEmail';
import IconPhone from 'svgImage/IconPhone';
import FormErrorMessage from '../FormErrorMessage';
import ErrorRegisterForm from '../ErrorRegisterForm/ErrorRegisterForm';
import SetShoePasswordBtn from 'components/utils/SetShoePasswordBtn/SetShoePasswordBtn';

import s from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [errorStatus, setErrorStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [signupUser, { isLoading, isError, isSuccess }] =
    useSignupUserMutation();

  const navigate = useNavigate();

  const { closeModal, setModalContent } = useModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const response = await signupUser(data);
    if (response?.data) dispatch(addCurrentUser(response));
    if (response?.error) setErrorStatus(response.error.status);
    reset();
  };
  useEffect(() => {
    if (isError) {
      if (!errorStatus) return;

      setModalContent(<ErrorRegisterForm errorStatus={errorStatus} />);
    }
  }, [errorStatus, isError, setModalContent]);

  useEffect(() => {
    if (isSuccess) {
      closeModal();
      navigate(`/registration`);
    }
  }, [closeModal, isSuccess, navigate]);

  if (isLoading) {
    return (
      <Oval
        height={200}
        width={200}
        color="#da9022"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        secondaryColor="#b7b7b7"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }

  return (
    <>
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
            <FormErrorMessage errorText={errors.phone.message} />
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
                required: 'Придумайте пароль',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,16}$/,
                  message: `Пароль повинен відповідати такому формату:\n
        - довжина від 4 до 16 символів;\n
        - лише латинські літери та цифри;\n
        - обов'язково має бути хоча б одна велика літера.`,
                },
              })}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              autoComplete="password"
              className={`${s.input} ${errors.password ? s.invalid : s.valid}`}
            />
            <SetShoePasswordBtn
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </div>
          {errors.password && (
            <FormErrorMessage errorText={errors.password.message} />
          )}
        </label>

        <input className={s.submit} type="submit" value="Зареєструватися" />
      </form>
    </>
  );
}
