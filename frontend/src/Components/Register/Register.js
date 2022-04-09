import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react/cjs/react.production.min";

const Register = () => {
  // const [details, setDetails] = useState();

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        {/* <div className="user-box">
          <input type="text" name required />
          <label>First Name</label>
        </div>

        <div className="user-box">
          <input type="text" name required />
          <label>Last Name</label>
        </div> */}

        <div className="user-box">
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input type="email" required />
          <label>Email</label>
        </div>
        {/* 
        <div className="user-box">
          <input type="tel" name required />
          <label>Contact Number</label>
        </div> */}

        <div className="user-box">
          <input type="password" required />
          <label>Password</label>
        </div>
        <a href="#" className="submit text">
          <span />
          <span />
          <span />
          <span />
          Submit
        </a>

        <p className="text font-size">
          Already have an account?&nbsp;
          <a href="/login" className="mini-btn font-size pointer-event">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
