// Second attempt, after much research I'll attempt to do all in OOP with no additional functions and test from the outset

// define class for AlienGame

class AlienGame {
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
  }
}
