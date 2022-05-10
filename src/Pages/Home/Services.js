import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import bg from '../../assets/icons/Vector.svg';
import dot from '../../assets/icons/dotted.svg';
import Service from './Service';

const Services = () => {

  const services = [
    {
      _id:1,
      name: 'Fluoride Treatment',
      description: '',
      img: fluoride
    },
    {
      _id:2,
      name: 'Cavity Filling',
      description: '',
      img: cavity
    },
    {
      _id:3,
      name: 'Teeth Whitening',
      description: '',
      img: whitening
    },
  ]
  
  
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '500px'
    }} className='my-28 px-12'>
      <div className="text-center mb-5">
        <h3 className="text-primary text-xl font-bold uppercase ">Our Services</h3>
        <h2 className='text-4xl text-gray-500'>Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-center lg:grid-cols-3">
        {
          services.map(service => <Service 
            key={service._id}
            service={service}
          />)
        }
      </div>
    </div>
  );
};

export default Services;