function Square() {
  this.side;
  this.perimeter;
}

Square.prototype.setSide = (num) => {
  if (!isNaN(num)) {
    this.side = num;
    return this.side;
  } else {
    console.log('Argument must be a number.');
  }
};

Square.prototype.getPerimeter = () => {
  this.perimeter = 2 * this.side;
  return this.perimeter;
};

Square.prototype.info = () => {
  console.log('Side is: ' + this.side + '\n' +
    'perimeter is: ' + this.perimeter);
};

function Cube() {
  this.type = 'cube';
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

Cube.prototype.getPerimeter = () => {
  this.perimeter = 12 * this.side;
  return this.perimeter;
};
