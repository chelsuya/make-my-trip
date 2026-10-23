export default {

    require: ["tests/step/*.step.js",
        "tests/support/execution.js",
        "tests/support/hook.js"],
    paths: ["tests/feature/*.feature"],
    timeout: 30000,
    publishQuiet: true,
    format: ["progress",
        "html:reports/cucumber-report.html"]
};

//it tells Cucumber where my step definition and support files are,
//where my feature files are, and how to display the test execution results.