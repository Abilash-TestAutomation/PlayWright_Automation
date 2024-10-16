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
    await expect(clickSalutation).toBeEnabled({timeout:20000});
    await page.click("//button[@aria-label='Salutation']");
    await page.click("//span[contains(text(),'Ms.')]");
    await page.locator("//input[@name='lastName']").fill("KSAA");
    await page.locator("//input[@name='Company']").fill("SCBB");
    //Step 10: Save the details
    await page.click("//button[@name='SaveEdit']");
    //Assert the name created
    expect("//*[contains(text(), 'MS.  KSAA')]");

    
})

