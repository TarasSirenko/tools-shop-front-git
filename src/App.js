import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';
import { ToastContainer, toast } from 'react-toastify';

import { ModalProvider } from './context/ModalContext';

function App() {
  const handleClick = e => {
    console.log(e);
    toast.error('Вы порвали себе очко!!!!', {
      position: toast.POSITION.TOP_LEFT,
      delay: 1000,

      style: {
        width: '800px',
        fontSize: '60px', // Здесь вы можете установить нужный размер шрифта
      },
    });

    toast.info('Не переживай, заштопаем!', {
      position: toast.POSITION.TOP_LEFT,
      delay: 3000,

      style: {
        width: '800px',
        fontSize: '60px', // Здесь вы можете установить нужный размер шрифта
      },
    });

    const taras = document.querySelector('.taras');
    taras.textContent = 'Саня, ты в порядке?)';
  };
  return (
    <ModalProvider>
      <ToastContainer />
      <GeneralContainer>
        <AppBar />
        <h1 className="taras">Саня</h1>
        <button type="button" onClick={handleClick}>
          Нажми меня если не зассал
        </button>
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
