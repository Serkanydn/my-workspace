import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home"
    >
      <div className="content-container">
        <div className="content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="explore">
        <NavLink
          className="explore-button"
          to="/simpleProjects/web-pages/space-tourism/destination"
        >
          Explore
        </NavLink>
      </div>
    </motion.div>
  );
}

export default Home;
