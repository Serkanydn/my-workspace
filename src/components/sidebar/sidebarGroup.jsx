/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useRef } from "react";
import SidebarSingle from "./sidebarSingle";

// * Redux
import { useDispatch } from "react-redux";
import { setReference } from "../../store/slices/header";

function SidebarGroup({ title, items }) {
  const groupRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  function handleOpenSubItems() {
    groupRef.current.classList.toggle("show");
    setIsShow(!isShow);
  }

  const dispatch = useDispatch();

  const handleSetReference = (reference) => {
    console.log("aa", reference);
    dispatch(setReference(reference));
  };

  return (
    <>
      <li ref={groupRef} className="sidebar-group ">
        <div className="sidebar-link" onClick={handleOpenSubItems}>
          <span>
            <AiOutlineHome className="icon" />
            {title}
          </span>
          {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isShow && (
          <ul className="sub-items">
            {items?.length > 0 &&
              items.map((item, index) => (
                <SidebarSingle
                  onClick={() => handleSetReference(item.reference)}
                  key={index * 100}
                  path={item.path}
                  variant={item.type}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default SidebarGroup;
