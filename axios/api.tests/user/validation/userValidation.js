const testData = require('../testData/testData.json')

validateGetData = async function () {
    let expectedData = testData[`id#${userId}`]
    compareText(response.status, expectedData.status, "Response Status")
    if (response.status == 200) {
        compareText(response.data.data.email, expectedData.email, "email")
        compareText(response.data.data.first_name, expectedData.first_name, "First Name")
        compareText(response.data.data.last_name, expectedData.last_name, "last Name")
    }
}

validatePostData = async function () {
    compareText(response.status, 201, "Response Status")
}

validatePutData = async function(){
    compareText(response.data.name, data.name, "Response Status")
    compareText(response.data.job, data.job, "Response Status")
    compareText(response.status, 200, "Response Status")
}

module.exports = {};