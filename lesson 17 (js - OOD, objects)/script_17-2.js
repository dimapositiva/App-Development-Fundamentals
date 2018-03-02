let car = {};

car.model = 'BMW X6';
car.speed = '240 km\/h';
car.run = () => `${car.model} is going at a speed of ${car.speed}.`;
car.stop = () => `${car.model} stopped.`;

///////////////////////////////////////////////

let car2 = Object();

car2['model'] = 'Audi A8';
car2['speed'] = '260 km\/h';
car2['run'] = () => car2['model'] + ' is going at a speed of' + car2['speed'] + '.';
car2['stop'] = () => car2['model'] + ' stopped' + '.';

///////////////////////////////////////////////

let car3 = {
  'model': 'Lanos',
  'speed': '200 km\/h',
  'run': () => `${car3.model} is going at a speed of ${car3.speed}.`,
  'stop': () => `${car3.model} stopped.`
}
