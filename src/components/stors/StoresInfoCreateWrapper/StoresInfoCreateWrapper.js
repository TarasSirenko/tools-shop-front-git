import s from './StoresInfoCreateWrapper.module.css';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
export default function StoresInfoCreateWrapper({ children }) {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsActive(true);
  }, []);

  const onOverlayClick = e => {
    if (e.target !== e.currentTarget) return;
    setIsActive(false);
    setTimeout(() => {
      navigate('/director/stores');
    }, 500);
  };

  const calculateLeftValue = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 1600) {
      return (viewportWidth - 1600) / 2;
    }
  };
  return (
    <div
      className={`${s.storesCreateOverlay} ${isActive ? s.active : ''}`}
      onClick={onOverlayClick}
    >
      <div className={s.wrapper} style={{ left: `${calculateLeftValue()}px` }}>
        <div className={s.storesCreateContainer}>{children}</div>
      </div>
    </div>
  );
}
