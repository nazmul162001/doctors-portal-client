import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
  return (
    <div>
      <h2 className='text-xl text-center text-secondary'>Available Appointment on {format(date, 'PP')} </h2>
    </div>
  );
};

export default AvailableAppointment;