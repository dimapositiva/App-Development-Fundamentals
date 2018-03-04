const mul = (...args) => {
  let sum = 1;
  for (let i = 0; i < args.length; i++) {
    let n = Number(args[i]);
    if (!isNaN(n)) {
      sum *= n;
    }
  }
  return sum;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
