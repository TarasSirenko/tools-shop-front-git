import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';
import { ModalProvider } from './context/ModalContext';

import Hero from 'components/Hero/Hero';

// import ToolCard from 'components/tools/ToolCard/ToolCard';

import ToolsContainer from 'components/tools/ToolsContainer/ToolsContainer';

function App() {
  return (
    <ModalProvider>
      <GeneralContainer>
        <AppBar />
        <Hero />
        <ToolsContainer />
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
