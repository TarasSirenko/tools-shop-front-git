import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import s from './CalendarAvailableDate.module.css';

const unavailableDates = [
  { start: '2023-10-25', end: '2023-10-27' },
  { start: '2023-11-05', end: '2023-11-07' },
  { start: '2023-11-15', end: '2023-11-17' },
];

export default function CalendarAvailableDate() {
  const [value, onChange] = useState(new Date());

  const minDate = new Date();
  return (
    <div className={s.DatePickerContainar}>
      <Calendar
        className={s.Calendar}
        onChange={onChange}
        tileClassName={s.tileClassName}
        value={value}
        tileDisabled={({ activeStartDate, date, view }) => {
          for (const unavailableDate of unavailableDates) {
            const startDate = new Date(unavailableDate.start);
            const endDate = new Date(unavailableDate.end);
            if (date >= startDate && date <= endDate) {
              return true;
            }
          }
          return false;
        }}
        minDate={minDate}
        selectRange={false}
      />
    </div>
  );
}
