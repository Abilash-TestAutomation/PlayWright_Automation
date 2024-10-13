

enum TestResults
{
    pass=-1,
    fail,
    skip
}

function getTestResults(testname: string, results:TestResults)
{
    console.log(`The Result is ${results}`);
    
}

getTestResults("Login",TestResults.pass);

enum BrowserType {

    Chrome = "chrome",
    Firefox = "firefox",
    Webkit = "safari",
    Edge = "msedge"
}

function launchBrowser(browserType: BrowserType){
    console.log(`Launching browser: ${browserType}`);
    
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);