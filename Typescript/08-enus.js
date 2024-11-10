var TestResults;
(function (TestResults) {
    TestResults[TestResults["pass"] = -1] = "pass";
    TestResults[TestResults["fail"] = 0] = "fail";
    TestResults[TestResults["skip"] = 1] = "skip";
})(TestResults || (TestResults = {}));
function getTestResults(testname, results) {
    console.log("The Result is ".concat(results));
}
getTestResults("Login", TestResults.pass);
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Webkit"] = "safari";
    BrowserType["Edge"] = "msedge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launching browser: ".concat(browserType));
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);
