const cardinal_directions = ['N', 'E', 'S', 'W'];

const mowerC = class MowerControl {
  constructor(extentions, direction, lawn) {
    this.x_extentions = extentions[0];
    this.y_extentions = extentions[1];
    this.direction = direction;
    this.horizontalPosition = lawn[0];
    this.verticalPosition = lawn[1];
  }

  get extention() {
    return `${this.x_extentions} ${this.y_extentions} ${this.direction}`
  }

  orientation() {
    switch(this.direction) {
      case 'N':
        if (this.getExtension(this.x_extentions, this.y_extentions + 1)) { this.y_extentions += 1 }
        break;
      case 'E':
        if (this.getExtension(this.x_extentions + 1, this.y_extentions)) { this.x_extentions += 1 }
        break;
      case 'S':
        if (this.getExtension(this.x_extentions, this.y_extentions - 1)) { this.y_extentions -= 1 }
        break;
      case 'W':
        if (this.getExtension(this.x_extentions - 1, this.y_extentions)) { this.x_extentions -= 1 }
        break;
    }
  }

  circulate(direction) {
    let index = cardinal_directions.indexOf(this.direction);
    if (direction === 'L') return index > 0 ? cardinal_directions[index - 1] : cardinal_directions[cardinal_directions.length - 1];
    if (direction === 'R') return index === cardinal_directions.length - 1 ? cardinal_directions[0] : cardinal_directions[index + 1];
  }

  getExtension(x_extentions, y_extentions) {
    return x_extentions >= 0 && x_extentions <= this.horizontalPosition && y_extentions >= 0 && y_extentions <= this.verticalPosition
  }

  makeLeft() {
    this.direction = this.circulate('L')
  }
  mekeRight() {
    this.direction = this.circulate('R')
  }


};

module.exports = mowerC;  