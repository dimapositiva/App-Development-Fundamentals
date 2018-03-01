let format = (data, type) => {

  if (type === 'number') {
    format = () => {
    return Number(data);
  }
    return Number(data);

  } else if (type === 'boolean') {
    format = () => {
    return Boolean(data);
  }
    return Boolean(data);

  } else if (type === 'string') {
    format = () => {
    return String(data);
  }
    return String(data);
  } else {
    return format;
  }
}

const originFormat = format;

originFormat("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
