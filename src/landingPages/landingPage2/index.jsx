import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import bgImage from "./bg.jpg";

import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
function LandingPage2() {
  const [dropdownShow, setDropDownShow] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownShow = () => {
    setDropDownShow(!dropdownShow);
  };

  const handleOutsideClick = (e) => {
    if (e.target.contains(dropdownRef.current)) {
      setDropDownShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="landing-page-2">
      <nav>
        <ul>
          <li>Domains</li>
          <li>Email & Marketing</li>
          <li>Hosting</li>
          <li>Blog</li>
          <li onClick={handleDropdownShow}>
            <span>
              Sign in
              {dropdownShow ? <MdOutlineKeyboardArrowUp className="icon" /> : <MdOutlineKeyboardArrowDown className="icon" />}
            </span>
          </li>
        </ul>
      </nav>
      {dropdownShow && (
        <div ref={dropdownRef} className="sign-in-dropdown-wrapper">
          <div className="sign-in-dropdown">
            <ul>
              <li>Domains</li>
              <li>Email & Marketing</li>
              <li>Hosting</li>
              <li>Blog</li>
            </ul>
            <div className="diveder"></div>
            <div>
              <h3>Registered users</h3>
              <p>
                Have an account? <br />
                Sign in now.
              </p>

              <button className="btn-primary">Sign In</button>
            </div>
            <div>
              <h3>New Customers</h3>
              <p>Are you new? Create an account to get started.</p>
              <button className="btn-secondary">Create Account</button>
            </div>
          </div>
        </div>
      )}

      <section className="container">
        <img src={bgImage} alt="moon" />
        <div className="content">
          <h1>Buy your domain today</h1>
          <p>With 80+ million domains under management, we have more experience than anyone. We'll make sure you find the right domain.</p>
          <div className="input-group">
            <input type="text" placeholder="Find your perfect domain" />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="domain">
          <div data-hosting="paid"></div>
          <h2>.no</h2>
          <p>99,-kr</p>
          <p>Renewal for DKK 189</p>
        </div>
        <div className="domain">
          <div data-hosting="paid"></div>
          <h2>.com</h2>
          <p>99,-kr</p>
          <p>Renewal for DKK 169</p>
        </div>
        <div className="domain">
          <div data-hosting="free"></div>
          <h2>.online</h2>
          <p>0,-kr</p>
          <p>Renewal for DKK 509</p>
        </div>
        <div className="domain">
          <div data-hosting="free"></div>
          <h2>.big</h2>
          <p>99,-kr</p>
          <p>Renewal for DKK 189</p>
        </div>
        <div className="domain">
          <div data-hosting="paid"></div>
          <h2>.eu</h2>
          <p>99,-kr</p>
          <p>Renewal for DKK 149</p>
        </div>
        <div className="domain">
          <div data-hosting="free"></div>
          <h2>.one</h2>
          <p>99,-kr</p>
          <p>Renewal for DKK 119</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage2;
