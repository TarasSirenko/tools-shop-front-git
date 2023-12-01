import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import { useModalContext } from '../../../context/ModalContext';

import 'react-toastify/dist/ReactToastify.css';

import IconPassword from 'svgImage/IconPassword';
import IconEmail from 'svgImage/IconEmail';

import FormErrorMessage from '../FormErrorMessage';
import UserInfoForms from '../UserInfoForms/UserInfoForms';
import RegisterForm from '../RegisterForm/RegisterForm';
import SetShoePasswordBtn from 'components/utils/SetShoePasswordBtn/SetShoePasswordBtn';

import s from './LoginForm.module.css';
import 'animate.css';
import { useLoginUserMutation, useChangePasswordMutation } from 'redux/api/api';
import { updateCurrentUser, addCurrentUser } from 'redux/auth/auth-slice';
import { updateToken } from 'redux/auth/token-slice';

export default function LoginForm() {
  const { closeModal, setModalContent } = useModalContext();
  const [showPassword, setShowPassword] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const handleEmailChange = event => {
    setEmailValue(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();
  const currentUser = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const [
    changePassword,
    { isLoading: isLoadingCP, isError: isErrorCP, isSuccess: isSuccessCP },
  ] = useChangePasswordMutation();

  const setPassword = async () => {
    clearErrors('email', 'password');
    dispatch(addCurrentUser({ data: { email: emailValue } }));
    const response = await changePassword(emailValue);
    setCurrentResponse(response);
    console.log(isSuccessCP);
  };

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
  const onSubmit = async data => {
    clearErrors('password', 'email');
    const response = await loginUser(data);
    setCurrentResponse(response);
    if (response?.data) {
      dispatch(updateCurrentUser(response.data));
      dispatch(updateToken(response.data.token));
    }
    // reset();
  };
  useEffect(() => {
    if (currentUser.isLoggedIn) {
      setModalContent(<UserInfoForms user={currentUser.user} />);
    }
  }, [currentUser.isLoggedIn, currentUser.user, setModalContent]);
  useEffect(() => {
    if (isSuccessCP) {
      closeModal();
      navigate(`/setPassword`);
    }
    if (currentResponse && (isError || isErrorCP)) {
      if (currentResponse?.error?.status === 400) {
        setError('password', {
          type: 'manual',
          message: 'Неправильний пароль',
        });
      }
      if (currentResponse?.error?.status === 404) {
        setError('email', {
          type: 'manual',
          message: 'Немає користувача з таким імейлом',
        });
      }
      if (currentResponse?.error?.status === 403) {
        dispatch(addCurrentUser({ data: { email: emailValue } }));
        closeModal();
        navigate(`/registration`);
      }

      setCurrentResponse(null);
    }
  }, [
    isError,
    setError,
    currentResponse,
    closeModal,
    navigate,
    isErrorCP,
    dispatch,
    emailValue,
    isSuccessCP,
  ]);
  if (isLoading || isLoadingCP) {
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
      <ToastContainer />
      <div className="animate__animated animate__zoomIn animate__faster">
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <div className={s.formTitleWrap}>
            <h1 className={s.title}>Увійдіть або виконайте</h1>
            <button
              type="button"
              className={s.registerLink}
              onClick={() => setModalContent(<RegisterForm />)}
            >
              Реєстрацію
            </button>
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
                onChange={handleEmailChange}
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
        - лише латинські літери та цифри;`,
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete="password"
                className={`${s.input} ${
                  errors.password ? s.invalid : s.valid
                }`}
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
          <div className={s.loginUpdatePasswordWrapper}>
            <input
              className={s.submit}
              type="submit"
              value="Вхід"
              onClick={() => handleClick(errors)}
            />
            <button
              type="button"
              onClick={() => setPassword()}
              className={`${s.button} ${s.updateedPasswordBtn}`}
            >
              Забули пароль?
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
