const singleNumberViwer = (x) => {
    if (x > 0 && x < 100) {
    let decim, single;
    decim = parseInt(x / 10);
    single = x % 10;
    console.log(decim);
    console.log(single);
  }
}
