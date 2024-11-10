import { test } from "playwright/test";
import { LoginPage } from "../../Pages/LoginPage";

test(`Testing Login credentials`,async ({page}) => {
    /**
     * LoginPage is a class, blueprint that encapsulates variables and methods
     * Login is the reference variable that holds the memory address for the object created from the LoginPage class.
     * new LoginPage() - Create object and New keyword will allocate a memory for a new object of the LoginPage class on the heap
     * Login = new LoginPage() - when new LoginPage is assigned to Login then Login can access all varaiables and methods inside LoginPage class
     * 
     */
    const Login = new LoginPage();
    await Login.initialize();
    await Login.navigateTo("https://login.salesforce.com/");
    await Login.login("ksabilashbabu.qae@gmail.com","Aadvik_mishi2312");
    await page.waitForTimeout(10000);
    await Login.close();
})

