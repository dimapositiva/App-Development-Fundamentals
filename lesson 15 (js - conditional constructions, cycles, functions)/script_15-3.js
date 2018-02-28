const differentNumberChecker = (a, b, c, d) => {
  if (a !== b && a !== c && a !== d) {
    console.log('Index of different number is #1.');
  } else if (b !== a && b !== c && b !== d) {
    console.log('Index of different number is #2.');
  } else if (c !== a && c !== b && c !== d) {
    console.log('Index of different number is #3.');
  } else if (d !== a && d !== b && d !== c) {
      console.log('Index of different number is #4.');
    } else {
    console.log('Something wrong. Maybe all number equel.');
  }
}
