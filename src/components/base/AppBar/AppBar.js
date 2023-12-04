import { ReactComponent as IconLogo } from 'svgImage/icon-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import SearchWrapper from 'components/header/SearchWrapper/SearchWrapper';
import AdminNavigation from 'components/header/AdminNavigation/AdminNavigation';
import ExiteBtn from 'components/utils/ExitBtn/ExitBtn';
import HeaderUserMenu from 'components/header/HeaderUserMenu';

import s from './AppBar.module.css';
function AppBar() {
  const location = useLocation();

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link
          className={s.LogoLink}
          to={location.pathname.includes('/director') ? '/director' : '/'}
        >
          <IconLogo className={s.LogoeSvg} />
        </Link>

        {location.pathname.includes('/director') ? (
          <>
            <AdminNavigation />
            <ExiteBtn />
          </>
        ) : (
          <>
            <SearchWrapper />
            <HeaderUserMenu />
          </>
        )}
      </div>
    </header>
  );
}

export default AppBar;
