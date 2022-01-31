import {it} from "@jest/globals";
import {AlienGame} from "./index.js";

it("correct number in array", () => {
  const play = new AlienGame();
  play.createShips(1, 5, 8);
  expect(play.shipsArray.length).toEqual(14);
});
