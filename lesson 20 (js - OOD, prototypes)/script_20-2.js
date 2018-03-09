function Square() {
    this._side = 0;
    this._type = 'square';
    this._perimeter = 0;
    this.setSide = (num) => {
        if (!isNaN(num)) {
            this._side = num;
            return this._side;
        } else {
        console.log('Argument must be a number.');
        }
    };
    this.getPerimeter = () => {
        this._perimeter = 2 * this._side;
        return this._perimeter;
    };
    this.info = () => {
        console.log('Side is: ' + this._side + '\n' +
            'type of figure: ' + this._type + '\n' +
            'perimeter is: ' + this._perimeter);
    };
}

function Cube() {
    Square.call(this);
    this._type = 'cube';
    this.getPerimeter = () => {
        this._perimeter = 12 * this._side;
        return this._perimeter;
    };
    this.getPerimeter2 = () => {
        this._perimeter = 2 * this._side;
        return 6 * this._perimeter;
    };
}