import HeaderSearchForm from 'components/header/HeaderSearchForm';
import ToolType from 'components/header/ToolType/ToolType';
import HeaderUserMenu from 'components/header/HeaderUserMenu';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import ExiteBtn from 'components/utils/ExitBtn/ExitBtn';
import s from './Navigation.module.css';

import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  if (location.pathname.includes('/director')) {
    return (
      <>
        <AdminNavigation />
        <ExiteBtn />
      </>
    );
  }
  return (
    <nav className={s.navigation}>
      <HeaderSearchForm />
      <ToolType />
      <HeaderUserMenu />
    </nav>
  );
}

export default Navigation;
