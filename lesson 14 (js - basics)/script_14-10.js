'use strict'

const isHundreed = (x) => {
  if (x % 2 !== 0 && x > 99 && x < 1000) {
    console.log('It\'s true!');
  } else {
    console.log('It\'s not true!');
  }
}
