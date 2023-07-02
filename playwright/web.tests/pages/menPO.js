const { assert } = require('chai')
const { basePage } = require('./basePage')

class menPO extends basePage {
    constructor(page) {
        super(page)
        this.page = page
        this.linkElement = function (value) { return `a[href="/shop/${value}"]` }
    }

    async clickMensPage() {
        assert.isTrue(await this.clickElement(this.linkElement(value)), `Unable to click ${value} in the page`)
        loggers(`Clicked ${value} link successsfully in the page`)
    }

    async validateMenPage() {
        compareText(await this.getCurrentUrl(3 * 1000),`${url}shop/${value}`,"URL")
    }
}
module.exports = { menPO };