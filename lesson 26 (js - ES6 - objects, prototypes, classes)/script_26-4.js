class Figure {
  constructor(a = 0, b = 0) {
    this._a = a;
    this._b = b;
    this._center = {
      x: 0,
      y: 0
    };
  }
  setA(num) {
    return this._a = num;
  }
  setB(num) {
    return this._b = num;
  }
  getA() {
    return console.log(this._a);
  }
  getB() {
    return console.log(this._b);
  }
  getCenter() {
    return this._center = {
      x: this._a / 2,
      y: this._b / 2
    };
  }
  display() {
    console.log(this._center);
  }
};

class Rectangle extends Figure {
  constructor(a, b, name) {
    super(a, b);
    this._name = name;
    this._type = 'rectangle';
    this._radius = this.getRadius();
  }
  getRadius() {
    return this._diagonal = Math.sqrt(this._a * this._a + this._b * this._b);
  }
  info() {
    console.log('Name: ' + this._name + '\n' + 'type: ' + this._type + '\n' +
      'sides: ' + 'a: ' + this._a + ', b: ' + this._b + '\n' + 'diagonal: ' + this._diagonal);
  }
};

class Circle extends Figure {
  constructor(name, diagonal) {
    super(diagonal);
    this._name = name;
    this._type = 'circle';
    this._a = diagonal;
    this._b = this.getRadius();
  }
  getRadius() {
    return this._b = this._a / 2;
  }
  info() {
    console.log('Name: ' + this._name + '\n' + 'type: ' + this._type + '\n' +
      'diagonal: ' + this._a + '\n' + 'radius: ' + this._b);
  }
};
