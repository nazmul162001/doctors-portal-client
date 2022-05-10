import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service}) => {
  const {name, img, description} = service
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow shadow-zinc-500">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title"> {name} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <PrimaryButton>Buy Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
