import s from './SearchWrapper.module.css';
import ToolType from 'components/header/ToolType/ToolType';
import HeaderSearchForm from 'components/header/HeaderSearchForm';

export default function SearchWrapper() {
  return (
    <div className={s.searchContainer}>
      <HeaderSearchForm />
      <ToolType />
    </div>
  );
}
