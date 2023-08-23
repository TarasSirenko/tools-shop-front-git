import s from './GeneralContainer.module.css';
import { useModalContext } from '../../../context/ModalContext';
import Modal from '../../utils/Modal/Modal';

export default function Container({ children }) {
  const { closeModal, modalContent } = useModalContext();
  return (
    <div className={s.container}>
      {modalContent && (
        <Modal closeModal={closeModal} modalContent={modalContent} />
      )}
      {children}
    </div>
  );
}
