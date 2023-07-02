const { When, Then } = require('@cucumber/cucumber')
const axios = require('axios')

When('I post user data', async function () {
    data = {
        "name": "morpheus",
        "job": "leader"
    }
    response = await axios.post(`${testconfig[environment].apiendpoint}/users`, data)
})

Then('I validates user post data', async function () {
    await validatePostData()
})