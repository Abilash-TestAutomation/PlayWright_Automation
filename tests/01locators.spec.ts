import {test} from "@playwright/test";

/**
 * {page} -> like an interface, to get methods inside
 */

//Launch the browser, context and page

test('Locating Elements using Playwright', async({page}) => {

   await page.goto("http://leaftaps.com/opentaps/control/main");
   //Enter username using CSS
   await page.locator("#username").fill("demosalesmanager");
//    //using xpath
//    await page.locator("//input[@id='username']").fill("demosalesmanager");
//    //in-built
//    await page.getByLabel("Username").fill("demosalesmanager");
//    // For Reusuability
//    const username = page.locator("#username");
//    await username.fill("demosalesmanager");

//combine action - diff with .locator, single API call will be made
//we cant pass the variable

await page.fill("#password",'crmsfa');
//click on login button
await page.click(".decorativeSubmit");
//Click Login
// Legacy text
await page.locator("text=CRM/SFA").click();
//click Leads using xpath
await page.click("//a[text()='Leads']");
//await page.getByRole("link", {name:'Leads'}).click();
//Click on create Lead
await page.locator("//a[text()='Create Lead']").click();
//Enter company name
const companyName = page.locator("#createLeadForm_companyName");
await companyName.fill("Testleaf")
//Enter first name
await page.locator("#createLeadForm_firstName").fill("Abilash");

//Enter last name
await page.locator("#createLeadForm_lastName").fill("Babu");

//Click Create Lead //Attribute based selectors
await page.click("[name='submitButton']");

//Get the status
console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
})