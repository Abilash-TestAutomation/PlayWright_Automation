/**
 * Secured information
 * 
 */

import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

const environment = process.env.NODE_ENV || 'testing' //default environment
const envpath = path.join(__dirname,`../data/${environment}.env`);
dotenv.config({path:envpath});
//Use context while using multiple pages
test(`Testing the Environment variables`, async ({context,page}) => {
     const userName = process.env.SF_USERNAME as string;
     const PassWord = process.env.SF_PASSWORD as string;
     await page.goto("https://login.salesforce.com");
     await page.fill("#username", userName);
     await page.fill("#password",PassWord);
     await page.click("#Login");
     const title = await page.title();
     console.log('The title is: ${title}');
     await expect(page).toHaveTitle("Home | Salesforce");
})