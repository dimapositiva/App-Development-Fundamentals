const matrixToArray = (matrix) => {

  //with reduce method
  let res = [];
  const reducer = (accumulator, currentValue) => {
    return res = accumulator.concat(currentValue);
  }
  return matrix.reduce(reducer);


  //with for cycle and concat method

  // let result = [];
  //   for (let i = 0; i < matrix.length; i++) {
  //     result = result.concat(matrix[i]);
  //   }
  // return result;
}

let arr = [ [1, 2], [3, 4, 5], [6, 7, 8], [9] ];

let ar = matrixToArray(arr);

console.log(ar); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
