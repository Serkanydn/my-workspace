/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SidebarSingle({ path, title, icon, ...props }) {
  return (
    <>
      <li className="sidebar-item">
        <NavLink {...props} to={path} className="sidebar-link">
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
