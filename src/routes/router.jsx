import { createBrowserRouter } from "react-router-dom";
import React from "react";

const MainLayout = React.lazy(() => import("../layouts/mainLayout"));
const CookiePreferencesModal = React.lazy(() =>
  import("../components/modals/cookiePreferences")
);
const LandingPage1 = React.lazy(() =>
  import("../simpleProjects/landingPages/1")
);
const LandingPage2 = React.lazy(() =>
  import("../simpleProjects/landingPages/2")
);
const GroceriesList = React.lazy(() =>
  import("../simpleProjects/groceriesList")
);
const Notification1 = React.lazy(() => import("../components/notifications/1"));
const Accordion = React.lazy(() => import("../components/accordion"));
const BuySubscription = React.lazy(() =>
  import("../simpleProjects/sections/buySubscription")
);
const UserListSection = React.lazy(() =>
  import("../simpleProjects/sections/userList")
);
const LogIn1 = React.lazy(() => import("../simpleProjects/sections/logIn1"));
const Table1 = React.lazy(() => import("../simpleProjects/tables/1"));
const FormStepper = React.lazy(() =>
  import("../components/compounts/formStepper")
);
const Popever = React.lazy(() => import("../components/compounts/popever"));
const SpaceTourism = React.lazy(() =>
  import("../simpleProjects/webPages/spaceTourism")
);
const SpaceTourismHome = React.lazy(() =>
  import("../simpleProjects/webPages/spaceTourism/pages/home")
);
const SpaceTourismDestination = React.lazy(() =>
  import("../simpleProjects/webPages/spaceTourism/pages/destination")
);
const SpaceTourismCrew = React.lazy(() =>
  import("../simpleProjects/webPages/spaceTourism/pages/crew")
);
const SpaceTourismTechnology = React.lazy(() =>
  import("../simpleProjects/webPages/spaceTourism/pages/technology")
);
const Sliders = React.lazy(() => import("../components/sliders"));
const TimeTrackingDashboard = React.lazy(() =>
  import("../simpleProjects/sections/timeTrackingDashboard")
);
const TestimonialsGridSection = React.lazy(() =>
  import("../simpleProjects/sections/testimonialsGridSection")
);
const GlowingBorderCard = React.lazy(() =>
  import("../components/cards/glowindBorder")
);
const WaveSections = React.lazy(() =>
  import("../simpleProjects/webPages/waveSections")
);
const ThreeDGridLayout = React.lazy(() =>
  import("../simpleProjects/webPages/threeDGridLayout")
);

const PricingCard = React.lazy(() => import("../components/cards/pricing"));
const StackCards = React.lazy(() => import("../components/cards/stackCards"));

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
      {
        path: "/components/cards/glowing-border",
        element: <GlowingBorderCard />,
      },
      {
        path: "/components/cards/stack-cards",
        element: <StackCards />,
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
      {
        path: "/simpleProjects/sections/time-tracking-dashboard",
        element: <TimeTrackingDashboard />,
      },
      {
        path: "/simpleProjects/sections/testimonials-grid-section",
        element: <TestimonialsGridSection />,
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
  {
    path: "/simpleProjects/web-pages/wave-sections",
    element: <WaveSections />,
  },
  {
    path: "/simpleProjects/web-pages/3d-grid-layout",
    element: <ThreeDGridLayout />,
  },
]);

export { router };
