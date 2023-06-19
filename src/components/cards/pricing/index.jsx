import React from "react";
import "./style.css";

import paypalSvg from "./images/paypal.svg";
function Pricing() {
  return (
    <div className="pricing-card">
      <div className="container">
        <div className="header">
          <h1>Try FREE for 4 weeks</h1>
          <p>We uncover the facts around the clock, all over the globe.</p>
        </div>

        <div className="cards">
          <div className="card">
            <input type="checkbox" name="" id="" />
            <div className="content">
              <h4>Monthly</h4>
              <p>4 weeks for free</p>
              <p>Then $3 every month for the first year</p>
            </div>
          </div>

          <div className="card">
            <input type="checkbox" name="" id="" />
            <div className="content">
              <span>Best Value</span>
              <h4>Yearly</h4>
              <p>4 weeks for free</p>
              <p>Then $30 for the first year</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="btn btn-primary">Continue</button>
          <button className="btn-outlined btn-icon">
            Continue With <img src={paypalSvg} alt="" />{" "}
          </button>
          <button className="btn btn-link">View more offers </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
