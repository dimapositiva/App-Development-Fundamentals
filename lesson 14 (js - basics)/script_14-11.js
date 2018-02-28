let x = 1;
let y = 2;

const res1 = String(x) + y;
console.log(res1); // '12'
console.log(typeof res1); // string

const res2 = String(x = true) + y;
console.log(res2); // 'true2'
console.log(typeof res2); // string

const res3 = Boolean(x || y);
console.log(res3); // true
console.log(typeof res3); // boolean

const res4 = (x = 'sos') * y;
console.log(res4); // NaN
console.log(typeof res4); // number
