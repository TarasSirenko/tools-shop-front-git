import Container from 'components/base/Container';
import Navigation from 'components/header/Navigation';
import { ReactComponent as IconLogo } from 'svgImage/icon-logo.svg';
import { Link, useLocation } from 'react-router-dom';

import s from './AppBar.module.css';
function AppBar() {
  const location = useLocation();
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <Link
            className={s.LogoLink}
            to={location.pathname.includes('/director') ? '/director' : '/'}
          >
            <IconLogo className={s.LogoeSvg} />
          </Link>

          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
