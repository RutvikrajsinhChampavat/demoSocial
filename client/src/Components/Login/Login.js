import React from "react";

const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" required />
          <label>Username</label>
        </div>

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
          Forgot Password?&nbsp;
          <a
            href="/forgot-password"
            className="mini-btn font-size pointer-event"
          >
            Reset here
          </a>
          Don't have an account?&nbsp;
          <a href="/" className="mini-btn font-size pointer-event">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
