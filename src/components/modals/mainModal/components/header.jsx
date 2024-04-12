import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { destroyModal } from "../../../../utils/modalHelper";
function Header({ title, className }) {
  return (
    <header
      className={`main-modal-container__header ${className ? className : ""}`}
    >
      <h1>{title}</h1>
      <AiOutlineClose onClick={destroyModal} className="icon" />
    </header>
  );
}

export default Header;
