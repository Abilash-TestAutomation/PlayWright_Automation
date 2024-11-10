"use strict";
/**
 * Can see in config
 * collections of key value pairs
 * let objectname :
 * {
 * key1: datatype
 * key2: datatype
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    firstName: "Abi",
    age: 25,
    isActive: true
};
//to acccess properties, use . notation or []
console.log(user.age);
console.log(user["isActive"]);
