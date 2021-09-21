import { useMemo } from 'react';
import { useTable } from 'react-table';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { getColumns, getMonthData } from './Calendar.utils';

interface Props {
  date: DateTime;
}

const CalendarTable = ({ date }: Props) => {
  const data = useMemo(() => getMonthData(date), [date]);
  const columns = useMemo(() => getColumns(), [date]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="p-2">
      <table className="w-full table-fixed" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="table-row" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="table-cell" {...column.getHeaderProps()}>
                  <div className="text-gray-600 font-bold text-sm">
                    {column.render('Header')}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellDate = cell.value;

                  return (
                    <td className="table-cell" {...cell.getCellProps()}>
                      <div
                        className={clsx(
                          `
                          relative w-full text-gray-600 font-semibold border-2 rounded-md
                          overflow-hidden cursor-pointer transition-shadow duration-1000

                          hover:transition-shadow hover:duration-[0s] hover:shadow-calendar-primary-500

                          after:block after:pb-[75%]  
                          `
                        )}
                      >
                        <div
                          className={clsx(
                            'text-[0.950rem] absolute w-full h-full flex flex-col items-center justify-center'
                          )}
                        >
                          {cell.render('Cell')}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
