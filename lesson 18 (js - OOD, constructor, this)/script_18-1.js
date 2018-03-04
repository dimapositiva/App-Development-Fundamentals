const createCar = (model, speed) => {
  return {
    'model': model,
    'speed': speed,
    'run': () => `${model} is going at a speed of ${speed}.`,
    'stop': () => `${model} stopped.`
  }
}
