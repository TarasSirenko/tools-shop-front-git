import Container from 'components/base/Container';
import Navigation from 'components/header/Navigation';

import s from './AppBar.module.css';
function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <a href="./">
            <p className={s.logo}>LOGO</p>
          </a>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
