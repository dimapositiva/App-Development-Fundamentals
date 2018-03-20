function ConstructorInjection(argument) {
  this.argument = argument;
  this.result = 0;
  this.operation = null;
}

ConstructorInjection.prototype.someOperation = function() {
  this.operation.argument = this.argument;
  this.operation.doOperation();
  this.result = this.operation.result;
};

function Increment() {
  this.argument = 0;
  this.result = 0;
}

Increment.prototype.doOperation = function() {
  this.result = -this.argument;
};

let inc = new Increment();
let ci = new ConstructorInjection(-10);

ci.operation = inc;
ci.someOperation();
console.log(ci.result);
