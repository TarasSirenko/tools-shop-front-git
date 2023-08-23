import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';

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
