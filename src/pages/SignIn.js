import Navigation3 from "../Components/Navigation3";
import { Link } from "react-router-dom";
import "./SignIn.css";
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Footer2 from "../Components/Footer2";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErr(true);
      return;
    }

    fetch("http://159.65.21.42:9000/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error occurred while fetching user data");
        }
      })
      .then((data) => {
        const foundUser = data.find((user) => user.email === email && user.password === password);
        if (foundUser) {
          alert("Login successful");
        
          window.location.href = "/products";
        } else {
          alert("Login failed. Invalid email or password.");
        }
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
    setErr(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="siii">
      <Navigation3 />
      <div className="container">
        <form className="signIn-form" onSubmit={handleSubmitUser}>
          <h1 className="signIn-form-title">Sign In to Best Buy</h1>
          <div className="signIn-form-input-group1">
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              className="CreateAcc-form-email"
            />
            {err && email === "" && <span className="createAccSpan">Email Required</span>}
          </div>

          <div className="signIn-form-input-group2">
            <input
              type="password"
              id="password"
              className="CreateAcc-form-password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {err && password === "" && <span className="createAccSpan">Password Required</span>}
          </div>
          <div className="signIn-form-input-forgot-your-password">
            <Link to="#">Forgot your password</Link>
          </div>
          <div className="signIn-submitbtn">
            <button type="submit" className="form_button submitbtn">Sign In</button>
          </div>

          <div className="cia-divider-flex">
            <div className="text-middle">or</div>
            <div className="line"></div>
          </div>


          <div className="createAcc-Apple">
            <button><IoLogoApple /> Sign Up With Apple</button>
          </div>

          <div className="createAcc-google">
            <button><FcGoogle /> Sign Up With Google</button>
          </div>

          <div>
            <span className="cia-disclaimer">
              By continuing you agree to our<Link to="#">Terms and Conditions</Link>,
              our <Link to="#">Privacy Policy</Link>, and the <Link to="#">My Best Buy™ Program Terms</Link>.
            </span>
          </div>

          <div className="cyuy">
            <strong>Don't have an account?&nbsp;</strong>
            <Link to="#">Create an account</Link>
          </div>
        </form>
      </div>
      <Footer2 />
    </div>
  );
}

export default SignIn;
