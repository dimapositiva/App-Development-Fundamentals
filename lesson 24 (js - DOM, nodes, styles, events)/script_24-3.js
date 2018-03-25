// craete label element
let btn = document.createElement("label");

// insert new inpup in label element
btn.innerHTML = '<input type="button" value="submit" method="post" />';

// insert in form element new label element
document.body.children[0].appendChild(btn);
