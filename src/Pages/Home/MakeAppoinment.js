import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} className='flex flex-col md:flex-row items-center justify-center my-12'>
      <div className="appoinment-img flex-1 hidden md:block">
        <img className='mt-[-100px]' src={doctor} alt="" />
      </div>
      <div className='appointment-content flex-1 p-5'>
        <h3 className="text-xl text-primary font-bold my-3">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, totam quas voluptatibus minus id a est alias obcaecati pariatur ea fugiat accusantium incidunt labore ratione omnis unde. Aliquam alias temporibus officia magnam, ad voluptatem porro, facilis quidem esse ut delectus!</p>
        <PrimaryButton> Get Started </PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;