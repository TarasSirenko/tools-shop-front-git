import { ReactComponent as IconUser } from 'svgImage/icon-user.svg';
import { ReactComponent as IconCart } from 'svgImage/icon-cart.svg';
import React from 'react';
import { useModalContext } from '../../context/ModalContext';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';

import s from './HeaderUserMenu.module.css';

function HeaderUserMenu() {
  const { openModal } = useModalContext();
  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.buttonUser}
        onClick={() => openModal(() => <LoginForm />)}
      >
        <IconUser width={32} height={30} />
      </button>
      <button
        type="button"
        className={s.buttonCart}
        onClick={() => openModal(<RegisterForm />)}
      >
        <IconCart width={27} height={30} />
      </button>
    </div>
  );
}

export default HeaderUserMenu;
