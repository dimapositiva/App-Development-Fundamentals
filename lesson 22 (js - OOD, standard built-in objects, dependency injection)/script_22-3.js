const deleteEvenNumbers = (array) => {
  return array.filter((num) => num % 2 !== 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let ar = deleteEvenNumbers(arr);
console.log(ar); // [1, 3, 5, 7]
