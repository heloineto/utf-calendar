import type { DateTime } from 'luxon';
import { startCase } from 'lodash';

interface Props {
  date: DateTime;
}

const CalendarHeader = ({ date }: Props) => {
  return (
    <div className="h-14 border-b-2 flex items-center p-0 sm:p-2 text-gray-500">
      <div className="ml-1 text-base sm:text-lg font-bold text-gray-700">{`${startCase(
        date.monthLong
      )} ${date.year}`}</div>
    </div>
  );
};

export default CalendarHeader;
