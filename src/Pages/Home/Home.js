import React from 'react';
import Banner from './Banner';
import Care from './Care';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div className='home'>
      <Banner></Banner> 
      <Info></Info>
      <Services></Services>
      <Care></Care>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;