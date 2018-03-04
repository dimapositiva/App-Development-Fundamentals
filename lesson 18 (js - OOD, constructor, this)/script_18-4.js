class Calculator {
  constructor() {
    this.arguments = [];
  };

  read() {
    for (let i = 0; i <= 1; i++) {
      let arg = prompt('Enter some number.');
      this.arguments.push(Number(arg));
    }
  };

  sum(arr) {
    return arr[0] + arr[1];
  };

  mul(arr) {
    return arr[0] * arr[1];
  };
}

const calculator = new Calculator();

calculator.read();
console.log(calculator.sum(calculator.arguments));
console.log(calculator.mul(calculator.arguments));
