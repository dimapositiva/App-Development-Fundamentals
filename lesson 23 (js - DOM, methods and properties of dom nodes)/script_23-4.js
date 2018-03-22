let allElements = document.body.children;//get all elements and copy it in array
let pElements = [];//p-elements array initialization

//get p-element in allElement array with cycle
for (let i = 0; i < allElements.length; i++) {
  if (allElements[i].localName === 'p') {
    pElements.push(allElements[i]);
  }
}

//other solution with filter method
//initialization new array for coping allElements
// let arr = [];

//coping allElements in new array
// for (let j = 0; j < allElements.length; j++) {
//   arr[j] = allElements[j];
// }

//apply filter method
// pElements = arr.filter((value) => value.localName === 'p');

console.log(pElements.length); //3
