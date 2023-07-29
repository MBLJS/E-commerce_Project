import Navigation3 from "../Components/Navigation3";
import { Link } from "react-router-dom";
import "./SignIn.css";
import React, { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Footer2 from "../Components/Footer2";

function CreateAcc() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || passwordd === "") {
      setErr(true);
      return;
    }

    let users = {
      name: name,
      email: email,
      phone: phone,
      password: passwordd,
      date: new Date().toLocaleString(),
    };

    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((resp) => resp.json())
      .then((contact) => {
        alert("User Created");
        console.log(contact);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="siii">
      <Navigation3 />
      <div className="container">
        <form className="CreateAcc-form" onSubmit={handleSubmitUser}>
          <div className="CreateAcc-form-header">
            <h1>Create an Account</h1>
          </div>
          <div className="CreateAcc-form-main">
            <p className="CreateAcc-form-shooping">
              shopping for your business <Link to="/">Create a business account</Link>
            </p>

            <div className="CreateAcc-form-firstName-div">
              <input type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)} className="CreateAcc-form-firstName" />
              {err && name === "" && <span className="createAccSpan">Name Required</span>}
            </div>
            <div className="CreateAcc-form-Email-div">
              <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="CreateAcc-form-email" />
              {err && email === "" && <span className="createAccSpan">Email Required</span>}
            </div>
            <div className="CreateAcc-form-password-div">
              <input type="password" id="password" className="CreateAcc-form-password" value={passwordd} placeholder="Password" onChange={(e) => setPasswordd(e.target.value)} />
              {err && passwordd === "" && <span className="createAccSpan">Password Required</span>}
            </div>
            <div className="CreateAcc-form-comPassword-div">
              <input type="tel" placeholder="Mobile Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="CreateAcc-form-phone " />
              {err && phone === "" && <span className="createAccSpan">Phone Number Required</span>}
            </div>
            <div className="signIn-submitbtn">
              <button type="submit" className="form_button">Create an Account</button>
            </div>
          </div>

          <div className="cia-divider-flex">
            <div className="text-middle">or</div>
            <div className="line"></div>
          </div>
          <div className="createAcc-google">
            <button className="submitbtn"><FcGoogle /> Sign Up With Google</button>
          </div>

          <div>
            <span className="cia-disclaimer">
              By continuing you agree to our<Link to="#">Terms and Conditions</Link>,
              our <Link to="#">Privacy Policy</Link>, and the <Link to="#">My Best Buy™ Program Terms</Link>.
            </span>
          </div>

          <div className="cyuy">
            <strong>Already have an account?&nbsp;</strong>
            <Link to="/createAccount">Create an account</Link>
          </div>
        </form>
      </div>
      <Footer2 />
    </div>
  );
}

export default CreateAcc;
