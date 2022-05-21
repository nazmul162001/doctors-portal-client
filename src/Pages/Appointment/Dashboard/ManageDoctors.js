import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery('doctors', () =>
    fetch('https://nameless-cove-43525.herokuapp.com/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  console.log(doctors);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors {doctors.length} </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>avatar</th>
              <th>name</th>
              <th>speciality</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {doctors.map((doctor, index) => (
              <DoctorsRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
              ></DoctorsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
