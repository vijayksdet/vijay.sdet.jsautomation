const { When, Then } = require('@cucumber/cucumber')
const axios = require('axios')

When('I put user data',async function(){
    data = {
        "name": "morpheus",
        "job": "leader modified"
    }
    response = await axios.put(`${testconfig[environment].apiendpoint}/users/2`, data)
})

Then('I validates user put data', async function () {
    await validatePutData()
})