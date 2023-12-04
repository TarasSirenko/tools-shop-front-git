import s from './CartDatePicker.module.css';
import DatePicker from 'react-date-picker';
import { useEffect, useState, useRef, useMemo } from 'react';
import { toast } from 'react-toastify';

import { updateOrder } from 'redux/cart/cart-slice';
import { useDispatch } from 'react-redux';

import 'react-calendar/dist/Calendar.css'; // Стили календаря
import 'react-date-picker/dist/DatePicker.css';

import formatterDate from 'components/utils/formatterDate';

export default function CartDatePicker({ toolId, dateRange }) {
  const unavailableDates = useMemo(
    () => [
      { start: '2023-11-05', end: '2023-11-07' },
      { start: '2023-11-15', end: '2023-11-17' },
    ],
    [],
  );

  const [startValue, setStartValue] = useState(
    dateRange.start ? new Date(dateRange.start) : '',
  );
  const [finalValue, setFinalValue] = useState(
    dateRange.end ? new Date(dateRange.end) : '',
  );
  const [minDate, setMinDate] = useState(new Date());

  const startValueRef = useRef('');
  const finalValueRef = useRef('');

  const dispatch = useDispatch();

  const disabledDates = ({ activeStartDate, date, view }) => {
    for (const unavailableDate of unavailableDates) {
      const startDate = new Date(unavailableDate.start).setHours(0, 0, 0, 0);
      const endDate = new Date(unavailableDate.end).setHours(0, 0, 0, 0);
      if (date >= startDate && date <= endDate) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (
      startValue === startValueRef.current &&
      finalValue === finalValueRef.current
    )
      return;
    if (!startValue || !finalValue) {
      dispatch(updateOrder({ formattedDate: 0, toolId }));
      startValue ? setMinDate(startValue) : setMinDate(new Date());
      return;
    }

    const formattedDate = formatterDate(
      { startValue, finalValue },
      unavailableDates,
    );

    if (formattedDate.daysSelected === 0 || startValue > finalValue) {
      toast.error('Некоректний діапазон дат', {
        className: `${s.customToast}`,
      });
      setFinalValue('');
      return;
    }

    dispatch(updateOrder({ formattedDate, toolId }));
    startValueRef.current = startValue;
    finalValueRef.current = finalValue;
  }, [dispatch, finalValue, startValue, toolId, unavailableDates]);

  return (
    <>
      <ul className={s.bookingDatesList}>
        <li key="startDate" className={`${s.bookingDatesItem} ${s.startDate}`}>
          <label htmlFor="startDate" className={s.calendarLable}>
            початок
          </label>

          <DatePicker
            id="startDate"
            tileClassName={s.tileClassName}
            calendarClassName={s.datePicker}
            className={s.Calendar}
            onChange={setStartValue}
            ariaLabel="початок"
            value={startValue}
            tileDisabled={disabledDates}
            minDate={minDate}
          />
        </li>
        <li key="finalDate" className={`${s.bookingDatesItem} ${s.finalDate}`}>
          <label htmlFor="finalDate" className={s.calendarLable}>
            кінець{' '}
          </label>
          <DatePicker
            id="finalDate"
            tileClassName={s.tileClassName}
            calendarClassName={s.datePicker}
            className={s.Calendar}
            ariaLabel="кінець"
            onChange={setFinalValue}
            value={finalValue}
            tileDisabled={disabledDates}
            minDate={minDate}
          />
        </li>
      </ul>
    </>
  );
}
