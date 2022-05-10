import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
  return (
    <section className='appointment'>
      <AppointmentBanner />
      <Footer />
    </section>
  );
};

export default Appointment;