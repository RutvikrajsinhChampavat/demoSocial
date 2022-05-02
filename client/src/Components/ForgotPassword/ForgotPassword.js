import React from "react";

const ForgotPassword = () => {
  return (
    <div className="login-box">
      <h2>Forgot Password</h2>
      <form>
        <div className="user-box">
          <input type="email" required />
          <label>Email</label>
        </div>

        <a href="#" className="submit text">
          <span />
          <span />
          <span />
          <span />
          Submit
        </a>
        <p className="text font-size">
          Don't have an account?&nbsp;
          <a href="/" className="mini-btn font-size pointer-event">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
