import type { DateTime } from 'luxon';
import { startCase } from 'lodash';

interface Props {
  date: DateTime;
}

const CalendarHeader = ({ date }: Props) => {
  const { monthLong, year } = date;

  return (
    <div className="h-10 flex items-center justify-center text-white font-bold text-xl">
      {`${monthLong.charAt(0).toUpperCase() + monthLong.substr(1)} ${year}`}{' '}
    </div>
  );
};

export default CalendarHeader;
