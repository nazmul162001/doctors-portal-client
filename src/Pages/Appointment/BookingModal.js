import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user] = useAuthState(auth);

  // handle submit form
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };

  return (
    <div className="text-center">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary py-3">
            Booking for: {name}
          </h3>
          {/* form  */}
          <form onSubmit={handleBooking} className="mx-auto w-full">
            <input
              type="text"
              value={format(date, 'PP')}
              disabled
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option value={slot}>
                  {' '}
                  {slot} key={index}{' '}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ''}
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="number"
              name="phon"
              placeholder="Enter Your phone number"
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs mb-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
