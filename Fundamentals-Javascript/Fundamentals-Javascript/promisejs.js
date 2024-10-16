const { error } = require("console");

let promise = new Promise ((resolve,reject) =>{

    let success = true;

    if(success)
        resolve("your food is arrived");
    else
    reject("Food is not arrived");
})

promise.then(result =>{
    console.log("Resolved");
}).catch(error =>{
    console.log("Rejected");
})
