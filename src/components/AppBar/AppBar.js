import Container from 'components/Container';
import Navigation from 'components/Navigation';

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
