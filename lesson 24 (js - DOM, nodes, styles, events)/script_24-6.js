let element = document.getElementById('color'); // copy p element in variable

// adding function which make color red, blue and reset value
const makeRed = () => {
  return element.style.color = 'red';
}

const makeBlue = () => {
  return element.style.color = 'blue';
}

const reset = () => {
  return element.style.color = '';
}
