const sumSliceArray = (arr, first, second) => {
  if (first > arr.length || second > arr.length)
  throw new RangeError('sumSliceArray: value of second and third arguments must be less than arr.length.');

  if (first === undefined || second === undefined || first === null || second === null)
  throw new ReferenceError('sumSliceArray: second and third arguments must be defined and do not equal null.');

  if (typeof first === 'string' || typeof second === 'string')
  throw new TypeError('sumSliceArray: second and third arguments must be a number, not string or letter.');

  let sum = arr[first] + arr[second];
  console.log(sum);
}
