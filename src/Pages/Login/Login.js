import React, { useEffect } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Spinner from '../Shared/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
  // google signIn
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // email & pass sign in
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || gUser);

  // handle error
  let signInError;

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(()=> {
    if(token){
      navigate(from, { replace: true });
    }
  },[token, from, navigate])
  

  if (loading || gLoading) {
    return <Spinner />;
  }

  if (error || gError) {
    signInError = (
      <small>
        <p> {error?.message || gError?.message} </p>
      </small>
    );
  }

  // react hook form
  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <p className="italic text-gray-400 text-left border-2 p-2">
            <strong>Want to get Dashboard Admin access? Login --</strong> <br />
            Email: test.project@gmail.com <br />
            pass: 112233
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
              value="Login"
            />
          </form>
          <small>
            <p>
              New to Doctors Portal ?
              <Link className="text-secondary font-bold ml-3" to="/signUP">
                Create New Account
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

export default Login;
