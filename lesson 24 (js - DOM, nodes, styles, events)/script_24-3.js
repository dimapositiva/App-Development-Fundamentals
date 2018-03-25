// craete label element
let btn = document.createElement("label");

// insert new inpup in label element
btn.innerHTML = '<button type="submit" formmethod="post">submit</button>';

// insert in form element new label element
document.body.children[0].appendChild(btn);
