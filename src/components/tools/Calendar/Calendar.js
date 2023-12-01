import s from './Calendar.module.css';
import { useState } from 'react';
import CalendarAvailableDate from '../CalendarAvailableDate/CalendarAvailableDate';
export default function Calendar({ unavailableDates }) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <div className={s.DateContainar}>
      <button
        type="button"
        className={`${s.button} ${s.openCalendar}`}
        onClick={() => setIsOpenCalendar(!isOpenCalendar)}
      >
        Переглянуты вільні даты
      </button>
      {isOpenCalendar && (
        <CalendarAvailableDate unavailableDates={unavailableDates} />
      )}
    </div>
  );
}
