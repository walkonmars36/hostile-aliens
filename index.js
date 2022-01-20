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
    // this.hitPoints -= losePoints;
  }

  //method to update the points display
  updateDisplay() {
    //   something here
  }

  // method to check if the ship is destroyed
  checkShipIsDestroyed() {
    // something here
    if (this.hitPoints <= 0) {
      this.shipIsDestroyed = true;
    }
  }

  // method to remove from view if ship is dead
  removeShip() {
    // something here
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
  shipArray = [];
  shipArray.push(new MotherShip("M", "mothership", 100, 9));
  createShips("defence", 5);
  createShips("attack", 8);
  shipArray.forEach((ship) => ship.displayShip());
};

// function to fire at random ship
const hitRandomShip = () => {
  Math.floor(Math.random() * shipArray.length);
};

// function to check if game is over
const checkIfGameOver = (shipArray) => {
  // is mothership destroyed?
  if (shipArray[0].shipIsDestroyed) {
    return true;
  } // check if all ships destroyed
  if (shipArray.every((ship) => ship.shipIsDestroyed)) {
    return true;
  }
};

// add event listener to play game button to trigger new game function
document.querySelector(".play-btn").addEventListener("click", () => newGame());
