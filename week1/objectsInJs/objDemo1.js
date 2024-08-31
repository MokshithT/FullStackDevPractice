//syntax
//Declartion of Object in JavaScript
//An object literal is a list of name:value pairs inside curly braces {}.

// Ex: {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

//Accessing Elements in Objects

console.log(person["firstName"]);

//Types of Creating Objects

//1 Create an Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// 2 Create an Object
const person2 = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//3
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
