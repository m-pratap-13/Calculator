import React from "react";
import { useForm } from "react-hook-form";

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    console.log()
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="header">
          <h2 className="company-name">Calculator</h2>
        </div>
        <div className="sub-header">
          <h3>Contact Customer Support</h3>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              {...register("fullName",{required:"Name is required"})}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field full-width"
            {...register("email",{required:"Email is required"})}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field full-width"
            {...register("phoneNumber",{required:"Phone Number is required"},{pattern:{
              value:/^[a-zA-Z0-9.!#$%&'+/=?^_^{|}~-]+@ [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
              message : "Enter vaild email."
            }})}
          />
          <textarea
            className="input-field full-width"
            placeholder="Enter your messages here..."
            rows="7"
            {...register("messages",{required:"Messages is required"})}
          ></textarea>
          <input type="submit" className="submit-btn" value="Contact Us" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
