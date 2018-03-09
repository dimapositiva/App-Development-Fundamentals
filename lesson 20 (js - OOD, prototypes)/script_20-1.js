function Figure(name, a, b) {
    this._name = name;
    this._a = 0;
    this._b = 0;
    this.setA = (num) => {
        return this._a = num;
    };
    this.setB = (num) => {
        return this._b = num;
    }
    this.getCenter = () => {
        this.center = {
            x: this._a / 2,
            y: this._b / 2
        };
    };
}

function Rectangle(name, type) {
    Figure.call(this, name);
    this.type = 'rectangle';
    this.diagonal = 0;
    this.perimeter = 0;
    this.getDiagonal = (a = this._a, b = this._b) => {
        return this.diagonal = Math.sqrt(a * a + b * b);
    };
    this.getPerimeter = (a = this._a, b = this._b) => {
        return this.perimeter = 2 * a + 2 * b;
    };
    this.info = () => {
        console.log('Figure name: ' + this._name + '\n' +
            'figure type: ' + this.type + '\n' +
            'side a: ' + this._a + '\n' +
            'side b: ' + this._b + '\n' +
            'diagonal is: ' + this.diagonal + '\n' +
            'perimeter is: ' + this.perimeter + '\n' +
            'center of rectangle is: ' + this.center.x + ', ' + this.center.y);
    };
}

function Circle(name) {
    Figure.call(this, name);
    this.type = 'circle';
    this.radius = 0;
    this.diagonal = 0;
    this.circle = 0;
    this.setRadius = (num) => {
        return this.radius = num;
    };
    this.getDiagonal = () => {
        return this.diagonal = 2 * this.radius;
    };
    this.getCircle = () => {
        return this.circle = 2 * 3.14 * this.radius;
    };
    this.info = () => {
        console.log('Figure name: ' + this._name + '\n' +
            'figure type: ' + this.type + '\n' +
            'radius is: ' + this.radius + '\n' +
            'diagonal is: ' + this.diagonal + '\n' +
            'circle is: ' + this.circle);
    };
}
