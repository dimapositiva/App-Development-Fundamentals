const country = {
  name: "Ukraine",
  language: "Ukranian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66
  }
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
};

format.call(country, "<", ">"); // "<Ukraine>"
format.apply(country, ['[', ']']); // "[Ukraine]"
format.call(country.capital, '"', '"'); // ""Kyiv""
format.apply(country.capital, ['', '']); // "Kyiv"
