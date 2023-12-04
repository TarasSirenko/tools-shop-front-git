import s from './SearchWrapperMobile.module.css';
import HeaderSearchForm from 'components/header/HeaderSearchForm';

export default function SearchWrapperMobile() {
  return (
    <div className={s.searchContainer}>
      <HeaderSearchForm />
    </div>
  );
}
