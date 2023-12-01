import s from './UserInfoForms.module.css';
import { ReactComponent as IconUser } from 'svgImage/icon-user.svg';
import { ReactComponent as PhoneSvg } from 'svgImage/phone.svg';
import { ReactComponent as EmailSvg } from 'svgImage/mail.svg';
import { useModalContext } from '../../../context/ModalContext';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { updateCurrentUser } from 'redux/auth/auth-slice';
import { useLogoutUserMutation } from 'redux/api/api';
import { updateToken } from 'redux/auth/token-slice';
import LoginForm from '../LoginForm/LoginForm';
import { Oval } from 'react-loader-spinner';

export default function UserInfoForms({ user }) {
  const { email, phone, subscription } = user;
  const { setModalContent, closeModal } = useModalContext();
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(state => state.auth);

  const onAdminViewBtnClick = () => {
    if (currentUser?.user.subscription === 'director') {
      closeModal();
      navigate(`/director`);
    }
  };

  const [logoutUser, { isLoading }] = useLogoutUserMutation();

  const logautBtnClick = async () => {
    const respons = await logoutUser(token);
    dispatch(updateCurrentUser(null));
    dispatch(updateToken(null));
    setModalContent(<LoginForm />);
  };
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
    <div className="animate__animated animate__zoomIn animate__faster">
      <div className={`${s.form} ${s.usedEmailWrapper}`}>
        <h1 className={s.usedEmailTitle}>ВАШІ ДАННІ</h1>
        <ul className={s.userInfoList}>
          <li className={s.userInfoItem}>
            <EmailSvg width={32} height={30} className={s.svgWrap} />
            <p> {email}</p>
          </li>
          <li className={s.userInfoItem}>
            <PhoneSvg width={32} height={30} className={s.svgWrap} />
            <p> {phone}</p>
          </li>
          <li className={s.userInfoItem}>
            <IconUser width={32} height={30} className={s.svgWrap} />
            <p>{subscription}</p>
          </li>
        </ul>
        <div className={s.buttonWrappew}>
          {currentUser?.user.subscription !== 'client' && (
            <button
              className={s.submit}
              type="button"
              onClick={onAdminViewBtnClick}
            >
              Адміністративна частина
            </button>
          )}
          <button className={s.submit} type="button" onClick={logautBtnClick}>
            Вийти
          </button>
        </div>
      </div>
    </div>
  );
}
