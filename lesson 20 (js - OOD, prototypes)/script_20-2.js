function Square() {
  this.side = 0;
  this.type = 'square';
  this.perimeter = 0;
  this.setSide = (num) => {
    if (!isNaN(num)) {
      this.side = num;
      return this.side;
    } else {
        console.log('Argument must be a number.');
      }
  };
  this.getPerimeter = () => {
    this.perimeter = 2 * this.side;
    return this.perimeter;
  };
  this.info = () => {
    console.log('Side is: ' + this.side + '\n' +
                'type of figure: ' + this.type + '\n' +
                'perimeter is: ' + this.perimeter);
  };
}

function Cube() {
  Square.call(this);
  this.type = 'cube';
  this.getPerimeter = () => {
    this.perimeter = 12 * this.side;
    return this.perimeter;
  };

    //Override with polymorphism
  let perim = this.getPerimeter.bind(this);
  this.getPerimeter2 = () => {
    perim.call(this);
    return 6 * this.perimeter;
  };
}