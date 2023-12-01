import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  const openModal = content => {
    setIsModalOpen(true);
    setModalContent(content);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);

    document.body.classList.remove('modal-open');
    navigate('/');
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setModalContent,
        modalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
