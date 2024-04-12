import React, { Fragment, useState } from "react";

import technology1 from "../../images/technology-image-1.png";
import technology2 from "../../images/technology-image-2.png";
import technology3 from "../../images/technology-image-3.png";
import Tab from "../../../../../components/compounts/tab";
import { motion } from "framer-motion";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = ["1", "2", "3"];

  const images = [technology1, technology2, technology3];

  const panels = [
    {
      subTitle: "THE TERMINOLOGY…",
      title: "LAUNCH VEHICLE",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
      subTitle: "THE TERMINOLOGY…",
      title: "SPACEPORT",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    },
    {
      subTitle: "THE TERMINOLOGY…",
      title: "SPACE CAPSULE",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="technology"
    >
      <h2>
        <span>03</span> SPACE LAUNCH 101
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
                    <h3 className="panel-subTitle">{panel.subTitle}</h3>
                    <p className="panel-title"> {panel.title}</p>
                    <div className="panel-description">{panel.description}</div>
                  </section>

                  <img src={images[activeIndex]} />
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
}

export default Technology;
