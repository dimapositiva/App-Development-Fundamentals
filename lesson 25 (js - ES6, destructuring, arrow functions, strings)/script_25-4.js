function mul(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      sum += args[i];
    }
  }
  return sum;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
