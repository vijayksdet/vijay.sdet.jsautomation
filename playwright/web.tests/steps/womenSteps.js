const { Given, Before, Then } = require('@cucumber/cucumber')
const { womenPO } = require('../pages/womenPO')
let womenPage;

Before({ tags: '@ui' }, async function () {

})

Then('User navigates to womens page', async function () {
    womenPage = new womenPO(page)
    await womenPage.validateTab()
})