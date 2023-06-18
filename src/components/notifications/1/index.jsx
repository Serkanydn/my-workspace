import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

function Notification1() {
  return (
    <div className="notification-1">
      <div className="container">
        <div className="header">
          <h1>Show notifications for</h1>
          <i>
            <AiOutlineClose className="close-icon" />
          </i>
        </div>
        <div className="content">
          <i>
            <IoNotificationsOutline className="icon" />
          </i>
          <p>www.website.com</p>
        </div>
        <div className="footer">
          <button className="btn-danger btn-outlined">Block</button>
          <button className="btn-success btn-outlined">Allow</button>
        </div>
      </div>
    </div>
  );
}

export default Notification1;
