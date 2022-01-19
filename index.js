// create a class for mothership
class motherShip {
  constructor(name, type, hitPoints, losePoints) {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.losePoints = losePoints;
  }

  // method to display ship
  displayShip() {
    // something here
  }

  // method for losing points when hit
  reducePoints() {
    this.hitPoints -= losePoints;
  }

  //method to update the points display
  updateDisplay() {
    //   something here
  }

  // method to check if the ship is still alive
  isShipAlive() {
    // something here
  }

  // method to remove from view if ship is dead
  removeShip() {
    // something here
  }
}

// extend mothership class to create classes for defence ship and attack ship
class defenceShip extends motherShip {
  constructor(name, type, hitPoints, losePoints) {
    super(name, type, hitPoints, losePoints);
  }
}

class attackShip extends motherShip {
  constructor(name, type, hitPoints, losePoints) {
    super(name, type, hitPoints, losePoints);
  }
}

// need ship array to push ships into
let shipArray = [];

// function to create ships
const createShips = () => {
  // something here
};

// function to fire at random ship
const hitRandomShip = () => {
  Math.floor(Math.random() * shipArray.length);
};
