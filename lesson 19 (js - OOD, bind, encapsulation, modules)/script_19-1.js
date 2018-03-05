let user = {
  name: "Tom"
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
};

let tomFormat = function(beginMsg, endMsg) {
  format.apply(user, [beginMsg, endMsg]);
}

tomFormat("<<<", ">>>"); // "<<<Tom>>>"

//with bind

let tomFormat2 = format.bind(user);

tomFormat2("<<<", ">>>"); // "<<<Tom>>>"
