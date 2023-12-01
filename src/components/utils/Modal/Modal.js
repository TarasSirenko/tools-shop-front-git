import s from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, modalContent }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleOverlayClick}>
      <ToastContainer className={s.ToastContainer} />
      <div className={s.Modal}>{modalContent}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  item: PropTypes.object,
};
