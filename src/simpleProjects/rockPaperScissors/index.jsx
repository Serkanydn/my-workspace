import React, { createContext, useEffect, useState } from "react";
import "./style.css";
import GameScreen from "./components/gameScreen";
import { states, buttonTypes, gameTypes } from "./constants";
import { createModal } from "../../utils/modalHelper";

export const RockPaperScissorsContext = createContext();

function RockPaperScissors() {
  const [player1WinRate, setPlayer1WinRate] = useState(0);
  const [gameType, setGameType] = useState(null);
  const [state, setState] = useState(states.GAMESELECTION);

  const [selections, setSelections] = useState({
    player1: null,
    player2: null,
  });

  const [winner, setWinner] = useState(null);

  const renderedButtons =
    gameType === gameTypes.TRIPLE ? buttonTypes.slice(0, 3) : buttonTypes;
  const isTriangle = gameType === gameTypes.TRIPLE;

  const contextData = {
    selections,
    setSelections,
    winner,
    setWinner,
    state,
    setState,
    gameType,
    setGameType,
    player1WinRate,
    setPlayer1WinRate,
    renderedButtons,
    isTriangle,
  };

  const handleOpenRulesModal = () => {
    createModal("rockPaperScissorsRulesModal", {
      isTriangle,
    });
  };

  const handleBack = () => {
    setState(states.GAMESELECTION);
    setGameType(null);
  };

  return (
    <RockPaperScissorsContext.Provider value={contextData}>
      <div id="rock-paper-scissors">
        <div className="container">
          {gameType && (
            <header className="primary-header">
              <div className=" clr-white">
                {renderedButtons.map((button) => (
                  <span
                    className={` fw-bold uppercase block ${
                      isTriangle ? "fs-600" : "fs-500"
                    }`}
                  >
                    {button}
                  </span>
                ))}
              </div>
              <button className="btn btn--score">
                <span className="clr-score-text letter-spacing-2 fw-bold uppercase ">
                  Score
                </span>
                <span className="fs-800 fw-bold clr-dark-text">
                  {player1WinRate}
                </span>
              </button>
            </header>
          )}
          <main>
            <GameScreen />
          </main>
          {gameType && (
            <footer className="flex-group end">
              <button
                onClick={handleBack}
                className="btn btn--large  uppercase"
              >
                Back
              </button>
              <button
                onClick={handleOpenRulesModal}
                className="btn btn--large btn--outlined  uppercase"
              >
                Rules
              </button>
            </footer>
          )}
        </div>
      </div>
    </RockPaperScissorsContext.Provider>
  );
}

export default RockPaperScissors;
