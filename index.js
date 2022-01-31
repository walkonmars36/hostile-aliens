// Second attempt, after much study I'll attempt to do all in OOP with no additional functions and test from the outset using jest

// define class for AlienGame

export class AlienGame {
  constructor(numOfMotherShips, numOfDefenceShips, numOfAttackShips) {
    this.numOfMotherShips = numOfMotherShips;
    this.numOfDefenceShips = numOfDefenceShips;
    this.numOfAttackShips = numOfAttackShips;

    this.motherShip = ["Mother Ship", 100, 9, this.numOfMotherShips];
    this.defenceShip = ["Defence Ship", 80, 10, this.numOfDefenceShips];
    this.attackShip = ["Attack Ship", 45, 12, this.numOfAttackShips];

    this.shipsArray = [];
    this.gameOver = false;
  }

  // method to push all ships into the shipsArray
  createShips() {
    this.shipsArray.push([this.motherShip[0], this.motherShip[1], this.motherShip[2]]);

    for (let i = 0; i < arguments[1]; i++) {
      this.shipsArray.push([this.defenceShip[0], this.defenceShip[1], this.defenceShip[2]]);
    }

    for (let i = 0; i < arguments[2]; i++) {
      this.shipsArray.push([this.attackShip[0], this.attackShip[1], this.attackShip[2]]);
    }

    return this.shipsArray;
  }
}

// create new instance of AlienGame, with arguments for parameters - numOfMotherShips, numOfAttackShips, num of DefenceShips
const playGame = new AlienGame();

playGame.createShips(1, 5, 8);
console.log(playGame.shipsArray);
