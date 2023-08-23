import HeaderSearchForm from 'components/heder/HeaderSearchForm';
import ToolType from 'components/heder/ToolType/ToolType';
import HeaderUserMenu from 'components/heder/HeaderUserMenu';
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
