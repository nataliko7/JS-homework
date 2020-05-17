//lesson 02
/*
02.js
 Autor: Natalia
Date: 17.05
*/
//N 1 დავალება
/*
let car = {
    make: "Audi",
    color: "White",
    model: "A4",
    year: 2019,
    power: 190,
    prise: 20000
  };
  console.log(car)
*/

//2 დავალება
let car1 = {
    make: "Audi",
    color: "White",
    model: "A4",
    year: 2019,
    power: 190,
    prise: 20000
  };
  let car2 = {
    make: "Ford",
    color: "Red",
    model: "F6",
    year: 2000,
    power: 190,
    prise: 18000
  };

  let car3 = {
    make: "Toyota",
    color: "green",
    model: "T3",
    year: 2012,
    power: 200,
    prise: 14000
  };
  
  let cars = [ car1, car2, car3, ];

  let car.minPrise = 15000;

for (let i = 0, i < car.minPrise; i++) {

       console.log(cars[i].prise);
    }

   