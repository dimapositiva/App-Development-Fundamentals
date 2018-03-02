const getMiddleSalary = (obj) => {
  let sum = 0;
  let i = 0;
  let result = 0;

  for (let key in obj) {
    sum += obj[key];
    i++;
  }
  return result = sum / i;
}
