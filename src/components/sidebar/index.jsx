import "./style.css";
import menuItems from "./menuItems";
import SidebarGroup from "./sidebarGroup";
import SidebarSingle from "./sidebarSingle";
import Title from "./title";

import { useMemo } from "react";

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { setReference } from "../../store/slices/header";

function Sidebar() {
  const { isShow } = useSelector((state) => state.sidebar);

  const memorizedMenuItems = useMemo(() => menuItems, []);

  const dispatch = useDispatch();

  const handleSetReference = (reference) => {
    dispatch(setReference(reference));
  };

  return (
    <aside className={`sidebar ${isShow ? "show" : ""}  `}>
      <section className="sidebar-title">Serkan's Workspace</section>
      <ul>
        {memorizedMenuItems.map((item, index) =>
          item.type == "button" ? (
            <SidebarSingle
              onClick={() => handleSetReference(item.reference)}
              key={index}
              path={item.path}
              variant={item.type}
              title={item.title}
              icon={item.icon}
            />
          ) : item.type == "title" ? (
            <Title key={index} text={item.title} />
          ) : (
            <SidebarGroup icon={item.icon} key={index} items={item.items} title={item.title} />
          )
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
