import React from "react";
import Popever from "./popever";
import "./style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import svg1 from "./images/1.svg";
import svg2 from "./images/2.svg";
import svg3 from "./images/3.svg";

function Index() {
  return (
    <div className="popever-container">
      <Popever as="div" className="popever">
        {({ open, close }) => {
          return (
            <>
              <Popever.Button className="popever-button">
                Buraya Tıkla
                {open ? (
                  <IoIosArrowUp className="icon" />
                ) : (
                  <IoIosArrowDown className="icon" />
                )}
              </Popever.Button>
              <Popever.Panel className="popever-panel">
                <div className="popever-panel-items">
                  <div className="popever-panel-item">
                    <img src={svg1} />
                    <div className="popever-panel-item-content">
                      <h1>Insights</h1>
                      <p>Measure actions your users take</p>
                    </div>
                  </div>
                  <div className="popever-panel-item">
                    <img src={svg2} />
                    <div className="popever-panel-item-content">
                      <h1>Automations</h1>
                      <p>Create your own targeted content</p>
                    </div>
                  </div>
                  <div className="popever-panel-item">
                    <img src={svg3} />
                    <div className="popever-panel-item-content">
                      <h1>Reports</h1>
                      <p>Keep track of your growth</p>
                    </div>
                  </div>
                </div>
                <div className="popever-panel-footer">
                  <div className="popever-panel-footer-item">
                    <div>
                      <h1>Documentation</h1>
                      <p>Start integrating products and tools</p>
                    </div>
                    {/* <button onClick={close}>Kapat</button> */}
                  </div>
                </div>
              </Popever.Panel>
            </>
          );
        }}
      </Popever>
    </div>
  );
}

export default Index;
