const getSummNumberInterval = (a, b) => {
  if (a < b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log('Error! Second argument must be bigger then first.');
  }
}
