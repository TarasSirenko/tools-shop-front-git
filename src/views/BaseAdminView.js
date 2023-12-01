import Container from 'components/base/Container/Container';
import s from './BaseAdminView.module.css';
import SearchForm from 'components/utils/SearchForm/SearchForm';
import { Link } from 'react-router-dom';

export default function BaseAdminView() {
  return (
    <Container className={s.container}>
      {/* <SearchForm /> */}
      <Link to="stores">
        <div className={s.wrapper1}>
          <h2>СТВОРЮЙ НОВІ МАГАЗИНИ</h2>
        </div>
      </Link>

      <Link to="statistics">
        <div className={s.wrapper2}>
          <h2>ПЕРЕГЛЯДАЙ СТАТИСТИКУ</h2>
        </div>
      </Link>

      <div className={s.wrapper3}></div>
      <div className={s.wrapper4}></div>
      <Link to="users">
        <div className={s.wrapper5}>
          <h2>КЕРУЙ БІЗНЕСОМ!</h2>
        </div>
      </Link>

      {/* <h1>Базова адмін сторінка</h1>; */}
    </Container>
  );
}
