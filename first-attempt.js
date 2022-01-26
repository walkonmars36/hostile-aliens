// create a class for mothership
class MotherShip {
  constructor(name, type, hitPoints, losePoints) {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.losePoints = losePoints;
    this.shipIsDestroyed = false;
  }

  // method to display ship
  displayShip() {
    document.getElementById(this.type).innerHTML += `<p id="${this.name}" > ${this.name} : ${this.hitPoints}</p>`;
  }

  // method for losing points when hit
  reducePoints() {
    this.hitPoints -= this.losePoints;
    this.updateDisplay();
  }

  //method to update the points display
  updateDisplay() {
    document.getElementById(this.name).innerHTML = ` ${this.name} : ${this.hitPoints}`;
  }

  // method to check if the ship is destroyed
  checkShipIsAlive() {
    this.removeShip();
    return this.hitPoints > 0;
  }

  // method to remove from view if ship is dead
  removeShip() {
    this.hitPoints <= 0 ? (document.getElementById(this.name).style.display = "none") : null;
  }

  isGameOver() {
    this.shipIsDestroyed = true;
  }
}

// extend mothership class to create classes for defence ship and attack ship
class DefenceShip extends MotherShip {
  constructor(name, type, hitPoints, losePoints) {
    super(name, type, hitPoints, losePoints);
  }
}

class AttackShip extends MotherShip {
  constructor(name, type, hitPoints, losePoints) {
    super(name, type, hitPoints, losePoints);
  }
}

// need ship array to push ships into
let shipArray = [];

// function to create defence and attack ships, creating a new instance of respective classes and pushing into shipArray
const createShips = (shipType, numShips) => {
  for (let i = 0; i < numShips; i++) {
    if (shipType === "defence") {
      shipArray.push(new DefenceShip("D" + i, "defence", 80, 10));
    } else {
      shipArray.push(new AttackShip("A" + i, "attack", 45, 12));
    }
  }
};

// function to create new game, invoking createShips to build defence and attack, plus a new MotherShip
const newGame = () => {
  shipArray === [];
  if (shipArray.length === 0) {
    shipArray.push(new MotherShip("M", "mothership", 100, 9));
    createShips("defence", 5);
    createShips("attack", 8);
    shipArray.forEach((ship) => ship.displayShip());
  } else {
    return;
  }
};

// event listener to play game button to trigger new game function
document.querySelector(".play-btn").addEventListener("click", () => newGame());

// *****  All functions and varaibles from here are relating to the firing process

// function to get random ship to fire at
const getRandomShip = () => Math.floor(Math.random() * shipArray.length);

// // identify shipType and reduce hit points
const fireAtShip = (shipType) => shipType.reducePoints();
// // check if mothership still alive
const isMotherShipAlive = () => {
  if (shipArray[0].hitPoints <= 0) {
    destroyAllShips();
  }
};

// function to reset the game
const clearGame = () => {
  document.getElementById("mothership").innerHTML = "";
  document.getElementById("defence").innerHTML = "Game Over";
  document.getElementById("attack").innerHTML = "";
};

// // check to see if ship is still alive
const isShipAlive = (shipType) => shipType.checkShipIsAlive();

// // if mothership is detroyed then destroy all ships
const destroyAllShips = () => {
  // reset the game
  clearGame();
  shipArray = [];
};

const fire = () => {
  // get a random ship (index) from shipArray assign to variable randomShip
  const randomShip = getRandomShip();
  // fire at the ship and reducePoints()
  fireAtShip(shipArray[randomShip]);
  // check if mothership is still alive (if dead, game is over - destroy all ships)
  // then check if ship(s) still alive
  isShipAlive(shipArray[randomShip]) ? null : shipArray.splice(randomShip, 1);
  isMotherShipAlive();
};

// event listener to fire button to trigger fire function
document.querySelector(".fire-btn").addEventListener("click", () => fire());
