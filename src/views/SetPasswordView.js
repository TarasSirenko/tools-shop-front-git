import s from './RegistrationView.module.css';

import { useChangePasswordMutation } from 'redux/api/api';
import { useSelector } from 'react-redux';

export default function SetPasswordView() {
  const [changePasswor] = useChangePasswordMutation();

  const currentUser = useSelector(state => state.auth);

  const reVerificationBtnClick = async () => {
    const response = await changePasswor(currentUser.user.email);
    console.log(response);
  };
  return (
    <>
      <div className={s.registrationContainer}>
        <h1 className={s.registrationTitle}>
          На вашу пошту{' '}
          <span className={s.registrationEmail}>{currentUser.user.email}</span>{' '}
          надісланно лист для відновлення паролю
        </h1>
        <p className={s.registrationBaseInfo}>
          Будь ласка, перевірте свою скриньку та виконайте інструкції у листі
          для завершення відновлення паролю.
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
