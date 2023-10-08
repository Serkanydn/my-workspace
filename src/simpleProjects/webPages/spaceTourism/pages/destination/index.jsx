import React, { Fragment, useState } from "react";
import Tab from "../../../../../components/compounts/tab";
import moon from "../../images/moon.png";
import mars from "../../images/mars.png";
import europa from "../../images/europa.png";
import titan from "../../images/titan.png";
import { motion } from "framer-motion";

function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = ["Moon", "Mars", "Europa", "Titan"];
  const images = {
    0: moon,
    1: mars,
    2: europa,
    3: titan,
  };

  const panels = [
    {
      title: "Moon",
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: "384,400 km",
      time: "3 Days",
    },
    {
      title: "Mars",
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      distance: "225 MIL. km",
      time: "3 Days",
    },
    {
      title: "Europa",
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      distance: "628 MIL. km",
      time: "3 years",
    },
    {
      title: "Titan",
      description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      distance: "1.6 BIL. km",
      time: "7 years",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="destination"
    >
      <h2>
        <span>01</span> Pick Your Destination
      </h2>
      <div className="content">
        <img src={images[activeIndex]} />

        <Tab.Group
          className="tab"
          activeTab={0}
          onChange={(activeIndex) => {
            console.log("activeIndex", activeIndex);
            setActiveIndex(activeIndex);
          }}
        >
          <Tab.List as="nav">
            {tabs.map((tab, index) => {
              return (
                <Tab key={index * 100} as={Fragment}>
                  {({ selected }) => (
                    <button className={`link ${selected ? "active" : ""}`}>
                      {tab}
                    </button>
                  )}
                </Tab>
              );
            })}
          </Tab.List>

          <Tab.Panels className="panels">
            {panels.map((panel, index) => {
              return (
                <Tab.Panel className="panel" key={index * 1001}>
                  <section>
                    <h3 className="panel-title">{panel.title}</h3>
                    <p className="panel-description"> {panel.description}</p>
                    <div className="panel-footer">
                      <p>
                        <span>AVG. DISTANCE</span>
                        {panel.distance}
                      </p>
                      <p>
                        <span> Est. travel time</span>
                        {panel.time}
                      </p>
                    </div>
                  </section>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
}

export default Destination;
