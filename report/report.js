const reporter = require("cucumber-html-reporter")
const args = require('minimist')(process.argv.slice(2))
const environment = args.env == undefined ? "Local Machine" : args.env

const options ={
     theme:'bootstrap',
     name: 'Sample',
     brandTitle: 'Vijay_Automation_Test_Report',
     jsonFile:'report/report.json',
     output:'report/Vijay_Automation_Test_Report.html',
     scenarioTimestamp: true,
     reportSuiteAsScenarios:true,
     storeScreenshots: false,
     launchReport:true,
     columnLayout:1,
     
}
reporter.generate(options)