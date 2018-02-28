const getSingleDigit = n => {
  if (n > 0) {
    while (n > 1) {
      let a;
      a = n % 10;
      console.log(parseInt(a));
      n /= 10;
    }
  } else {
    console.log('Error! Please enter positive number.');
  }
}
