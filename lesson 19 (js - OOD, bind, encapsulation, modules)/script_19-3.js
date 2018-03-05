function bind(func, context) {
   return function () {
     return func.apply(context, arguments);
   }
}

function func() {
   console.log(this.name + " - "+ this.age);
};

let user = {
   name: "Tom",
   age: 20
};

const f = bind(func, user);
f(); // "Tom – 20"
