/**
 * type AliasName = typeDefinition
 * Way to create custom name/new name for the datatypes
 */
var accountNumber = "12324692";
accountNumber = "13222424";
function callBrowser(browser) {
    if (browser.browserName === "Chrome" && browser.version === "127") {
        console.log("Launch the Chrome browser");
    }
    else {
        console.log("Launch the Edge browser");
    }
}
var chromeBrowser = {
    browserName: "Chrome",
    version: "127"
};
var EdgeBrowser = {
    browserName: "Edge",
    version: "126"
};
callBrowser(chromeBrowser);
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
