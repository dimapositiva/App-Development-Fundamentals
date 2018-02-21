'use strict'

const gradeChecker = (k) => {
  if (k === 1 ) {
    console.log('Bad');
  } else if (k === 2) {
    console.log('Unsatisfactory');
  } else if (k === 3) {
    console.log('Satisfactorily')
  } else if (k === 4) {
    console.log('Good');
  } else if (k === 5) {
    console.log('Perfect!')
  } else {
    console.log('Error!')
  }
}
