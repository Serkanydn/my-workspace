import React from "react";
import "./style.css";
import waveSvg from "./wave.svg";
import appleSvg from "./apple.svg";
import windowsPng from "./windows.png";
import linuxPng from "./linux.png";

function LandingPage1() {
  return (
    <div className="landing-page-1">
      <div className="wave">
        <img src={waveSvg} alt="" />
      </div>
      <nav>
        <div className="logo">CO</div>
        <div className="menu">
          <ul>
            <li className="active">Color Oracle</li>
            <li>How To</li>
            <li>Manual</li>
            <li>Design Tips</li>
            <li>Useful Links</li>
          </ul>
        </div>
      </nav>

      <section className="content">
        <h1>Design for the color impaired</h1>
        <p>
          Color Oracle is a free color blindness simulator for Windows, Mac and Linux. It takes the guesswork out of designing for color
          blindness by showing you in real time what people with common color vision impairments will see.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <img src={appleSvg} alt="" />
          <button>Download for Mac</button>
          <p>blank</p>
        </div>

        <div className="card">
          <img src={windowsPng} alt="" />
          <button>Download for Windows</button>
          <p>Requires Java 6 or higher</p>
        </div>

        <div className="card">
          <img src={linuxPng} alt="" />
          <button>Requires Java 6 or higher</button>
          <p>Requires Java 6 or higher</p>
        </div>
      </section>

      <footer>
        <div>
          <h2>About</h2>
          <p>Development: Bernie Jenny, Monash University, Australia. Ideas, testing and icon: Nathaniel Vaughn Kelso, California.</p>
        </div>

        <div>
          <h2>Feedback</h2>
          <p>
            Color Oracle is a work in progress and will improve with time and your input. Please share your Color Oracle testimonial with us
            and send us an email.
          </p>
        </div>

        <div>
          <h2>Source</h2>
          <p>Color Oracle is open source, available on GitHub for Mac and Windows/Java.</p>
        </div>

        <div className="copyright">© 2006–2018 by Bernie Jenny, Monash University, Melbourne, Australia. Last site update: 5 May 2018.</div>
      </footer>
    </div>
  );
}

export default LandingPage1;
