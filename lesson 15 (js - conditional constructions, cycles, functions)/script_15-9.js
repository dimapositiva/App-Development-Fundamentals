let numbers = [];

const getArraySum = (arr) => {
  while (true) {
    let num = prompt("Enter some number", '');
    if (num === "" || num === null || isNaN(num)) break;
    numbers.push(+num);
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  }

getArraySum(numbers);
