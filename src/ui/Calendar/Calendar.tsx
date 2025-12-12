import React from 'react';
import './Calendar.scss';

interface CalendarProps {
  // add props here
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const month = new Date().getMonth();
  console.log(month);

  return <div>Calendar component month:{month}</div>;
};

export default Calendar;
