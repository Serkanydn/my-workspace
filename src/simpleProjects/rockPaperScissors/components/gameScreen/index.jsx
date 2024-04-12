import React, { useContext, useEffect, useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import { states, winnerState } from "../../constants";
import Step3 from "./steps/step3";
import { RockPaperScissorsContext } from "../..";

function GameScreen() {
  const { setPlayer1WinRate, selections, state, setWinner } = useContext(
    RockPaperScissorsContext
  );

  useEffect(() => {
    if (states.WINLOSE !== state) {
      return;
    }

    if (selections.player1 === selections.player2) {
      return;
    }

    if (winnerState[selections.player1].includes(selections.player2)) {
      setWinner("player1");

      setPlayer1WinRate((prev) => prev + 1);

      return;
    }

    setWinner("player2");
  }, [state]);

  const renderStates = () => {
    const stateObject = {
      [states.GAMESELECTION]: <Step1 />,
      [states.FIRSTSELECT]: <Step2 />,
      [states.SECONDSELECT]: <Step3 />,
      [states.COMPARE]: <Step3 />,
      [states.WINLOSE]: <Step3 />,
    };

    return stateObject[state];
  };

  return renderStates();
}

export default GameScreen;
