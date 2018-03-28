let obj = {
  name: "obj",
  print: function() {
    this.name = obj.name;
    let f = () => console.log(this.name);
    f();
  }
};

function multiCaller(func, count) {
  for (let i = 0; i < count; i++) {
    func();
  }
}

multiCaller(obj.print, 3); // "obj" x 3
