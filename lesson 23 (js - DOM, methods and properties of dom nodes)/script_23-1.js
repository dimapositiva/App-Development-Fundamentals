let item = [];

item[0] = document.head;

item[1] = document.body.children[1];

item[2] = document.body.children[1].lastElementChild;

for (let i = 0; i < 3; i++) {
  console.log(item[i]);
};
