import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

// * Redux
import { toggle } from "../../store/slices/sidebar";
import { useDispatch, useSelector } from "react-redux";

function Topbar() {
  const location = useLocation().pathname;
  const { reference } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggle());
  };
  return (
    <div className=" topbar">
      <div className="header">
        <HiOutlineMenu onClick={handleToggleSidebar} className="toggler" />
      </div>
      <div className="navigation">
        {reference && (
          <a href={reference} target="_blank">
            Reference Link
          </a>
        )}
        {/* {location
          .split("/")
          .filter((path) => path !== "")
          .map((path) => {
            return (
              <NavLink key={path} className="link" to={path}>
                {path}
              </NavLink>
            );
          })} */}
      </div>
    </div>
  );
}

export default Topbar;
