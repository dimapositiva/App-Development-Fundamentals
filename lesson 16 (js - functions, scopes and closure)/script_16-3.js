'use strict'

const calc = (a, b) => {
  if (!isNaN(a) && !isNaN(b) && a !== '' && b !== '' && a !== null && b !== null) {
    let args = [];

    if (a > 0) {
      args[0] = a;
    } else {
      console.log('Error! The first argument must be a positive number > 0.');
      return;
    }

    if (b > 0) {
      args[1] = b;
    } else {
      console.log('Error! Second argument must be a positive number > 0.');
      return;
    }

    const sqrt = (x, y) => {
      return console.log('Square of rectangle is ' + (x * y));
    }

    const perim = (x, y) => {
      return console.log('Perimeter of rectangle is ' + 2*(x + y));
    }

    sqrt(args[0], args[1]);
    perim(args[0], args[1]);

    // alternative solution with IIFE
        // (function (x, y) {
        //    console.log('Square of rectangle is ' + (x * y));
        //    console.log('Square of rectangle is ' + 2*(x + y));
        // } (args[0], args[1]));

  } else {
    console.log('Arguments must be numbers.');
  }
}
