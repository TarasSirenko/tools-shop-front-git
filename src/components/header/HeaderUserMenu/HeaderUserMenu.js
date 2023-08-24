import { ReactComponent as IconUser } from 'svgImage/icon-user.svg';
import { ReactComponent as IconCart } from 'svgImage/icon-cart.svg';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useModalContext } from '../../../context/ModalContext';
import UserForm from 'components/forms/UserForm';

import s from './HeaderUserMenu.module.css';

function HeaderUserMenu() {
  const { openModal } = useModalContext();
  return (
    <div className={s.container}>
      <NavLink to="/login">
        <button
          type="button"
          className={s.buttonUser}
          onClick={() => openModal(() => <UserForm />)}
        >
          <IconUser width={32} height={30} />
        </button>
      </NavLink>

      <button type="button" className={s.buttonCart}>
        <IconCart width={27} height={30} />
      </button>
    </div>
  );
}

export default HeaderUserMenu;
