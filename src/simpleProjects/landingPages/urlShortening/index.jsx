import React from "react";

// IMAGES
import MainLogoSvg from "./images/logo.svg";
import HeroSvg from "./images/illustration-working.svg";

import "./style.css";

function UrlShortening() {
  return (
    <div id="url-shortening">
      <header class="padding-top-600">
        <div
          className="container"
          style={{ "--container-max-width": "1440px" }}
        >
          <div className="nav-wrapper">
            <div className="flex-group" style={{ "--flex-gap": "2rem" }}>
              <a href="#">
                <img src={MainLogoSvg} alt="Shortly" />
              </a>
              <button
                class="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded="false"
              >
                <img
                  class="icon-hamburger"
                  src="images/icon-hamburger.svg"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  class="icon-close"
                  src="images/icon-close.svg"
                  alt=""
                  aria-hidden="true"
                />
                <span class="visually-hidden">Menu</span>
              </button>
              <nav className="primary-navigation" id="primary-navigation">
                <ul role="list" className="nav-list">
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex-group" style={{ "--flex-gap": "2rem" }}>
              <button className="button button--link">Login</button>
              <button className="button button--rounded">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="padding-block-900">
          <div
            className="container"
            style={{ "--container-max-width": "1440px" }}
          >
            <div className="even-columns" style={{ "--grid-gap": "4rem" }}>
              <div className="flow">
                <h1 className="fs-primary-heading text-neutral-300">
                  More than just shorter links
                </h1>
                <p className="text-neutral-200 fs-400 fw-semibold">
                  Build your brand's recognition and get detailed insights on
                  how your links are performing.
                </p>
                <button className="button button--rounded">Get Started</button>
              </div>
              <div>
                <img src={HeroSvg} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top-900 bg-neutral-50 relative ">
          <div
            className="container"
            style={{ "--container-max-width": "1440px" }}
          >
            <div className="form-area flow">
              <form action="" className="form-wrapper padding-700">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control error"
                    placeholder="Shorten a link here..."
                  />
                  <small>Please add a link</small>
                </div>
                <button className="button">Shorten it!</button>
              </form>

              <div className="grid-flow">
                <div className="link-card">
                  <div className="link-card-info">
                    <p>https://fakelink.com</p>
                  </div>
                  <div className="flex-group">
                    <p className="text-primary-400">https://fakelink.com</p>
                    <button className="button button--small">Copy</button>
                  </div>
                </div>
                <div className="link-card">
                  <div className="link-card-info">
                    <p>https://fakelink.com</p>
                  </div>
                  <div className="flex-group">
                    <p className="text-primary-400">https://fakelink.com</p>
                    <button className="button button--small">Copied</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="statistics padding-block-900 flow"
              style={{ "--flow-space": "5rem" }}
            >
              <header
                className="text-center flow"
                style={{ "--flow-space": ".5rem" }}
              >
                <h2 className="section-title text-neutral-300">
                  Advanced Statistics
                </h2>
                <p className="text-neutral-200">
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </header>

              <div className="even-columns statistics-card-wrapper">
                <div className="statistic-card">
                  <img src="" alt="" />
                  <h3> Brand Recognition</h3>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
                <div className="statistic-card">
                  <img src="" alt="" />
                  <h3> Detailed Records</h3>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
                <div className="statistic-card">
                  <img src="" alt="" />
                  <h3> Fully Customizable</h3>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="padding-block-700">
        <div
          className="container"
          style={{ "--container-max-width": "1440px" }}
        >
          <p>Boost your links today</p>
          <button className="button button--rounded">Get Started</button>
        </div>
      </section>
      <footer className="padding-block-700">
        <div
          className="container"
          style={{ "--container-max-width": "1440px" }}
        >
          <div className="even-columns">
            <div>
              <img src="images/logo.svg" alt="Shortly" />
            </div>
            <nav>
              <h5>Features</h5>
              <ul role="list" className="footer-nav-list">
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Resources</h5>
              <ul role="list" className="footer-nav-list">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Company</h5>
              <ul role="list" className="footer-nav-list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Out Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contract</a>
                </li>
              </ul>
            </nav>

            <ul role="list" aria-label="Social links">
              <li>
                <a aria-label="facebook" href="#"></a>
              </li>
              <li>
                <a aria-label="twitter" href="#"></a>
              </li>
              <li>
                <a aria-label="pinterest" href="#"></a>
              </li>
              <li>
                <a aria-label="instragram" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UrlShortening;
