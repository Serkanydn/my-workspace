import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import ShoesCard from "../components/shoesCard";
import CookiePreferencesModal from "../components/modals/cookiePreferencesModal";
import LandingPage1 from "../landingPages/1";
import LandingPage2 from "../landingPages/2";
import Notification1 from "../components/notifications/1";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <>Home</>,
      },
      {
        path: "/components/modals/cookie-preferences-modal",
        element: <CookiePreferencesModal />,
      },
      {
        path: "/landingpages/1",
        element: <LandingPage1 />,
      },
      {
        path: "/landingpages/2",
        element: <LandingPage2 />,
      },

      {
        path: "/components/notifications/1",
        element: <Notification1 />,
      },
    ],
  },
]);

export { router };
