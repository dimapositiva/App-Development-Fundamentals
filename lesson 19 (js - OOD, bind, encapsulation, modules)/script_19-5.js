class Adder {
  constructor() {
    this.result = 0;
    this._firstNumber = 0;
    this._secondNumber = 0;
    this._count = 1;
  };

  calc() {
    this.result = this._firstNumber + this._secondNumber;
    console.log(this.result);
  };

  setFirstNumber(num) {
    let value = Number(num);
    if (!isNaN(value)) {
      this._firstNumber = value;
    } else {
      console.log('The first argument must be a number.')
    }
  };

  setSecondNumber(num) {
    let value = Number(num);
    if (!isNaN(value)) {
      this._secondNumber = value;
    } else {
      console.log('Second argument must be a number.')
    }
  };

  addNumber(num) {
    if (this._count % 2 === 1) {
      this.setFirstNumber(num);
      this.calc();
    } else if (this._count % 2 === 0) {
        this.setSecondNumber(num);
        this.calc();
      }
      this._count++;
  };
}
