import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L1PV2GTjQFJmthfZb1lh0BvUivcqdcBSncRDHe4E0xVhweALHl42jEK8J8b7wEsUvUQ32eCPfaeUe7oAUuy832i00CuXFquFK'
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://nameless-cove-43525.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(['/booking', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div class="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:{' '}
            <span className="text-orange-600">{appointment.date}</span> at{' '}
            {appointment.slot}{' '}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
