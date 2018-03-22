let allElements = document.body.children; //write all body element children in variable

let first = allElements[0]; //copy first child in variable
let second = allElements[1]; //copy second child in variable

let a = allElements[0].outerHTML; //get first child outerHTML value
let b = allElements[1].outerHTML; //get second child outerHTML value

//replace elements order with delay
setTimeout(() => first.outerHTML = b, 2000)
setTimeout(() => second.outerHTML = a, 2020)
