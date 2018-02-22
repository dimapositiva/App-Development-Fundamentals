'use strict'

const pow = (x, n) => {
    let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= x;
  }
  console.log(sum);
}
