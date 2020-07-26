const reporter = require("cucumber-html-reporter");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");

const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir);
    }
}

function createHTMLReport() {
    try {
        reporter.generate(cucumberReporterOptions);
    } catch (err) {
        if (err) {
            throw new Error("Failed to save cucumber test results to json file.");
        }
    }
}

module.exports = {
  createDirectory,
  createHTMLReport
}

