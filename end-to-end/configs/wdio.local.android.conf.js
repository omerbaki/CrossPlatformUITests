module.exports.config = {

    // ==================
    // Specify Test Files
    // ==================
    specs: ['tests/test.spec.js'],

    // ============
    // Capabilities
    // ============

    capabilities: [{
        app: '../DemoApp/android/app/build/outputs/apk/app-debug.apk',
        browserName: '',
        deviceName: 'Android',
        platformName: 'Android',
        newCommandTimeout :300,
        autoLaunch: false,
        noReset : true,
    }],

    port: 4723,

    maxInstances: 1,
    //

    // ===================
    // Test Configurations
    // ===================
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request if Selenium Grid doesn't send response
    connectionRetryTimeout: 900000,
    //
    // Default request retries count
    connectionRetryCount: 0,
    // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot', 'junit'],
    //reporterOptions: {
    //    junit: {
    //        outputDir: './reports',
    //        outputFileFormat: (x)=> {
    //            const apkName = x.capabilities.split('.').pop().split('\\').pop();
    //            return `${apkName}.xml`;
    //        }
    //    }
    //},
    //
    // Options to be passed to Mocha - See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-core/register'],
        timeout: 3000000
    },
    //
    // =====
    // Hooks
    // =====
    before: function (capabilities, specs) {
        try{
            const chai = require('chai');
            global.assert = chai.assert;
            global.expect = chai.expect;
            chai.Should();
        }
        catch (err){
            console.log('Failed to setup test', err);
            throw err;
        }
    },

    afterCommand: function (commandName, args, result, error) {
    },

    onError: function(e) {
        console.log(`error occured - ${e.message}`);
    }

    //Other possible hooks:
    //
    // beforeSuite: function (suite) {},
    // afterSuite: function (suite) {},
    // beforeHook: function () {},
    // afterHook: function () {},
    // onPrepare: function (config, capabilities) {},
    // beforeCommand: function (commandName, args){},
    // afterTest: function (test) {},
    // afterSuite: function (suite) {},
    // onComplete: function(exitCode) {}
};
