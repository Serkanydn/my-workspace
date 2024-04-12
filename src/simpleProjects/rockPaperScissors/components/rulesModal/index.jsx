import React from "react";
import RulesTriangleSvg from "../../images/image-rules.svg";
import RulesPentagonSvg from "../../images/image-rules-bonus.svg";
import Header from "../../../../components/modals/mainModal/components/header";

function RulesModal({ data: { isTriangle } }) {
  const img = isTriangle ? RulesTriangleSvg : RulesPentagonSvg;
  return (
    <>
      <Header title="Rules" className="borderless" />
      <div style={{ padding: "1rem 2rem 2rem 2rem" }}>
        <img src={img} alt="rules" />
      </div>
    </>
  );
}

export default RulesModal;
