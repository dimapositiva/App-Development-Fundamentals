'use strict'

const findEmptyPart = (a, b) => {
  let c = 0;
  while (c + b <= a) {
    c += b;
  }
  let d = a - c;
  console.log('Empty space is ' + d);
}
