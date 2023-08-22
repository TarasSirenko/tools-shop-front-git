import AppBar from './components/AppBar';
import GeneralContainer from './components/GeneralContainer';

import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <GeneralContainer>
        <AppBar />
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
