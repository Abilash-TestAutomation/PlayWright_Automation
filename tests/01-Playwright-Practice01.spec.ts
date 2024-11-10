//Step:1 This will launch the Browser and provide you the page to launch your site and locate elements
import {expect, test} from "@playwright/test";

//Annotation
test(`Marathon 1 Test Practice`, async ({page}) => {

    //Step2: Lode the URL
    await page.goto("https://login.salesforce.com/");
    //Step3: Enter Username, Password and click on Log In button
    await page.locator("#username").fill("ksabilashbabu.qae@gmail.com");
    await page.locator("#password").fill("Aadvik_mishi2312");
    await page.locator("//input[@id='Login']").click();
    //Step4: Click on the App Launcher Toggle button
    await page.click("//button[@title='App Launcher']");
    //Step 5: Click on View All link
    await page.click("//button[@aria-label='View All Applications']");
    //Step 6: Search marketing in the Textbox and click on the link
    await page.fill("//input[@placeholder='Search apps or items...']","Marketing");
    const clickResult = page.locator(".al-app-tile-description");
    await expect(clickResult).toBeEnabled({timeout:20000});
    await page.locator(".al-app-tile-description").click();
    //Step 7: click on Leads option in the Marketing list
    await page.click("//a[@title='Leads']");
    //Step 8: Click on New button to create a Lead
    await page.click("//button[@name='New']");
    //Step 9:Fill Mandatory Fields
    const clickSalutation = page.locator("//div[@class='isModal inlinePanel oneRecordActionWrapper']");
    await expect(clickSalutation).toBeVisible({timeout:20000});
    await page.click("//button[@aria-label='Salutation']");
    await page.click("//span[contains(text(),'Mr.')]");
    await page.locator("//input[@name='lastName']").fill("KS");
    await page.locator("//input[@name='Company']").fill("SS");
    //Step 10: Save the details
    await page.click("//button[@name='SaveEdit']");
    //Assert the name created
    //expect("//*[contains(text(), 'Mr.  KS')]");
    expect(page.locator("xpath=//*[contains(text(), 'Mr. KS')]")).toBeVisible();
    await page.waitForTimeout(2000);
    //Step 11: List the drop-down
    await page.click("//span[contains(text(),'Show more actions')]");
    const waitForConvert = page.locator("//div[@part='menu-item']/a/span[contains(text(),'Convert')]");
    await expect(waitForConvert).toBeVisible({ timeout: 5000 });
    //Click on the convert link
    try{
    await page.click("//div[@part='menu-item']/a/span[contains(text(),'Convert')]");
    const waitForConverLead = page.locator("//div[@class='modal-header slds-modal__header']");
    await expect(waitForConverLead).toBeVisible({ timeout: 5000 });
    }catch(error){
        console.error("Element was not found or another error occurred:", error);
    // Optionally, you can take a screenshot for debugging
    ///await page.screenshot({ path: 'error-screenshot.png' });
    throw error;

    }
    //Step 12: Clear and provide the new opportunity name
    await page.locator("//label/span[contains(text(),'Account Name')]/parent::label/following-sibling::input").clear();
    await page.locator("//label/span[contains(text(),'Account Name')]/parent::label/following-sibling::input").fill("MyTesOpportunity");
    //Step 13: Click on the covert button
    const waitForConverOpp = page.locator("//div[@class='modal-header slds-modal__header']");
    await expect(waitForConverOpp).toBeEnabled({ timeout: 5000 });
    await page.click("//button[text()='Convert']");
    //Step 14: Click on go to leads button
    const waitLeadsDialog = page.locator("//h2[contains(text(),'Your lead has been converted')]");
    await expect(waitLeadsDialog).toBeVisible({ timeout: 20000 });
    await page.click("//button[text()='Go to Leads']");
    //Step 15: Search leads name and verify leads don't display
    //await page.locator("//button[@aria-label='Search']").click();
   // await page.locator("//button[contains(text(),'Search..')]").fill("Mr. Babu");
    await page.waitForSelector("//button[@aria-label='Search']", { state: 'visible' }); // Adjust the selector as needed
    await page.click("//button[@aria-label='Search']");
    await page.keyboard.type("Mr. Babu", { delay: 100 });
    const waitForResult = page.locator("//div[@class='instant-results-list']//search_dialog-instant-result-item/span[contains(text(),'KSAA leads')]");
    await expect(waitForResult).toBeHidden();
    await page.keyboard.press('Enter');
    //Step 16: navigate to Opportunities tab and Search for opportunities.
    await page.click("//a[@title='Opportunities']");
    await page.click("//input[@name='Opportunity-search-input']");
    await page.keyboard.type("MyTesOpportunity",{delay: 100});
    await page.keyboard.press('Enter');
    //Step 17:



    
})

