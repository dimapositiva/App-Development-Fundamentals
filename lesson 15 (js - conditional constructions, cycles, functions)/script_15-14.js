'use strict'

const calc = (a, b, op) => {
  if (op === 1) {
    console.log(a + b);
  } else if (op === 2) {
    console.log(a * b);
  } else if (op === 3) {
    console.log(a / b);
  } else if (op === 4) {
    console.log(a - b);
  } else {
    console.log('Something wrong. This programm need 3 arguments. The last argument must be from 1 to 4.')
  }
}
