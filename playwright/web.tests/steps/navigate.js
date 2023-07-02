const { Given, Before, When } = require('@cucumber/cucumber')
const { navigatePO } = require('../pages/navigatePO')
testconfig = require('../../../testconfig.json')
let navigatePage;

Given("User navigates to ajio web site",async function(){
    global.url = testconfig[environment].url
    navigatePage = new navigatePO(page);
    await navigatePage.navigate()
})

Given('User clicks {string} hyperlink', async function (linktext) {
    value = linktext
    navigatePage = new navigatePO(page);
    await navigatePage.clickTab()
})