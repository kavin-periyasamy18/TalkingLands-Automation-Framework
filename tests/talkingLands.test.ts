import { expect } from "@playwright/test";
import { test } from "../pages/talkingLandsFixture"

type testLocationsData = { searchLocation: string, expected: string};

const testData: testLocationsData[] = [
    { searchLocation: "Coimbatore", expected: "Coimbatore, Coimbatore North, Coimbatore, Tamil Nadu, 641001, India"},
    { searchLocation: "Bengaluru", expected: "Bengaluru, Bangalore North, Bengaluru Urban, Karnataka, India"},
    { searchLocation: "Chennai", expected: "Chennai, Tamil Nadu, India"},
    { searchLocation: "Kavithan", expected: "No Result Found"},
]
test("Login, Search Location, Change Location, Select Location and Logout", async({loginPage, homePage}) => {

    await loginPage.logIn()

    await test.step('Search for location and validate the expected location is displayed', async () => {
        for(const search of testData){
            await homePage.searchLocation(search.searchLocation)
            if(search.searchLocation==="Kavithan"){
                await expect.soft(homePage.noResultsFoundEle, "Validate no results found message is displayed").toBeVisible()
            } else{
                await expect.soft(homePage.searchResultEle(search.expected), "Validate the expected location is displayed").toBeVisible()
            }
        }
    })
    
    await test.step('Select location in search result', async () => {
        await homePage.searchLocation("Coimbatore")
        await expect.soft(homePage.markerIconEle, "Validate the marker icon is displayed").toBeVisible()
        await homePage.clickLocation("Coimbatore, Coimbatore North, Coimbatore, Tamil Nadu, 641001, India")
        await expect.soft(homePage.activeLocationEle, "Validate the selected location is in active state").toBeVisible()
    })

    await test.step('Select location by marker icon', async () => {
        await homePage.searchLocation("Coimbatore")
        await expect.soft(homePage.markerIconEle, "Validate the marker icon is displayed").toBeVisible()
        await homePage.clickMarkerIcon()
        await expect.soft(homePage.activeLocationEle, "Validate the selected location is in active state").toBeVisible()
    })

    
})

