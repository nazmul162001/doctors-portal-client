import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Login = () => {
  // google signIn
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // react hook form
  const onSubmit = (data) => console.log(data);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              {...register('email', {
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'error message',
                },
              })}
            />

            {/* <input  /> */}
            {errors.firstName?.type === 'required' && 'First name is required'}

            <input {...register('lastName', { required: true })} />
            {errors.lastName && 'Last name is required'}

            <input type="submit" />
          </form>
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

export default Login;
