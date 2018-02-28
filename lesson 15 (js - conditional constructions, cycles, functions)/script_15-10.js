const showNumbers = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      for (let j = a - 1; j < i; j++) {
        console.log(i);
      }
    }
  } else {
    console.log('Error! Second argument must be bigger than first argument.');
  }
}
