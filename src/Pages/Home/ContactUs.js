import React from 'react';
import appointment from '../../assets/images/appointment.png';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center w-1/4 mx-auto"
      >
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please input a valid email',
            },
          })}
          type="email"
          name="email"
          placeholder="Your Email"
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <p className="text-white text-left"> {errors.email?.message} </p>
        <br />
        <input
          {...register('subject', {
            required: 'Subject is required',
            pattern: {
              value: /[A-Za-z]{5}/,
              message: 'Please input a valid subject name(minimum 5 character)',
            },
          })}
          type="text"
          name="subject"
          placeholder="Subject"
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <p className="text-white text-left"> {errors.subject?.message} </p>
        <br />
        <textarea
          {...register('description', {
            required: 'Description is required',
            maxLength: {
              value: 180,
              message:
                "please describe your description within 180 character",
            },
          })}
          class="textarea textarea-info w-full max-w-xs"
          placeholder="Your message"
        ></textarea>
        <p className="text-white text-left"> {errors.description?.message} </p>
        <br />
        <input
          type="submit"
          value="Submit"
          placeholder="Subject"
          class="input input-bordered input-accent btn bg-gradient-to-r from-secondary to-primary border-0 uppercase text-white font-bold my-5"
        />
      </form>
    </section>
  );
};

export default ContactUs;
