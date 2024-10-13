import {Browser,BrowserContext,chromium,Page}  from "playwright";

async function performAction(url:string, action:'Screenshot'|'title') : Promise<string|void>{

    const Browser:Browser =await chromium.launch();
    const BrowserContext: BrowserContext = await Browser.newContext();
    const Page: Page = await BrowserContext.newPage();

    await Page.goto(url);
    
    if(action==='Screenshot'){
        const screenshotPath = 'screenshot.png';
        await Page.screenshot({path:screenshotPath});
        await Browser.close();
        return `Screenshot saved as ${screenshotPath}`;
    }
    else if(action==='title'){
        const title = await Page.title();
        await Browser.close();
        return `The title of the page is ${title}`
    } 

    await Browser.close();

}

async function runTest() {
    const screenshotResult = await performAction("https://www.amazon.in", 'Screenshot');
    console.log(screenshotResult);

    const titleResult = await performAction("https://www.amazon.in", 'title');
    console.log(titleResult);   
    
}

runTest();
    
