let nameList = [];
nameList = [3, 'string', true, null]; //(4) [3, "string", true, null]

nameList.length; //4

nameList[4] = prompt('Enter some value', ''); //"Bro"

nameList; //(5) [3, "string", true, null, "Bro"]

console.log(nameList[4]); //"Bro"
