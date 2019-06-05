const lawnMower =  class lawnMowerReposirtory {
  sequence(value) {
    value.forEach(function(c) {
      switch(c) {
        case 'L':
          this.mowerlawn.makeLeft();
          break;
        case 'R':
          this.mowerlawn.mekeRight();
          break;
        case 'F':
          this.mowerlawn.orientation();
          break;
      }
    }.bind(this))
  }
  constructor(mowerlawn) {
    this.mowerlawn = mowerlawn
  }
};
module.exports = lawnMower;  