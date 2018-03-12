const stringAnalizator = (() => {
  let value = prompt('Enter some string', '');
  let arr = [];
  let i = 0;
  while (value !== 'end') {
    if (value !== 'end') {
      arr[i] = value;
      i++;
      value = prompt('Enter some string', '');
    } else {
      console.log('You are finish.');
    }
  }

  for (let j = 0; j < arr.length; j++) {
    let string = arr[j];
    if (!isNaN(parseFloat(string.charAt(0)))) {
      console.log('Original string: ' + string + ' \| ' + ' Processed string: ' + 'Numbers: ' + string);
    } else {
      console.log('Original string: ' + string + ' \| ' + ' Processed string: ' + 'No numbers: ' + string);
    }
  }
})();
