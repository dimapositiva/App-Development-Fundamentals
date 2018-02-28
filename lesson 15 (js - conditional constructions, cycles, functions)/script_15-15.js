const digitN = (k, n) => {
  if (k > 0 && n > 0) {
    for (let i = 0; i < (n - 1); i++) {
      k /= 10;
    }

    if (k < 1) {
      console.log('Error! Value "n" more than digits in "k".');
    } else {
      let res = k % 10;
      console.log(parseInt(res));
    }

  } else {
    console.log('Error! Arguments should be positive number.');
  }
}
