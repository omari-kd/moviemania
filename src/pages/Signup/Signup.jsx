import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../../App.css";
import "./Signup.css";
import Loading from "../../components/LoadingIndicator/Loading";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);
  const handleConfirmPassword = (text) => setConfirmPassword(text);

  const renderConfirmPassword = () => {
    return (
      <div className="form-control">
        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => handleConfirmPassword(e.target.value)}
        />
      </div>
    );
  };

  const handleSignUp = async () => {
    if (email === "" || password === "" || confirmPassword === "") {
      window.alert("Error! Please fill all fields");
    } else if (password !== confirmPassword) {
      window.alert("Error! Passwords do not match");
    } else {
      setloading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        window.alert("Account created successfully");

        // Redirect to the main page after successful sign-up
        navigate("/main");
      } catch (error) {
        window.alert("Error! Failed to create an account.");
      } finally {
        setloading(false);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="signin-container">
      <nav>
        <a href="#">MovieMania</a>
      </nav>

      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form action="#" autoComplete="off">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
          {renderConfirmPassword()}
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
        <small>
          This page is protected by Google reCaptcha to ensure you are not a
          bot. <a href="#">Learn More</a>
        </small>
      </div>
    </div>
  );
}

export default Signup;
