import s from './Calendar.module.css';
import { useState } from 'react';
import CalendarAvailableDate from '../CalendarAvailableDate/CalendarAvailableDate';
export default function Calendar({ unavailableDates }) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(true);

  return (
    <div className={s.DateContainar}>
      <button
        type="button"
        className={`${s.button} ${s.openCalendar}`}
        onClick={() => setIsOpenCalendar(!isOpenCalendar)}
      >
        Переглянути вільні дати
      </button>
      {isOpenCalendar && (
        <CalendarAvailableDate unavailableDates={unavailableDates} />
      )}
    </div>
  );
}
