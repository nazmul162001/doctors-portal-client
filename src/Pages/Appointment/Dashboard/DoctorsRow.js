import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index , refetch}) => {
  const { name, specialization, img , email} = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount){
        toast.success(`Doctor: ${name} is deleted`)
        refetch();
      }
    })
  }
  
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt=''/>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialization}</td>
      <td>
        {' '}
        <button onClick={()=> handleDelete(email)} className="btn btn-xs btn-error">Delete</button>{' '}
      </td>
    </tr>
  );
};

export default DoctorsRow;
