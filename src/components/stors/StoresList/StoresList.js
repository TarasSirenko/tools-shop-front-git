import s from './StoresList.module.css';
import StoresCard from '../StoresCard/StoresCard';
import { Link } from 'react-router-dom';

export default function StoresList({ stores }) {
  return (
    <ul className={s.storesContainer}>
      <Link to="create-store">
        <StoresCard add={true} />
      </Link>
      {stores &&
        stores.map(({ storeId, location }) => {
          return <StoresCard location={location} key={storeId} />;
        })}
    </ul>
  );
}
