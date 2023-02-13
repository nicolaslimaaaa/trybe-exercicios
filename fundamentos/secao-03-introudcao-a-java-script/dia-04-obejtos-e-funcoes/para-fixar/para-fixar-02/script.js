let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let indexName in names) {
    console.log('Olá', names[indexName]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let indexCar in car) {
    console.log(indexCar,':', car[indexCar]);
  }