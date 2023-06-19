import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import ShoesCard from "../components/shoesCard";
import CookiePreferencesModal from "../components/modals/cookiePreferences";
import LandingPage1 from "../simpleProjects/landingPages/1";
import LandingPage2 from "../simpleProjects/landingPages/2";
import Notification1 from "../components/notifications/1";
import PricingCard from "../components/cards/pricing";
import BuySubscription from "../simpleProjects/sections/buySubscription";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <>Home</>,
      },
      // ! Components

      // * Cards
      {
        path: "/components/cards/pricing",
        element: <PricingCard />,
      },

      // * Modals
      {
        path: "/components/modals/cookie-preferences-modal",
        element: <CookiePreferencesModal />,
      },

      // * Notifications
      {
        path: "/components/notifications/1",
        element: <Notification1 />,
      },

      // ! Simple Projects

      // * Landing Pages
      {
        path: "/simpleProjects/landingpages/1",
        element: <LandingPage1 />,
      },
      {
        path: "/simpleProjects/landingpages/2",
        element: <LandingPage2 />,
      },

      // * Sections

      {
        path: "/simpleProjects/sections/buy-subscription",
        element: <BuySubscription />,
      },
    ],
  },
]);

export { router };
