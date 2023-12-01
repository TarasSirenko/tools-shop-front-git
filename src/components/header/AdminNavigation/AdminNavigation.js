import s from './AdminNavigation.module.css';
import { Link } from 'react-router-dom';

export default function AdminNavigation() {
  return (
    <nav className={s.navigation}>
      <ul className={s.AdminNavigationList}>
        <li className={s.AdminNavigationItem}>
          <Link className={s.AdminNavigationLink} to="director/stores">
            МАГАЗИНИ
          </Link>
        </li>
        <li className={s.AdminNavigationItem}>
          <Link className={s.AdminNavigationLink} to="director/tools">
            ІНСТРУМЕНТИ
          </Link>
        </li>
        <li className={s.AdminNavigationItem}>
          <Link className={s.AdminNavigationLink} to="director/users">
            КЛІЕНТИ
          </Link>
        </li>
        <li className={s.AdminNavigationItem}>
          <Link className={s.AdminNavigationLink} to="director//orders">
            ЗАМОВЛЕННЯ
          </Link>
        </li>
        <li className={s.AdminNavigationItem}>
          <Link className={s.AdminNavigationLink} to="director/statistics">
            СТАТИСТИКА
          </Link>
        </li>
      </ul>
    </nav>
  );
}
