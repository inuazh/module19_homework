function checkProperty(obj, propName) {
    return propName in obj;
  }
  

const myObj = {
    name: "Madrid",
    country: "Spain",
    UCL_Winner: 14
}

console.log(checkProperty(myObj, 'name'));