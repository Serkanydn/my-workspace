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

        <form className="cards">
          <label className="card" for="radio-1">
            <input
              type="radio"
              defaultChecked 
              name="radio-group"
              id="radio-1"
              value="radio-1"
            />
            <div className="content">
              <h4>Monthly</h4>
              <p>4 weeks for free</p>
              <p>Then $3 every month for the first year</p>
            </div>
          </label>

          <label className="card" for="radio-2">
            <input
              type="radio"
              name="radio-group"
              id="radio-2"
              value="radio-2"
            />
            <div className="content">
              <span>Best Value</span>
              <h4>Yearly</h4>
              <p>4 weeks for free</p>
              <p>Then $30 for the first year</p>
            </div>
          </label>
        </form>

        <div className="buttons">
          <button className="btn btn-primary">Continue</button>
          <button className="btn-outlined btn-icon">
            Continue With <img src={paypalSvg} alt="" />
          </button>
          <button className="btn btn-link">View more offers </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
