import HeaderSearchForm from 'components/header/HeaderSearchForm';
import ToolType from 'components/header/ToolType/ToolType';
import HeaderUserMenu from 'components/header/HeaderUserMenu';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.navigation}>
      <HeaderSearchForm />
      <ToolType />
      <HeaderUserMenu />
    </nav>
  );
}

export default Navigation;
