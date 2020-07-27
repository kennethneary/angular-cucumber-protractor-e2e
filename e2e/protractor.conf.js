const Reporter = require("./src/support/reporter");

// import { Reporter } from "./support/reporter";
const jsonReports = process.cwd() + "/reports/json";

// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    require: ["./src/steps/**/*.steps.ts", "./src/hooks/**/*.ts"],
    format: "json:./reports/json/cucumber_report.json"
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    Reporter.createDirectory(jsonReports);
  },
  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
