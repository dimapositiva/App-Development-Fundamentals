let form = [];//array initialization

form[0] = document.forms.authForm;//get form and copy it in array with name

form[1] = document.forms[0];//get form and copy it in array with number

form[2] = form[1].elements[0];//get input (form first element) and copy it in array

form[3] = form[1].elements[2];//get button (form third element) and copy it in array

for (let i = 0; i < form.length; i++) {
  console.log(form[i]); //show all items in console
};
