import { Page } from "@playwright/test";
import BrowserActions from "../../utils/browserActions";
import { keyboardActions } from "../../utils/constants";

export class HomePage {

    constructor(private page: Page){}

    get searchEle() {
        return this.page.getByRole('textbox', { name: 'Search' })
    } 
    get noResultsFoundEle() {
        return this.page.getByText('No results found', { exact: true })
    } 
    get spinnerLoaderEle() {
        return this.page.locator('.spinner-border').first()
    } 
    get markerIconEle() {
        return this.page.locator('.leaflet-marker-icon').first()
    } 
    get activeLocationEle() {
        return this.page.locator('.leaflet-interactive').first()
    } 
    searchResultEle(location: string) {
        return this.page.getByRole('link', { name: location })
    } 

    async searchLocation(location: string): Promise<void> {
        await BrowserActions.waitForVisible(this.searchEle)
        await BrowserActions.clear(this.searchEle)
        await BrowserActions.type(this.searchEle, location)
        await BrowserActions.keyPress(this.page, keyboardActions.ENTER)
        await BrowserActions.waitForInvisible(this.spinnerLoaderEle)
    } 
    async clickLocation(location: string): Promise<void> {
        await BrowserActions.click(this.searchResultEle(location))
    }
    async clickMarkerIcon(): Promise<void> {
        await BrowserActions.click(this.markerIconEle)
    }
}
