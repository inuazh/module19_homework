function printOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

  


// for instance
const obj = {
    name: 'Milana',
    age: 30,
    city: 'Derbent'
};

printOwnProp(obj);