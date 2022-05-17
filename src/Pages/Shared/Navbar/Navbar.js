import { signOut } from 'firebase/auth'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import swal from 'sweetalert';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);


  // handle sign out
  const logout = (e) => {
    swal({
      title: "Are you sure?",
      text: "You want to Log Out",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Log Out successful", {
          icon: "success",
        });
          signOut(auth)
          localStorage.removeItem('accessToken');
      } else {
        // swal("You are now Safe!");
      }
    });
  }
  
  
  const menuItems = (
    <>
      <li>
        {' '}
        <Link className='btn btn-ghost text-gray-600 font-sans' to="/">Home</Link>{' '}
      </li>
      <li>
        {' '}
        <Link className='btn btn-ghost text-gray-600 font-sans' to="/appoinment">Appoinment</Link>{' '}
      </li>
      <li>
        {' '}
        <Link className='btn btn-ghost text-gray-600 font-sans' to="/review">Review</Link>{' '}
      </li>
      <li>
        {' '}
        <Link className='btn btn-ghost text-gray-600 font-sans' to="/contact">Contact</Link>{' '}
      </li>
      <li>
        {' '}
        <Link className='btn btn-ghost text-gray-600 font-sans' to="/about">About</Link>{' '}
      </li>
      {
        user && <Link className='btn btn-ghost text-gray-600 font-sans' to="/dashboard">Dashboard</Link>
      }
      <li>
        {' '}
        {user ? <Link onClick={logout} className='btn btn-ghost' to="/">Logout</Link> :<Link to="/login">Login</Link>} {' '}
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-white z-50 ">
      <div className="navbar-start flex md:flex-row-reverse justify-between w-full items-center md:px-16">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="logo">
          <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex pr-0 md:pr-12">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
      <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
    </div>
  );
};

export default Navbar;
