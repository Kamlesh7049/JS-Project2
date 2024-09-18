// import { name,age } from "./script";
// import data from "./script";
// console.log(name);
// console.log(age)


// // document.getElementById("demo").innerHTML=data()
// document.getElementById("demo").innerHTML=`my name is ${name} and i am ${age} years old`;


// Import named exports and the default export
import { name, age } from "./script.js"; // named imports
import data from "./script.js"; // default import

// Log the values of name and age to the console
console.log(name);
console.log(age);

// Display the name and age in the HTML
// document.getElementById("demo").innerHTML=data()
document.getElementById("demo").innerHTML = `My name is ${name} and I am ${age} years old.`;

// You can also use the default export function
// const fullName = data();
// console.log(fullName);



data();
