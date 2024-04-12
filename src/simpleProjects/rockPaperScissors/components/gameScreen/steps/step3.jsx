import React, { useContext } from "react";
import { RockPaperScissorsContext } from "../../..";
import { states } from "../../../constants";

function Step3() {
  const { selections, setSelections, winner, state, setState } = useContext(
    RockPaperScissorsContext
  );

  const handleResetGame = () => {
    setState(states.FIRSTSELECT);
    setSelections({
      player1: null,
      player2: null,
    });
  };

  const renderWinnerText = (winner) => {
    const winnerStates = {
      player1: "You Win",
      player2: "You Lose",
    };

    return winnerStates[winner] || "draw";
  };

  return (
    <div>
      <div className="selection-show-case">
        <div
          className="flow text-center fs-500 uppercase clr-white letter-spacing-3"
          style={{ "--flow-gap": "4rem" }}
        >
          <p>you picked</p>
          <button
            className="selection-button selection-button--large"
            datatype={selections.player1}
          ></button>
        </div>
        {states.WINLOSE === state && (
          <div className="flow text-center win-lose">
            <p className="fs-700 uppercase clr-white text-nowrap letter-spacing-3">
              {renderWinnerText(winner)}
            </p>
            <button className="btn letter-spacing-3" onClick={handleResetGame}>
              PLAY AGAIN
            </button>
          </div>
        )}

        <div
          className="flow text-center fs-500 uppercase clr-white letter-spacing-3"
          style={{ "--flow-gap": "4rem" }}
        >
          <p>computer picked</p>
          <button
            className="selection-button small selection-button--large"
            datatype={selections.player2 ? selections.player2 : ""}
          ></button>
        </div>
      </div>
      {states.WINLOSE === state && (
        <div className="flow text-center win-lose-mobile">
          <p className="fs-700 uppercase clr-white text-nowrap letter-spacing-3">
            {renderWinnerText(winner)}
          </p>
          <button className="btn letter-spacing-3" onClick={handleResetGame}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}

export default Step3;
