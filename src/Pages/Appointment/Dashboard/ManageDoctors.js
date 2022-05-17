import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';

const ManageDoctors = () => {
  const {data: doctors, isLoading} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor' , {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if(isLoading){
    return <Spinner />
  }
  
  return (
    <div>
      <h2 className='text-2xl'>Manage Doctors {doctors.length} </h2>
    </div>
  );
};

export default ManageDoctors;