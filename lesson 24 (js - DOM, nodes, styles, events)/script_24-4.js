function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
let e = document.createElement("div");

e.innerHTML = "<b>New element</b>";

let b = document.body;

insertAfter(e, b.firstChild); // Insert after first element
insertAfter(e, b.lastChild); // Insert after second element
