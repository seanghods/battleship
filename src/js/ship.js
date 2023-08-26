class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
    this.domTargets = [];
  }
  hit() {
    this.timesHit++;
    this.isSunk();
  }
  isSunk() {
    if (this.timesHit == this.length) {
      this.sunk = true;
    }
  }
}

export {Ship};