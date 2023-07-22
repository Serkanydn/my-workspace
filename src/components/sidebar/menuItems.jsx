import { AiOutlineHome, AiOutlineIdcard, AiOutlineArrowRight } from "react-icons/ai";
import { SiPagekit } from "react-icons/si";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { RxSection } from "react-icons/rx";
import { IoArrowRedoSharp } from "react-icons/io5";

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
    title: "Cards",
    type: "groupButton",
    icon: <AiOutlineIdcard className="icon" />,
    items: [
      {
        path: "/components/cards/pricing",
        title: "Pricing",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-pricing-card-subscribe-day-1566",
      },
    ],
  },
  {
    title: "Modals",
    type: "groupButton",
    icon: <BsCardText className="icon" />,
    items: [
      {
        path: "/components/modals/cookie-preferences-modal",
        title: "Cookie Preferences Modal",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-cookie-preferences-modal-cookies-settings-day-1581",
      },
    ],
  },
  {
    title: "Notifications",
    type: "groupButton",
    icon: <IoIosNotifications className="icon" />,
    items: [
      {
        path: "/components/notifications/1",
        title: "1",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-notification-day-1559",
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
        path: "/simpleProjects/landingpages/1",
        title: "1",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-landing-page-website-day-955",
      },
      {
        path: "/simpleProjects/landingpages/2",
        title: "2",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/sketch-domain-site-landing-page-website-day-1161",
      },
 
    ],
  },
  {
    title: "Sections",
    type: "groupButton",
    icon: <RxSection className="icon" />,
    items: [
      {
        path: "/simpleProjects/sections/buy-subscription",
        title: "Buy Subscription",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-buy-subscription-section-pricing-card-day-1574",
      },
      {
        path: "/simpleProjects/sections/user-list-section",
        title: "User List",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-users-list-card-day-1542",
      },
    ],
  },
  {
    path: "/simpleProjects/groceries-list",
    title: "Groceries List",
    icon: <IoArrowRedoSharp className="icon" />,
    type: "button",
    reference: "https://www.uidesigndaily.com/posts/figma-to-do-list-day-1543",
  },
];

export default menuItems;
