
function Car (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = 60;
  this.fuelConsumption = 10;
}

Car.prototype.getFullName = function () {
  console.log(this.name + ' : ' + this.model);
}

Car.prototype.getAge = function () {
  let nowYear = new Date().getFullYear();
  let autoYear = nowYear -= this.year;
  return console.log( `This car is ${this.year} year,it is ${autoYear} years old`);
}

Car.prototype.changeColor = function (color) {
  if (this.color === color) {
    console.log(' This car is alredy painted in this color');
  } else  {
    this.color = color;
  }
}

Car.prototype.calculateWay = function ( kilometers, fuel ) {
  let wayTime = kilometers / this.maxSpeed;
  console.log( `This ${kilometers} km you wil drive ${wayTime.toFixed(1)} hours` );
  if ( fuel <= 10) {
    console.log( `You can not going distnce ${kilometers}km,not enough fuel` );
  } else {
    let fuelRemainder = (( kilometers / this.fuelConsumption )-this.fuelCapacity);

    if (fuelRemainder > this.fuelCapacity){
      console.log( `If you want drive ${kilometers}km you must refuel again ${fuelRemainder}l` );
    } else {
      console.log( `You can drive ${kilometers}km with out refuel` );
    }
    
  }
}

//Subclass BMW

function Bmw (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, option) {
  Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
  this.option = 'standart';
}

Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.constructor = Bmw;

Bmw.prototype.superOption = function () {
  if (this.model === 'e36', 'm4', 'x5') {
    this.option = 'cabriolet';
  }
}

//Subclass Ford

function Ford (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, motor,option) {
  Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
  this.option = 'standart';
}

Ford.prototype = Object.create(Car.prototype);
Ford.prototype.constructor = Ford;

Ford.prototype.superOption = function (option) {
  if (this.model === 'Mustang', 'mustang') {
    this.motor = 'v8, power 500';
    this.option = 'led light'
  }
}

//Subclass Honda

function Honda (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, option) {
  Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
  this.option = 'standart';
}

Honda.prototype = Object.create(Car.prototype);
Honda.prototype.constructor = Honda;


Honda.prototype.superOption = function () {
  if (this.model === 'Accord', 'accord') {
    this.option = 'Panoramic roof';
  }
}



const newBmw = new Bmw('BMW', 'e36', '2005', 'red', 240);
const newFord = new Ford('Ford', 'Mustag', '2020', 'blue', 320);
const newHonda = new Honda('Honda', 'Accord', '2015', 'grey', 280);
const newCivic = new Honda('Honda', 'Civic', '2004', 'blue', 200);

newBmw.superOption();
newFord.superOption();
newHonda.superOption();
newFord.changeColor('green');
newBmw.calculateWay(6900 ,20);
newHonda.changeColor('grey');

console.log(newBmw);
console.log(newFord);
console.log(newHonda);
console.log(newCivic);
