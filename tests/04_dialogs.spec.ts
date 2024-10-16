import {test} from "@playwright/test";

test(`To handle dialogue/alerts`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");

    //Simple Dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(2000);

     //Confirm Dialog
     await page.locator(".card").filter({hasText: "(Confirm Dialog)"}).locator("//span[text()='Show']").click();
     await page.waitForTimeout(2000);
 
     //Prompt Dialog
     const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
     await cardLocator.locator("button").filter({hasText:"Show"}).click();
     await page.waitForTimeout(2000);
})

test(`To handle events`, async ({page}) => {

})

