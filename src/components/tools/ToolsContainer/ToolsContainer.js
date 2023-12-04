import s from './ToolsContainer.module.css';

import ToolCard from '../ToolCard/ToolCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from 'components/utils/Loader/Loader';

import { useGetToolsQuery } from 'redux/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { updateTools, addToolsForCurrentRequest } from 'redux/tools/toolsSlice';
import { updateToolsFilter } from 'redux/tools/toolsFilterSlice';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function ToolsContainer() {
  const params = useSelector(state => state.filter.value);
  const currentTools = useSelector(state => state.tools.value);
  const toolsCart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateToolsFilter({ page: 1 }));
    dispatch(updateTools([]));
  }, [dispatch]);

  const { data, isLoading, isError } = useGetToolsQuery(params);

  useEffect(() => {
    if (!data) return;
    if (params.page !== parseInt(data.currentPage)) return;

    if (params.page === 1) dispatch(updateTools(data.data));
    if (data.currentPage > 1) dispatch(addToolsForCurrentRequest(data.data));
  }, [data, dispatch, params.page]);

  if (isError) {
    return (
      <div className={s.Error}>
        Вибачте, немає інструментів за вашим запитом
      </div>
    );
  }
  if (isLoading || currentTools.length === 0) {
    return <Loader />;
  }

  if (currentTools.length !== 0) {
    const cart = toolsCart.map(({ toolId }) => toolId);
    return (
      <>
        <ToastContainer className={s.ToastContainer} />
        <ul className={s.ToolsContainer}>
          {currentTools.map(({ _id, toolPicture, name, price, status }) => {
            const inTheCart = cart.includes(_id);
            return (
              <ToolCard
                key={_id}
                toolId={_id}
                image={toolPicture}
                name={name}
                price={price}
                status={status}
                catr={inTheCart}
              />
            );
          })}
        </ul>
        {data.data.length > 23 && <LoadMoreBtn />}
      </>
    );
  }
}

export default ToolsContainer;
