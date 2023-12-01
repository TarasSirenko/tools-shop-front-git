import s from './ErrorRegisterForm.module.css';

import { useModalContext } from '../../../context/ModalContext';

import RegisterForm from '../RegisterForm/RegisterForm';

export default function ErrorRegisterForm({ errorStatus }) {
  const { setModalContent } = useModalContext();
  return (
    <div className={`${s.form} ${s.usedEmailWrapper}`}>
      <h1 className={s.usedEmailTitle}>
        {' '}
        {errorStatus === 409 && 'Вже є користувач під цим імейлом'}{' '}
      </h1>
      <button
        className={`${s.submit} ${s.button}`}
        type="button"
        onClick={() => setModalContent(<RegisterForm />)}
      >
        Зареєструватися під іншим імейлом
      </button>
    </div>
  );
}
// 0938767676;
// tarassirenko71@gmail.com
