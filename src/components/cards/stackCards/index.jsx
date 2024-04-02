import React, { useState } from "react";
import "./style.css";

function FlipperCard() {
  const [active, setActive] = useState(1);

  return (
    <div id="stack-cards">
      <div className="wrapper">
        <div className="cards">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`card ${active === index + 1 ? "active" : ""}`}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="cards" data-type="vertical">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index * 1000}
              data-index={index}
              className={`card ${active === index + 1 ? "active" : ""}`}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        data-index="0"
        onClick={() =>
          setActive((prev) => {
            if (prev === 5) {
              return 1;
            }

            return prev + 1;
          })
        }
      >
        Change
      </button>
    </div>
  );
}

export default FlipperCard;
