import { differenceInCalendarDays, format } from 'date-fns';

export default function formatterDate(
  { startValue, finalValue },
  unavailableDates,
) {
  let daysSelected = differenceInCalendarDays(finalValue, startValue) + 1;

  // for (const { start, end } of unavailableDates) {
  //   const rangeStartDate = new Date(start);
  //   const rangeEndDate = new Date(end);

  //   if (
  //     (startValue <= rangeEndDate && finalValue >= rangeStartDate) ||
  //     (finalValue >= rangeStartDate && startValue <= rangeEndDate)
  //   ) {
  //     const intersectionStartDate =
  //       startValue > rangeStartDate ? startValue : rangeStartDate;
  //     const intersectionEndDate =
  //       finalValue < rangeEndDate ? finalValue : rangeEndDate;
  //     const daysToRemove =
  //       differenceInCalendarDays(intersectionEndDate, intersectionStartDate) +
  //       1;

  //     daysSelected -= daysToRemove;
  //   }

  // }
  for (const { start, end } of unavailableDates) {
    const rangeStartDate = new Date(start);
    const rangeEndDate = new Date(end);

    if (startValue <= rangeEndDate && finalValue >= rangeStartDate) {
      daysSelected = 0;
    }
  }

  if (daysSelected < 0) daysSelected = 1;

  const dateRange = {
    start: format(startValue, 'yyyy-MM-dd'),
    end: format(finalValue, 'yyyy-MM-dd'),
  };

  return { daysSelected, dateRange };
}
