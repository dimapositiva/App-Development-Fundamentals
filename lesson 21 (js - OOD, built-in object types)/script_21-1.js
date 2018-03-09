
function Objectcreator(x1, y1, x2,  y2) {
  this.coordinate = {
    'x1': x1,
    'y1': y1,
    'x2': x2,
    'y2': y2
  };

  this.perimeter;

  this.toString = () => {
    return this.coordinate;
  };

  this.valueOf = () => {
    this.perimeter = 2 * (this.coordinate.x2 - this.coordinate.x1 +
      this.coordinate.y2 - this.coordinate.y1);
    return this.perimeter;
  };
}
