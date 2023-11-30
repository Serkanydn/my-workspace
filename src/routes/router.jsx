import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import ShoesCard from "../components/shoesCard";
import CookiePreferencesModal from "../components/modals/cookiePreferences";
import LandingPage1 from "../simpleProjects/landingPages/1";
import LandingPage2 from "../simpleProjects/landingPages/2";
import GroceriesList from "../simpleProjects/groceriesList";
import Notification1 from "../components/notifications/1";
import PricingCard from "../components/cards/pricing";
import Accordion from "../components/accordion";
import BuySubscription from "../simpleProjects/sections/buySubscription";
import UserListSection from "../simpleProjects/sections/userList";
import LogIn1 from "../simpleProjects/sections/logIn1";
import Table1 from "../simpleProjects/tables/1";
import FormStepper from "../components/compounts/formStepper";
import Popever from "../components/compounts/popever";
import SpaceTourism from "../simpleProjects/webPages/spaceTourism";
import SpaceTourismHome from "../simpleProjects/webPages/spaceTourism/pages/home";
import SpaceTourismDestination from "../simpleProjects/webPages/spaceTourism/pages/destination";
import SpaceTourismCrew from "../simpleProjects/webPages/spaceTourism/pages/crew";
import SpaceTourismTechnology from "../simpleProjects/webPages/spaceTourism/pages/technology";
import Sliders from "../components/sliders";

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

      // * Accordion
      {
        path: "/components/accordions/simple",
        element: <Accordion />,
      },

      // * Compounts
      {
        path: "/components/compounts/form-stepper",
        element: <FormStepper />,
      },
      {
        path: "/components/compounts/popever",
        element: <Popever />,
      },
      // * Sliders
      {
        path: "/components/sliders",
        element: <Sliders />,
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
      {
        path: "/simpleProjects/groceries-list",
        element: <GroceriesList />,
      },

      // * Sections

      {
        path: "/simpleProjects/sections/buy-subscription",
        element: <BuySubscription />,
      },
      {
        path: "/simpleProjects/sections/user-list-section",
        element: <UserListSection />,
      },
      {
        path: "/simpleProjects/sections/log-in-1",
        element: <LogIn1 />,
      },

      // * Tables

      {
        path: "/simpleProjects/tables/1",
        element: <Table1 />,
      },
    ],
  },
  {
    element: <SpaceTourism />,
    children: [
      {
        path: "/simpleProjects/web-pages/space-tourism/home",
        element: <SpaceTourismHome />,
      },
      {
        path: "/simpleProjects/web-pages/space-tourism/destination",
        element: <SpaceTourismDestination />,
      },
      {
        path: "/simpleProjects/web-pages/space-tourism/crew",
        element: <SpaceTourismCrew />,
      },
      {
        path: "/simpleProjects/web-pages/space-tourism/technology",
        element: <SpaceTourismTechnology />,
      },
    ],
  },
]);

export { router };
