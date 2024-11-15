import "./style.css";
import menuItems from "./menuItems";
import SidebarGroup from "./sidebarGroup";
import SidebarSingle from "./sidebarSingle";
import Title from "./title";
import { useMediaQuery } from "react-responsive";

import { useEffect, useMemo } from "react";

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { setReference } from "../../store/slices/header";
import { close, show } from "../../store/slices/sidebar";

function Sidebar() {
  const { isShow } = useSelector((state) => state.sidebar);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    if (!isMobile) {
      dispatch(show());
      return;
    }
    dispatch(close());
  }, [isMobile]);

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
              path={item?.path}
              title={item?.title}
              icon={item?.icon}
              blank={item?.blank}
            />
          ) : item.type == "title" ? (
            <Title key={index} text={item.title} />
          ) : (
            <SidebarGroup
              icon={item.icon}
              key={index}
              items={item.items}
              title={item.title}
            />
          )
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
