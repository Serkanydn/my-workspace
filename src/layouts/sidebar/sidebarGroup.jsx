/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useRef } from "react";
import SidebarSingle from "./sidebarSingle";

// * Redux
import { useDispatch } from "react-redux";
import { setReference } from "../../store/slices/header";
import { AnimatePresence, motion } from "framer-motion";

function SidebarGroup({ title, icon, items }) {
  const groupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenSubItems() {
    groupRef.current.classList.toggle("show");
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();

  const handleSetReference = (reference) => {
    dispatch(setReference(reference));
  };
  const container = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
    },
    exit: {
      height: 0,
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <li ref={groupRef} className={`sidebar-group ${isOpen ? "open" : ""} `}>
        <div className="sidebar-link" onClick={handleOpenSubItems}>
          <span>
            {icon}
            {title}
          </span>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="sub-items"
            >
              <AnimatePresence>
                <motion.div variants={item} className="sub-items">
                  {items?.length > 0 &&
                    items.map((item, index) => (
                      <SidebarSingle
                        onClick={() => handleSetReference(item.reference)}
                        key={index * 100}
                        path={item.path}
                        blank={item.blank}
                        title={item.title}
                        icon={item.icon}
                      />
                    ))}
                </motion.div>
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
}

export default SidebarGroup;
