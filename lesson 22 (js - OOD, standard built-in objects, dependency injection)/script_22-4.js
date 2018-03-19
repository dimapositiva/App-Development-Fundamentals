let arr = ["Tom", "Sam", "Bob"];
let arrLength = [];

// for (var i = 0; i < arr.length; i++) {
//    arrLength[i] = "<li>" + arr[i] + "</li>";
// }

const arrayMapper = (value) => '<li>' + value + '</li>';

arrLength = arr.map(arrayMapper);

console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
