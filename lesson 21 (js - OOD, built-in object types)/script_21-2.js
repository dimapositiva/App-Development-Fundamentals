const string = "Login1,LOgin2,login3,loGin4";

let arr = string.split(',');

const toLowCase = ((arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  };
})(arr);
