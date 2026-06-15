import { Locator, Page, errors, expect } from "@playwright/test"
import { browserContext, browserPage } from "../pages/orangeHrmFixture"
import { keyboardActions, POSITION, Timeout } from "./constants"

export default class BrowserActions {
    private static pagePromise: Promise<Page>
    constructor(public page: Page) { }

    static async click(sElement: Locator): Promise<void> {
        await sElement.click()
    }

    static async hoverOver(sElement: Locator, hoverPosition?: POSITION): Promise<void> {
        await sElement.hover({ position: hoverPosition })
    }

    static async type(sElement: Locator, sValue: string, delayTime: number = Timeout.TYPE_CHAR_ACTION_DELAY_TIME): Promise<void> {
        await sElement.pressSequentially(sValue, { delay: delayTime })
    }

    static async fill(sElement: Locator, sValue: string): Promise<void> {
        await sElement.fill(sValue)
    }

    static async clear(sElement: Locator): Promise<void> {
        await this.click(sElement)
        await sElement.clear()
    }

    static async waitForInvisible(sElement: Locator): Promise<void> {
        await sElement.waitFor({ state: "hidden" })
    }

    static async waitForVisible(sElement: Locator, timeout?: Timeout): Promise<void> {
        await sElement.first().waitFor({ state: "visible", timeout: timeout })
    }

    static async waitForTimeOut(page: Page, timeOut: number): Promise<void> {
        await page.waitForTimeout(timeOut)
    }

    static async goto(page: Page, url: string, waitUntil?: "load" | "domcontentloaded"): Promise<void> {
        await page.goto(url, { waitUntil: waitUntil })
    }

    static async reload(page:Page): Promise<void> {
        await page.reload()
    } 
}

