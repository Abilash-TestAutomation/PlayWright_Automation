// const { chromium } = require("@playwright/test");


// const name = ()=>  "Abilash";
//  console.log(name());


//  async function calculator() {

//     const browser = await chromium.launch();
    
//     /**
//      * await keyword shall be used with async whereever necessary
//      * 
//      */
//  }

 /**
  * 
  * Call back function
  * Function is passed as an argument to another function and 
  * it is executed after some operation has been completed
  */

 function processUserInput(callback)
 {
let name = prompt("Please enter your name");
callback(name);
 }

 function displayName(name)
 {
    alert('Hello ${}')
 }

 processUserInput(displayName);