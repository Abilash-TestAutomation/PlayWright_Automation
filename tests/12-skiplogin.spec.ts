import { expect,test} from "@playwright/test";

test.use({storageState:"credentials/sflogin_storage.json"})
test(`Skipping the Login test scenarios`, async ({page}) => {

        //Step1: Getting the session
        await page.goto("https://standardcharteredbank4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
        const title = await page.title();
        console.log(`The title of the page:${title}`);
        
    
})