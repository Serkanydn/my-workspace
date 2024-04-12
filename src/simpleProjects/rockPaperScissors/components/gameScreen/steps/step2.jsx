import React, { useContext } from "react";
import { buttonTypes, gameTypes, states } from "../../../constants";
import { RockPaperScissorsContext } from "../../..";

function Step2() {
  const {
    setSelections,
    selections,
    setState,
    setWinner,
    renderedButtons,
    isTriangle,
  } = useContext(RockPaperScissorsContext);

  const handleSelect = (type) => {
    if (!selections.player1) {
      setState(states.SECONDSELECT);
      setSelections((prev) => ({
        ...prev,
        player1: type,
      }));

      setTimeout(() => {
        setState(states.COMPARE);

        setSelections((prev) => ({
          ...prev,
          player2:
            renderedButtons[Math.floor(Math.random() * renderedButtons.length)],
        }));

        setTimeout(() => {
          setState(states.WINLOSE);
          setWinner(null);
        }, 2000);
      }, 2000);
      return;
    }
    setState(states.COMPARE);
    setSelections((prev) => ({
      ...prev,
      player1: type,
    }));
  };

  return (
    <div
      className="selection-container"
      datatype={isTriangle ? "triangle" : "pentagon"}
    >
      {renderedButtons.map((item, index) => (
        <button
          key={index}
          className={`selection-button ${
            isTriangle ? "" : "selection-button--small"
          }`}
          datatype={item}
          onClick={() => {
            handleSelect(item);
          }}
        ></button>
      ))}
    </div>
  );
}

export default Step2;
