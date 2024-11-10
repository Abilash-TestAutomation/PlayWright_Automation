
import { expect, test } from "@playwright/test";

test(`Handling windows`, async({context, page}) => {

    /**
     * Need context to handle multiple windows
     * context.on("");
     * context.waitForEvent("");
     */

    /**
     * Sequential Approach
     * 1. Create a Promise //lets say you want to click on a link, give that locator
     * const windowPromise = context.waitForEvent("page")
     * 2. Do User Action // not click step 1
     * await page.locator("").click();
     * 3.Now wait for the promise to get completed (for the promise you created in step 1)
     *   const window = await windowPromise
     * 4.Switch to the new window for performing further actions
     *   window.bringToFront();//when focus on not in the expected window
     */

    
    await page.goto("https://www.amazon.in");
    const page1 = await context.newPage();
    await page1.goto("https://leafground.com/window.xhtml");
    const page2 = await context.newPage();
    await page2.goto("https://www.redbus.in");

     //To get the count of the opened pages inside the context
     const allPages = context.pages();
     // allPages = [Amazon, Leafground, redbus]
     console.log(allPages);
     console.log(`No.of opened pages: ${allPages.length}`);

     //Getting Title
     for (page of allPages)
     {
        const title = await page.title();
        console.log(`The title of all pages: ${title}`);
     }

      //Using index
    await allPages[0].bringToFront();
    await page.waitForTimeout(3000);

})

test(`Handling windows using sequential approach`, async({context, page}) =>{
    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent("page"); //promise pending
    await page.getByText("Open", {exact:true}).click();
    const newWindow = await windowPromise; //promise fulfilled
    await expect(newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");

    //Interact with the new page
    await newWindow.fill("#email", "rr7@gmail.com");
    //await window.close();
    await page.bringToFront();
    await page.locator("//i[@class='pi pi-home layout-menuitem-icon']").click();
    await page.waitForTimeout(3000);
})

test(`Handling windows concurrently`, async ({context, page})=>{

    await page.goto("https://leafground.com/window.xhtml");
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open", {exact:true}).click()
    ])

    await expect(newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");

    //Interact with the new page
    await newWindow.fill("#email", "rr7@gmail.com");
    //await window.close();
    await page.bringToFront();
    await page.locator("//i[@class='pi pi-home layout-menuitem-icon']").click();
    await page.waitForTimeout(3000);
})

test.only(`Handling multiple windows`, async ({context, page}) => {

    await page.goto("https://leafground.com/window.xhtml");
    const [multiplePages] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open Multiple", {exact:true}).click()
    ])

    const pages = multiplePages.context().pages();
    console.log(`No.of pages: ${pages.length}`);

    pages.forEach(async tabs => {
        const url = tabs.url();
        console.log(`The url of the page: ${url}`);

        const title = await tabs.title();
        console.log(`The title of the page is ${title}`);
        
    })

    //Using index
    let webPage: any;
    for (let index = 0; index < pages.length; index++) {
        const pageTitle = await pages[index].title();
        console.log(`The title of the page: ${pageTitle}`);
        
        if(pageTitle === 'Web Table'){
            webPage = pages[index]
        }
        
    }
        await webPage.bringToFront();
        await webPage.fill("input[placeholder='Search']", "Amy Elsner");

        await webPage.waitForTimeout(3000);
})