let username = "Abilash";
let username_1 = new String("Aadvik");

/**
 * Memory Allocation:
String username = "Abilash"; uses the string pool (if "Abilash" is already in the pool in the Heap memory, it will reuse it) with reference
String username = new String("Abilash"); creates a new object in the heap memory, bypassing the string pool. New object will be created everytime it is called
* Performance:
Using string literals ("Abilash") is generally faster and more memory efficient because of string pooling.
Creating a new String object with new String() is slower and consumes more memory as it always creates a new object, even if one already exists.
 */

console.log(username);
console.log(username_1);
/** 
 * 
 * String starts with 0, 1,....
 * 
*/

console.log(username.lastIndexOf('h'))//last matching index position
console.log(username.indexOf('h')) //first matching index position
console.log(username.charAt(3))//postion of the character in the string

console.log(username.split("a")) //delimiter

let uname ="User Logged in to the app";
console.log(uname.split(" ").reverse().join(" "));

let pdtPrice="Rs1200"
let replacesWord=pdtPrice.replace("Rs","")
console.log(pdtPrice)
console.log(replacesWord)
console.log(replacesWord +12)  //stirng +number -->120012 ->append (concat)