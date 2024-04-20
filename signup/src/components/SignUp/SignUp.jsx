import React from "react";
import "./SingUp.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const SignUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">SignUp</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default SignUp;
