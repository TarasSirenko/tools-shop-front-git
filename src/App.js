import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';

import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <GeneralContainer>
        <AppBar />
        <h1 className="taras">TARAS</h1>
        <button
          type="button"
          onClick={() => {
            const taras = document.querySelector('.taras');
            taras.textContent = 'TARAS PETYSHOK';
          }}
        >
          Нажми меня если не зассал
        </button>
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
