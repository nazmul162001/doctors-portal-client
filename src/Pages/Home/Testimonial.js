import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

import './Testimonial.css';

// review card image
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      review: '',
      img: people1,
    },
    {
      _id: 2,
      name: 'Winson Herry',
      review: '',
      img: people2,
    },
    {
      _id: 3,
      name: 'Winson Herry',
      review: '',
      img: people3,
    },
  ];

  return (
    <section className="testimonial my-28 px-12">
      <div className="content flex justify-between items-center mb-12">
        <div className="testimonial-text px-8">
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        <div className="blockQuote">
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="testimonial-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl pb-5">
              <div className="card-body">
                <p className="text-left mb-2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="profile flex items-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                      <img src={people1} alt="" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl">Winson Herry</h4>
                    <p>London</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl pb-5">
              <div className="card-body">
                <p className="text-left mb-2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="profile flex items-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                      <img src={people2} alt="" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl">Jessika</h4>
                    <p>California</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl pb-5">
              <div className="card-body">
                <p className="text-left mb-2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using Content here, content
                </p>
                <div className="profile flex items-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                      <img src={people3} alt="" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl">Amelia</h4>
                    <p>New York</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
