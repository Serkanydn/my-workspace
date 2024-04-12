import React, { Fragment, useState } from "react";
import crew1 from "../../images/crew-image-1.png";
import crew2 from "../../images/crew-image-2.png";
import crew3 from "../../images/crew-image-3.png";
import crew4 from "../../images/crew-image-4.png";
import Tab from "../../../../../components/compounts/tab";
import { motion } from "framer-motion";

function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = ["", "", "", ""];

  const images = [crew1, crew2, crew3, crew4];

  const panels = [
    {
      job: "Commander ",
      name: "Douglas Hurley",
      about: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    },
    {
      job: "Mission Specialist ",
      name: "MARK SHUTTLEWORTH",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      job: "PILOT",
      name: "Victor Glover",
      about:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      job: "Flight Engineer",
      name: "Anousheh Ansari",
      about:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="crew"
    >
      <h2>
        <span>02</span> Meet Your Crew
      </h2>
      <div className="content">
        <Tab.Group
          className="tab"
          activeTab={0}
          onChange={(activeIndex) => {
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
                    <h3 className="panel-subTitle">{panel.job}</h3>
                    <p className="panel-title"> {panel.name}</p>
                    <div className="panel-description">{panel.about}</div>
                  </section>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
        <img src={images[activeIndex]} />
      </div>
    </motion.div>
  );
}

export default Crew;
