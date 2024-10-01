/**
 * Hoisting is moving declaration to the top of the code
 */

console.log(userName);
let userName = "Abi";

// After execution, you will get ReferenceError: Cannot access 'userName' before initialization
