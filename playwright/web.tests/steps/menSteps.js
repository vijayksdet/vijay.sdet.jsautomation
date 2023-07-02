const { Before, Then, After } = require('@cucumber/cucumber')
const { menPO } = require('../pages/menPO')
const axios = require('axios');

let menPage;

Before({ tags: '@ui' }, async function () {
    loggers('Before step in loggers')
})

Then('User navigates to mens page', async function () {
    menPage = new menPO(page)
    await menPage.validateMenPage()
})

After({ tags: '@ui' }, async function () {
    loggers('After step in loggers')
})