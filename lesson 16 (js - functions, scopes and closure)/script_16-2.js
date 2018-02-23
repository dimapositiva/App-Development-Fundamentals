'use strict'

const createArrayIterator = (array) => {
  let i = -1;
  return () => {
    i++;
    return array[i];
  }
}

let arr = [5, 6, 7];
let itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); //undefined
