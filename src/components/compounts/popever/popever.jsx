import { AnimatePresence, motion } from "framer-motion";
import React, {
  Fragment,
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PopeverContext = createContext();

export default function Popever({ as = Fragment, children, ...props }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  const data = {
    open,
    close: () => setOpen(false),
    toggle: () => setOpen(!open),
    buttonRef,
  };

  let childs = children;

  if (typeof children === "function")
    childs = children({ open: data.open, close: data.close }).props.children;

  const button = childs.find((c) => c.type === Popever.Button);
  const panel = childs.find((c) => c.type === Popever.Panel);

  return createElement(
    as,
    props,
    <PopeverContext.Provider value={data}>
      {button}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {panel}
          </motion.div>
        )}
      </AnimatePresence>
    </PopeverContext.Provider>
  );
}

function Button({ as = "button", children, ...props }) {
  const { toggle, open, buttonRef } = useContext(PopeverContext);

  return createElement(
    as,
    {
      ref: buttonRef,
      onClick: () => {
        toggle();
      },
      ...props,
    },
    children
  );
}

function Panel({ as = "nav", children, ...props }) {
  const { close, buttonRef } = useContext(PopeverContext);
  const panelRef = useRef();

  useEffect(() => {
    const clickHandle = (e) => {
      if (
        !e.composedPath().includes(panelRef.current) &&
        !e.composedPath().includes(buttonRef.current)
      ) {
        close();
      }
    };
    document.addEventListener("click", clickHandle);

    return () => document.removeEventListener("click", clickHandle);
  }, []);

  return createElement(
    as,
    {
      ref: panelRef,
      ...props,
    },
    children
  );
}

Popever.Button = Button;
Popever.Panel = Panel;
