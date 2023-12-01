import s from './RegistrationView.module.css';

import { useReVerificationMutation } from 'redux/api/api';
import { useSelector } from 'react-redux';

export default function RegistrationView() {
  const [reVerification, isLoadingVER] = useReVerificationMutation();

  const currentUser = useSelector(state => state.auth);

  console.log(currentUser);

  const reVerificationBtnClick = async () => {
    const response = await reVerification({ email: currentUser.user.email });
    console.log(response);
    console.log(isLoadingVER);
  };
  return (
    <>
      <div className={s.registrationContainer}>
        <h1 className={s.registrationTitle}>
          На вашу пошту{' '}
          <span className={s.registrationEmail}>{currentUser.user.email}</span>{' '}
          надісланно лист для верифікації
        </h1>
        <p className={s.registrationBaseInfo}>
          Будь ласка, перевірте свою скриньку та виконайте інструкції у листі
          для завершення процесу реєстрації.
        </p>
        <button
          onClick={reVerificationBtnClick}
          className={s.registrationButton}
        >
          Надіслати ще раз
        </button>
      </div>
    </>
  );
}
