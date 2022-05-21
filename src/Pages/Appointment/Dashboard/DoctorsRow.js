import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const DoctorsRow = ({ doctor, index, refetch }) => {
  const { name, specialization, img, email } = doctor;

  const handleDelete = (email) => {
    swal({
      title: 'Are you sure?',
      text: `You want to delete ${name}? `,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Doctor: ${name} is deleted`, {
          icon: 'success',
        });

        fetch(`https://nameless-cove-43525.herokuapp.com/doctor/${email}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              // toast.success(`Doctor: ${name} is deleted`);
              refetch();
            }
          });
      } else {
        // swal('Your Doctors is safe!');
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialization}</td>
      <td>
        {' '}
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>{' '}
      </td>
    </tr>
  );
};

export default DoctorsRow;
