let items = [];// initialization array for results

let labels = []; // labels array initialization
// get label element in table and write in array
let elements = document.getElementById('age-list').childNodes;
for (let i = 0; i < elements.length; i++) {
  if (elements[i].nodeType != 1) {
    continue;
  } else {
    labels.push(elements[i])
  }
};

items.push(labels); // copy result in array

// get first cell value
let age = document.getElementById('age-table').children[0].children[0].children[0];
items.push(age); // copy result in array

// get second form by it position in document
let formTwo = document.getElementsByTagName('form')[1];
items.push(formTwo); // copy result in array

// get second form without it position in document
let search = document.querySelector('form[name="search"]');
items.push(search); // copy result in array

// get input element with name = search
let input = document.querySelector('form[name="search"] input')
items.push(input); // copy result in array

// get element with name info[0] with it position in document
let infoOne = document.getElementsByName("info[0]")[0];
items.push(infoOne); // copy result in array

// get element with name info[0] without it position in document
let infoTwo = document.querySelector('form[name="search-person"] [name="info[0]"]');
items.push(infoTwo); // copy result in array

//display all results in console
for (let k = 0; k < items.length; k++) {
  console.log(items[k]);
}
