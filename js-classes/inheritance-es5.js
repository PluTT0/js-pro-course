
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
  return console.log( `This car is ${this.year} year,it is ${autoYear} years old`)
}

Car.prototype.changeColor = function (color) {
  if (this.color === color) {
    console.log(' This is alredy painted in this color');
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
      console.log( `If you want drive ${kilometers}km you must refuel again ${fuelRemainder}l` )
    } else {
      console.log( `You can drive ${kilometers}km with out refuel` )
    }
    
  }
}

const newBmw = new Car('BMW', 'e36', '2005', 'red', 240);
const newFord = new Car('Ford', 'Mustag', '2020', 'blue', 320);
const newHonda = new Car('Honda', 'Accord', '2015', 'grey', 280);


newFord.changeColor('green');
newBmw.calculateWay(6900 ,20)


console.log(newBmw);
console.log(newFord);
console.log(newHonda);

newBmw.changeColor('red')