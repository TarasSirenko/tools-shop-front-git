import { ReactComponent as IconUser } from 'svgImage/icon-user.svg';
import { ReactComponent as IconCart } from 'svgImage/icon-cart.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import React from 'react';
import { useModalContext } from '../../../context/ModalContext';

import s from './HeaderUserMenu.module.css';
import LoginForm from 'components/forms/LoginForm/LoginForm';
import UserInfoForms from 'components/forms/UserInfoForms/UserInfoForms';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCurrentUserMutation } from 'redux/api/api';

import { updateCurrentUser } from 'redux/auth/auth-slice';
import { updateToken } from 'redux/auth/token-slice';

function HeaderUserMenu() {
  const { openModal } = useModalContext();
  const dispatch = useDispatch();

  const token = useSelector(state => state.token);
  const currentUser = useSelector(state => state.auth);

  const [getCurrentUser] = useGetCurrentUserMutation();

  const getCurrentUserInfo = async () => {
    const response = await getCurrentUser(token);

    if (response?.error) {
      dispatch(updateToken(null));
      return;
    }
    dispatch(
      updateCurrentUser({
        user: {
          email: response.data.data.email,
          subscription: response.data.data.subscription,
          phone: response.data.data.phone,
        },
      }),
    );
  };
  useEffect(() => {
    if (!token) return;
    getCurrentUserInfo();
  }, []);

  return (
    <div className={s.container}>
      <Link to="login">
        {/* {currentUser.isLoggedIn && } */}
        <button
          type="button"
          className={s.buttonUser}
          onClick={() => {
            currentUser.isLoggedIn
              ? openModal(<UserInfoForms user={currentUser.user} />)
              : openModal(<LoginForm />);
          }}
        >
          <IconUser width={32} height={30} />
          {currentUser?.isLoggedIn && (
            <p className={s.email}>{currentUser.user.email}</p>
          )}
        </button>
      </Link>

      <Link to="cart">
        <button type="button" className={s.buttonCart}>
          <IconCart width={27} height={30} />
        </button>
      </Link>
    </div>
  );
}

export default HeaderUserMenu;
