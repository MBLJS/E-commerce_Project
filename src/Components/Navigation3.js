import React, { useState, useRef, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import logoPics from "./images/LogoHome.svg";
import Footer2 from "./Footer2";



function Navigation3() {

  return (
    <div>
      <header className="mini-header">
          <div className="navigation3-flex">
            <Link to="/" className="navigation3-logo-home">
              <img src={logoPics} alt="logo" />
            </Link>
            <Link to="/">
                Return to previous page
            </Link>
          </div>
      </header>
    </div>
  );
}

export default Navigation3;
