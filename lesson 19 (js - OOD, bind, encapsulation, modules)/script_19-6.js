const calc = (() => {
  let firstArgument;
  let secondArgument;
  const getPerimeterAndSquare = (a, b) => {
    calc.setFirstNumber(a);
    calc.setSecondNumber(b);
    if (!isNaN(firstArgument) && !isNaN(secondArgument)) {
      calc.getSquare(firstArgument, secondArgument);
      calc.getPerimeter(firstArgument, secondArgument);
    }
  }

  return {
    setFirstNumber: (a) => {
      if (!isNaN(a) && a !== '' && a !== null) {
        if (a > 0) {
          firstArgument = a;
        } else {
          console.log('Error! The first argument must be a positive number > 0.');
          return;
        }
      } else {
        console.log('The first argument must be a number.');
      }
    },
    setSecondNumber: (b) => {
      if (!isNaN(b) && b !== '' && b !== null) {
        if (b > 0) {
          secondArgument = b;
        } else {
          console.log('Error! Second argument must be a positive number > 0.');
          return;
        }
      } else {
        console.log('Second argument must be a number.');
      }
    },
    getSquare: (x, y) => {
      return console.log('Square of rectangle is ' + (x * y));
    },
    getPerimeter: (x, y) => {
      return console.log('Perimeter of rectangle is ' + 2 * (x + y));
    },
    operation: (a, b) => {
      getPerimeterAndSquare(a, b);
    }
  }
})();
