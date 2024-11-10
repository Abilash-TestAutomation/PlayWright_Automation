import {expect, test} from "@playwright/test";

//Annotation
test(`Learning Frame locators`, async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //Using frameLocator
    const frame = page.frameLocator("iframe").first();
    await frame.locator("#Click").click();
    
    //Chaining - same as above
    //await page.frameLocator("iframe").first().locator("#Click").click();
    
    //Nested

    const card = page.locator("iframe").filter({hasText:"(Inside Nested frame)"});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click();

      //Chaining
    // await page.locator(".card").filter({hasText:"(Inside Nested frame)"})
    // .frameLocator("iframe").frameLocator("iframe").locator("#Click").click();
    
})

test(`Test to handle frames using frame object`, async({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

     //Using index
     const frames = page.frames();
     await frames[4].click("button#Click");

     //To get the count of frames
    const frameCount = page.frames().length;
    console.log(`The total no. of frames is ${frameCount}`);
     
    for(let getframe of frames) {
        await page.waitForTimeout(2000);
        const title = await getframe.title();
        console.log(`The title of the frame is ${title}`);
    }

})