/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SidebarSingle({ path, title, icon, blank = false, ...props }) {
  return (
    <>
      <li className="sidebar-item">
        <NavLink
          {...props}
          to={path}
          target={blank ? "_blank" : ""}
          className="sidebar-link"
        >
          <span>
            {icon}
            {title}
          </span>
        </NavLink>
      </li>
    </>
  );
}

export default SidebarSingle;
