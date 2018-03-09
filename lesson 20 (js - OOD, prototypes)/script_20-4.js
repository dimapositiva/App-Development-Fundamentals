function Figure() {
  this.a;
  this.b;
  this.center;
}

function setA(num) {
  this.setA = (num) => {
    return this.a = num;
  };
}

function setB(num) {
  this.setB = (num) => {
    return this.b = num;
  };
}

function getCenter() {
  this.getCenter = () => {
    this.center = {
      x: this.a / 2,
      y: this.b / 2
    };
    return this.center;
  };
}

Figure.prototype.setA = setA;
Figure.prototype.setB = setB;
Figure.prototype.getCenter = getCenter;

function Rectangle() {
  this.type = 'rectangle';
  this.diagonal;
  this.perimeter;
}

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

function getDiagonal() {
  this.getDiagonal = () => {
    this.diagonal = Math.sqrt(this.a * this.a + this.b * this.b);
    return this.diagonal;
  };
}

function getPerimeter() {
  this.getPerimeter = (a = this.a, b = this.b) => {
    this.perimeter = 2 * a + 2 * b;
    return this.perimeter;
  };
}

function info() {
  this.info = () => {
    console.log('Figure type: ' + this.type + '\n' + 'side a: ' + this.a + '\n' +
      'side b: ' + this.b + '\n' + 'diagonal is: ' + this.diagonal + '\n' +
      'perimeter is: ' + this.perimeter + '\n');
  };
}

Rectangle.prototype.getDiagonal = getDiagonal;
Rectangle.prototype.getPerimeter = getPerimeter;
Rectangle.prototype.info = info;

function Circle(name) {
  this.type = 'circle';
  this.radius;
  this.diagonal;
  this.circle;
}

Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;

function setRadius() {
  this.setRadius = (num) => {
    return this.radius = num;
  };
}

function getDiagonal2() {
  this.getDiagonal2 = () => {
    this.diagonal = 2 * this.radius;
    return this.diagonal;
  };
}

function getCircle() {
  this.getCircle = () => {
    return this.circle = 2 * 3.14 * this.radius;
  };
}

function infoC() {
  this.infoC = () => {
    console.log('Figure type is: ' + this.type + '\n' + 'radius is: ' +
    this.radius + '\n' + 'diagonal is: ' + this.diagonal + '\n' +
    'circle is: ' + this.circle);
  };
}

Circle.prototype.setRadius = setRadius;
Circle.prototype.getDiagonal2 = getDiagonal2;
Circle.prototype.getCircle = getCircle;
Circle.prototype.infoC = infoC;
