import React from "react";

function PearlSection({ title, text, className }) {
  return (
    <section className={className}>
      <div className="wrapper">
        <h2 className="section-title">{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default PearlSection;
