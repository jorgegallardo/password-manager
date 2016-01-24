var person = {
  name: 'Jorge',
  age: 29
};

var personJSON = JSON.stringify(person); // convert to JSON string

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON); // takes JSON string and converts it to a Javascript object
console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');
var animal = '{"name": "Dave"}';
// convert to js object
var animalObject = JSON.parse(animal);
// add age property
animalObject.age = 5;
// convert back to json and log out
animal = JSON.stringify(animalObject);
console.log(animal);