import AppBar from './components/base/AppBar/AppBar';
import GeneralContainer from './components/base/GeneralContainer/GeneralContainer';
import { ModalProvider } from './context/ModalContext';

import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import BaseUserViews from './views/BaseUserViews';
import ToolView from 'views/ToolView';
import CartView from 'views/cartView';
import RegistrationView from 'views/registrationView';
import SetPasswordView from 'views/SetPasswordView';

// подмаршрути для админки
import BaseAdminView from 'views/BaseAdminView';
import StoresViews from 'views/StoresViews';
import UsersView from 'views/UsersView';
import OrdersView from 'views/OrdersView';
import ToolsView from 'views/ToolsView';
import StatisticsView from 'views/StatisticsView';

function App() {
  return (
    <ModalProvider>
      <GeneralContainer>
        <AppBar />
        <Routes>
          <Route path="/" element={<BaseUserViews />} />
          <Route path="/login" element={<BaseUserViews />} />
          <Route path="/cart" element={<CartView />} />
          <Route path=":toolId" element={<ToolView />} />
          <Route path="/registration" element={<RegistrationView />} />
          <Route path="/setPassword" element={<SetPasswordView />} />
          <Route path="/director">
            <Route index element={<BaseAdminView />} />
            <Route path="stores/*" element={<StoresViews />}>
              <Route path="create-store" element={'wwdwdwdwdw'} />
            </Route>
            <Route path="tools" element={<ToolsView />} />
            <Route path="users" element={<UsersView />} />
            <Route path="orders" element={<OrdersView />} />
            <Route path="statistics" element={<StatisticsView />} />
          </Route>
        </Routes>
      </GeneralContainer>
    </ModalProvider>
  );
}

export default App;
