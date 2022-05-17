import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctors = () => {
  const {register,formState: { errors },handleSubmit,} = useForm();

    // react hook form
    const onSubmit = async(data) => {
      // console.log(data);
    };
  
  return (
    <div>
      <h2 className="text-2xl">Add a new Doctor</h2>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full " //max-w-xs
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
              minLength: {
                value: 4,
                message: 'Name Should be longer than 4 character',
              },
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === 'minLength' && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full " //max-w-xs
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email',
              },
            })}
          />
          <label className="label">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Specialization</span>
          </label>
          <input
            type="text"
            placeholder="Specialization"
            className="input input-bordered w-full " //max-w-xs
            {...register('specialization', {
              required: {
                value: true,
                message: 'Specialization is Required',
              },
            })}
          />
          <label className="label">
            {errors.specialization?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.specialization.message}
              </span>
            )}
            {errors.specialization?.type === 'minLength' && (
              <span className="label-text-alt text-red-500">
                {errors.specialization.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full  text-white" //max-w-xs
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
