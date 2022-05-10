import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow shadow-zinc-500">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <PrimaryButton>Buy Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
