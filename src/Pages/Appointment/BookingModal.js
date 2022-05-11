import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  // handle submit form
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null)
  }
  
  
  
  return (
    <div className="text-center">
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary py-3">
            Booking for: {name}
          </h3>
          {/* form  */}
          <form onSubmit={handleBooking} className="mx-auto w-full">
            <input
              type="text"
              value={format(date, 'PP')}
              disabled
              class="input input-bordered w-full max-w-xs mb-2"
            />
            <select name='slot' class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot=><option value={slot}> {slot} </option>)
              }
            </select>
            <input
              type="text"
              name='name'
              placeholder="Enter Your Name"
              class="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="email"
              name='email'
              placeholder="Enter Your Email"
              class="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="number"
              name='phon'
              placeholder="Enter Your phone number"
              class="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs mb-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
