import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className=""
    >
      <div className="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start md:items-center">
        <div className="md:mx-auto">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center pb-5">
        <p>Copyright © 2022 - All right reserved by @nazmul</p>
      </div>
    </footer>
  );
};

export default Footer;
