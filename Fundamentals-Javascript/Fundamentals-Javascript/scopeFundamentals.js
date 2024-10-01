

/**
 * Global Variable declared outside of function at JS level
 */

let browserName = "Chrome";
const browserVersion = 20.5;

//Declaring function

function getScopeOfvariable()
{
    let browserName_1="edge";//Variable declared at functiona level
    //if (browserVersion==20.5) // for checking constant
    if (browserName==="Chrome"){ 
        //browserName="firefox";//Assignment is allowed for Global variable
        //let browserName = "firefox";//redeclaration is allowed for Global variable
        //browserVersion=30;//can't be changed as the variable type is const for globale variable
        let newBrowser = "Google";//variable declared at block level
        console.log("The browserName is: "+browserName);
        console.log("Another browser name is:"+browserName_1);
        console.log("New Browser name is:"+newBrowser);
    } else {
        console.log("BrowserVersion does not exist");
    }
}
/**
 * error will be thrown for console tries to print the function and block level scoped variable.
 */
//console.log("The browserName in Outside block: "+browserName);
//console.log("Another browser name is:"+browserName_1); 
//console.log("Trting to print the variable at the block level"+ newBrowser);



getScopeOfvariable();// We need to call the function to get executed