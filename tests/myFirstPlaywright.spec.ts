import {chromium, test} from "@playwright/test";

test('Launching my browser', async () => {
    

    // creating browser instance

    const browser = await chromium.launch({headless:false, channel:"chrome"});

    //creating browser context

    const browserContext = await browser.newContext();

    //creating a new page

    const browserPage = await browserContext.newPage();

    //load URL

    await browserPage.goto("http://leaftaps.com/opentaps/control/main");

    //get the URL

    const getURL = browserPage.url();

    console.log(getURL);
})