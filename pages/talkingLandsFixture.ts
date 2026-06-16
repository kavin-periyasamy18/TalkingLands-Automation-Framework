import { Page, test as baseTest, type BrowserContext } from "@playwright/test"
import { LoginPage } from "./talkingLandsPages/login.page";
import { HomePage } from "./talkingLandsPages/home.page";
export let browserPage: Page;
export let browserContext: BrowserContext;
type talkingLandsPages = {
    loginPage : LoginPage,
    homePage : HomePage
}

const talkingLandsBagePage = baseTest.extend<talkingLandsPages> ({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    }
})
export const test = talkingLandsBagePage;
