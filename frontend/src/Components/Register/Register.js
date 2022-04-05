import React from "react";

const Register = () => {
  return (
    <div className="signin">
      <div className="back-img">
        <div className="sign-in-text">
          <h2 className="active">Sign In</h2>
          <h2 className="nonactive">Sign Up</h2>
        </div>
        <div className="layer"></div>
        <p className="point">▲</p>
      </div>
      <div className="form-section">
        <form action="#">
          {/*Email*/}
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="email" id="email" />
            <label className="mdl-textfield__label" htmlFor="email">
              Email
            </label>
            <span className="mdl-textfield__error">Enter a correct Email</span>
          </div>
          <br />
          <br />
          {/*Password*/}
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              pattern=".{8,}"
              className="mdl-textfield__input"
              type="password"
              id="sample3"
            />
            <label className="mdl-textfield__label" htmlFor="sample3">
              Password
            </label>
            <span className="mdl-textfield__error">Minimum 8 characters</span>
          </div>
          <br />
          <p className="forgot-text">Forgot Password ?</p>
          {/*CheckBox*/}
          <label
            className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
            htmlFor="checkbox-1"
          >
            <input
              type="checkbox"
              id="checkbox-1"
              className="mdl-checkbox__input"
              defaultChecked
            />
            <span className="keep-text mdl-checkbox__label">
              Keep me Signed In
            </span>
          </label>
        </form>
      </div>
      <button className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
        Sign In
      </button>
      {/*/button*/}
    </div>
  );
};

export default Register;
