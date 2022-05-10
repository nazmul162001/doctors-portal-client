import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import Services from './Services';

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner> 
      <Info></Info>
      <Services></Services>
      <Care></Care>
    </div>
  );
};

export default Home;