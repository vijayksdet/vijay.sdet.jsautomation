const { assert } = require('chai')
const { navigatePO } = require('./navigatePO')

class womenPO extends navigatePO {
    constructor(page) {
        super(page)
        this.page = page
    }
}
module.exports = { womenPO };