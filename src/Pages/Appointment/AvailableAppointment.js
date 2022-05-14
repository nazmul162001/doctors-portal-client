import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
  const [treatment, setTreatment] = useState(null)

  const formattedDate = format(date, 'PP');
  const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch('http://localhost:5000/service')
    .then(res => res.json()) 
    )
    if(isLoading){
      return <Spinner></Spinner>
    }
  
  return (
    <div className='px-12'>
      <h2 className='text-xl text-center text-secondary'>Available Appointment on {format(date, 'PP')} </h2>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
        {
          services?.map(service => <Service 
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />)
        }
      </div>
      {treatment && <BookingModal 
      date={date} 
      treatment={treatment}
      setTreatment={setTreatment}
      refetch = {refetch}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;