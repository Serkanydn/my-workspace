import React from "react";
import ProfileImage from "./images/image-jeremy.png";
import "./style.css";

function TimeTrackingDashboard() {
  const cardData = [
    {
      title: "Work",
      time: "32hrs",
      lastWeekTime: "36hrs",
      type: "work",
    },
    {
      title: "Play",
      time: "10hrs",
      lastWeekTime: "8hrs",
      type: "play",
    },
    {
      title: "Study",
      time: "4hrs",
      lastWeekTime: "7hrs",
      type: "study",
    },
    {
      title: "Exercise",
      time: "4hrs",
      lastWeekTime: "5hrs",
      type: "exercise",
    },
    {
      title: "Social",
      time: "5hrs",
      lastWeekTime: "10hrs",
      type: "social",
    },
    {
      title: "Self Care",
      time: "2hrs",
      lastWeekTime: "2hrs",
      type: "selfcare",
    },
  ];

  return (
    <div id="time-tracking-dashboard">
      <section className="wrapper">
        <aside>
          <div className="user">
            <div className="profile">
              <img className="profile_image" src={ProfileImage} alt="profile" />
              <div className="profile_text-content">
                <span>Report for</span>
                <h2>Jeremy Robson</h2>
              </div>
            </div>
            <nav className="profile_navigation">
              <ul>
                <li>
                  <a href="#">Daily</a>
                </li>
                <li className="active">
                  <a href="#"> Weekly</a>
                </li>
                <li>
                  <a href="#">Monthly</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <section className="time-cards">
          {cardData.map(({ title, time, lastWeekTime, type }) => (
            <article className="time-card" data-type={type}>
              <div className="time-card_content">
                <header className="time-card_header">
                  <h2>{title}</h2>
                  <span>...</span>
                </header>
                <div className="time-card_body">
                  <p>{time}</p>
                  <span>Last Week - {lastWeekTime}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
}

export default TimeTrackingDashboard;
