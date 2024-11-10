import { Page,Browser,BrowserContext,chromium } from "playwright";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    private userNameSelector : string;
    private passwordSelector : string;
    private loginButtonSelector:string;
  
    constructor(){
        super();//Calls basepage constructor
        this.userNameSelector='#username';
        this.passwordSelector='#password';
        this.loginButtonSelector='#Login';
    }
    //method to login using username and password
    public async login(username: string, password: string):Promise<void> {
        await this.page.fill(this.userNameSelector, username);
        await this.page.fill(this.passwordSelector,password);
        await this.page.click(this.loginButtonSelector);
    }

    public async close():Promise<void> {
        await this.page.close();
        await this.browser.close();
    }
    

}