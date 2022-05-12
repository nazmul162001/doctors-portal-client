import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
  const [date, setDate] = useState(new Date());


  
  
  return (
    <section className='appointment'>
      <AppointmentBanner 
      date={date}
      setDate={setDate}
      />
      <AvailableAppointment
      date={date}
      ></AvailableAppointment>
      <Footer />
    </section>
  );
};

export default Appointment;