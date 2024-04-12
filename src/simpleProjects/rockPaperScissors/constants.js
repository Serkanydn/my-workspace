export const gameTypes = {
  TRIPLE: "TRIPLE",
  QUINTET: "QUINTET",
};

export const states = {
  GAMESELECTION: "GAMESELECTION",
  FIRSTSELECT: "FIRSTSELECT",
  SECONDSELECT: "SECONDSELECT",
  COMPARE: "COMPARE",
  WINLOSE: "WINLOSE",
};

export const buttonTypes = ["paper", "scissors", "rock", "lizard", "spock"];

export const winnerState = {
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  rock: ["scissors", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};
