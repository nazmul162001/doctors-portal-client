import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Spinner from '../Shared/Spinner';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  // google signIn
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {register,formState: { errors },handleSubmit,} = useForm();
  // email & pass sign in
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // update user info
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  // handle error
  let signInError;

  if (loading || gLoading || updating) {
    return <Spinner />;
  }

  if (error || gError || updateError) {
    signInError = (
      <small>
        <p> {error?.message || gError?.message || updateError?.message} </p>
      </small>
    );
  }

  if(token){
    navigate('/appoinment')
  }

  
  // react hook form
  const onSubmit = async(data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full " //max-w-xs
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full  text-white" //max-w-xs
              type="submit"
              value="Sign Up"
            />
          </form>
          <small>
            <p>
              Already have an account?
              <Link className="text-secondary font-bold ml-3" to="/login">
                Please Login
              </Link>{' '}
            </p>
          </small>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
