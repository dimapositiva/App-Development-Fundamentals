class Square {
  constructor() {
    this._side = 'Not defined';
    this.type = 'square';
  }
  get side() {
    return this._side;
  }
  set side(num) {
    return this._side = num;
  }
  getPerimeter() {
    return this.perimeter = 4*this._side;
  }
};

//without expansion parent method
class Cube extends Square {
  constructor() {
    super();
    this.type = 'cube';
  }
  getPerimeter() {
    return this.perimeter = 12*this._side;
  }
};

//with the extension parent method
class Cube1 extends Square {
  constructor() {
    super();
    this.type = 'cube';
    this.perimeter = 'Not defined';
  }
  getThisPerimeter() {
    return this.perimeter = 3 * this.getPerimeter();
  }
};
