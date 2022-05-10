import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {

  return (
    <div class="hero min-h-screen px-5 md:px-28">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl" alt=''
        />
        <div className='pr-12 '>
        <DayPicker 
          mode="single"
          date={date}
          onSelect={setDate}
        />
        </div>
      </div>
    </div>  
  );
};

export default AppointmentBanner;
