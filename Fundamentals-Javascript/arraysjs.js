const { log } = require("console");

let browsers = ['chrome','Edge'];

browsers.push('FF'); // adding elemet at last
console.log(`Added element at the last ${browsers}`);

browsers.pop(); // will remove the last element
console.log(`Removed element at the last ${browsers}`);

browsers.shift(); // will remove the last element
console.log(`Removed element at the first ${browsers}`);

browsers.unshift('chrome'); // can add more than one element in the beginning
console.log(`Added back element at the first ${browsers}`);


//forEach Loop - Execute for each element in the array
let numbers = [1,2,3];
numbers.forEach(num => console.log(num*2));
//Map function
let doubledmap = numbers.map(num => num *2);
console.log(doubledmap);
//filter
let getEvennumber = numbers.filter(num=>num%2===0);
console.log(getEvennumber);

//Splice - Used to modify the array


