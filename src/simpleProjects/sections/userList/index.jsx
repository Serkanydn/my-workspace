import React, { useState } from "react";
import "./style.css";
import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import img3 from "./images/img3.svg";
import img4 from "./images/img4.svg";
import img5 from "./images/img5.svg";
import img6 from "./images/img6.svg";
import { BsSearch, BsList } from "react-icons/bs";
const users = [
  {
    img: img1,
    name: "Lelah Nichols",
    city: "Troy, MI",
    hobbies: [
      { id: 1, value: "clothes" },
      { id: 2, value: "stem" },
    ],
  },
  {
    img: img2,
    name: "Jesus Weiss",
    city: "Fort Worth, TX      ",
    hobbies: [
      { id: 1, value: "headset" },
      { id: 2, value: "gadget" },
      { id: 3, value: "speed" },
      { id: 4, value: "wnter" },
    ],
  },
  {
    img: img3,
    name: "Annie Rice",
    city: "Austin, TX",
    hobbies: [
      { id: 1, value: "road" },
      { id: 2, value: "mountain" },
      { id: 3, value: "trip" },
      { id: 4, value: "earth" },
      { id: 5, value: "nature" },
    ],
  },
  {
    img: img4,
    name: "Rover Brower",
    city: "Cincinnati, OH",
    hobbies: [
      { id: 1, value: "Maintenance" },
      { id: 2, value: "gears" },
      { id: 3, value: "grames" },
      { id: 4, value: "repair" },
    ],
  },
  {
    img: img5,
    name: "Amy Campbell",
    city: "Warrior, AL",
    hobbies: [
      { id: 1, value: "music" },
      { id: 2, value: "disks" },
    ],
  },
  {
    img: img6,
    name: "Anthony S. Morin",
    city: "Lyndhurst",
    hobbies: [
      { id: 1, value: "cintage" },
      { id: 2, value: "electric" },
    ],
  },
];
function UserListSection() {
  const [name, setName] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <div
      className="user-list-section"
      onClick={(event) => {
        setIsMenuShow(false);
      }}
    >
      <div className="container">
        <div className="title">Users</div>
        <header>
          <div className="search">
            <BsSearch className="icon"></BsSearch>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search users"
            />
          </div>
          <nav className="mobile">
            <BsList
              className="mobile-button"
              onClick={(event) => {
                event.stopPropagation();
                setIsMenuShow(!isMenuShow);
              }}
            >
              click
            </BsList>
            {isMenuShow && (
              <ul>
                <li>
                  <a href="#">Reputation</a>
                </li>
                <li className="active">
                  <a href="#">New Users</a>
                </li>
                <li>
                  <a href="#">Vaters</a>
                </li>
                <li>
                  <a href="#">Editors</a>
                </li>
                <li>
                  <a href="#">Moderators</a>
                </li>
              </ul>
            )}
          </nav>
          <nav>
            <ul>
              <li>
                <a href="#">Reputation</a>
              </li>
              <li className="active">
                <a href="#">New Users</a>
              </li>
              <li>
                <a href="#">Vaters</a>
              </li>
              <li>
                <a href="#">Editors</a>
              </li>
              <li>
                <a href="#">Moderators</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div className="card" key={index}>
                <img src={user.img} alt="" />
                <div className="description">
                  <label className="name">{user.name}</label>
                  <label className="city">{user.city}</label>
                  <div className="hobbies">
                    {user.hobbies.map((hobbie, index) => (
                      <span key={index * 1000}>{hobbie.value}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert">User Not Found</div>
          )}
        </main>
      </div>
    </div>
  );
}

export default UserListSection;
