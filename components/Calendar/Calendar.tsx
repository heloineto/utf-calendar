import clsx from 'clsx';
import { DateTime } from 'luxon';

import CalendarHeader from './Calendar.Header';
import CalendarTable from './Calendar.Table';

interface Props {
  className?: string;
  month?: number;
  year?: number;
}

const Calendar = ({ month, year, className }: Props) => {
  const date = DateTime.fromObject({ month, year }) || DateTime.now();

  console.log(date);

  return (
    <div className={clsx(className, 'border-2 rounded-xl')}>
      <CalendarHeader date={date} />
      <CalendarTable date={date} />
    </div>
  );
};

export default Calendar;
