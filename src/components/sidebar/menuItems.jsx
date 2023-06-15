import { AiOutlineHome } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";

const menuItems = [
  {
    path: "/",
    title: "Home",
    icon: <AiOutlineHome className="icon" />,
    type: "button",
  },
  {
    title: "Components",
    type: "title",
  },
  {
    title: "Modals",
    type: "groupButton",
    items: [
      {
        path: "/components/modals/cookie-preferences-modal",
        title: "Cookie Preferences Modal",
        icon: <GiConverseShoe className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-cookie-preferences-modal-cookies-settings-day-1581",
      },
    ],
  },
];

export default menuItems;
