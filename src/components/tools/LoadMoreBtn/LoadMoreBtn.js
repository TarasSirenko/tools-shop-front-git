import s from './LoadMoreBtn.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateToolsFilter } from 'redux/tools/toolsFilterSlice';

function LoadMoreBtn() {
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.filter.value.page);
  const loadMoreBtnClick = () => {
    const nextPage = currentPage + 1;
    const queryParams = { page: nextPage };
    dispatch(updateToolsFilter(queryParams));
  };
  return (
    <button type="button" className={s.LoadMoreBtn} onClick={loadMoreBtnClick}>
      Завантажити ще
    </button>
  );
}

export default LoadMoreBtn;
