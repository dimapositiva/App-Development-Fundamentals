'use strict'

const numberChecker = (n) => {
  if (n === 0) {
    console.log('It\'s a zero number.')
  } else if (n % 2 === 0 && n > 0) {
    console.log('It\'s a positive even number.')
  } else if (n % 2 !== 0 && n > 0) {
    console.log('It\'s a positive odd number.')
  } else if (n % 2 === 0 && n < 0) {
    console.log('It\'s a negative even number.')
  } else if (n % 2 !== 0 && n < 0) {
    console.log('It\'s a negative odd number.')
  } else {
    console.log('Something wrong! Please, enter a number.')
  }
}
