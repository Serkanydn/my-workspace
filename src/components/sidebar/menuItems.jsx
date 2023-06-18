import { AiOutlineHome } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { SiPagekit } from "react-icons/si";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsCardText } from "react-icons/bs";

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
    icon: <BsCardText className="icon" />,
    items: [
      {
        path: "/components/modals/cookie-preferences-modal",
        title: "Cookie Preferences Modal",
        icon: <MdOutlinePrivacyTip className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-cookie-preferences-modal-cookies-settings-day-1581",
      },
    ],
  },
  {
    title: "Simple Projects",
    type: "title",
  },
  {
    title: "Landing Pages",
    type: "groupButton",
    icon: <SiPagekit className="icon" />,
    items: [
      {
        path: "/landingpages/1",
        title: "Landing Page - 1",
        icon: <SiPagekit className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-landing-page-website-day-955",
      },
      {
        path: "/landingpages/2",
        title: "Landing Page - 2",
        icon: <SiPagekit className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/sketch-domain-site-landing-page-website-day-1161",
      },
    ],
  },
];

export default menuItems;
