const showMaxSalary = (obj) => {
  let max = 0;
  let maxSalary = 0;
  
  for (let salary in obj) {
    if (max < obj[salary]) {
      max = obj[salary];
      maxSalary = obj[salary];
    }
  }
  return maxSalary;
}
