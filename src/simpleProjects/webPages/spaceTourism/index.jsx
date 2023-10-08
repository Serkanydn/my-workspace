import React from "react";
import "./style.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import world from "./images/world.png";
import worldOverlay from "./images/world-overlay.png";
import DestinationOverlay from "./images/destination-overlay.svg";
import CrewOverlay from "./images/crew-overlay.svg";
import TechnologyOverlay from "./images/technology-overlay.svg";
import { useLocation } from "react-router-dom";

function Index() {
  const location = useLocation().pathname.split("/").at(-1);

  const bgImages = {
    home: world,
    destination: DestinationOverlay,
    crew: CrewOverlay,
    technology: TechnologyOverlay,
  };

  return (
    <div
      id="space-tourism"
      style={{
        backgroundImage: `url(${bgImages[location]})`,
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Index;
