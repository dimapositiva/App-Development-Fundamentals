//get the number of rows and copy value in variable
let rows = document.getElementsByTagName('table').item(0).getElementsByTagName('tr').length;
console.log(rows); //show the number of rows in console

let items = [];//array initialization
items[0] = document.getElementById("myTable").caption;//get caption element and copy in array

let table = document.body.children[0];//copy table element in variable
items[1] = table.rows[0].cells[0].innerHTML;//get first cell of first row value and copy in array

items[2] = table.rows[1].cells[2].innerHTML;//get third cell of second row value and copy in array

for (let i = 0; i < items.length; i++) {
  console.log(items[i]); //show all items in console
};
