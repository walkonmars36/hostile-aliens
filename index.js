// Second attempt, after much study and pain I'll attempt to do all in OOP with no additional functions and test from the outset using jest.
// This has made my brain hurt, but I've had a lot of breakthroughs and several punch the air moments.

// define class for AlienGame
class AlienGame {
  constructor(numOfMotherShips, numOfDefenceShips, numOfAttackShips) {
    this.numOfMotherShips = numOfMotherShips;
    this.numOfDefenceShips = numOfDefenceShips;
    this.numOfAttackShips = numOfAttackShips;

    this.motherShip = ["Mother-Ship", 100, 9];
    this.defenceShip = ["Defence", 80, 10];
    this.attackShip = ["Attack", 45, 12];

    this.shipsArray = [];
    this.gameOver = false;
    this.gameOverMessage = document.querySelector(".game-over");
    this.fireBtn = document.querySelector(".fire-btn");
    this.playBtn = document.querySelector(".play-btn");
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

  // ORIGINAL METHOD
  // renderShips() {
  //   this.gameOverMessage.style.display = "none";
  //   this.fireBtn.style.visibility = "visible";
  //   this.playBtn.style.display = "none";

  //   let html = "";
  //   // loop through array and create div for each ship, push into html
  //   for (let i = 0; i < this.shipsArray.length; i++) {
  //     html += `<div class='${this.shipsArray[i][0].toLowerCase()}'>`;
  //     for (let j = 0; j < 2; j++) {
  //       html += `${this.shipsArray[i][j]} `;
  //     }

  //     html += "</div>";
  //   }

  //   return html;

  // }

  // Using map()
  renderShips() {
    this.gameOverMessage.style.display = "none";
    this.fireBtn.style.visibility = "visible";
    this.playBtn.style.display = "none";
    let html = "";
    const shipDivs = this.shipsArray.map((ship) => `<div>${ship[0]} ${ship[1]}</div>`);

    // console.log(shipDivs);
    html = shipDivs.join(" ");
    return html;
  }

  // method to get a random ship to fire at
  getRandomShip() {
    return Math.floor(Math.random() * this.shipsArray.length);
  }

  // method to fire at ships, remove points when hit
  fireAndUpdate() {
    // add event listener to the fire-btn
    document.querySelector(".fire-btn").addEventListener("click", () => {
      // variable to store the random ship
      let randomShip = this.getRandomShip();
      // remove damage points [2] from hitpoints [1] - in each ship's subarray
      this.shipsArray[randomShip][1] -= this.shipsArray[randomShip][2];

      // Update game - remove ship from shipsArray when hitpoints are <= 0, remove from HTML and check if the game is over
      if (this.shipsArray[randomShip][1] <= 0) {
        this.shipsArray.splice(randomShip, 1);
        this.isGameOver();
        document.querySelector(".game-container").innerHTML = this.renderShips();
      }
      if (this.gameOver === true) {
        this.endGame();
      } else {
        document.querySelector(".game-container").innerHTML = this.renderShips();
      }

      console.log(randomShip);
    });
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
    document.querySelector(".play-btn").addEventListener("click", () => {
      this.gameOver = false;
      this.shipsArray = [];

      this.createShips();

      document.querySelector(".game-container").innerHTML = this.renderShips();
    });
  }
}

// create new instance of AlienGame,
const playGame = new AlienGame(1, 5, 8);
// with arguments for - numOfMotherShips, numOfAttackShips, num of DefenceShips
playGame.createShips();
document.querySelector(".game-container").innerHTML = playGame.renderShips();
playGame.fireAndUpdate();
playGame.resetGame();
