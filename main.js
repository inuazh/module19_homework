
function Lamp() {
  this.name = "Лампа";
  this.powerOn = false;
}

Lamp.prototype.turnOn = function() {
  if (!this.powerOn) {
    console.log(`${this.name} включена`);
    this.powerOn = true;
  } else {
    console.log(`${this.name} уже включена`);
  }
}

Lamp.prototype.turnOff = function() {
  if (this.powerOn) {
    console.log(`${this.name} выключена`);
    this.powerOn = false;
  } else {
    console.log(`${this.name} уже выключена`);
  }
}


function TV() {
  this.name = "Телевизор";
  this.powerOn = false;
}

TV.prototype.turnOn = function() {
  if (!this.powerOn) {
    console.log(`${this.name} включен`);
    this.powerOn = true;
  } else {
    console.log(`${this.name} уже включен`);
  }
}

TV.prototype.turnOff = function() {
  if (this.powerOn) {
    console.log(`${this.name} выключен`);
    this.powerOn = false;
  } else {
    console.log(`${this.name} уже выключен`);
  }
}


const myLamp = new Lamp();


const myTV = new TV();

// Создание делегирующей связи [[Prototype]] между лампой и телевизором
Object.setPrototypeOf(myTV, myLamp);


myTV.turnOn(); // Телевизор включен
myTV.turnOff(); // Телевизор выключен
myTV.turnOff(); // Телевизор уже выключен

  