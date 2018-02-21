'use strict'

const oneToNMultiplier = n => {
  if (n > 0 ) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
      sum *= i;
    }
    console.log(sum);
  } else {
    console.log('Error! Argument must be a positive number.')
  }
}
