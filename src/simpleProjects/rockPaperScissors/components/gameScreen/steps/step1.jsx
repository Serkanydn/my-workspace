import React, { useContext } from "react";
import { RockPaperScissorsContext } from "../../..";
import { gameTypes, states } from "../../../constants";

function Step1() {
  const { setGameType, setState } = useContext(RockPaperScissorsContext);

  const handleSelectGameType = (type) => {
    setGameType(type);
    setState(states.FIRSTSELECT);
  };
  return (
    <div className="game-selection flow">
      <header className="clr-white fs-800 letter-spacing-3 text-center">
        Game Selection
      </header>
      <div className="grid-flow">
        <button
          className="btn letter-spacing-3 fs-500 uppercase"
          onClick={() => {
            handleSelectGameType(gameTypes.TRIPLE);
          }}
        >
          Triple
        </button>
        <button
          className="btn letter-spacing-3 fs-500 uppercase"
          onClick={() => {
            handleSelectGameType(gameTypes.QUINTET);
          }}
        >
          Quintet
        </button>
      </div>
    </div>
  );
}

export default Step1;
