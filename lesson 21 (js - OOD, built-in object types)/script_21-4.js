const addTwoDays = (date) => {
  let value = date.getMilliseconds();
  let newTime = date.setMilliseconds(value + 172800000);
  console.log(date);
}

let date = new Date();
addTwoDays(date);
