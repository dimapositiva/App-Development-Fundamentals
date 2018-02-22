'use strict'

const digitN = (k, n) => {
  if (k > 0 && n > 0) {
    let num = k;
    for (let i = 0; i < (n - 1); i++) {
      num /= 10;
    }

    if (num < 1) {
      console.log('Error! Value "n" more than digits in "k".');
    } else {
      let res = num % 10;
      console.log(parseInt(res));
    }

  } else {
    console.log('Error! Arguments should be positive number.');
  }
}
