import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="contact-us w-full h-full"
    >
      <div className="text-center py-12">
        <h3 className="text-primary text-xl font-bold uppercase ">
          Contact Us
        </h3>
        <h2 className="text-3xl text-white">Stay Connected With Us</h2>
      </div>
      <form className="text-center">
        <input
          type="email"
          name='email'
          placeholder="Your Email"
          required
          class="input input-bordered input-accent w-full max-w-xs mb-3"
        />
        <br />
        <input
          type="text"
          name='subject'
          placeholder="Subject"
          required
          class="input input-bordered input-accent w-full max-w-xs mb-3"
        />
        <br />
        <textarea
          class="textarea textarea-info w-full max-w-xs"
          placeholder="Your message"
          required
        ></textarea>
        <br />
        <input
          type="submit"
          value='Submit'
          placeholder="Subject"
          class="input input-bordered input-accent btn bg-gradient-to-r from-secondary to-primary border-0 uppercase text-white font-bold my-5"
        />
      </form>
    </section>
  );
};

export default ContactUs;
