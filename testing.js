// Second attempt, after much study and pain I'll attempt to do all in OOP with no additional functions and test from the outset using jest.
// This has made my brain hurt, but I've had a lot of breakthroughs and several punch the air moments.

// define class for AlienGame
export class AlienGame {
  constructor(numOfMotherShips, numOfDefenceShips, numOfAttackShips) {
    this.numOfMotherShips = numOfMotherShips;
    this.numOfDefenceShips = numOfDefenceShips;
    this.numOfAttackShips = numOfAttackShips;

    this.motherShip = ["Mother-Ship", 100, 9];
    this.defenceShip = ["Defence", 80, 10];
    this.attackShip = ["Attack", 45, 12];

    this.shipsArray = [];
    this.gameOver = false;
  }

  // method to push all ships into the shipsArray
  createShips() {
    this.shipsArray.push([this.motherShip[0], this.motherShip[1], this.motherShip[2]]);

    for (let i = 0; i < this.numOfDefenceShips; i++) {
      this.shipsArray.push([this.defenceShip[0], this.defenceShip[1], this.defenceShip[2]]);
    }

    for (let i = 0; i < this.numOfAttackShips; i++) {
      this.shipsArray.push([this.attackShip[0], this.attackShip[1], this.attackShip[2]]);
    }

    return this.shipsArray;
  }

  // method to render shipsArray to the screen
  renderShips() {
    let html = "";
    // loop through array and create div for each ship, push into html
    for (let i = 0; i < this.shipsArray.length; i++) {
      html += `<div class='${this.shipsArray[i][0].toLowerCase()}'>`;
      for (let j = 0; j < 2; j++) {
        html += `${this.shipsArray[i][j]} `;
      }

      html += "</div>";
    }
    return html;
  }

  // method to get a random ship to fire at
  getRandomShip() {
    return Math.floor(Math.random() * this.shipsArray.length);
  }

  // method to fire at ships, remove points when hit
  fireAndUpdate() {
    // add event listener to the fire-btn

    // variable to store the random ship
    let randomShip = this.getRandomShip();
    // remove damage points [2] from hitpoints [1] - in each ship's subarray
    this.shipsArray[randomShip][1] -= this.shipsArray[randomShip][2];

    // Update game - remove ship from shipsArray when hitpoints are <= 0, remove from HTML and check if the game is over
    if (this.shipsArray[randomShip][1] <= 0) {
      this.shipsArray.splice(randomShip, 1);
      this.isGameOver();
      this.renderShips();
    }
    if (this.gameOver === true) {
      this.endGame();
    } else {
      this.renderShips();
    }
  }

  isGameOver() {
    const containsMother = this.shipsArray.find((ship) => ship[0] === "Mother-Ship");

    if (!containsMother) {
      this.gameOver = true;
      this.endGame();
    } else {
      return;
    }
  }

  endGame() {
    this.shipsArray = [];
    this.gameOverMessage.style.display = "block";
    this.fireBtn.style.visibility = "hidden";
    this.playBtn.style.display = "block";
  }

  resetGame() {
    this.gameOver = false;
    this.shipsArray = [];

    this.createShips();

    this.renderShips();
  }
}
