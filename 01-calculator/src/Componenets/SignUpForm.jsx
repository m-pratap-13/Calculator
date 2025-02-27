import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <input
           type="text" 
           placeholder="Full Name" 
           className="input-field" 
           {...register("fullName",{required:"Name is required"})}
           />
          <input 
          type="email" 
          placeholder="Email" 
          className="input-field" 
          {...register("email",{required:"Email is required"},{pattern:{
            value:/^[a-zA-Z0-9.!#$%&'+/=?^_^{|}~-]+@ [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
            message : "Enter vaild email."
          }})}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
            
            {...register("phoneNumber",{required:"Phone number is required"})}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
           autoComplete=""
            {...register("password",{required:"Password is required"})}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            autoComplete=""
            {...register("password",{required:"Password is required"})}
          />
          <button className="signup-btn">Sign Up</button>
        </form>
        <div className="login-text">
          Already have an account?{" "}
          <Link to="/log-in" className="login-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
