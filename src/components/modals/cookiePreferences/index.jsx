import React from "react";
import "./style.css";

function CookiePreferencesModal() {
  return (
    <div className="preferences-modal ">
      <div className="container">
        <div className="header">
          <h1>About Your Privacy</h1>
          <p>
            We process your data to deliver content or advertisements and measure the delivery of such content or advertisements to extract
            insights about our website. We share this information with our partners on the basis of consent and legitimate interest. You may
            exercise your right to consent or object to a legitimate interest, based on a specific purpose below or at a partner level in
            the link under each purpose. These choices will be signaled to our vendors.
          </p>
          <button>Allow All</button>
        </div>
        <section className="content">
          <h2>Manage Consent Preferences</h2>

          <div className="preferences">
            <div className="preference">
              <span>+</span>
              <p>Strictly Necessary Cookies</p>
              <p>Always Active</p>
            </div>

            <div className="preference">
              <span>+</span>
              <p>Functional Cookies</p>
              <input type="checkbox" />
            </div>

            <div className="preference">
              <span>+</span>
              <p>Performance Cookies</p>
              <input type="checkbox" />
            </div>

            <div className="preference">
              <span>+</span>
              <p>Personalised ads and content measurement, audience insights and product development</p>
              <input type="checkbox" />
            </div>
          </div>
        </section>
        <footer>
          <button>Reject all</button>
          <button>Submit My Choices</button>
        </footer>
      </div>
    </div>
  );
}

export default CookiePreferencesModal;
