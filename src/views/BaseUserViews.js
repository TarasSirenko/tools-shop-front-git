import Hero from 'components/Hero/Hero';
import ToolsContainer from 'components/tools/ToolsContainer/ToolsContainer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from 'components/forms/LoginForm/LoginForm';
import { useModalContext } from 'context/ModalContext';

export default function BaseUserViews() {
  const { openModal } = useModalContext();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') openModal(<LoginForm />);
  }, []);

  return (
    <>
      <Hero />
      <ToolsContainer />
    </>
  );
}
