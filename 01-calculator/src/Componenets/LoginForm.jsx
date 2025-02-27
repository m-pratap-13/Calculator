import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (formData) => {
      console.log(formData);
    };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" className="input-field" {...register("email",{required:"Email is required"},{pattern:{
              value:/^[a-zA-Z0-9.!#$%&'+/=?^_^{|}~-]+@ [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
              message : "Enter vaild email."
            }})}/>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            {...register("password",{required:"Password is required"})}
            autoComplete=""
          />
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <br />
          <br />
          <button className="login-btn">Login</button>
        </form>
        <div className="signup-text">
          Not a member?{" "}
          <Link to="/sign-up" className="signup-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
