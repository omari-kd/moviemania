import React from "react";
import "./Signin.css";
import "../../App.css";
export default function Signin() {
  return (
    <div className="sigin-container">
      <nav>
        <a href="#">MovieMania</a>
      </nav>

      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form action="#" autoComplete="off">
          <div className="form-control">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="form-control">
            <input type="password" placeholder="Password" required />
          </div>
          <button className="sign-in-button">Sign In</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>
          New to MovieMania? <a href="/">Sign up now</a>
        </p>
        <small>
          This page is protected by Google reCaptcha to ensure you are not a
          bot. <a href="#">Learn More</a>
        </small>
      </div>
    </div>
  );
}
