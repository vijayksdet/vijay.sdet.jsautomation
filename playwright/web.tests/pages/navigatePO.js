const { assert } = require('chai')
const { basePage } = require('./basePage')

class navigatePO extends basePage {
    constructor(page) {
        super(page)
        this.page = page
        this.allowLocationModal = '#modalId'
        this.closeButtonInModal = '#modalId  .ic-close-quickview'
        this.linkElement = function (value) { return `a[href="/shop/${value}"]` }
    }

    async navigate() {
        loggers("Environment selected for the run : " + environment)
        loggers("Application url: " + url)
        await page.goto(url)
        if (await this.elementIsVisible(this.allowLocationModal, true, 3 * 1000)) {
            loggers("location enable modal appeared")
            assert.isTrue(await this.clickElement(this.closeButtonInModal),"Unable to click close button in location moda")
            loggers("Clicked close button in location enable modal popup")
        }
    }

    async clickTab() {
        assert.isTrue(await this.clickElement(this.linkElement(value)), `Unable to click ${value} in the page`)
        loggers(`Clicked ${value} link successsfully in the page`)
    }

    async validateTab() {
        compareText(await this.getCurrentUrl(3 * 1000),`${url}shop/${value}s`,"URL")
    }
}

module.exports = { navigatePO };
