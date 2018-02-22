'use strict'

const sign = x => {
  if (x < 0) {
    console.log(-1);
  } else if (x === 0) {
    console.log(0);
  } else if (x > 0) {
      console.log(1);
  } else {
    console.log('Something wrong.')
  }
}
