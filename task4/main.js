function Lamp() {
    this.name = "Lamp"
    this.powerOn = false;

}

Lamp.prototype.turnOn = function () {
    if (!this.powerOn) {
        console.log(`${this.name} turn on`);
        this.powerOn = true;
    }
    else {
        console.log(`${this.name} already tyrn on`)
    }
}

Lamp.prototype.turnOff = function () {
    if (this.powerOn) {
        console.log(`${this.name} turn off`);
        this.powerOn = false;
    } else {
        console.log(`${this.name}is already turn on`);
    }
}


function TV() {
    this.name = "TV";
    this.powerOn = false;
}


const myLamp = new Lamp();

const myTV = new TV();

Object.setPrototypeOf(myTV, myLamp);

myTV.turnOn();