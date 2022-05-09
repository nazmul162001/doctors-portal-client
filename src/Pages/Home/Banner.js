import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className='px-10 md:px-32 font-sans'>
          <h1 style={{color: '#3A4256'}} className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary border-0 uppercase text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
