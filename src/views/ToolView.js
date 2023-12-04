import { useGetToolByIdQuery } from 'redux/api/api';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import s from './ToolViews.module.css';

import Specifications from 'components/tools/Specifications/Specifications';
import ToolInfo from 'components/tools/ToolInfo/ToolInfo';
import Calendar from 'components/tools/Calendar/Calendar';
import Loader from 'components/utils/Loader/Loader';

export default function ToolView() {
  const { toolId } = useParams();
  const { data, isLoading, isError } = useGetToolByIdQuery(toolId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Вибачте, немає інструментів за вашим запитом</div>;
  }
  if (!data) {
    return null;
  }

  const {
    _id,
    name,
    type,
    toolPicture,
    // serialNumber,
    cityLocation,
    status,
    specifications,
    description,
    price,
    unavailableDates,
    // workingDays,
    // earnedMoney,
    // tags,
    // orders,
    // storeId,
  } = data;

  return (
    <div className={s.Container}>
      <ToastContainer className={s.ToastContainer} />
      <div className={s.pictureWrapper}>
        <div className={`${s.button} ${s.statusBtn}`}>{status}</div>
        <img
          src={toolPicture}
          className={s.toolPicture}
          alt="Зображення товару"
        />
      </div>
      <ToolInfo
        image={toolPicture}
        toolId={_id}
        name={name}
        type={type}
        cityLocation={cityLocation}
        description={description}
        price={price}
        status={status}
      />

      <Specifications specifications={specifications} />
      <Calendar unavailableDates={unavailableDates} />
    </div>
  );
}
