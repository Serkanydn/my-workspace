import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const menu = [
    {
      path: "simpleProjects/web-pages/space-tourism/home",
      title: "Home",
      no: "00",
    },
    {
      path: "simpleProjects/web-pages/space-tourism/destination",
      title: "Destination",
      no: "01",
    },
    {
      path: "simpleProjects/web-pages/space-tourism/crew",
      title: "Crew",
      no: "02",
    },
    {
      path: "simpleProjects/web-pages/space-tourism/technology",
      title: "Technology",
      no: "03",
    },
  ];

  return (
    <header>
      <div className="logo-container">
        <img src={logo} className="logo" />
        <div className="divider">
          <span></span>
        </div>
      </div>
      <nav>
        {menu.map(({ path, title, no }, index) => (
          <NavLink key={index} className="link" to={path}>
            <span>{no}</span>
            {title}
          </NavLink>
        ))}
      </nav>
      <div className="mobile-menu">
        <button className="mobile-menu-button">
          <AiOutlineMenu size={"40px"} />
        </button>
        <nav className="mobile-nav">
          <AiOutlineClose className="mobile-nav-close-icon" size={"40px"} />
          {menu.map(({ path, title, no }, index) => (
            <NavLink key={index} className="" to={path}>
              <span>{no}</span>
              {title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
