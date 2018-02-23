'use strict'

let res = 0;

const digitSum = k => {
  res += k % 10;
  if (k > 1) {
    return digitSum(parseInt(k / 10));
  }
  return res
}
