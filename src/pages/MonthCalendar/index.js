import React from 'react';
import requestedMonth from './_components/requestedMonth';

const MonthCalendar = React.memo(
  (props) => {
    const daysInMonth = new Date(props._year, props._month, 0).getDate();

    const correctedMonth = props._month - 1;
    const date = new Date(props._year, correctedMonth, 10);
    const NameOfMonth = date.toLocaleString('default', {month: 'long'});
    let weekDay = new Date(props._year, correctedMonth, 1).getDay();
    if (weekDay === 0) weekDay = 7;
    let m = 0;

    const month = requestedMonth(props._year, correctedMonth);

    return (
      <div className="month_card">
        <h4>{NameOfMonth}</h4>
        <table className="month">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 6}).map((key, j) =>
              m < daysInMonth ? (
                <tr key={j}>
                  {Array.from({length: 7}).map((key, index) =>
                    (j > 0 && m < daysInMonth) ||
                    (j === 0 && index >= weekDay - 1) ? (
                      <td
                        key={index}
                        className="mc"
                        style={
                          month[m]
                            ? {
                                backgroundColor:
                                  'var(--month-calendar-holiday-bg)',
                              }
                            : undefined
                        }
                      >
                        <span>{(m = m + 1)}</span>
                        {month[m - 1]}
                      </td>
                    ) : (
                      <td key={index} />
                    ),
                  )}
                </tr>
              ) : null,
            )}
          </tbody>
        </table>
      </div>
    );
  },
  (oldProps, newProps) => oldProps.props === newProps.props,
);

export default MonthCalendar;
