import {expect, it, test} from "@jest/globals";
import {AlienGame} from "./index.js";

it("Should create correct number in array", () => {
  const play = new AlienGame();
  play.createShips(1, 5, 8);
  expect(play.shipsArray.length).toEqual(14);
});

it("should check hit points and damage points of ships are correct", () => {
  const play = new AlienGame();
  expect(play.motherShip.slice(1, 3)).toEqual([100, 9]);
  expect(play.defenceShip.slice(1, 3)).toEqual([80, 10]);
  expect(play.attackShip.slice(1, 3)).toEqual([45, 12]);
});

it("should select a random integer between 0 and the length of ships array", () => {
  const play = new AlienGame();
  expect(play.getRandomShip()).toBeGreaterThanOrEqual(0);
  expect(play.getRandomShip()).toBeLessThanOrEqual(play.shipsArray.length);
});
