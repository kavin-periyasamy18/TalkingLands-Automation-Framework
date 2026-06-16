import { Locator, Page } from "@playwright/test";
import BrowserActions from "../../utils/browserActions";
import { Timeout } from "../../utils/constants";
import AUT from "../../utils/aut";

export class LoginPage {

    constructor(private page: Page){}

    get logInLinkEle() {
        return this.page.getByRole('link', { name: 'Log In' })
    } 
    get logOutLinkEle() {
        return this.page.getByRole('link', { name: 'Log Out' })
    } 
    get emailOrPhoneInputBox(){
        return this.page.getByRole('textbox', { name: 'Email Address or Username' })
    }
    get passwordInputBox(){
        return this.page.getByRole('textbox', { name: 'Password' })
    }
    get logInBtnEle(){
        return this.page.getByRole('button', { name: 'Log in' })
    }
    get usernameEle(){
        return this.page.locator(".username").getByText('Talking Lands', { exact: true })
    }

    async clickLogInBtn(): Promise<void> {
        await BrowserActions.waitForVisible(this.logInLinkEle)
        await BrowserActions.click(this.logInLinkEle)
    }
    async clickLogOutBtn(): Promise<void> {
        await BrowserActions.waitForVisible(this.logOutLinkEle)
        await BrowserActions.click(this.logOutLinkEle)
    }
    async clickUserDropdown(): Promise<void> {
        await BrowserActions.click(this.usernameEle)
    }
    async openPage(): Promise<void> {
        await this.page.goto(AUT.GOOGLE_MAP_URL,{timeout:Timeout.MINUTE_1})
    }
    async enterMail(mail: string): Promise<void> {
        await BrowserActions.fill(this.emailOrPhoneInputBox, mail)
    }
    async enterPassword(mail: string): Promise<void> {
        await BrowserActions.fill(this.passwordInputBox, mail)
    }
    async logIn(): Promise<any> {
        await this.openPage()
        await this.clickLogInBtn()
        await this.enterMail(AUT.USER_MAIL)
        await this.enterPassword(AUT.PASSWORD)
        await BrowserActions.click(this.logInBtnEle)
        await BrowserActions.waitForVisible(this.usernameEle)
    }   
    async signOut(): Promise<any> {
        await this.clickUserDropdown()
        await this.clickLogOutBtn()
    }   
}
