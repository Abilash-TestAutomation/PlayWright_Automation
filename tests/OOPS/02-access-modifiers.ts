class Browser{
    private browserType: string;

    constructor(browserType: string)
    {
        this.browserType=browserType;
    }
    private logSession()
    {
        console.log(`Browser session for ${this.browserType}`);
        
    }
    public launchBrowser()
    {
        this.logSession();//Private method can be called within the class
        return `launching ${this.browserType} browser`;

    }
}

const browserSession = new Browser('edge');
console.log(browserSession.launchBrowser());

class BaseClass {
    protected browserType: string;

    constructor(browserType: string)
    {
        this.browserType=browserType;
    }
    protected logSession()
    {
        console.log(`This is from the Baseclass`);
        console.log(`Browser session for ${this.browserType}`);
        
    }
    public launchBrowser()
    {
        this.logSession();//Private method can be called within the class
        return `launching ${this.browserType} browser`;

    }
}

 class Dashboard extends BaseClass{
    protected logSession()
    {
        console.log(`This is from the Dashboard class`);
        
    }
    public captureScreenshot(){
        this.logSession();
        console.log(`Capturing screenshot ${this.browserType}`);
        
    }
 }

 const session = new Dashboard('Firefox');
 session.captureScreenshot();
