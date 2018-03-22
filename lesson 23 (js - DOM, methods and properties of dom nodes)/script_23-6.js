
let bodyNodes = document.body.childNodes; //write all child nodes in array

//filter node type = 3 (TEXT_NODE)
for (let i = 0; i < bodyNodes.length; i++) {
  if (bodyNodes[i].nodeType != 3) {
    continue;
  }
  console.log(bodyNodes[i].textContent); //show all text nodes
}
