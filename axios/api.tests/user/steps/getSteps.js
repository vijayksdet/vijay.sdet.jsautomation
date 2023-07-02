const { When, Then } = require('@cucumber/cucumber')
const axios = require('axios')

When('I get user data for id {string}', async function (id) {
    userId = id
    try {
        response = await axios.get(`${testconfig[environment].apiendpoint}/users/${userId}`)
    } catch (error) {
        response = { status: 404 }
    }
    loggers(`Getting user of id ${id} data from api and response status is ${response.status} `)
})

Then('I validates the users data', async function () {
    await validateGetData()
})