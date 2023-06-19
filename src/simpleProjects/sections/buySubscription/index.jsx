import React from "react";
import "./style.css";

import iceSvg from "./images/ice.svg";
import teliaSvg from "./images/telia.svg";
import telenorSvg from "./images/telenor.svg";

function BuySubscription() {
  return (
    <div className="buy-subscription">
      <div className="container">
        <div className="header">
          <h1>Get the most out of your mobile with the right subscription</h1>
          <p>All devices come with free delivery or pickup as standard. See information on available shopping options for your location.</p>
        </div>

        <div className="cards">
          <div className="card">
            <div className="content">
              <img src={iceSvg} alt="" />
              <h3>Ice Mobile 10GB</h3>
              <p>Up to 100Mbit/s</p>
              <div className="price-container">
                <span className="price">299,-</span>
                <div className="period">month</div>
              </div>
            </div>
            <button className="btn btn-primary"> Add subscription</button>
          </div>

          <div className="card">
            <div className="content">
              <img src={teliaSvg} alt="" />
              <h3>Telia Mobil 15GB</h3>
              <p>Unlimited calls, SMS and MMS</p>
              <div className="price-container">
                <span className="price">953,-</span>
                <div className="period">month</div>
              </div>
            </div>
            <button className="btn btn-primary">Add subscription</button>
          </div>

          <div className="card">
            <div className="content">
              <img src={telenorSvg} alt="" />
              <h3>Telenor Next Fast</h3>
              <p>Up to 100Mbit/s</p>
              <div className="price-container">
                <span className="price">1028,-</span>
                <div className="period">month</div>
              </div>
            </div>
            <button className="btn btn-primary">Add subscription</button>
          </div>
        </div>

        <button className="btn btn-secondary">See all subscriptions</button>
      </div>
    </div>
  );
}

export default BuySubscription;
