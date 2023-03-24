// Класс прибора
class Device {
  constructor(name) {
    this.name = name;
    this.powerOn = false;
  }
  
  turnOn() {
    if (!this.powerOn) {
      console.log(`${this.name} включен`);
      this.powerOn = true;
    } else {
      console.log(`${this.name} уже включен`);
    }
  }
  
  turnOff() {
    if (this.powerOn) {
      console.log(`${this.name} выключен`);
      this.powerOn = false;
    } else {
      console.log(`${this.name} уже выключен`);
    }
  }
}

class Lamp extends Device {
  constructor() {
    super("Лампа");
  }
}

class TV extends Device {
  constructor() {
    super("Телевизор");
  }
}

const myLamp = new Lamp();

const myTV = new TV();

myLamp.turnOn(); 
myTV.turnOn(); 
myLamp.turnOff(); 
myTV.turnOff(); 
myTV.turnOff(); 

  