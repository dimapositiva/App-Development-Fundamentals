let arr = [5, 1, 4, 2, 3];

arr.sortDesc = () => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i];
  }
  array.sort();
  array.reverse();
  delete arr.sortDesc;
  return array;
};
