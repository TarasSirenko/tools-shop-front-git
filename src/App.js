import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';

import { ModalProvider } from './context/ModalContext';

import Hero from 'components/Hero/Hero';

function App() {
  return (
    <ModalProvider>
      <GeneralContainer>
        <AppBar />
        <Hero />
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
