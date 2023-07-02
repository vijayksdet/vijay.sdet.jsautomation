const { chromium } = require('playwright')
const { BeforeAll, Before, BeforeStep, After, AfterAll, AfterStep, Status, setDefaultTimeout } = require('@cucumber/cucumber')
global.testconfig = require('./testconfig.json')
global.compareUtils = require('./utilities/compareHelper')
global.uservalidation = require(`./axios/api.tests/user/validation/userValidation`)

const options = {
    headless: false,
    slowMo: 100,
    args: ["--start-maximized"],
    use: {
        actionTimeout: 600 * 1000,
        navigationTimeout: 600 * 1000
    }
}
setDefaultTimeout(600*1000)
BeforeAll(async function(){
    global.sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    global.loggers = (log) => {
        console.log(log)
    }
    global.minTimeOut = 3 * 1000
    global.defaultTimeOut = 60 * 1000
    global.environment = process.env.npm_lifecycle_event
})

AfterAll(async function(){
    if(global.browser!=null)
    {
       await global.browser.close()
    }
})

Before(async function(scenario){
    loggers = (log) => {
        console.log(log)
        this.attach(log)
    }
    global.scenarioPath = scenario.pickle.uri
    global.scenarioTags = scenario.pickle.tags
    global.tagsMap = scenarioTags.map(item => item.name)
    global.featureName = scenario.gherkinDocument.feature.name
    global.scenarioName = scenario.pickle.name
    global.testcaseId = scenarioName.split('_')[0]
    global.testcaseDescription = scenarioName.split('_')[1]
    if (scenarioPath.includes("web.tests")) {
        if (global.browser == null) {
            // Create a global browser for the test session.
            console.log('Launching the Browser ...')
            global.browser = await chromium.launch(options)
        }
        // Create a fresh browser context for each test.
        console.log('Launching new session in the Browser')
        global.context = await global.browser.newContext({
            viewport: null,
            acceptDownloads: true,
            recordVideo: {
                dir: 'videos/' + scenario.pickle.name
            },
            use: {
                actionTimeout: 600 * 1000,
                navigationTimeout: 600 * 1000
            },
            timeout: 600 * 1000
        });
        global.page = await global.context.newPage()
    }
})

AfterStep(async function ({result}) {
    if (scenarioPath.includes("web.automation") && result.status === Status.FAILED) {
        var buffer = await page.screenshot({fullPage: true})
        this.attach(buffer, 'image/png')
        isSnapshotCaptured = true
    }
});

After(async function (scenario) {
    if (scenarioPath.includes("web.automation")) {
        if (scenario.result.status === Status.FAILED && isSnapshotCaptured == "false") {
            var buffer = await global.page.screenshot({fullPage: true})
            this.attach(buffer, 'image/png')
        }
        if (page != null) {
           
            if (context != null) await context.close()
        }

        //Project Specific Variables
        global.iFrame = null
        global.isAccountingUpdated = false
    }
});