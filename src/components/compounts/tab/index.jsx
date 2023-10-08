import React, {
  Fragment,
  createContext,
  createElement,
  useContext,
  useState,
} from "react";

const TabContext = createContext();

function Group({ children, activeTab, onChange, ...props }) {
  const [active, setActive] = useState(activeTab);

  const list = children.find((c) => c.type === Tab.List);
  const panels = children.find((c) => c.type === Tab.Panels);

  const data = {
    active,
    setActive,
    onChange,
  };

  return (
    <TabContext.Provider value={data}>
      <div {...props}>
        {list}
        {panels}
      </div>
    </TabContext.Provider>
  );
}

function List({ as = "nav", children, ...props }) {
  const buttons = children.filter((c) => c.type === Tab);
  return createElement(
    as,
    { ...props },
    buttons.map((button, index) => {
      return <Tab index={index} key={index * 1000000} {...button.props}></Tab>;
    })
  );
}

function Tab({ as = "button", index, className, children, ...props }) {
  const { active, setActive, onChange } = useContext(TabContext);

  const options = {
    ...props,
  };

  const handleClick = () => {
    setActive(index);
    onChange(index);
  };

  if (as !== Fragment) {
    options["className"] =
      typeof className === "function"
        ? className({ selected: index === active })
        : className;

    options["onClick"] = handleClick;
  }

  return createElement(
    as,
    options,
    (children =
      typeof children === "function"
        ? React.cloneElement(children({ selected: index === active }), {
            onClick: handleClick,
          })
        : children)
  );
}

function Panels({ as = "div", children, ...props }) {
  const { active } = useContext(TabContext);

  const panels = children.filter((c) => c.type === Tab.Panel);

  return createElement(
    as,
    { ...props },
    panels.map((panel, index) => {
      return (
        <Panel index={index} key={index * 100000} {...panel.props}></Panel>
      );
    })[active]
  );
}

function Panel({ as = "div", index, className, children, ...props }) {
  const { active } = useContext(TabContext);

  return createElement(
    as,
    {
      className:
        typeof className === "function"
          ? className({ selected: index === active })
          : className,
      ...props,
    },
    (children =
      typeof children === "function"
        ? children({ selected: index === active })
        : children)
  );
}

Tab.Group = Group;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;

export default Tab;
