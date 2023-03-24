class ElectricalDevice {
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
        console.log(`${this.name} уже выключена`);
      }
    }
  }
  
  const myLamp = new ElectricalDevice('Лампа');
  myLamp.turnOn(); // Лампа включен
  myLamp.turnOff(); // Лампа выключен
  myLamp.turnOff(); // Лампа уже выключена
  