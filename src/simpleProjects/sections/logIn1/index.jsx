import React from "react";
import "./style.css";
import img from "./assets/img.png";

function LoginIn1() {
  return (
    <div className="log-in-1">
      <div className="container">
        <div className="img-container">
          <img src={img} alt="img" />
        </div>
        <div className="form">
          <h1>Log in</h1>
          <div className="form-container">
            <label>Email</label>
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="form-container">
            <label>Password</label>
            <input type="text" placeholder="Enter your password" />
          </div>

          <button className="btn btn-primary">Log in</button>
          <p>Or</p>
          <button className="btn btn-secondary">Continue with Linkedin</button>
          <span>
            <a className="btn btn-text">
              Can't log in? - Sign up for an account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginIn1;
