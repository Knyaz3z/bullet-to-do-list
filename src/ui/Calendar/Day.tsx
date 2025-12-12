import React from 'react';

interface DayProps {
  className?: string;
}

const Day: React.FC<DayProps> = ({ className }) => {
  return <div className={className}>{/* Day component */}</div>;
};

export default Day;
