import type { DateTime } from 'luxon';
import { startCase } from 'lodash';

interface Props {
  date: DateTime;
}

const CalendarHeader = ({ date }: Props) => {
  const { monthLong, year } = date;

  return (
    <div className="h-14 border-b-2 flex items-center p-0 sm:p-2 text-gray-500">
      <div className="ml-1 text-base sm:text-lg font-bold text-gray-700">{`${
        monthLong.charAt(0).toUpperCase() + monthLong.substr(1)
      } ${year}`}</div>
    </div>
  );
};

export default CalendarHeader;
