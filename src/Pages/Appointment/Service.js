import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
      <div className="card-body mx-auto">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span> {slots[0]} </span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {' '}
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available{' '}
        </p>
        <p><small>Price ${price} </small></p>
        <label
          onClick={() => setTreatment(service)}
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-primary text-white"
        >
          BOOK APPOINTMENT
        </label>
      </div>
    </div>
  );
};

export default Service;
