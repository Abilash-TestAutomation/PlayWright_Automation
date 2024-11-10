import { Browser,BrowserContext,Page,chromium} from "playwright";

export class BasePage
{
//Access Modifiers Delaration
protected page: Page;
protected browser : Browser;
protected context: BrowserContext;

constructor(){
    //this refers to the instance of the class
    this.browser=null as any;
    this.context=null as any;
    this.page=null as any;
}
//Method to initialize the browser and pahe
//Syntax: Access Specifier async Method_name: return type
public async initialize():Promise<void>{
    this.browser= await chromium.launch({headless:false});
    this.context=await this.browser.newContext();
    this.page=await this.context.newPage();

}
//Method to nagivate to specific URL
async navigateTo(Url: string):Promise<void>{
    await this.page.goto(Url);
}
async close(url: String):Promise<void>{
    await this.browser.close();
}
}