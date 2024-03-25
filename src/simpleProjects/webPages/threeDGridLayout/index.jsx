import React from "react";

// images
import FeesPng from "./images/Fees.png";
import BrickPng from "./images/Brick.png";
import SafePng from "./images/Safe.png";
import SytheticPng from "./images/Sythetic.png";
import AntiPng from "./images/Anti.png";
import DLOPng from "./images/DLO.png";
import ForcePng from "./images/Force.png";

import "./styl.css";
function TreeDGridLayout() {
  return (
    <div id="three-d-grid-layout">
      <section>
        <div class="container">
          <div class="feature-grid-container grid grid--columns">
            <div class="feature-grid-text">
              <h2 class="fs-700 fw-600 uppercase text-compressed">
                WITH XFAI, TRADING WILL <span class="text-primary">NEVER</span>
                HAVE TO REMAIN CENTRALIZED
              </h2>
              <p>
                XFai develops tooling by graphing the DeFi space to build{" "}
                <strong>game changing</strong> products to benefit users
              </p>
              <div class="flex large-gap">
                <a href="#" class="btn btn--primary uppercase">
                  Whitepaper
                </a>
                <a href="#" class="btn btn--accent uppercase">
                  Watch video
                </a>
              </div>
            </div>
            <div class="grid feature-grid">
              <a href="#" aria-label="Low fees">
                <img src={FeesPng} alt="" />
              </a>
              <a href="#" aria-label="DLO-Brick">
                <img src={BrickPng} alt="" />
              </a>
              <a href="#" aria-label="Safe and simple">
                <img src={SafePng} alt="" />
              </a>
              <a href="#" aria-label="Sythetic curve">
                <img src={SytheticPng} alt="" />
              </a>
              <a href="#" aria-label="Anti slippage">
                <img src={AntiPng} alt="" />
              </a>
              <a href="#" aria-label="Dex liquidity oracle">
                <img src={DLOPng} alt="" />
              </a>
              <a href="#" aria-label="Liquidity difference force multiplier">
                <img src={ForcePng} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TreeDGridLayout;
