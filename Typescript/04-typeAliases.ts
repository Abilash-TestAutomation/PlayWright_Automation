/**
 * type AliasName = typeDefinition
 * Way to create custom name/new name for the datatypes
 */

type StringOrNumber = string | number;
let accountNumber : StringOrNumber = "12324692";
accountNumber="13222424";

// Aliases
type supportedBrowser = "Chrome"|"Edge";
type  browserVersion =  "127"|"126";
type browserProfile = {
    browserName: supportedBrowser
    version: browserVersion
}
function callBrowser(browser:browserProfile):void{
    if(browser.browserName==="Chrome" && browser.version==="127"){
        console.log("Launch the Chrome browser");       
    } else {
        console.log("Launch the Edge browser");        
    }
}

/**
 * Declare Object literals
 */
const chromeBrowser: browserProfile = {
    browserName: "Chrome",
    version: "127"
}

const EdgeBrowser: browserProfile = {
    browserName: "Edge",
    version: "126"
}
callBrowser(chromeBrowser); // Calling function

/**
 * Intersection
 * Exmaple: type QA = Admin & employee
 * const user1:QA ={
 * 
 * it can have values from both Admin and employees
 * }
 * 
 * adminName = "TestLeaf";/from Admin
 * Age="35";/from employee
 */