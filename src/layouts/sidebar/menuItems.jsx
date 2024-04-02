import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { SiPagekit } from "react-icons/si";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { RxSection } from "react-icons/rx";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { TbComponents } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";

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
        reference:
          "https://www.uidesigndaily.com/posts/figma-pricing-card-subscribe-day-1566",
      },
      {
        path: "/components/cards/glowing-border",
        title: "Glowing Border",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
      },
      {
        path: "/components/cards/stack-cards",
        title: "Stack Cards",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
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
        reference:
          "https://www.uidesigndaily.com/posts/figma-cookie-preferences-modal-cookies-settings-day-1581",
      },
    ],
  },
  {
    title: "Accordion",
    type: "groupButton",
    icon: <TfiLayoutAccordionMerged className="icon" />,
    items: [
      {
        path: "/components/accordions/simple",
        title: "Simple",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
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
        reference:
          "https://www.uidesigndaily.com/posts/figma-notification-day-1559",
      },
    ],
  },
  {
    title: "Compounts",
    type: "groupButton",
    icon: <TbComponents className="icon" />,
    items: [
      {
        path: "/components/compounts/form-stepper",
        title: "Form Stepper",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
      },
      {
        path: "/components/compounts/popever",
        title: "Popever",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
      },
    ],
  },
  {
    path: "/components/sliders",
    title: "Sliders",
    icon: <IoArrowRedoSharp className="icon" />,
    type: "button",
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
        reference:
          "https://www.uidesigndaily.com/posts/figma-landing-page-website-day-955",
      },
      {
        path: "/simpleProjects/landingpages/2",
        title: "2",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference:
          "https://www.uidesigndaily.com/posts/sketch-domain-site-landing-page-website-day-1161",
      },
    ],
  },
  {
    title: "Web Pages",
    type: "groupButton",
    icon: <RiPagesLine className="icon" />,
    items: [
      {
        path: "/simpleProjects/web-pages/space-tourism/home",
        title: "Space Tourism",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        blank: true,
      },
      {
        path: "/simpleProjects/web-pages/wave-sections",
        title: "Wave Sections",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        blank: true,
      },
      {
        path: "/simpleProjects/web-pages/3d-grid-layout",
        title: "3D Grid Layout",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        blank: true,
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
      },
      {
        path: "/simpleProjects/sections/user-list-section",
        title: "User List",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference:
          "https://www.uidesigndaily.com/posts/figma-users-list-card-day-1542",
      },
      {
        path: "/simpleProjects/sections/log-in-1",
        title: "Log in 1",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference:
          "https://www.uidesigndaily.com/posts/sketch-log-in-sign-up-authentication-day-1431",
      },
      {
        path: "/simpleProjects/sections/time-tracking-dashboard",
        title: "Time Tracking Dashboard",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
      },
      {
        path: "/simpleProjects/sections/testimonials-grid-section",
        title: "Testimonials Grid Section",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
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
  {
    title: "Tables",
    type: "groupButton",
    icon: <RxSection className="icon" />,
    items: [
      {
        path: "/simpleProjects/tables/1",
        title: "1",
        icon: <IoArrowRedoSharp className="icon" />,
        type: "button",
        reference: "https://www.uidesigndaily.com/posts/figma-table-day-1442",
      },
    ],
  },
];

export default menuItems;
