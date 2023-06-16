import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import ShoesCard from "../components/shoesCard";
import CookiePreferencesModal from "../components/modals/cookiePreferencesModal";
import LandingPage1 from "../landingPages/landingPage1";

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
    ],
  },
]);

export { router };
