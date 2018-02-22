'use strict'

const minMax = (x, y) => {
  if (x === y) {
      console.log('x and y are equel.')
    } else {
      switch (x > y) {
        case true:
        console.log('Minimal number is y.');
        break;

        case false:
        console.log('Minimal number is x.');
        break;
      }
    }
  }
