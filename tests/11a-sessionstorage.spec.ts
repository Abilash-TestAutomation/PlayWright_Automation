import { expect,test} from "@playwright/test";

test(`Skipping the Login test scenarios`, async ({page}) => {

        //Step1: Lode the URL
        await page.goto("https://login.salesforce.com/");
        //Step2: Enter Username, Password and click on Log In button
        await page.locator("#username").fill("ksabilashbabu.qae@gmail.com");
        await page.locator("#password").fill("Aadvik_mishi2312");
        await page.locator("//input[@id='Login']").click();
        await page.context().storageState({path:"credentials/sflogin_storage.json"});
        
    
})