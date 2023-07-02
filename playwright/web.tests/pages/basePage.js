const { assert } = require("chai");
class basePage {
    constructor(page) {
        this.page = page;
    }

    async refreshPage() {
        assert.isTrue(await refreshPage(), 'Unable to reload The Page')
        loggers("Page reloaded successfully")
    }

    async elementIsVisible(element, waitForStatus, timeOut) {
        let isVisible = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            if (waitForStatus) await page.waitForSelector(element, { state: 'visible' })
            isVisible = await page.locator(element).nth(0).isVisible()

        } catch (e) {
            loggers("Element " + element + "is not visible in the application" + e)
        }
        return isVisible
    }

    async elementIsHidden(element, waitForStatus, timeOut) {
        let isHidden = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            if (waitForStatus) {
                await page.waitForSelector(element, { state: 'hidden' })
            }
            isHidden = await page.locator(element).nth(0).isHidden()
        }
        catch (e) {
            loggers("Element " + element + "is not hidden in the application" + e)
        }
        return isHidden
    }

    async clickElement(element, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            if (this.elementIsVisible(element, true)) {
                await page.waitForLoadState('domcontentloaded')
                await page.waitForSelector(element, { state: 'attached' })
                await page.locator(element).scrollIntoViewIfNeeded()
                await page.locator(element).click()
            }
            isSuccess = true
        } catch (e) {
            console.log("Error occurred in clicking the element: " + e)
        }
        return isSuccess
 
    }

    async getCurrentUrl(timeOut) {
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            return page.url()
        } catch (error) {
            console.log("Error occurred in getting the current url " + e)
        }
    }
}
module.exports = { basePage };